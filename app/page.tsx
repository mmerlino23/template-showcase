import { Gallery } from "@/components/gallery";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <header className="hero-section">
        <div className="hero-glow" aria-hidden="true" />

        <div className="animate-slide-up" style={{ position: "relative", maxWidth: 720, margin: "0 auto" }}>
          <p className="hero-eyebrow">20+ Premium Templates</p>

          <h1 className="hero-title">
            Pick a Style.{" "}
            <span className="gradient-text">We Build Your Site.</span>
          </h1>

          <p className="hero-subtitle">
            Browse our collection of handpicked website designs. Pick a style
            you love — we customize everything with your brand, your content,
            and launch it for your business.
          </p>

          <div className="hero-actions">
            <a href="#gallery" className="btn-primary">
              Browse Templates
            </a>
            <a href="mailto:hello@merlinodigital.com" className="btn-ghost">
              Get a Quote
            </a>
          </div>
        </div>
      </header>

      {/* Stats bar */}
      <div className="stats-bar">
        {[
          { value: "20+", label: "Templates" },
          { value: "8", label: "Categories" },
          { value: "4", label: "Frameworks" },
          { value: "48hr", label: "Turnaround" },
        ].map((stat) => (
          <div key={stat.label} className="stat-item">
            <p className="stat-value">{stat.value}</p>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Gallery */}
      <main id="gallery" className="gallery-section">
        <Gallery />
      </main>

      {/* CTA */}
      <section className="cta-section">
        <h2 className="cta-title">Ready to Build?</h2>
        <p className="cta-text">
          Pick a template, tell us about your business, and we handle the rest.
          Custom content, your branding, fully optimized for search engines.
        </p>
        <a href="mailto:hello@merlinodigital.com" className="btn-primary">
          Start Your Project
        </a>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <p className="footer-text">
          Merlino Digital &mdash; Web Design &amp; SEO
        </p>
      </footer>
    </div>
  );
}
