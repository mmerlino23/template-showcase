"use client";

import { useState, useMemo } from "react";
import { templates, categories, type TemplateCategory } from "@/lib/templates";
import { TemplateCard } from "./template-card";

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<TemplateCategory | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    let result = templates;

    if (activeCategory !== "All") {
      result = result.filter((t) => t.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.headline.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.tags.some((tag) => tag.includes(q))
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: templates.length };
    for (const cat of categories) {
      counts[cat] = templates.filter((t) => t.category === cat).length;
    }
    return counts;
  }, []);

  return (
    <>
      {/* Search + Filters */}
      <div className="gallery-controls">
        {/* Search */}
        <div className="search-wrapper">
          <svg
            className="search-icon"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M7.333 12.667A5.333 5.333 0 107.333 2a5.333 5.333 0 000 10.667zM14 14l-2.9-2.9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Category pills */}
        <div className="filter-row">
          <button
            className={`filter-pill${activeCategory === "All" ? " filter-pill-active" : ""}`}
            onClick={() => setActiveCategory("All")}
          >
            All ({categoryCounts.All})
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-pill${activeCategory === cat ? " filter-pill-active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat} ({categoryCounts[cat]})
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="results-count">
        Showing {filtered.length} template{filtered.length !== 1 ? "s" : ""}
        {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
      </p>

      {/* Grid */}
      <div className="template-grid">
        {filtered.map((template) => (
          <TemplateCard key={template.slug} template={template} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="empty-state">
          <p className="empty-state-title">No templates found</p>
          <p className="empty-state-text">Try a different category or search term.</p>
        </div>
      )}
    </>
  );
}
