import Link from "next/link";
import { templates } from "@/lib/templates";
import { notFound } from "next/navigation";
import { BrowserFrame } from "@/components/browser-frame";

export function generateStaticParams() {
  return templates.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const template = templates.find((t) => t.slug === slug);
  if (!template) return { title: "Not Found" };
  return {
    title: `${template.name} — ${template.headline} | Merlino Digital`,
    description: template.description,
  };
}

export default async function TemplatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const template = templates.find((t) => t.slug === slug);

  if (!template) notFound();

  return (
    <div className="detail-page">
      {/* Top nav */}
      <nav className="detail-nav">
        <Link href="/" className="back-link">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 12L6 8l4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Templates
        </Link>
        <span className="detail-nav-title">{template.name}</span>
        <span className="detail-nav-brand">Merlino Digital</span>
      </nav>

      {/* Main content */}
      <div className="detail-content">
        {/* Left: Preview area */}
        <div className="detail-preview-area">
          <BrowserFrame template={template} />
        </div>

        {/* Right: Sidebar */}
        <aside className="detail-sidebar">
          {/* Name + badge */}
          <div>
            <div style={{ marginBottom: 12 }}>
              <span className="category-badge">{template.category}</span>
            </div>
            <h1 className="sidebar-template-name">{template.name}</h1>
            <p className="sidebar-headline">{template.headline}</p>
          </div>

          {/* Description */}
          <div>
            <p className="sidebar-section-label">About</p>
            <p className="sidebar-description">{template.description}</p>
          </div>

          {/* Tags */}
          <div>
            <p className="sidebar-section-label">Features</p>
            <div className="sidebar-tags">
              {template.tags.map((tag) => (
                <span key={tag} className="sidebar-tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* Variants */}
          <div>
            <p className="sidebar-section-label">Available In</p>
            <div className="sidebar-variants">
              {template.variants.map((v) => (
                <span
                  key={v}
                  className={`sidebar-variant${v === "next" ? " sidebar-variant-next" : ""}`}
                >
                  {v}
                </span>
              ))}
            </div>
          </div>

          {/* Demo content label */}
          <div>
            <p className="sidebar-section-label">Demo Shows</p>
            <p className="sidebar-headline">{template.demoContent}</p>
            <p className="sidebar-description" style={{ marginTop: 6 }}>
              This template is customized with real content to show how it
              would look for your business.
            </p>
          </div>

          {/* CTA */}
          <a
            href={`mailto:hello@merlinodigital.com?subject=Build My Site Like ${template.name}&body=I'd like a site built using the "${template.name}" template.`}
            className="btn-cta"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M14 4.667v6.666c0 .737-.597 1.334-1.333 1.334H3.333C2.597 12.667 2 12.07 2 11.333V4.667m12 0c0-.737-.597-1.334-1.333-1.334H3.333C2.597 3.333 2 3.93 2 4.667m12 0L8 8.667 2 4.667"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Build My Site Like This
          </a>
        </aside>
      </div>
    </div>
  );
}
