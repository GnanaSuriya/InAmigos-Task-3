# AI Toolbox — Requirements Specification

## 1. Functional Requirements

### FR-01: Brand Identity & Custom Assets
- Custom geometric toolbox SVG logo with 4-point AI sparkle in electric blue (`#3B82F6`) and cyan (`#22D3EE`).
- Icon-only SVG asset and horizontal logo lockup with "AI Toolbox".
- Scalable SVG favicon (`public/favicon.svg`) and app icon assets.
- Consistent inclusion across Navbar, Hero, Modal, Footer, and Open Graph meta tags.

### FR-02: Navigation Bar
- Responsive header with AI Toolbox logo and brand name.
- Section links: "Discover", "Categories", "Collections", "About".
- Quick search shortcut button.
- Favorites button displaying live badge counter of bookmarked tools.
- Accessible mobile navigation menu drawer.

### FR-03: Hero Section
- Headline: `"Discover the right AI for every task."`
- Supporting copy: `"Explore a curated collection of AI tools that help you build faster, create smarter, and get more done."`
- Primary CTA: `"Explore Tools"` (smooth scroll to directory).
- Secondary CTA: `"Browse Categories"` (smooth scroll to category filters).
- Integrated search bar with placeholder: `"Search AI tools, categories, or use cases..."`
- Compact row of curated collection shortcuts ("Students", "Developers", "Designers", "Creators", "Free / Freemium").
- No fabricated numbers or reviews.

### FR-04: Centralized & Typed Dataset
- Strongly typed TypeScript schema:
  - `id`: string
  - `name`: string
  - `slug`: string
  - `description`: string
  - `overview`: string
  - `officialUrl`: string (strict HTTPS vendor domain)
  - `category`: ToolCategory
  - `tags`: string[]
  - `useCases`: string[]
  - `pricingType`: 'Free' | 'Freemium' | 'Paid' | 'Free Trial' | 'Pricing varies'
  - `pricingDetails`?: string
  - `features`: string[]
  - `isFeatured`: boolean
  - `collections`: string[]
  - `lastVerifiedAt`: string
- 30+ verified real AI tools with canonical official URLs.
- Repeatable validation script to enforce schema and link integrity.

### FR-05: Discovery Directory Grid & Layout
- 3 to 4 columns on desktop, 2 columns on tablet, 1 column on mobile.
- Clean dark tool card:
  - Custom branded geometric icon badge.
  - Tool name, category pill, and pricing badge.
  - Short description.
  - Key tags/use cases.
  - "Visit Tool" button (safe external anchor).
  - Bookmark/favorite toggle.
  - "View Details" action.

### FR-06: Categories & Curated Collections
- 10 functional categories (AI Assistants, Coding & Development, Writing & Content, Image Generation & Design, Video & Animation, Audio & Music, Research & Education, Productivity & Automation, Business & Marketing, Data Analysis).
- 5 curated collections:
  - Best AI Tools for Students
  - AI Tools for Developers
  - AI Tools for Designers
  - AI Tools for Content Creators
  - Free and Freemium AI Tools

### FR-07: Search, Filtering & Sorting
- Client-side search across name, description, category, tags, and use cases.
- Category filter selector / chips.
- Pricing filter dropdown.
- Curated collection filter selector.
- Sorting: "Featured First", "Alphabetical (A-Z)", "Recently Verified".
- Results counter & working "Clear all filters" action.
- Polished dark empty state for zero matching results.

### FR-08: Tool Details View
- Accessible modal/drawer with deep-linking support (`?tool=<slug>`).
- Full overview, verified features checklist, use cases, pricing breakdown.
- Primary "Visit Official Website" button opening verified canonical URL in new tab.
- Related tools suggestions based on category.

### FR-09: Favorites & Local Storage
- LocalStorage persistence with `useFavorites` hook.
- Survives page refreshes.
- "Favorites Only" toggle in filter bar and navbar button.
- Dedicated empty state when no tools are favorited.

### FR-10: About Section & Footer
- Clear transparency statement explaining AI Toolbox is an independent discovery directory.
- Footer with logo lockup, category links, nav links, legal and external disclaimer, and dynamic copyright year.

## 2. Non-Functional & Technical Requirements
- **Theme**: Premium SaaS dark UI (`#070B12`, `#0B1220`, `#101827`, `#151F30`, `#3B82F6`, `#22D3EE`, `#F8FAFC`).
- **Performance**: Static production build < 350kb gzip; fast client-side filtering.
- **Accessibility**: WCAG AA contrast, keyboard accessibility (`Esc` modal close), visible focus outlines.
- **Vercel Readiness**: `vercel.json` SPA rewrites configuration; pure client-side architecture with zero required server secrets.
