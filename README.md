# InAmigos Internships — AI-Powered Internship Discovery Website

> A refined, minimal, production-quality internship discovery portal displaying strictly verified internship opportunities offered by **InAmigos Foundation** and redirecting applicants directly to official **Internshala** listings.

---

## 1. Product Overview

**InAmigos Internships** is an independent discovery interface tailored for students seeking internships at InAmigos Foundation (a registered Section 8 non-profit organization founded in 2020 in Bilaspur, Chhattisgarh, India).

### Key Directives
- **Exclusively InAmigos Foundation**: Displays only opportunities verified for InAmigos Foundation. No unrelated companies or generic job boards.
- **Honest Application Redirection**: Applications take place on the official [Internshala](https://internshala.com) listing. No fake internal submission forms or artificial barriers.
- **Verified Data Integrity**: Listing durations (typically 2–4 weeks), work modes (Remote / WFH), stipends (unpaid with Certificate & LOR), and application links are strictly sourced. If an application URL is unavailable or a cohort is closed, the CTA is disabled and marked as "Application link unavailable" rather than fabricating a placeholder destination.

---

## 2. Design System & Aesthetics

Visual inspiration: Linear-style clarity, modern typography, restrained color harmony, and calm editorial layouts.

- **Background**: Warm off-white (`#FAFAF9`) with pure white card surfaces (`#FFFFFF`).
- **Typography**: Deep slate/navy headings (`#0F172A`) and balanced slate body text (`#475569`, `#64748B`) using `Plus Jakarta Sans` and `Inter`.
- **Primary Accent**: Restrained violet (`#6D28D9` / `#7C3AED`) and soft lavender surfaces (`#F5F3FF` / `#EDE9FE`).
- **Borders & Elevation**: Light neutral borders (`#E2E8F0`), subtle borders, and soft hover elevation.
- **Accessibility**: Full keyboard navigation (`Esc` to close modal, focus rings, ARIA roles, high color contrast).

---

## 3. Implemented Features

1. **Sticky Navigation Bar**:
   - Custom typographic wordmark: `InAmigos Internships` + geometric brand mark.
   - Smooth section navigation (`Explore Internships`, `How It Works`, `About`).
   - Saved bookmarks indicator badge with live counter.
   - Fully functional mobile drawer menu.

2. **Refined Hero Section**:
   - Eyebrow: `YOUR NEXT OPPORTUNITY STARTS HERE`.
   - Heading: `Find your place at InAmigos.`.
   - Supporting text: `Explore internship opportunities at InAmigos Foundation, discover roles that match your interests, and apply through Internshala.`.
   - Primary and secondary CTAs with smooth scrolling.
   - Restrained trust statement: `One destination for InAmigos Foundation internship opportunities.`.
   - Clean editorial geometric learning pathway illustration.

3. **Discovery & Filtering Engine**:
   - Instant search across `title`, `description`, `skills`, and `category`.
   - Department / Category pills (`AI & Machine Learning`, `Data & Analytics`, `Web Development`, `Prompt Engineering`, `Content Writing`, `Social Impact & NGO`, `Digital Marketing`, `Graphic Design`).
   - Work mode and Duration filters.
   - Saved Only filter toggle.
   - Sorting options: `Relevant matches`, `Alphabetical (A-Z)`, `Recently Added / Verified`.
   - Results count display & `Clear all filters` action.
   - Informative empty state for zero-result queries and empty bookmarks.

4. **Linear-Style Opportunity Cards**:
   - Organization badge (`InAmigos Foundation`), category tag, status indicator, duration, work mode, stipend disclosure, and required skills chips.
   - Source indicator (`Source: Internshala`).
   - Card actions: Bookmark shortlist toggle, Share button, `View Details`, and `Apply Now`.
   - Safe external redirection using `target="_blank"` and `rel="noopener noreferrer"`.
   - Safe disabled state for listings without active URLs.

5. **Internship Detail Modal**:
   - Full role overview, detailed responsibilities checklist, eligibility criteria, and required skills.
   - Verification metadata and timestamp.
   - Prominent mandatory warning: `Applications are completed on Internshala. You will leave this website when you apply.`.
   - Sticky `Apply on Internshala` CTA.
   - Deep-linking support via `?role=<id>` query parameter (survives page refresh and enables direct sharing).

6. **Local Bookmarks & Sharing**:
   - Saved opportunities persist in `localStorage` across browser refreshes.
   - Share button uses Web Share API on mobile/modern browsers with automatic clipboard copy fallback and interactive toast confirmation.

7. **How It Works & About Sections**:
   - 3-step structured guidance (`01 — Discover`, `02 — Review`, `03 — Apply`).
   - Independent discovery portal disclaimer.
   - Verified information about InAmigos Foundation (Section 8 NGO, Bilaspur, CG) and its welfare projects (`Bachpanshala`, `Seva`, `Udaan`, `Vikas`, `Prakriti`).
   - Verified links to the official website (`https://inamigosfoundation.org.in/`) and Internshala.

8. **Footer & Disclaimers**:
   - Brand wordmark, quick links, verified source destinations, and mandatory disclaimer.

---

## 4. Project Structure

```
InAmigos web/
├── .planning/                  # GSD Core planning artifacts
│   ├── config.json             # Workflow preferences
│   ├── PROJECT.md              # Vision, scope, and principles
│   ├── REQUIREMENTS.md         # Requirements specification
│   ├── ROADMAP.md              # 5-phase roadmap
│   ├── STATE.md                # Project status & decision log
│   ├── research/RESEARCH.md    # Verified entity & platform research
│   └── phases/                 # Phase plans and summaries
├── public/
│   └── favicon.svg             # Clean custom brand SVG favicon
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── AboutSection.tsx
│   │   ├── EmptyState.tsx
│   │   ├── FilterBar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── InternshipCard.tsx
│   │   ├── InternshipDetailModal.tsx
│   │   ├── Navbar.tsx
│   │   ├── SearchBar.tsx
│   │   └── Toast.tsx
│   ├── data/
│   │   └── internships.ts      # Centralized verified InAmigos listings
│   ├── hooks/
│   │   └── useBookmarks.ts     # LocalStorage bookmarks hook
│   ├── types/
│   │   └── internship.ts       # Strict TypeScript interfaces
│   ├── utils/
│   │   ├── filterInternships.ts # Search, filter, and sorting logic
│   │   └── storage.ts          # Storage and sharing utilities
│   ├── App.tsx                 # Main application container
│   ├── index.css               # Design system tokens and styles
│   └── main.tsx                # Application root
├── index.html                  # SEO metadata, Open Graph, fonts
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 5. Local Development & Build

### Prerequisites
- Node.js (v18+ recommended, tested on v24)
- npm (v9+ recommended, tested on v11)

### Installation
```bash
npm install
```

### Run Locally (Dev Server)
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```
Generates optimized static assets in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 6. Deployment Guide

The production bundle consists entirely of static assets (`HTML`, `JS`, `CSS`, `SVG`) and can be deployed instantly to any modern static hosting platform:

### Deploy to Vercel
```bash
npx vercel
```
*Build Command:* `npm run build`  
*Output Directory:* `dist`

### Deploy to Netlify
```bash
npx netlify deploy --prod --dir=dist
```
*Build Command:* `npm run build`  
*Publish Directory:* `dist`

### Deploy to GitHub Pages
Add a GitHub Actions workflow that runs `npm run build` and deploys the `dist` folder to GitHub Pages.

---

## 7. Verified Sourcing & External Destinations

- **InAmigos Foundation Official Website**: `https://inamigosfoundation.org.in/`
- **Internshala Platform**: `https://internshala.com`
- **InAmigos Internshala Hub**: `https://internshala.com/internships/inamigos-foundation-internships/`
