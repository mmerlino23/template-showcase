"use client";

import { productBreakdowns } from "@/lib/templates";

/* ── Structured comparison data ── */

const boilerplateComparison = [
  {
    name: "Shipped",
    price: 299,
    database: "MongoDB / Firebase",
    dbShort: "Mongo / FB",
    auth: "Magic Link",
    payments: "Stripe",
    extras: ["GraphQL API", "Postmark email", "RBAC teams"],
    bestFor: "birdseyeroi.com",
    owned: false,
  },
  {
    name: "Supastarter",
    price: 299,
    database: "Supabase (Postgres)",
    dbShort: "Supabase",
    auth: "NextAuth OAuth",
    payments: "Stripe + 4 others",
    extras: ["Blog + i18n", "shadcn/ui", "Org multi-tenant"],
    bestFor: "Brand Media Manager",
    owned: false,
  },
  {
    name: "ShipFast",
    price: 199,
    database: "Supabase or MongoDB",
    dbShort: "Your pick",
    auth: "NextAuth + Magic",
    payments: "Stripe",
    extras: ["Landing page", "Resend email", "SEO hooks"],
    bestFor: "Quick MVPs",
    owned: false,
  },
  {
    name: "LaunchFast",
    price: 149,
    database: "Supabase (Postgres)",
    dbShort: "Supabase",
    auth: "Email + OAuth",
    payments: "Stripe",
    extras: ["3 frameworks", "Astro + SvelteKit", "Deploy guides"],
    bestFor: "Multi-framework",
    owned: false,
  },
  {
    name: "Makerkit",
    price: 299,
    database: "Firebase Firestore",
    dbShort: "Firebase",
    auth: "Firebase Auth",
    payments: "Stripe",
    extras: ["Real-time sync", "File uploads", "Security rules"],
    bestFor: "Real-time apps",
    owned: false,
  },
];

const frontendComparison = [
  {
    name: "TailAdmin Enterprise",
    price: 699,
    type: "Admin UI Kit",
    what: "200+ dashboard components — tables, charts, forms, CRM layouts",
    frameworks: "React, Vue, Angular, Laravel, HTML",
    owned: false,
  },
  {
    name: "Cruip Bundle",
    price: 79,
    type: "Website Templates",
    what: "20 marketing site designs — landing pages, SaaS sites, portfolios",
    frameworks: "Next.js, Vue, HTML, Figma",
    owned: true,
  },
  {
    name: "NextJSTemplates",
    price: 199,
    type: "Template Marketplace",
    what: "All premium Next.js templates — admin, SaaS, landing, portfolio, blog",
    frameworks: "Next.js only",
    owned: false,
  },
];

const componentComparison = [
  {
    name: "ShadcnUIKit",
    price: 199,
    type: "Layout Blocks",
    what: "134 premium blocks — heroes, pricing tables, feature grids, CTAs, footers",
    pairs: "Use WITH Aceternity for animated blocks on top of clean layouts",
    owned: false,
  },
  {
    name: "Aceternity UI",
    price: 179,
    type: "Animated Effects",
    what: "Motion components — spotlight, aurora, 3D cards, text reveals, parallax",
    pairs: "Use WITH ShadcnUIKit for wow-factor on any page section",
    owned: true,
  },
];

const decisionTree = [
  {
    question: "Building a full SaaS app?",
    yes: "Which database do you already use?",
    branches: [
      { label: "Supabase (Postgres)", pick: "Supastarter", note: "Your existing stack" },
      { label: "Firebase", pick: "Makerkit", note: "Real-time native" },
      { label: "MongoDB", pick: "Shipped", note: "GraphQL + magic link" },
      { label: "Don't care / fastest", pick: "ShipFast", note: "Cheapest at $199" },
      { label: "Need Astro or Svelte too", pick: "LaunchFast", note: "3 frameworks for $149" },
    ],
  },
  {
    question: "Need a dashboard UI?",
    yes: "How many frameworks?",
    branches: [
      { label: "React + Vue + Angular + more", pick: "TailAdmin", note: "200+ components, 5 frameworks" },
      { label: "Next.js only", pick: "NextJSTemplates", note: "Includes admin templates" },
      { label: "Already have Cruip Mosaic", pick: "Mosaic (owned)", note: "57 pages, Chart.js, covers basics" },
    ],
  },
  {
    question: "Need page sections / components?",
    yes: "What kind?",
    branches: [
      { label: "Layout blocks (heroes, pricing, CTAs)", pick: "ShadcnUIKit", note: "134 blocks, shadcn ecosystem" },
      { label: "Animated effects (wow factor)", pick: "Aceternity UI (owned)", note: "Motion-rich components" },
      { label: "Both — they pair together", pick: "ShadcnUIKit + Aceternity", note: "Layout + motion = premium" },
    ],
  },
];

function OverlapGroup() {
  return (
    <div className="compare-overlap-section">
      <h3 className="compare-section-title">These Do The Same Thing</h3>
      <p className="compare-section-desc">
        All 5 SaaS boilerplates give you auth + payments + database + admin. The ONLY difference is which database and what extras.
      </p>

      <div className="overlap-visual">
        {/* Center circle */}
        <div className="overlap-center">
          <div className="overlap-center-label">All 5 include</div>
          <div className="overlap-center-items">
            <span className="overlap-shared-item">Auth</span>
            <span className="overlap-shared-item">Stripe Payments</span>
            <span className="overlap-shared-item">Database</span>
            <span className="overlap-shared-item">Admin Panel</span>
            <span className="overlap-shared-item">Email</span>
            <span className="overlap-shared-item">Multi-Tenant</span>
          </div>
        </div>

        {/* Differentiators */}
        <div className="overlap-diff-grid">
          <div className="overlap-diff-card">
            <span className="overlap-diff-name">Shipped</span>
            <span className="overlap-diff-unique">MongoDB + GraphQL API + Magic Link auth</span>
          </div>
          <div className="overlap-diff-card">
            <span className="overlap-diff-name">Supastarter</span>
            <span className="overlap-diff-unique">Supabase + 5 payment providers + Blog + i18n</span>
          </div>
          <div className="overlap-diff-card">
            <span className="overlap-diff-name">ShipFast</span>
            <span className="overlap-diff-unique">Cheapest ($199) + Pick your own DB</span>
          </div>
          <div className="overlap-diff-card">
            <span className="overlap-diff-name">LaunchFast</span>
            <span className="overlap-diff-unique">3 frameworks (Next + Astro + Svelte) for $149</span>
          </div>
          <div className="overlap-diff-card">
            <span className="overlap-diff-name">Makerkit</span>
            <span className="overlap-diff-unique">Firebase + Real-time sync + File uploads</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DecisionTree() {
  return (
    <div className="compare-decision-section">
      <h3 className="compare-section-title">Pick Your Stack</h3>
      <p className="compare-section-desc">
        Start with what you need, follow the branch to your answer.
      </p>

      <div className="decision-tree">
        {decisionTree.map((node, i) => (
          <div key={i} className="decision-node">
            <div className="decision-question">
              <span className="decision-q-icon">?</span>
              <span className="decision-q-text">{node.question}</span>
            </div>
            <div className="decision-branches">
              {node.branches.map((branch, j) => (
                <div key={j} className="decision-branch">
                  <div className="decision-branch-connector" />
                  <div className="decision-branch-label">{branch.label}</div>
                  <div className="decision-branch-arrow">&rarr;</div>
                  <div className={`decision-branch-pick${branch.pick.includes("owned") ? " decision-pick-owned" : ""}`}>
                    {branch.pick}
                  </div>
                  <div className="decision-branch-note">{branch.note}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BoilerplateGrid() {
  return (
    <div className="compare-grid-section">
      <h3 className="compare-section-title">SaaS Boilerplates — Head to Head</h3>
      <p className="compare-section-desc">
        Same job, different ingredients. All give you a launchable SaaS. Pick by database preference.
      </p>

      <div className="compare-table-wrapper">
        <table className="compare-table">
          <thead>
            <tr>
              <th className="compare-th compare-th-label"></th>
              {boilerplateComparison.map((b) => (
                <th key={b.name} className="compare-th">
                  <span className="compare-th-name">{b.name}</span>
                  <span className="compare-th-price">${b.price}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="compare-td-label">Database</td>
              {boilerplateComparison.map((b) => (
                <td key={b.name} className="compare-td compare-td-highlight">{b.dbShort}</td>
              ))}
            </tr>
            <tr>
              <td className="compare-td-label">Auth</td>
              {boilerplateComparison.map((b) => (
                <td key={b.name} className="compare-td">{b.auth}</td>
              ))}
            </tr>
            <tr>
              <td className="compare-td-label">Payments</td>
              {boilerplateComparison.map((b) => (
                <td key={b.name} className="compare-td">{b.payments}</td>
              ))}
            </tr>
            <tr>
              <td className="compare-td-label">Unique extras</td>
              {boilerplateComparison.map((b) => (
                <td key={b.name} className="compare-td">
                  <div className="compare-extras">
                    {b.extras.map((e, i) => (
                      <span key={i} className="compare-extra-tag">{e}</span>
                    ))}
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="compare-td-label">Best for</td>
              {boilerplateComparison.map((b) => (
                <td key={b.name} className="compare-td compare-td-project">{b.bestFor}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function FrontendGrid() {
  return (
    <div className="compare-grid-section">
      <h3 className="compare-section-title">
        <span className="legend-dot legend-dot-frontend"></span>
        Frontend Templates — Page Designs You Customize
      </h3>
      <p className="compare-section-desc">No backend. You get finished pages and swap in your content.</p>

      <div className="compare-cards-row">
        {frontendComparison.map((f) => (
          <div key={f.name} className={`compare-vs-card${f.owned ? " compare-vs-owned" : ""}`}>
            <div className="compare-vs-header">
              <span className="compare-vs-name">{f.name}</span>
              <span className="compare-vs-price">${f.price}</span>
              {f.owned && <span className="status-badge status-purchased">Owned</span>}
            </div>
            <span className="compare-vs-type">{f.type}</span>
            <p className="compare-vs-what">{f.what}</p>
            <div className="compare-vs-fw">
              <span className="compare-vs-fw-label">Frameworks:</span> {f.frameworks}
            </div>
          </div>
        ))}
      </div>

      <div className="compare-insight-box">
        <span className="compare-insight-icon">&#9432;</span>
        <div>
          <strong>You own Cruip</strong> (20 marketing templates). <strong>TailAdmin</strong> adds admin/dashboard UI.{" "}
          <strong>NextJSTemplates</strong> fills gaps with more variety (admin + SaaS + blog templates).
          They don&apos;t overlap much — each covers different page types.
        </div>
      </div>
    </div>
  );
}

function ComponentGrid() {
  return (
    <div className="compare-grid-section">
      <h3 className="compare-section-title">
        <span className="legend-dot legend-dot-components"></span>
        Component Libraries — Individual Pieces You Drop In
      </h3>
      <p className="compare-section-desc">Not full pages. Blocks and effects you copy into any project.</p>

      <div className="compare-pair-visual">
        <div className={`compare-pair-card${componentComparison[0].owned ? " compare-vs-owned" : ""}`}>
          <div className="compare-vs-header">
            <span className="compare-vs-name">{componentComparison[0].name}</span>
            <span className="compare-vs-price">${componentComparison[0].price}</span>
            {componentComparison[0].owned && <span className="status-badge status-purchased">Owned</span>}
          </div>
          <span className="compare-pair-type">{componentComparison[0].type}</span>
          <p className="compare-vs-what">{componentComparison[0].what}</p>
        </div>

        <div className="compare-pair-plus">
          <span className="compare-pair-plus-icon">+</span>
          <span className="compare-pair-plus-label">Pair them together</span>
        </div>

        <div className={`compare-pair-card${componentComparison[1].owned ? " compare-vs-owned" : ""}`}>
          <div className="compare-vs-header">
            <span className="compare-vs-name">{componentComparison[1].name}</span>
            <span className="compare-vs-price">${componentComparison[1].price}</span>
            {componentComparison[1].owned && <span className="status-badge status-purchased">Owned</span>}
          </div>
          <span className="compare-pair-type">{componentComparison[1].type}</span>
          <p className="compare-vs-what">{componentComparison[1].what}</p>
        </div>
      </div>

      <div className="compare-insight-box compare-insight-combo">
        <span className="compare-insight-icon">&#9889;</span>
        <div>
          <strong>These are NOT competing products.</strong> ShadcnUIKit = layout structure (heroes, pricing grids, CTAs).
          Aceternity = animation effects (spotlight, aurora, 3D tilt). Use both: grab a ShadcnUIKit layout block,
          add Aceternity motion effects on top. Result: premium-looking page in minutes.
        </div>
      </div>
    </div>
  );
}

function WhatYouOwn() {
  const owned = productBreakdowns.filter((p) => p.status === "purchased");
  const notOwned = productBreakdowns.filter((p) => p.status !== "purchased");

  return (
    <div className="compare-owned-section">
      <h3 className="compare-section-title">What You Already Own vs What&apos;s Missing</h3>

      <div className="owned-vs-grid">
        <div className="owned-column">
          <div className="owned-column-header owned-column-have">You Have</div>
          {owned.map((p) => (
            <div key={p.name} className="owned-item owned-item-have">
              <span className="owned-item-check">&#10003;</span>
              <div>
                <span className="owned-item-name">{p.name}</span>
                <span className="owned-item-layer">{p.layerLabel}</span>
              </div>
              <span className="owned-item-price">${p.price}</span>
            </div>
          ))}
          <div className="owned-total">
            Total invested: <strong>${owned.reduce((s, p) => s + p.price, 0)}</strong>
          </div>
        </div>

        <div className="owned-column">
          <div className="owned-column-header owned-column-gaps">Gaps to Fill</div>
          {notOwned.map((p) => (
            <div key={p.name} className="owned-item owned-item-gap">
              <span className="owned-item-empty">&#9675;</span>
              <div>
                <span className="owned-item-name">{p.name}</span>
                <span className="owned-item-layer">{p.layerLabel}</span>
              </div>
              <span className="owned-item-price">${p.price}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="compare-insight-box">
        <span className="compare-insight-icon">&#128161;</span>
        <div>
          <strong>You have components (Aceternity) and templates (Cruip) covered.</strong> Your biggest gap is a full-stack SaaS boilerplate.
          Pick ONE based on your database preference — you don&apos;t need all 5. Then grab TailAdmin if you need admin UI.
        </div>
      </div>
    </div>
  );
}

export function CompareTab() {
  return (
    <div className="compare-container">
      <div className="compare-hero">
        <h2 className="compare-hero-title">Compare Everything</h2>
        <p className="compare-hero-desc">
          See what overlaps, what&apos;s unique, and which to pick. No fluff — just the facts side by side.
        </p>
      </div>

      <DecisionTree />
      <OverlapGroup />
      <BoilerplateGrid />
      <FrontendGrid />
      <ComponentGrid />
      <WhatYouOwn />
    </div>
  );
}
