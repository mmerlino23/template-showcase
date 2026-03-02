import Link from "next/link";
import type { Template } from "@/lib/templates";

interface TemplateCardProps {
  template: Template;
}

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <Link href={`/templates/${template.slug}`} className="template-card">
      <div className="screenshot-wrap">
        <img
          src={template.screenshot}
          alt={template.name}
          loading="lazy"
        />
        <div className="card-overlay">
          <span className="card-overlay-btn">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 3C4.364 3 1.258 5.214 0 8c1.258 2.786 4.364 5 8 5s6.742-2.214 8-5c-1.258-2.786-4.364-5-8-5zm0 8.333A3.333 3.333 0 118 4.667a3.333 3.333 0 010 6.666zm0-5.333a2 2 0 100 4 2 2 0 000-4z"
                fill="currentColor"
              />
            </svg>
            View Live
          </span>
        </div>
      </div>

      <div className="card-body">
        <div className="card-header">
          <h3 className="card-name">{template.name}</h3>
          <span className="category-badge">{template.category}</span>
        </div>

        <p className="card-headline">{template.headline}</p>

        <p className="card-description">
          {template.description.slice(0, 120)}
          {template.description.length > 120 ? "..." : ""}
        </p>

        <div className="card-variants">
          {template.variants.map((v) => (
            <span key={v} className="variant-tag">
              {v}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
