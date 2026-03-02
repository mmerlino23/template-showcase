"use client";

export type DeviceMode = "desktop" | "tablet" | "mobile";

interface DeviceSwitcherProps {
  active: DeviceMode;
  onChange: (mode: DeviceMode) => void;
  disabled?: boolean;
}

const devices: { mode: DeviceMode; label: string; icon: React.ReactNode }[] = [
  {
    mode: "desktop",
    label: "Desktop",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="2" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
        <path d="M5.5 14h5M8 12v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    mode: "tablet",
    label: "Tablet",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2.5" y="1" width="11" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
        <path d="M7 12.5h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    mode: "mobile",
    label: "Mobile",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="4" y="1" width="8" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
        <path d="M7 12.5h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function DeviceSwitcher({ active, onChange, disabled }: DeviceSwitcherProps) {
  if (disabled) return null;

  return (
    <div className="device-switcher">
      {devices.map(({ mode, label, icon }) => (
        <button
          key={mode}
          className={`device-btn${active === mode ? " device-btn-active" : ""}`}
          onClick={() => onChange(mode)}
          aria-label={`Switch to ${label} view`}
        >
          {icon}
          {label}
        </button>
      ))}
    </div>
  );
}
