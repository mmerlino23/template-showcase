"use client";

import { productBreakdowns } from "@/lib/templates";

/* ── Simplified comparison data ── */

const saasOptions = [
  {
    name: "Shipped",
    price: 299,
    db: "MongoDB",
    oneLiner: "MongoDB + GraphQL + magic link auth",
    bestFor: "birdseyeroi.com",
  },
  {
    name: "Supastarter",
    price: 299,
    db: "Supabase",
    oneLiner: "Supabase + 5 payment providers + blog + i18n",
    bestFor: "Brand Media Manager",
  },
  {
    name: "ShipFast",
    price: 199,
    db: "Your pick",
    oneLiner: "Cheapest option — pick your own DB",
    bestFor: "Quick MVPs",
  },
  {
    name: "LaunchFast",
    price: 149,
    db: "Supabase",
    oneLiner: "3 frameworks — Next.js + Astro + SvelteKit",
    bestFor: "Multi-framework projects",
  },
  {
    name: "Makerkit",
    price: 299,
    db: "Firebase",
    oneLiner: "Firebase + real-time sync + file uploads",
    bestFor: "Real-time apps",
  },
];

export function CompareTab() {
  const owned = productBreakdowns.filter((p) => p.status === "purchased");
  const notOwned = productBreakdowns.filter((p) => p.status !== "purchased");

  return (
    <div className="cmp">
      {/* ── Header ── */}
      <div className="cmp-header">
        <h2 className="cmp-title">Compare Everything</h2>
        <p className="cmp-subtitle">What overlaps, what doesn&apos;t, and which to pick.</p>
      </div>

      {/* ── 1. The Big Picture ── */}
      <section className="cmp-section">
        <h3 className="cmp-label">The Big Picture</h3>
        <div className="cmp-three-lanes">
          <div className="cmp-lane cmp-lane-green">
            <div className="cmp-lane-header">Full-Stack Boilerplates</div>
            <div className="cmp-lane-desc">Clone and build on top. Auth, payments, database all included.</div>
            <div className="cmp-lane-count">5 options — pick ONE by database</div>
          </div>
          <div className="cmp-lane cmp-lane-purple">
            <div className="cmp-lane-header">Frontend Templates</div>
            <div className="cmp-lane-desc">Page designs you customize. No backend, no auth.</div>
            <div className="cmp-lane-count">3 options — different page types</div>
          </div>
          <div className="cmp-lane cmp-lane-amber">
            <div className="cmp-lane-header">Component Libraries</div>
            <div className="cmp-lane-desc">Individual UI pieces you copy-paste into any project.</div>
            <div className="cmp-lane-count">2 options — they pair together</div>
          </div>
        </div>
      </section>

      {/* ── 2. SaaS Boilerplates: Same job, pick by database ── */}
      <section className="cmp-section">
        <h3 className="cmp-label">
          <span className="cmp-dot cmp-dot-green"></span>
          SaaS Boilerplates
        </h3>
        <p className="cmp-hint">All 5 give you auth + Stripe + database + admin + email. The only real difference is the database.</p>

        <div className="cmp-saas-grid">
          {saasOptions.map((s) => (
            <div key={s.name} className="cmp-saas-card">
              <div className="cmp-saas-top">
                <span className="cmp-saas-name">{s.name}</span>
                <span className="cmp-saas-price">${s.price}</span>
              </div>
              <div className="cmp-saas-db">{s.db}</div>
              <p className="cmp-saas-desc">{s.oneLiner}</p>
              <div className="cmp-saas-for">Use on: {s.bestFor}</div>
            </div>
          ))}
        </div>

        <div className="cmp-tip">
          <strong>Bottom line:</strong> Use Supabase? Get Supastarter. Use Firebase? Get Makerkit. Just want cheap + fast? ShipFast ($199). Want 3 frameworks? LaunchFast ($149). Need GraphQL? Shipped.
        </div>
      </section>

      {/* ── 3. Frontend Templates ── */}
      <section className="cmp-section">
        <h3 className="cmp-label">
          <span className="cmp-dot cmp-dot-purple"></span>
          Frontend Templates
        </h3>
        <p className="cmp-hint">These are NOT competing — each covers different page types.</p>

        <div className="cmp-frontend-grid">
          <div className="cmp-front-card cmp-front-owned">
            <div className="cmp-front-top">
              <span className="cmp-front-name">Cruip Bundle</span>
              <span className="cmp-front-price">$79</span>
              <span className="cmp-owned-badge">Owned</span>
            </div>
            <p className="cmp-front-desc">20 marketing site designs — landing pages, SaaS sites, portfolios</p>
            <div className="cmp-front-fw">Next.js, Vue, HTML, Figma</div>
          </div>

          <div className="cmp-front-card">
            <div className="cmp-front-top">
              <span className="cmp-front-name">TailAdmin Enterprise</span>
              <span className="cmp-front-price">$699</span>
            </div>
            <p className="cmp-front-desc">200+ admin dashboard components — tables, charts, forms, CRM layouts</p>
            <div className="cmp-front-fw">React, Vue, Angular, Laravel, HTML</div>
          </div>

          <div className="cmp-front-card">
            <div className="cmp-front-top">
              <span className="cmp-front-name">NextJSTemplates</span>
              <span className="cmp-front-price">$199</span>
            </div>
            <p className="cmp-front-desc">All premium templates — admin, SaaS landing, portfolio, blog</p>
            <div className="cmp-front-fw">Next.js only</div>
          </div>
        </div>

        <div className="cmp-tip">
          <strong>Cruip</strong> = marketing sites. <strong>TailAdmin</strong> = admin dashboards. <strong>NextJSTemplates</strong> = everything else (admin + SaaS + blog). Minimal overlap.
        </div>
      </section>

      {/* ── 4. Component Libraries ── */}
      <section className="cmp-section">
        <h3 className="cmp-label">
          <span className="cmp-dot cmp-dot-amber"></span>
          Component Libraries
        </h3>
        <p className="cmp-hint">These two are a pair, not competitors. Use both together.</p>

        <div className="cmp-comp-pair">
          <div className="cmp-comp-card cmp-front-owned">
            <div className="cmp-comp-top">
              <span className="cmp-comp-name">Aceternity UI</span>
              <span className="cmp-owned-badge">Owned</span>
            </div>
            <div className="cmp-comp-role">Animated Effects</div>
            <p className="cmp-comp-desc">Spotlight, aurora, 3D cards, text reveals, parallax</p>
          </div>

          <div className="cmp-comp-plus">+</div>

          <div className="cmp-comp-card">
            <div className="cmp-comp-top">
              <span className="cmp-comp-name">ShadcnUIKit</span>
              <span className="cmp-front-price">$199</span>
            </div>
            <div className="cmp-comp-role">Layout Blocks</div>
            <p className="cmp-comp-desc">Heroes, pricing tables, feature grids, CTAs, footers</p>
          </div>
        </div>

        <div className="cmp-tip">
          ShadcnUIKit gives you the structure. Aceternity gives you the motion. Grab a layout block, add animation on top = premium page in minutes.
        </div>
      </section>

      {/* ── 5. What you own vs gaps ── */}
      <section className="cmp-section">
        <h3 className="cmp-label">Your Inventory</h3>

        <div className="cmp-inventory">
          <div className="cmp-inv-col">
            <div className="cmp-inv-header cmp-inv-have">You Have</div>
            {owned.map((p) => (
              <div key={p.name} className="cmp-inv-row">
                <span className="cmp-inv-check">&#10003;</span>
                <span className="cmp-inv-name">{p.name}</span>
                <span className="cmp-inv-price">${p.price}</span>
              </div>
            ))}
          </div>

          <div className="cmp-inv-col">
            <div className="cmp-inv-header cmp-inv-need">Still Need</div>
            {notOwned.map((p) => (
              <div key={p.name} className="cmp-inv-row">
                <span className="cmp-inv-empty">&#9675;</span>
                <span className="cmp-inv-name">{p.name}</span>
                <span className="cmp-inv-price">${p.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="cmp-tip">
          You have templates + animations covered. Biggest gap: a full-stack SaaS boilerplate. Pick ONE. Then TailAdmin if you need dashboard UI.
        </div>
      </section>
    </div>
  );
}
