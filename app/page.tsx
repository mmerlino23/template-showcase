"use client";

import { useState } from "react";
import { Gallery } from "@/components/gallery";
import { BoilerplateSection } from "@/components/boilerplate-section";
import { PriorityList } from "@/components/priority-list";
import { ProductBreakdownTab } from "@/components/product-breakdown";
import { CompareTab } from "@/components/compare-tab";

type Tab = "priority" | "breakdown" | "compare" | "templates" | "boilerplates";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("priority");

  return (
    <div>
      <header className="app-header">
        <div className="app-header-inner">
          <div className="app-header-left">
            <img src="/merlino-logo.png" alt="Merlino" className="nav-logo" />
            <span className="app-header-title">Template Arsenal</span>
          </div>
          <span className="app-header-date">Updated March 2, 2026</span>
        </div>
      </header>

      <nav className="tab-nav">
        <div className="tab-nav-inner">
          <button
            className={`tab-btn${activeTab === "priority" ? " tab-btn-active" : ""}`}
            onClick={() => setActiveTab("priority")}
          >
            Priority Buy List
          </button>
          <button
            className={`tab-btn${activeTab === "breakdown" ? " tab-btn-active" : ""}`}
            onClick={() => setActiveTab("breakdown")}
          >
            What Am I Buying?
          </button>
          <button
            className={`tab-btn${activeTab === "compare" ? " tab-btn-active" : ""}`}
            onClick={() => setActiveTab("compare")}
          >
            Compare
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

      <main className="tab-content">
        {activeTab === "priority" && <PriorityList />}
        {activeTab === "breakdown" && <ProductBreakdownTab />}
        {activeTab === "compare" && <CompareTab />}
        {activeTab === "templates" && <Gallery />}
        {activeTab === "boilerplates" && <BoilerplateSection />}
      </main>

      <footer className="site-footer">
        <p className="footer-text">
          Merlino Marketing &middot; Template Arsenal &middot; Internal Tool
        </p>
      </footer>
    </div>
  );
}
