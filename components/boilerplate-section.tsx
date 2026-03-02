"use client";

import { saasBoilerplates, adminDashboards } from "@/lib/templates";

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    purchased: "status-badge status-purchased",
    "not-purchased": "status-badge status-not-purchased",
    wishlist: "status-badge status-wishlist",
  };
  const labels: Record<string, string> = {
    purchased: "Purchased",
    "not-purchased": "Not Purchased",
    wishlist: "Wishlist",
  };
  return <span className={styles[status] || "status-badge"}>{labels[status] || status}</span>;
}

function FeatureTag({ label, value }: { label: string; value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <span className="variant-tag">{label}</span>
    ) : null;
  }
  return <span className="variant-tag" title={value}>{label}</span>;
}

export function BoilerplateSection() {
  return (
    <>
      {/* Section Header */}
      <div style={{ marginBottom: 32 }}>
        <h2 className="cta-title" style={{ fontSize: "1.75rem", marginBottom: 8 }}>
          SaaS Boilerplates &amp; Admin Dashboards
        </h2>
        <p className="hero-subtitle" style={{ fontSize: "0.95rem", maxWidth: 640 }}>
          Production-ready SaaS starters with real backends — auth, payments, admin panels,
          multi-tenant support. Not just pretty landing pages.
        </p>
      </div>

      {/* SaaS Boilerplates */}
      <h3 style={{ color: "var(--text-secondary)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
        Premium SaaS Boilerplates ({saasBoilerplates.length})
      </h3>
      <div className="template-grid">
        {saasBoilerplates.map((bp) => (
          <a
            key={bp.slug}
            href={bp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="template-card"
            style={{ textDecoration: "none" }}
          >
            <div className="card-body" style={{ padding: "1.25rem" }}>
              <div className="card-header">
                <h3 className="card-name">{bp.name}</h3>
                <StatusBadge status={bp.status} />
              </div>

              <p className="card-headline">{bp.headline}</p>

              <div style={{ display: "flex", alignItems: "baseline", gap: 8, margin: "8px 0" }}>
                <span style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--accent)" }}>
                  ${bp.price}
                </span>
                {bp.priceNote && (
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                    {bp.priceNote}
                  </span>
                )}
              </div>

              <p className="card-description">
                {bp.description.slice(0, 140)}
                {bp.description.length > 140 ? "..." : ""}
              </p>

              {/* Features */}
              <div className="card-variants" style={{ marginTop: 8 }}>
                <FeatureTag label="Auth" value={bp.features.auth} />
                <FeatureTag label="Payments" value={bp.features.payments} />
                <FeatureTag label="Admin" value={bp.features.admin} />
                <FeatureTag label="Multi-Tenant" value={bp.features.multiTenant} />
              </div>

              {/* Stack */}
              <div className="card-variants" style={{ marginTop: 4 }}>
                {bp.stack.slice(0, 4).map((s) => (
                  <span key={s} className="variant-tag">{s}</span>
                ))}
                {bp.stack.length > 4 && (
                  <span className="variant-tag">+{bp.stack.length - 4}</span>
                )}
              </div>

              {bp.bestFor && (
                <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginTop: 8, fontStyle: "italic" }}>
                  Best for: {bp.bestFor}
                </p>
              )}
            </div>
          </a>
        ))}
      </div>

      {/* Admin Dashboards & Component Libraries */}
      <h3 style={{ color: "var(--text-secondary)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 48, marginBottom: 16 }}>
        Admin Dashboards &amp; Component Libraries ({adminDashboards.length})
      </h3>
      <div className="template-grid">
        {adminDashboards.map((ad) => (
          <a
            key={ad.slug}
            href={ad.url}
            target="_blank"
            rel="noopener noreferrer"
            className="template-card"
            style={{ textDecoration: "none" }}
          >
            <div className="card-body" style={{ padding: "1.25rem" }}>
              <div className="card-header">
                <h3 className="card-name">{ad.name}</h3>
                <StatusBadge status={ad.status} />
              </div>

              <p className="card-headline">{ad.headline}</p>

              <div style={{ display: "flex", alignItems: "baseline", gap: 8, margin: "8px 0" }}>
                <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--accent)" }}>
                  {ad.price}
                </span>
                <span className="category-badge">{ad.type}</span>
              </div>

              <p className="card-description">
                {ad.description.slice(0, 140)}
                {ad.description.length > 140 ? "..." : ""}
              </p>

              <div className="card-variants" style={{ marginTop: 8 }}>
                {ad.stack.slice(0, 4).map((s) => (
                  <span key={s} className="variant-tag">{s}</span>
                ))}
                {ad.stack.length > 4 && (
                  <span className="variant-tag">+{ad.stack.length - 4}</span>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
