# Requirements Specification: InAmigos Internships

## 1. Functional Requirements

### FR-01: Navigation & Header
- Sticky navigation header with custom typographic wordmark "InAmigos Internships" and a tasteful minimal symbol.
- Desktop navigation links: "Explore Internships", "About", "How It Works".
- Action CTA: "Explore Opportunities" (smooth scroll to listings).
- Saved items counter badge (reflects count of bookmarked internships).
- Responsive mobile menu drawer with smooth toggle and keyboard accessibility.

### FR-02: Hero Section
- Eyebrow: `"YOUR NEXT OPPORTUNITY STARTS HERE"`.
- Main heading: `"Find your place at InAmigos."`.
- Supporting text: `"Explore internship opportunities at InAmigos Foundation, discover roles that match your interests, and apply through Internshala."`.
- Primary CTA: `"Explore Internships"` (scrolls to listings).
- Secondary CTA: `"How It Works"` (scrolls to process section).
- Restrained trust statement: `"One destination for InAmigos Foundation internship opportunities."`.
- Tasteful editorial visual / clean SVG abstract illustration of learning & growth (no stock photos or fake portraits).

### FR-03: Centralized Data Architecture
- Typed schema with strictly defined fields:
  - `id`: string
  - `title`: string
  - `organization`: "InAmigos Foundation"
  - `category`: string ("AI & Machine Learning", "Data & Analytics", "Web Development", "Content & Media", "Social Impact", etc.)
  - `description`: string
  - `responsibilities`: string[]
  - `skills`: string[]
  - `eligibility`: string
  - `duration`: string (e.g. "2 Weeks", "4 Weeks")
  - `workMode`: "Work From Home (Remote)" | "Hybrid" | "On-Site"
  - `stipend`: string | null (e.g. "Unpaid (Certificate & LOR provided)")
  - `deadline`: string | null
  - `status`: "Active" | "Upcoming" | "Applications Open"
  - `sourceUrl`: string ("https://internshala.com/...")
  - `applicationUrl`: string | null
  - `lastVerifiedAt`: string
- All records must be strictly InAmigos Foundation opportunities.

### FR-04: Search, Filtering & Sorting
- Real-time instant search matching across `title`, `description`, `skills`, and `category`.
- Dynamic filter pills:
  - Department / Category
  - Work Mode (Remote / All)
  - Duration (2 Weeks / 4 Weeks)
  - Saved / Bookmarked Only toggle
- Sort dropdown:
  - "Relevant matches" (default)
  - "Alphabetical (A-Z)"
  - "Recently Added / Verified"
- Dynamic active results counter (e.g. "Showing 8 opportunities").
- "Clear all filters" button when active filters exist.
- Helpful empty state with reset suggestions when 0 matches found.

### FR-05: Opportunity Cards
- Clean card architecture with clear visual hierarchy:
  - Category pill badge & status badge
  - Title & "InAmigos Foundation" label
  - Work mode, duration, and stipend indicators
  - Short summary description
  - Skill tags (highlighting matching keywords when searched)
  - Source attribution badge: "Source: Internshala"
  - Bookmark / Shortlist toggle button (persists to localStorage)
  - Share button (triggers Web Share API or clipboard copy with toast)
  - "View Details" button (opens detailed view)
  - "Apply Now" prominent button (opens verified `applicationUrl` with `target="_blank"` and `rel="noopener noreferrer"`)
  - If URL is null/unavailable, safely disable with "Application link unavailable".

### FR-06: Opportunity Detail View
- Modal/Drawer with full details:
  - Complete role overview & scope
  - Detailed responsibilities checklist
  - Eligibility requirements
  - Key skills required
  - Logistics breakdown (Duration, Mode, Stipend, Deadline, Status, Verification timestamp)
  - Notice alert: `"Applications are completed on Internshala. You will leave this website when you apply."`
  - Prominent "Apply on Internshala" CTA opening authentic external listing.
  - Keyboard accessible (Escape to close, focus trap, aria-modal).

### FR-07: Local Shortlist / Bookmarking
- Client-side persistence using `localStorage`.
- Toggle on cards and detail view.
- Filter view: quick access to "Saved Internships (N)".
- Empty state with guide to bookmark items.

### FR-08: Share Capability
- Native `navigator.share` on supported mobile/modern browsers.
- Automatic fallback to clipboard copy (`navigator.clipboard.writeText`) with interactive toast feedback ("Link copied to clipboard").

### FR-09: About Section
- Heading: `"Focused on opportunities that matter."`.
- Transparent disclaimer: independently built discovery interface for InAmigos Foundation internship listings.
- Clear mission representation without fabricating history or partnerships.

### FR-10: How It Works Section
- Step 01: Discover (Browse internships offered by InAmigos Foundation).
- Step 02: Review (Understand the role, eligibility, requirements, and available details).
- Step 03: Apply (Open the original Internshala listing and complete the application there).

### FR-11: Footer & Disclaimers
- InAmigos Internships wordmark & summary.
- Navigation links.
- Verified link to InAmigos Foundation (`https://inamigosfoundation.org.in/`).
- Verified link to Internshala (`https://internshala.com`).
- Compulsory disclaimer: `"This website helps users discover internship listings and redirects applicants to Internshala. Verify the current requirements and application status on the original listing."`

## 2. Non-Functional & Design Requirements
- **Color Palette**:
  - Background: `#FAFAF9` (warm off-white), `#FFFFFF` (cards)
  - Text Primary: `#0F172A` (deep slate/navy)
  - Text Muted: `#64748B`
  - Brand Accent: `#6D28D9` / `#7C3AED` (restrained violet)
  - Accent Background: `#F5F3FF` / `#EDE9FE` (soft lavender)
  - Borders: `#E2E8F0` / `#E4E4E7`
- **Accessibility**: WCAG AA color contrast, keyboard navigable, screen-reader friendly aria tags.
- **Responsiveness**: Pixel-perfect rendering across mobile (360px+), tablet (768px+), and desktop (1024px, 1280px+).
- **Zero Monolithic Dependencies**: Lightweight, production bundle < 250kb gzipped.
