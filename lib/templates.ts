export type TemplateCategory =
  | "SaaS"
  | "Agency"
  | "Dashboard"
  | "Portfolio"
  | "Community"
  | "Content"
  | "Landing"
  | "Marketplace";

export interface Template {
  slug: string;
  name: string;
  headline: string;
  description: string;
  category: TemplateCategory;
  tags: string[];
  variants: string[];
  hasNext: boolean;
  demoContent: string;
  screenshot: string;
  liveUrl?: string;
}

export const templates: Template[] = [
  {
    slug: "gray",
    name: "Gray",
    headline: "Minimal SaaS Platform",
    description:
      "Clean, zinc-toned interface with slider pricing, animated counters, and floating pill navigation. Perfect for tools that need to feel premium without visual noise.",
    category: "SaaS",
    tags: ["minimal", "pricing slider", "testimonials", "counters"],
    variants: ["next", "html", "vue", "figma"],
    hasNext: true,
    demoContent: "SEO Analytics Dashboard",
    screenshot: "/screenshots/gray.png",
    liveUrl: "https://template-gray-blush.vercel.app",
  },
  {
    slug: "neon",
    name: "Neon",
    headline: "Dark Mode SaaS",
    description:
      "Bold dark theme with blue gradients, scroll animations, and press logo strip. Built for tools that want authority and edge — AI, dev tools, data platforms.",
    category: "SaaS",
    tags: ["dark mode", "gradients", "animations", "bold"],
    variants: ["next", "vue", "figma"],
    hasNext: true,
    demoContent: "AI Rank Tracking Tool",
    screenshot: "/screenshots/neon.png",
    liveUrl: "https://template-neon-amber.vercel.app",
  },
  {
    slug: "creative",
    name: "Creative",
    headline: "Agency Landing Page",
    description:
      "Split hero with floating images, stats row, and community-first layout. Great for agencies, studios, and creative collectives.",
    category: "Agency",
    tags: ["split hero", "stats", "blog", "FAQs"],
    variants: ["next", "html"],
    hasNext: true,
    demoContent: "Digital Marketing Agency",
    screenshot: "/screenshots/creative.png",
    liveUrl: "https://template-creative.vercel.app",
  },
  {
    slug: "mosaic",
    name: "Mosaic",
    headline: "Admin Dashboard",
    description:
      "Full admin shell with sidebar navigation, Chart.js dashboards, ecommerce, job board, and settings pages. 40+ routes. Dark mode toggle included.",
    category: "Dashboard",
    tags: ["admin", "charts", "dark mode", "ecommerce", "40+ pages"],
    variants: ["next", "react", "vue", "html", "laravel", "figma"],
    hasNext: true,
    demoContent: "Client Analytics Command Center",
    screenshot: "/screenshots/mosaic.png",
    liveUrl: "https://template-mosaic.vercel.app",
  },
  {
    slug: "simple",
    name: "Simple",
    headline: "Full SaaS Marketing Site",
    description:
      "The most complete marketing template — 10+ pages including MDX blog, documentation, app marketplace, 4-tier pricing, and customer testimonials.",
    category: "SaaS",
    tags: ["multi-page", "blog", "docs", "pricing", "MDX"],
    variants: ["next", "html", "vue", "figma"],
    hasNext: true,
    demoContent: "SaaS Marketing Platform",
    screenshot: "/screenshots/simple.png",
    liveUrl: "https://template-simple.vercel.app",
  },
  {
    slug: "appy",
    name: "Appy",
    headline: "App Landing Page",
    description:
      "Designed for mobile apps and SaaS products with video support, feature tabs, and conversion-focused layout.",
    category: "SaaS",
    tags: ["app landing", "video", "features", "conversion"],
    variants: ["next", "html", "vue", "figma"],
    hasNext: true,
    demoContent: "Mobile SEO Audit App",
    screenshot: "/screenshots/appy.png",
    liveUrl: "https://template-appy.vercel.app",
  },
  {
    slug: "community",
    name: "Community",
    headline: "Community Platform",
    description:
      "Built for forums, membership sites, and online communities. Social proof heavy with member showcases.",
    category: "Community",
    tags: ["forum", "membership", "social proof"],
    variants: ["next", "html", "vue", "figma"],
    hasNext: true,
    demoContent: "SEO Mastermind Community",
    screenshot: "/screenshots/community.png",
    liveUrl: "https://template-community.vercel.app",
  },
  {
    slug: "devfolio",
    name: "Devfolio",
    headline: "Developer Portfolio",
    description:
      "Showcase projects, skills, and experience with a modern developer portfolio layout.",
    category: "Portfolio",
    tags: ["portfolio", "projects", "developer"],
    variants: ["next", "html", "vue", "figma"],
    hasNext: true,
    demoContent: "Agency Portfolio Showcase",
    screenshot: "/screenshots/devfolio.png",
    liveUrl: "https://template-devfolio.vercel.app",
  },
  {
    slug: "devspace",
    name: "DevSpace",
    headline: "Developer Community Hub",
    description:
      "For developer-facing products — technical documentation feel with community elements.",
    category: "Community",
    tags: ["developer", "technical", "community"],
    variants: ["next", "html", "vue", "figma"],
    hasNext: true,
    demoContent: "Developer Tools Hub",
    screenshot: "/screenshots/devspace.png",
    liveUrl: "https://template-devspace.vercel.app",
  },
  {
    slug: "docs",
    name: "Docs",
    headline: "Documentation Site",
    description:
      "Clean documentation layout with sidebar navigation, search, and video support. Perfect for product docs and knowledge bases.",
    category: "Content",
    tags: ["documentation", "sidebar", "search", "video"],
    variants: ["next", "html", "vue", "figma"],
    hasNext: true,
    demoContent: "Product Knowledge Base",
    screenshot: "/screenshots/docs.png",
    liveUrl: "https://template-docs-steel.vercel.app",
  },
  {
    slug: "fintech",
    name: "Fintech",
    headline: "Finance & Fintech",
    description:
      "Trust-first design for financial products — clean data presentation, security signals, and enterprise feel.",
    category: "SaaS",
    tags: ["finance", "trust", "enterprise", "data"],
    variants: ["next", "html", "vue", "figma"],
    hasNext: true,
    demoContent: "Revenue Analytics Platform",
    screenshot: "/screenshots/fintech.png",
    liveUrl: "https://template-fintech.vercel.app",
  },
  {
    slug: "job-board",
    name: "Job Board",
    headline: "Job Board & Listings",
    description:
      "Search-driven listing layout for job boards, directories, and marketplace-style sites.",
    category: "Marketplace",
    tags: ["listings", "search", "directory", "marketplace"],
    variants: ["next", "html", "vue", "figma"],
    hasNext: true,
    demoContent: "Service Provider Directory",
    screenshot: "/screenshots/job-board.png",
    liveUrl: "https://template-job-board.vercel.app",
  },
  {
    slug: "open-pro",
    name: "Open Pro",
    headline: "Open Source Product",
    description:
      "For open source and developer tools — GitHub-style social proof, feature grids, and technical credibility.",
    category: "SaaS",
    tags: ["open source", "developer", "technical"],
    variants: ["next", "html", "vue", "figma"],
    hasNext: true,
    demoContent: "Open Source SEO Toolkit",
    screenshot: "/screenshots/open-pro.png",
    liveUrl: "https://template-open-pro.vercel.app",
  },
  {
    slug: "podcast",
    name: "Podcast",
    headline: "Podcast & Audio",
    description:
      "Audio-first layout with episode listings, player integration, and guest showcase sections.",
    category: "Content",
    tags: ["podcast", "audio", "episodes", "media"],
    variants: ["next", "html", "vue", "figma"],
    hasNext: true,
    demoContent: "Industry Podcast Hub",
    screenshot: "/screenshots/podcast.png",
    liveUrl: "https://template-podcast-gold.vercel.app",
  },
  {
    slug: "quoty",
    name: "Quoty",
    headline: "Testimonials & Social Proof",
    description:
      "Testimonial-heavy design — perfect for review-driven businesses, case studies, and client showcases.",
    category: "Landing",
    tags: ["testimonials", "reviews", "social proof"],
    variants: ["next", "html", "vue", "figma"],
    hasNext: true,
    demoContent: "Client Results Showcase",
    screenshot: "/screenshots/quoty.png",
    liveUrl: "https://template-quoty.vercel.app",
  },
  {
    slug: "talent",
    name: "Talent",
    headline: "HR & Talent Platform",
    description:
      "Recruiting and talent management focused — team showcases, job listings, and company culture sections.",
    category: "SaaS",
    tags: ["HR", "recruiting", "team", "culture"],
    variants: ["next", "html", "vue", "figma"],
    hasNext: true,
    demoContent: "Team & Hiring Platform",
    screenshot: "/screenshots/talent.png",
    liveUrl: "https://template-talent.vercel.app",
  },
  {
    slug: "tidy",
    name: "Tidy",
    headline: "Clean SaaS Product",
    description:
      "Ultra-clean interface with generous whitespace. For products that need to feel organized and approachable.",
    category: "SaaS",
    tags: ["clean", "whitespace", "organized"],
    variants: ["next", "html", "vue", "figma"],
    hasNext: true,
    demoContent: "Project Management Tool",
    screenshot: "/screenshots/tidy.png",
    liveUrl: "https://template-tidy.vercel.app",
  },
  {
    slug: "waitlist",
    name: "Waitlist",
    headline: "Coming Soon & Waitlist",
    description:
      "Launch-ready waitlist page with email capture, countdown elements, and hype-building layout.",
    category: "Landing",
    tags: ["waitlist", "coming soon", "launch", "email capture"],
    variants: ["next", "html", "vue", "figma"],
    hasNext: true,
    demoContent: "New Tool Launch Page",
    screenshot: "/screenshots/waitlist.png",
    liveUrl: "https://template-waitlist.vercel.app",
  },
  {
    slug: "cube",
    name: "Cube",
    headline: "Startup Landing",
    description:
      "Geometric, modern startup landing page. Bold shapes and strong visual hierarchy.",
    category: "Landing",
    tags: ["startup", "geometric", "bold"],
    variants: ["html", "vue", "figma"],
    hasNext: false,
    demoContent: "Startup Product Launch",
    screenshot: "/screenshots/cube.png",
  },
  {
    slug: "stellar",
    name: "Stellar",
    headline: "Startup Landing",
    description:
      "Space-themed startup landing with particle effects and cosmic gradients.",
    category: "Landing",
    tags: ["startup", "space", "particles"],
    variants: ["html", "vue", "figma"],
    hasNext: false,
    demoContent: "Product Launch Page",
    screenshot: "/screenshots/stellar.png",
  },
];

export const categories: TemplateCategory[] = [
  "SaaS",
  "Agency",
  "Dashboard",
  "Portfolio",
  "Community",
  "Content",
  "Landing",
  "Marketplace",
];
