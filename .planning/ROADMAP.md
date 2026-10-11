# AI Toolbox — Project Roadmap

## Milestone v2.0 — Production-Ready AI Tools Directory

### Phase 1: Project Foundation & Premium Dark Design System
- Establish CSS design tokens (`#070B12`, `#0B1220`, `#101827`, `#151F30`, `#3B82F6`, `#22D3EE`, `#F8FAFC`).
- Configure typography, dark scrollbars, glow utilities, and card borders in `index.css`.
- Update `index.html` with AI Toolbox title, meta description, and keywords.

### Phase 2: Custom Logo & Brand Assets
- Create scalable SVG logo combining geometric toolbox with electric-blue & cyan 4-point AI sparkle.
- Create icon-only SVG, horizontal logo lockup with "AI Toolbox", and `public/favicon.svg`.
- Create `src/components/Logo.tsx` component.

### Phase 3: Verified AI Tools Dataset & Link Validation
- Define strong TypeScript interfaces in `src/types/tool.ts`.
- Build curated dataset of 30+ real AI tools with verified canonical HTTPS URLs in `src/data/tools.ts`.
- Create repeatable automated validation script `scripts/validate-tools.mjs` and npm script `npm run validate:tools`.

### Phase 4: Main Discovery Experience & Navigation
- Build `Navbar.tsx` with brand lockup, section jumps, search shortcut, and live favorites badge.
- Build `Hero.tsx` with headline, search bar, collection shortcuts, and category quick-filters.
- Build `FeaturedTools.tsx` section showcasing top curated tools.

### Phase 5: Search, Categories, Filters & Sorting
- Build `SearchBar.tsx` and `FilterBar.tsx` for multi-field search and category chips.
- Add pricing filters, collection filters, and sorting (Featured, Alphabetical, Recent).
- Implement `src/utils/filterTools.ts` for clean testable query execution.
- Build `EmptyState.tsx` tailored for zero search results and empty favorites.

### Phase 6: Tool Detail Modal & External Navigation
- Build `ToolCard.tsx` with dark card styling, tags, pricing badges, and safe external navigation.
- Build `ToolDetailModal.tsx` with deep-linking `?tool=<slug>`, verified features checklist, and direct official website CTA.

### Phase 7: Favorites & Local Persistence
- Build `src/hooks/useFavorites.ts` with browser `localStorage` integration and window storage event synchronization.
- Enable favorites filtering and live counter across navbar and filter toolbar.

### Phase 8: Editorial Content, Curated Collections & About Section
- Build `CollectionsSection.tsx` highlighting curated student, developer, designer, and free collections.
- Build `AboutSection.tsx` with independent directory transparency.
- Build `Footer.tsx` with logo, category links, outbound disclaimer, and dynamic current year.

### Phase 9: SEO, Performance & Production Verification
- Run production build (`tsc -b && vite build`) and validation tests.
- Verify browser experience with automated browser subagent (search, filters, favorites, modal, mobile responsiveness).

### Phase 10: Vercel Deployment Readiness
- Create `vercel.json` for client-side single page app routing rewrites.
- Ensure zero hardcoded server dependencies or secrets.
- Write comprehensive deployment instructions in `README.md`.
