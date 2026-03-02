"use client";

import { productBreakdowns, type ProductBreakdown } from "@/lib/templates";

function CapabilityDot({ has, label }: { has: boolean | string; label: string }) {
  const active = has === true || (typeof has === "string" && has !== "none");
  const detail = typeof has === "string" && has !== "none" ? has : undefined;
  return (
    <span className={`cap-dot ${active ? "cap-dot-yes" : "cap-dot-no"}`}>
      <span className="cap-dot-icon">{active ? "\u2713" : "\u2717"}</span>
      <span className="cap-dot-label">{label}</span>
      {detail && <span className="cap-dot-detail">({detail})</span>}
    </span>
  );
}

function LayerBadge({ product }: { product: ProductBreakdown }) {
  const layerClass =
    product.layer === "fullstack"
      ? "layer-fullstack"
      : product.layer === "frontend"
      ? "layer-frontend"
      : "layer-components";
  return <span className={`layer-badge ${layerClass}`}>{product.layerLabel}</span>;
}

function ProductCard({ product }: { product: ProductBreakdown }) {
  const borderColor =
    product.layer === "fullstack"
      ? "rgba(16, 185, 129, 0.3)"
      : product.layer === "frontend"
      ? "rgba(99, 102, 241, 0.3)"
      : "rgba(245, 158, 11, 0.3)";

  return (
    <div className="breakdown-card" style={{ borderLeftColor: borderColor }}>
      {/* Header */}
      <div className="breakdown-header">
        <div className="breakdown-header-left">
          <a href={product.url} target="_blank" rel="noopener noreferrer" className="breakdown-name">
            {product.name}
          </a>
          <span className="breakdown-price">
            ${product.price}
            {product.status === "purchased" && (
              <span className="status-badge status-purchased" style={{ marginLeft: 8 }}>Owned</span>
            )}
          </span>
        </div>
        <LayerBadge product={product} />
      </div>

      {/* What it is — plain English */}
      <p className="breakdown-whatis">{product.whatItIs}</p>

      {/* What it does */}
      <div className="breakdown-section">
        <h4 className="breakdown-section-title">What you get</h4>
        <ul className="breakdown-list">
          {product.whatItDoes.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Why you need it */}
      <div className="breakdown-section">
        <h4 className="breakdown-section-title">Why you need it</h4>
        <p className="breakdown-text">{product.whyYouNeed}</p>
      </div>

      {/* Projects */}
      <div className="breakdown-section">
        <h4 className="breakdown-section-title">Use on these projects</h4>
        <div className="breakdown-projects">
          {product.projects.map((p) => (
            <span key={p} className="project-tag">{p}</span>
          ))}
        </div>
      </div>

      {/* What makes it unique */}
      <div className="breakdown-section">
        <h4 className="breakdown-section-title">What makes it unique</h4>
        <p className="breakdown-text">{product.uniqueness}</p>
        {product.similarTo && (
          <p className="breakdown-similar">Similar to: {product.similarTo}</p>
        )}
      </div>

      {/* Capabilities row */}
      <div className="breakdown-caps">
        <CapabilityDot has={product.hasAuth} label="Auth" />
        <CapabilityDot has={product.hasPayments} label="Payments" />
        <CapabilityDot has={product.hasDatabase} label="Database" />
        <CapabilityDot has={product.hasAdmin} label="Admin" />
        <CapabilityDot has={product.hasEmail} label="Email" />
      </div>

      {/* Tags */}
      <div className="breakdown-tags">
        {product.tags.map((tag) => (
          <span key={tag} className="breakdown-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export function ProductBreakdownTab() {
  const fullstack = productBreakdowns.filter((p) => p.layer === "fullstack");
  const frontend = productBreakdowns.filter((p) => p.layer === "frontend");
  const components = productBreakdowns.filter((p) => p.layer === "components");

  return (
    <div className="breakdown-container">
      {/* Legend */}
      <div className="breakdown-legend">
        <h2 className="breakdown-page-title">What Am I Buying?</h2>
        <p className="breakdown-page-subtitle">
          Everything broken down by what it actually does, what layer of the stack it covers, and which projects you'll use it on.
        </p>
        <div className="legend-row">
          <span className="legend-item">
            <span className="legend-dot legend-dot-fullstack"></span>
            Full-Stack — has auth, payments, database, the works. Clone and build on top.
          </span>
          <span className="legend-item">
            <span className="legend-dot legend-dot-frontend"></span>
            Frontend Only — templates and page designs. No backend, no auth, no payments.
          </span>
          <span className="legend-item">
            <span className="legend-dot legend-dot-components"></span>
            Components — individual UI blocks you copy into any project. Not full pages.
          </span>
        </div>
      </div>

      {/* Full-Stack Boilerplates */}
      <h3 className="breakdown-group-title">
        <span className="legend-dot legend-dot-fullstack"></span>
        Full-Stack SaaS Boilerplates ({fullstack.length})
        <span className="breakdown-group-subtitle">— Clone, customize, deploy. Auth + payments + database included.</span>
      </h3>
      <div className="breakdown-grid">
        {fullstack.map((p) => (
          <ProductCard key={p.name} product={p} />
        ))}
      </div>

      {/* Frontend Templates */}
      <h3 className="breakdown-group-title">
        <span className="legend-dot legend-dot-frontend"></span>
        Frontend Templates ({frontend.length})
        <span className="breakdown-group-subtitle">— Page designs and layouts. You add your own backend.</span>
      </h3>
      <div className="breakdown-grid">
        {frontend.map((p) => (
          <ProductCard key={p.name} product={p} />
        ))}
      </div>

      {/* Component Libraries */}
      <h3 className="breakdown-group-title">
        <span className="legend-dot legend-dot-components"></span>
        Component Libraries ({components.length})
        <span className="breakdown-group-subtitle">— Individual UI pieces you drop into any project.</span>
      </h3>
      <div className="breakdown-grid">
        {components.map((p) => (
          <ProductCard key={p.name} product={p} />
        ))}
      </div>
    </div>
  );
}
