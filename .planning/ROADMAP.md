# GSD Project Roadmap: InAmigos Internships

## Milestone v1.0 — Production-Quality Discovery Portal

### Phase 1: Environment & Project Foundation
- **Goal**: Scaffold React + TypeScript + Vite + Tailwind CSS project with custom design system variables, fonts, and base styling.
- **Deliverables**:
  - `package.json`, `vite.config.ts`, `tsconfig.json`, `tailwind.config.js` or Tailwind v4 setup.
  - Custom design tokens in `index.css` (warm off-white, deep navy, restrained violet, soft lavender).
  - Clean project scaffolding in `src/`.
- **Status**: Planned

### Phase 2: Centralized Internship Data Engine & Models
- **Goal**: Establish the strictly verified InAmigos Foundation internship schema and centralized data store with verified Internshala opportunities and safe link resolution.
- **Deliverables**:
  - `src/types/internship.ts` (strictly typed schema).
  - `src/data/internships.ts` (authentic InAmigos Foundation listings across AI, Analytics, Web Dev, Content, Social Work, Marketing, Design).
  - Verification audit metadata (`lastVerifiedAt`, verified source URLs, honest unpaid disclosure).
  - Storage helper for bookmarks / local shortlist (`src/utils/storage.ts`).
- **Status**: Planned

### Phase 3: Core Discovery & Listing Interface
- **Goal**: Build the search, filter, sort, card grid, shortlist, share, and modal/drawer components.
- **Deliverables**:
  - `src/components/Navbar.tsx`: Sticky navigation with custom brand mark, links, and bookmark counter.
  - `src/components/Hero.tsx`: Refined hero with specified copy, trust badge, and tasteful geometric/editorial visual.
  - `src/components/SearchBar.tsx` & `FilterBar.tsx`: Instant multi-field search, category chips, mode/duration filters, sort options.
  - `src/components/InternshipCard.tsx`: Consistent Linear-style card with badges, skills, bookmark, share, View Details, and Apply Now.
  - `src/components/InternshipDetailModal.tsx`: Comprehensive drawer/modal with responsibilities, eligibility, logistics, and Internshala redirection warning.
  - `src/components/Toast.tsx`: Smooth toast notifications for bookmarking and share link copies.
- **Status**: Planned

### Phase 4: Editorial Content Sections & Disclaimers
- **Goal**: Assemble the About section, How It Works guide, and verified Footer with mandatory transparency disclaimers.
- **Deliverables**:
  - `src/components/HowItWorks.tsx`: 3-step structured guidance (Discover, Review, Apply).
  - `src/components/AboutSection.tsx`: Transparent foundation profile, independent discovery disclaimer, verified links.
  - `src/components/Footer.tsx`: Brand wordmark, navigation links, verified external links, regulatory and application disclaimers.
- **Status**: Planned

### Phase 5: Verification, Testing, Production Build & Documentation
- **Goal**: Full verification of build, responsiveness, link integrity, bookmarking persistence, and clear documentation.
- **Deliverables**:
  - `npm run build` validation with zero errors.
  - Browser verification of responsive behavior and interactive states.
  - Complete `README.md` with overview, architecture, data verification guide, local setup, and deployment notes.
- **Status**: Planned
