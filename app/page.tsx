"use client";

import { useState } from "react";
import { Gallery } from "@/components/gallery";
import { BoilerplateSection } from "@/components/boilerplate-section";
import { PriorityList } from "@/components/priority-list";

type Tab = "priority" | "templates" | "boilerplates";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("priority");

  return (
    <div>
      {/* Compact Header */}
      <header className="app-header">
        <div className="app-header-inner">
          <div className="app-header-left">
            <img
              src="/merlino-logo.png"
              alt="Merlino"
              className="nav-logo"
            />
            <span className="app-header-title">Template Arsenal</span>
          </div>
          <span className="app-header-date">Updated March 2, 2026</span>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="tab-nav">
        <div className="tab-nav-inner">
          <button
            className={`tab-btn${activeTab === "priority" ? " tab-btn-active" : ""}`}
            onClick={() => setActiveTab("priority")}
          >
            Priority Buy List
          </button>
          <button
            className={`tab-btn${activeTab === "templates" ? " tab-btn-active" : ""}`}
            onClick={() => setActiveTab("templates")}
          >
            Templates (20)
          </button>
          <button
            className={`tab-btn${activeTab === "boilerplates" ? " tab-btn-active" : ""}`}
            onClick={() => setActiveTab("boilerplates")}
          >
            Boilerplates &amp; Dashboards
          </button>
        </div>
      </nav>

      {/* Tab Content */}
      <main className="tab-content">
        {activeTab === "priority" && <PriorityList />}
        {activeTab === "templates" && <Gallery />}
        {activeTab === "boilerplates" && <BoilerplateSection />}
      </main>

      {/* Minimal Footer */}
      <footer className="site-footer">
        <p className="footer-text">
          Merlino Marketing &middot; Template Arsenal &middot; Internal Tool
        </p>
      </footer>
    </div>
  );
}
