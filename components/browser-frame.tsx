"use client";

import { useState, useRef, useCallback } from "react";
import type { Template } from "@/lib/templates";
import { DeviceSwitcher, type DeviceMode } from "./device-switcher";

interface BrowserFrameProps {
  template: Template;
}

export function BrowserFrame({ template }: BrowserFrameProps) {
  const [device, setDevice] = useState<DeviceMode>("desktop");
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const demoUrl = `/demos/${template.slug}/`;
  const displayUrl = `merlinodigital.com/demos/${template.slug}`;
  const canEmbed = template.hasNext;

  const handleRefresh = useCallback(() => {
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    }
  }, []);

  const iframeWidth =
    device === "tablet" ? "768px" : device === "mobile" ? "375px" : "100%";

  return (
    <>
      {/* Device switcher above browser */}
      <DeviceSwitcher active={device} onChange={setDevice} disabled={!canEmbed} />

      {/* Browser frame */}
      <div className="browser-frame">
        {/* Chrome bar */}
        <div className="browser-chrome">
          {/* Traffic lights */}
          <div className="traffic-lights">
            <div className="traffic-dot traffic-dot-red" />
            <div className="traffic-dot traffic-dot-yellow" />
            <div className="traffic-dot traffic-dot-green" />
          </div>

          {/* URL bar */}
          <div className="url-bar">
            <svg className="url-bar-lock" width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path
                d="M12.667 7.333H3.333C2.597 7.333 2 7.93 2 8.667v4.666C2 14.07 2.597 14.667 3.333 14.667h9.334c.736 0 1.333-.597 1.333-1.334V8.667c0-.737-.597-1.334-1.333-1.334zM4.667 7.333V4.667a3.333 3.333 0 016.666 0v2.666"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="url-bar-text">{displayUrl}</span>
          </div>

          {/* Refresh */}
          {canEmbed && (
            <button
              className="browser-refresh-btn"
              onClick={handleRefresh}
              aria-label="Refresh preview"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M13.65 2.35A8 8 0 103.34 13.66M14 2v4h-4"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Content area */}
        <div className="iframe-container">
          {canEmbed ? (
            <div className="iframe-sizer" style={{ width: iframeWidth }}>
              <iframe
                ref={iframeRef}
                src={demoUrl}
                title={`${template.name} live preview`}
                loading="lazy"
              />
            </div>
          ) : (
            <img
              className="screenshot-fallback"
              src={template.screenshot}
              alt={`${template.name} preview`}
            />
          )}
        </div>
      </div>
    </>
  );
}
