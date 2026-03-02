export type TemplateCategory =
  | "SaaS"
  | "Agency"
  | "Dashboard"
  | "Portfolio"
  | "Community"
  | "Content"
  | "Landing"
  | "Marketplace"
  | "Boilerplate";

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

// --- SaaS Boilerplates & Admin Dashboards ---

export type PurchaseStatus = "purchased" | "not-purchased" | "wishlist";

export interface BoilerplateFeatures {
  auth: string;
  payments: string;
  database: string;
  email: string;
  admin: boolean;
  multiTenant: boolean;
  api: string;
}

// --- Priority Buy List ---

export interface PriorityItem {
  name: string;
  url: string;
  price: number;
  originalPrice?: number;
  priceNote?: string;
  dealStatus?: string;
  project: string;
  projectNote: string;
  type: "boilerplate" | "ui-kit" | "component-library";
  status: PurchaseStatus;
  priority: number;
}

export const priorityBuyList: PriorityItem[] = [
  {
    name: "TailAdmin Enterprise",
    url: "https://tailadmin.com",
    price: 699,
    dealStatus: "Bundle extended — no coupon system",
    project: "birdseyeroi.com",
    projectNote: "Admin dashboard UI for Call Tracking + Domain Portfolio",
    type: "ui-kit",
    status: "not-purchased",
    priority: 1,
  },
  {
    name: "Shipped",
    url: "https://shipped.club",
    price: 299,
    dealStatus: "PPP discount may apply (geo-based, up to 70%)",
    project: "birdseyeroi.com",
    projectNote: "Full SaaS backend — auth, Stripe, admin, multi-tenant",
    type: "boilerplate",
    status: "not-purchased",
    priority: 2,
  },
  {
    name: "Supastarter",
    url: "https://supastarter.dev",
    price: 299,
    originalPrice: 349,
    dealStatus: "$50 off — standing discount",
    project: "Brand Media Manager",
    projectNote: "Full SaaS backend — Supabase + Lemon Squeezy + orgs",
    type: "boilerplate",
    status: "not-purchased",
    priority: 3,
  },
  {
    name: "ShipFast",
    url: "https://shipfa.st",
    price: 199,
    originalPrice: 299,
    dealStatus: "$100 off — limited spots",
    project: "General MVPs",
    projectNote: "Quick SaaS launcher for prototypes (optional)",
    type: "boilerplate",
    status: "not-purchased",
    priority: 4,
  },
];

export const purchasedItems: PriorityItem[] = [
  {
    name: "Cruip Bundle",
    url: "https://cruip.com",
    price: 79,
    project: "Template Arsenal",
    projectNote: "20 UI templates (Next.js/Vue/HTML/Figma) — all installed",
    type: "ui-kit",
    status: "purchased",
    priority: 0,
  },
  {
    name: "Aceternity UI",
    url: "https://ui.aceternity.com",
    price: 179,
    project: "Template Arsenal",
    projectNote: "Animated React components — premium collection",
    type: "component-library",
    status: "purchased",
    priority: 0,
  },
];

export const promoFindings = {
  lastChecked: "2026-03-02",
  summary: "No real promo codes exist. Only standing discounts.",
  details: [
    { name: "ShadcnUIKit", deal: "40% off auto-applied ($499 from $699 Enterprise)", verified: true },
    { name: "ShipFast", deal: "$100 off Starter ($199 from $299) — 14 spots left", verified: true },
    { name: "Supastarter", deal: "$50 off ($299 from $349) — standing", verified: true },
    { name: "Makerkit", deal: "$50 off ($299 from $349) — standing", verified: true },
    { name: "TailAdmin", deal: "No coupon system — $699 bundle extended", verified: true },
    { name: "Shipped", deal: "PPP (geo-based) — could not verify discount amount", verified: false },
    { name: "NextJSTemplates", deal: "$50 off ($199 from $249) — All-Access standing", verified: true },
  ],
};

export interface SaasBoilerplate {
  slug: string;
  name: string;
  headline: string;
  description: string;
  url: string;
  price: number;
  priceNote?: string;
  status: PurchaseStatus;
  stack: string[];
  features: BoilerplateFeatures;
  bestFor: string;
  tags: string[];
  lastUpdated: string;
}

export interface AdminDashboard {
  slug: string;
  name: string;
  headline: string;
  description: string;
  url: string;
  price: string;
  status: PurchaseStatus;
  stack: string[];
  type: "component-library" | "admin-tool" | "ui-kit";
  tags: string[];
}

export const saasBoilerplates: SaasBoilerplate[] = [
  {
    slug: "shipped",
    name: "Shipped",
    headline: "Next.js SaaS Starter with Stripe + Auth",
    description:
      "Complete SaaS boilerplate with magic link auth, Stripe subscriptions, admin dashboard, 20+ API endpoints, and team workspaces. MongoDB/Firebase backend.",
    url: "https://shipped.club",
    price: 299,
    status: "not-purchased",
    stack: ["Next.js", "React", "TypeScript", "MongoDB", "Firebase", "Stripe", "Tailwind CSS"],
    features: {
      auth: "Magic Link (Passwordless)",
      payments: "Stripe",
      database: "MongoDB / Firebase",
      email: "Postmark",
      admin: true,
      multiTenant: true,
      api: "REST + GraphQL (urql/Pothos)",
    },
    bestFor: "birdseyeroi.com — Call Tracking Platform",
    tags: ["saas", "stripe", "magic-link", "graphql", "admin", "multi-tenant"],
    lastUpdated: "2026-03",
  },
  {
    slug: "supastarter",
    name: "Supastarter",
    headline: "Next.js/Nuxt + Supabase SaaS Kit",
    description:
      "Full SaaS starter with Supabase (PostgreSQL), NextAuth, Lemon Squeezy payments, organization support, API key management, blog, and SEO-optimized pages.",
    url: "https://supastarter.dev",
    price: 299,
    status: "not-purchased",
    stack: ["Next.js", "Nuxt", "TypeScript", "Supabase", "Lemon Squeezy", "Tailwind CSS", "shadcn/ui"],
    features: {
      auth: "NextAuth (Google/GitHub OAuth)",
      payments: "Lemon Squeezy",
      database: "Supabase (PostgreSQL)",
      email: "Built-in notifications",
      admin: true,
      multiTenant: true,
      api: "Next.js API routes",
    },
    bestFor: "Brand Media Manager — white-label social dashboard",
    tags: ["saas", "supabase", "nextauth", "organizations", "blog", "seo"],
    lastUpdated: "2026-03",
  },
  {
    slug: "makerkit",
    name: "Makerkit",
    headline: "Next.js SaaS Kit with Firebase",
    description:
      "Production-ready SaaS boilerplate with Firebase auth, Firestore database, Stripe billing, real-time data sync, file uploads, and organization-based multi-tenancy.",
    url: "https://makerkit.dev",
    price: 299,
    status: "not-purchased",
    stack: ["Next.js", "React", "TypeScript", "Firebase", "Stripe", "Tailwind CSS"],
    features: {
      auth: "Firebase Authentication",
      payments: "Stripe",
      database: "Firebase Firestore",
      email: "Built-in templates",
      admin: true,
      multiTenant: true,
      api: "Next.js API routes + Firebase",
    },
    bestFor: "Real-time apps needing Firebase ecosystem",
    tags: ["saas", "firebase", "stripe", "realtime", "file-upload"],
    lastUpdated: "2026-03",
  },
  {
    slug: "shipfast",
    name: "ShipFast",
    headline: "Next.js + Supabase + Stripe Starter",
    description:
      "Fast SaaS launcher with NextAuth, Supabase PostgreSQL, Stripe billing, email templates via Resend, and a complete landing page.",
    url: "https://shipfa.st",
    price: 199,
    priceNote: "$100 off (was $299) — limited spots",
    status: "not-purchased",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Stripe", "Tailwind CSS", "shadcn/ui"],
    features: {
      auth: "NextAuth",
      payments: "Stripe",
      database: "Supabase (PostgreSQL)",
      email: "Resend",
      admin: true,
      multiTenant: true,
      api: "Next.js API routes",
    },
    bestFor: "Quick SaaS prototypes and MVPs",
    tags: ["saas", "supabase", "stripe", "budget", "fast-launch"],
    lastUpdated: "2026-03",
  },
  {
    slug: "launchfast",
    name: "LaunchFast",
    headline: "Multi-Framework SaaS Starter",
    description:
      "SaaS boilerplate available for Next.js, Astro, and Svelte. Supabase backend, Stripe payments, Resend email, and deployment guides for Vercel/Netlify.",
    url: "https://launchfa.st",
    price: 179,
    status: "not-purchased",
    stack: ["Next.js", "Astro", "Svelte", "TypeScript", "Supabase", "Stripe", "Tailwind CSS"],
    features: {
      auth: "NextAuth / Magic Link",
      payments: "Stripe",
      database: "Supabase (PostgreSQL)",
      email: "Resend",
      admin: true,
      multiTenant: true,
      api: "Next.js API routes / Serverless",
    },
    bestFor: "Multi-framework flexibility",
    tags: ["saas", "multi-framework", "astro", "svelte", "stripe"],
    lastUpdated: "2026-03",
  },
  {
    slug: "saasrock",
    name: "SaaSrock",
    headline: "Enterprise SaaS Boilerplate",
    description:
      "Enterprise-grade SaaS with first-class multi-tenancy, RBAC, audit logging, webhook system, feature flags, and support for PostgreSQL + MongoDB. REST + GraphQL API.",
    url: "https://saasrock.com",
    price: 249,
    priceNote: "Starter $249 / Pro $499 / Enterprise $1,999",
    status: "not-purchased",
    stack: ["Next.js 15", "React", "TypeScript", "PostgreSQL", "Prisma", "Drizzle", "Stripe", "Tailwind CSS"],
    features: {
      auth: "JWT + OAuth (Email/Password/Social)",
      payments: "Stripe + Lemon Squeezy",
      database: "PostgreSQL (Prisma/Drizzle) or MongoDB",
      email: "SendGrid / Postmark / Mailgun",
      admin: true,
      multiTenant: true,
      api: "REST + GraphQL",
    },
    bestFor: "Complex multi-tenant SaaS with enterprise needs",
    tags: ["enterprise", "multi-tenant", "rbac", "audit-log", "webhooks", "feature-flags"],
    lastUpdated: "2026-03",
  },
  {
    slug: "bedrock",
    name: "Bedrock",
    headline: "Next.js Enterprise Starter",
    description:
      "Deep GraphQL integration with Pothos/urql, Prisma ORM, multi-tenant schema with org isolation, Stripe billing, and Postmark email. Deploys to Vercel or Fly.io.",
    url: "https://bedrock.mxstbr.com",
    price: 396,
    priceNote: "Usually $450, currently discounted",
    status: "not-purchased",
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "GraphQL", "Stripe", "Tailwind CSS"],
    features: {
      auth: "OAuth (Google/GitHub) + Email/Password",
      payments: "Stripe",
      database: "PostgreSQL (Prisma ORM)",
      email: "Postmark",
      admin: true,
      multiTenant: true,
      api: "GraphQL (Pothos server + urql client)",
    },
    bestFor: "GraphQL-heavy enterprise applications",
    tags: ["enterprise", "graphql", "prisma", "postgresql", "multi-tenant"],
    lastUpdated: "2026-03",
  },
];

export const adminDashboards: AdminDashboard[] = [
  {
    slug: "tailadmin",
    name: "TailAdmin",
    headline: "Tailwind Admin Dashboard UI Kit",
    description:
      "Pre-built admin UI components for React, Vue, Angular, Laravel, and HTML. Not a full boilerplate — UI kit only. No backend, no auth, no DB.",
    url: "https://tailadmin.com",
    price: "$49 (Basic) / $149 (Pro) / $699 (Enterprise)",
    status: "not-purchased",
    stack: ["React", "Vue", "Angular", "Laravel", "HTML", "Tailwind CSS"],
    type: "ui-kit",
    tags: ["admin", "dashboard", "ui-kit", "multi-framework"],
  },
  {
    slug: "shadcnuikit",
    name: "ShadcnUIKit",
    headline: "Premium shadcn/ui Component Collection",
    description:
      "Extended component library built on shadcn/ui. Premium blocks, layouts, and dashboard components for Next.js apps.",
    url: "https://shadcnuikit.com",
    price: "$79–$199",
    status: "not-purchased",
    stack: ["Next.js", "React", "TypeScript", "shadcn/ui", "Tailwind CSS"],
    type: "component-library",
    tags: ["components", "shadcn", "dashboard", "blocks"],
  },
  {
    slug: "nextjstemplates",
    name: "NextJSTemplates",
    headline: "Next.js Template Marketplace",
    description:
      "Collection of Next.js templates and UI kits including admin dashboards, landing pages, and SaaS templates.",
    url: "https://nextjstemplates.com",
    price: "$179",
    status: "not-purchased",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    type: "ui-kit",
    tags: ["templates", "nextjs", "admin", "landing-pages"],
  },
  {
    slug: "tremor",
    name: "Tremor",
    headline: "React Dashboard Components (Free)",
    description:
      "35+ copy-paste React components and 300+ blocks for dashboards. Open source, 15K GitHub stars. Use inside any React boilerplate.",
    url: "https://tremor.so",
    price: "Free (MIT)",
    status: "not-purchased",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    type: "component-library",
    tags: ["dashboard", "charts", "free", "open-source"],
  },
  {
    slug: "adminjs",
    name: "AdminJS",
    headline: "Auto-Generated Admin Panels (Free)",
    description:
      "Node.js middleware that auto-generates CRUD admin panels from your DB schema. Works with Express, Hapi, Nest.js. 9K GitHub stars.",
    url: "https://adminjs.co",
    price: "Free (MIT)",
    status: "not-purchased",
    stack: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma"],
    type: "admin-tool",
    tags: ["admin", "crud", "auto-generated", "free", "open-source"],
  },
  {
    slug: "aceternity",
    name: "Aceternity UI",
    headline: "Premium Animated React Components",
    description:
      "Beautiful animated UI components for React/Next.js. Premium collection of motion-rich components, cards, heroes, and interactive elements.",
    url: "https://ui.aceternity.com",
    price: "$179",
    status: "purchased",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    type: "component-library",
    tags: ["animations", "motion", "premium", "interactive"],
  },
];

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
    liveUrl: "https://merlino-creative.vercel.app",
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
  "Boilerplate",
];
