# AI Toolbox — Discover the right AI for every task

> A production-ready, curated discovery directory to explore real, high-quality AI tools across coding, design, writing, research, video, audio, and productivity workflows.

[![Node.js](https://img.shields.io/badge/Node.js-20+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19.0-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-purple.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4.0-cyan.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-lightgrey.svg)](LICENSE)

---

## 1. Product Identity

- **Name**: AI Toolbox
- **Tagline**: *"Discover the right AI for every task."*
- **Product Description**: One curated directory to discover AI tools for coding, design, writing, research, productivity, video, audio, and more.
- **Target Audience**: Students, developers, designers, content creators, and professionals exploring artificial intelligence.
- **Core Mission**: Help users discover useful AI tools, understand what each tool does, compare relevant options, and navigate directly to each tool's genuine official website.
- **Transparency Statement**: AI Toolbox is an independent discovery directory, not an AI model itself. It contains zero fabricated metrics, fake user counts, or affiliate link wrappers.

---

## 2. Visual Design System

AI Toolbox features a bespoke, premium SaaS dark UI engineered for contrast, readability, and modern aesthetics:

| Token | Hex Code | Purpose |
|-------|----------|---------|
| `bg-main` | `#070B12` | Viewport & page root background |
| `bg-secondary` | `#0B1220` | Section backgrounds & navigation chrome |
| `bg-card` | `#101827` | Tool cards & elevated panels |
| `bg-elevated` | `#151F30` | Hover states, modals & search dropdowns |
| `accent-primary` | `#3B82F6` | Primary action buttons & dominant branding |
| `accent-bright` | `#60A5FA` | Hover highlights & secondary accents |
| `accent-cyan` | `#22D3EE` | Glow highlights & active badges |
| `text-primary` | `#F8FAFC` | Primary headings & high-contrast body text |
| `text-secondary` | `#A7B4C8` | Subtitles & card descriptions |
| `text-muted` | `#718096` | Metadata, counts & subtle labels |
| `border-dark` | `#253247` | Crisp card borders & divider lines |

### Custom Brand Assets
- **Original Vector Artwork**: An open geometric toolbox container housing a four-point electric-blue (`#3B82F6`) and cyan (`#22D3EE`) AI sparkle node.
- **Assets Created**:
  - `public/favicon.svg`: Scalable high-contrast browser favicon.
  - `public/assets/logo-icon.svg`: Standalone vector icon.
  - `public/assets/logo-lockup.svg`: Complete wordmark brand lockup.
  - `src/components/Logo.tsx`: Flexible React component with customizable size and lockup variants.

---

## 3. Architecture & Technical Stack

- **Framework**: React 19 + TypeScript + Vite 8
- **Styling**: Tailwind CSS v4 + Vanilla CSS Design Tokens
- **Icons**: Lucide React
- **Client Persistence**: Browser `localStorage` with reactive multi-tab event synchronization
- **Routing**: Deep-linking query parameter architecture (`?tool=<slug>`) with clean SPA rewrites via `vercel.json`
- **Validation**: Standalone Node.js schema and HTTPS URL validation script (`scripts/validate-tools.mjs`)
- **Backend Dependency**: 0 external API keys, 0 secrets, 0 server runtimes required. 100% static client-side execution.

---

## 4. Curated Dataset & Link Verification

The directory ships with **33 verified, real AI tools**, each mapped to its canonical vendor domain:

| Tool | Category | Verified Official URL | Pricing Type |
|------|----------|-----------------------|--------------|
| **ChatGPT** | AI Assistants | `https://chatgpt.com` | Freemium |
| **Claude** | AI Assistants | `https://claude.ai` | Freemium |
| **Google Gemini** | AI Assistants | `https://gemini.google.com` | Freemium |
| **Microsoft Copilot** | AI Assistants | `https://copilot.microsoft.com` | Freemium |
| **Perplexity** | AI Assistants | `https://www.perplexity.ai` | Freemium |
| **GitHub Copilot** | Coding & Development | `https://github.com/features/copilot` | Paid |
| **Cursor** | Coding & Development | `https://www.cursor.com` | Freemium |
| **Replit** | Coding & Development | `https://replit.com` | Freemium |
| **Lovable** | Coding & Development | `https://lovable.dev` | Freemium |
| **v0 by Vercel** | Coding & Development | `https://v0.dev` | Freemium |
| **Tabnine** | Coding & Development | `https://www.tabnine.com` | Freemium |
| **Codeium** | Coding & Development | `https://codeium.com` | Freemium |
| **Midjourney** | Image Generation & Design | `https://www.midjourney.com` | Paid |
| **Adobe Firefly** | Image Generation & Design | `https://www.adobe.com/products/firefly.html` | Freemium |
| **Canva Magic Studio** | Image Generation & Design | `https://www.canva.com/magic-home/` | Freemium |
| **Ideogram** | Image Generation & Design | `https://ideogram.ai` | Freemium |
| **Leonardo AI** | Image Generation & Design | `https://leonardo.ai` | Freemium |
| **Runway** | Video & Animation | `https://runwayml.com` | Freemium |
| **Luma Dream Machine** | Video & Animation | `https://lumalabs.ai/dream-machine` | Freemium |
| **Pika** | Video & Animation | `https://pika.art` | Freemium |
| **ElevenLabs** | Audio & Music | `https://elevenlabs.io` | Freemium |
| **Suno** | Audio & Music | `https://suno.com` | Freemium |
| **Udio** | Audio & Music | `https://www.udio.com` | Freemium |
| **NotebookLM** | Research & Education | `https://notebooklm.google.com` | Free |
| **Elicit** | Research & Education | `https://elicit.com` | Freemium |
| **Gamma** | Writing & Content | `https://gamma.app` | Freemium |
| **Grammarly** | Writing & Content | `https://www.grammarly.com` | Freemium |
| **DeepL** | Writing & Content | `https://www.deepl.com` | Freemium |
| **Zapier Central** | Productivity & Automation | `https://zapier.com` | Freemium |
| **Make** | Productivity & Automation | `https://www.make.com` | Freemium |
| **Notion AI** | Productivity & Automation | `https://www.notion.so/product/ai` | Paid |
| **Julius AI** | Data Analysis | `https://julius.ai` | Freemium |
| **Hugging Face** | Coding & Development | `https://huggingface.co` | Free |

### Automated Link Validation
Run the automated schema and canonical URL audit anytime:
```bash
npm run validate:tools
```
This verifies:
- Unique identifier and slug for every record.
- Non-empty name, description, tags, use cases, and verified feature checklist.
- Absolute HTTPS official vendor URLs (rejects search queries, scrapers, and generic aggregators).
- Data-driven category membership.
- ISO `lastVerifiedAt` timestamps.

---

## 5. Key Features

1. **Header & Navigation**:
   - Original vector logo lockup.
   - Responsive jump links (`Discover`, `Categories`, `Collections`, `About`).
   - Quick search hotkey indicator (`/`).
   - Dynamic saved favorites badge with real-time counter.
   - Mobile slide-out drawer menu.

2. **Homepage Hero**:
   - Atmospheric radial glow with electric accents.
   - Prominent instant search field.
   - Workflow collection shortcuts (Students, Developers, Designers, Free).
   - "Explore Tools" and "Browse Categories" quick actions.

3. **Featured Tools Section**:
   - Dedicated showcase highlighting 6 flagship tools.
   - Starred cards with instant external link and bookmark actions.

4. **Intent-Aware Smart Search, Filters & Sorting**:
   - **Semantic Task Understanding**: Normalizes natural-language queries (e.g., *"best AI for research"*, *"make a presentation"*, *"summarize PDFs"*, *"AI to build websites"*) and matches them against curated tool capabilities and search keywords.
   - **Explainable Match Reasons**: Displays interactive match badges on cards explaining why a tool surfaced (e.g., `Matched intent: Academic Research & Citations`).
   - **Interactive Empty-State Suggestions**: Recommends clickable workflow pills when queries produce 0 results, enabling 1-click recovery.
   - **10 Functional Categories**: AI Assistants, Coding & Development, Writing & Content, Image Generation & Design, Video & Animation, Audio & Music, Research & Education, Productivity & Automation, Business & Marketing, Data Analysis.
   - **Pricing Filter**: Free, Freemium, Paid, Pricing varies (with smart "free" query boosting).
   - **Collections Filter**: Filter by curated workflows.
   - **3 Sorting Modes**: Featured, Alphabetical (A-Z), and Recently Added.
   - **Active Counter & Reset**: "Showing X of Y tools" with one-click "Clear filters".

5. **Tool Detail Modal**:
   - Deep-linked via URL query parameter (`?tool=<slug>`) for sharing and page reload resilience.
   - Complete breakdown: overview, verified capabilities checklist, target use cases, verified pricing disclosure, and last verification date.
   - Safe outbound button: opens canonical vendor site in a new tab with `rel="noopener noreferrer"`.
   - Contextual related tools recommendations.
   - Full keyboard accessibility (`Escape` key, backdrop dismissal, focus containment).

6. **Persistent Favorites**:
   - Star/bookmark any tool directly from cards or modals.
   - Persisted across page refreshes using browser `localStorage`.
   - Filter directory to "Favorites Only" with a single click.
   - Synchronized across open browser tabs via custom storage events.

7. **Curated Collections**:
   - Best AI Tools for Students
   - AI Tools for Developers
   - AI Tools for Designers
   - AI Tools for Content Creators
   - Free and Freemium AI Tools

8. **Honest About Section & Footer**:
   - Clear disclosure of independent directory role.
   - External links disclaimer.
   - Dynamic programmatic copyright year (`new Date().getFullYear()`).

---

## 6. Project Structure

```
InAmigos web/
├── .planning/                  # GSD Core planning artifacts
│   ├── config.json             # GSD workflow configuration
│   ├── PROJECT.md              # Vision, scope, principles
│   ├── REQUIREMENTS.md         # Requirements matrix (FR-01 to FR-10)
│   ├── ROADMAP.md              # 10-phase migration roadmap
│   ├── STATE.md                # Milestone progress & audit
│   ├── research/RESEARCH.md    # 33 verified canonical vendor URLs
│   └── phases/                 # Phase plans and completion summaries
│       ├── 01-foundation/
│       ├── 02-branding/
│       ├── 03-data-validation/
│       ├── 04-discovery-nav/
│       ├── 05-search-filters/
│       ├── 06-tool-detail/
│       ├── 07-favorites/
│       ├── 08-collections-about/
│       ├── 09-verification/
│       └── 10-vercel-deploy/
├── public/
│   ├── favicon.svg             # Scalable brand SVG favicon
│   └── assets/
│       ├── logo-icon.svg       # Standalone logo icon
│       └── logo-lockup.svg     # Wordmark lockup
├── scripts/
│   └── validate-tools.mjs      # Link & schema validation script
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx    # Directory mission & transparency
│   │   ├── CollectionsSection.tsx # 5 curated workflow cards
│   │   ├── EmptyState.tsx      # Zero results & empty bookmarks
│   │   ├── FeaturedTools.tsx   # Top flagship tools grid
│   │   ├── FilterBar.tsx       # Category pills, pricing, sorting
│   │   ├── Footer.tsx          # Sitemap, disclaimers, dynamic year
│   │   ├── Hero.tsx            # Atmospheric dark hero section
│   │   ├── Logo.tsx            # Scalable SVG brand component
│   │   ├── Navbar.tsx          # Responsive navigation & favorites
│   │   ├── SearchBar.tsx       # Search input with live counts
│   │   ├── Toast.tsx           # Interaction feedback alert
│   │   ├── ToolCard.tsx        # Directory tool presentation card
│   │   └── ToolDetailModal.tsx # Deep-linkable tool drawer/modal
│   ├── data/
│   │   └── tools.ts            # 33 verified AI tools dataset
│   ├── hooks/
│   │   └── useFavorites.ts     # LocalStorage state hook
│   ├── types/
│   │   └── tool.ts             # Strict TypeScript types
│   ├── utils/
│   │   ├── filterTools.ts      # Multi-field search & filter engine
│   │   └── storage.ts          # Safe localStorage access helper
│   ├── App.tsx                 # Root application composition
│   ├── index.css               # Design tokens, dark scrollbars
│   └── main.tsx                # React root mount
├── index.html                  # Dark theme SEO head & font imports
├── package.json                # Project dependencies & npm scripts
├── tsconfig.json               # TypeScript configuration
├── vercel.json                 # Vercel SPA routing rewrites
└── vite.config.ts              # Vite bundler configuration
```

---

## 7. Local Development Guide

### Prerequisites
- Node.js 18+ (Node.js 20+ recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd "InAmigos web"

# Install dependencies
npm install
```

### Running Locally
```bash
# Start Vite development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Data & Link Validation
```bash
# Verify all tool links and schema compliance
npm run validate:tools
```

### Intent-Aware Smart Search Test Suite
```bash
# Run automated benchmark test suite for 14 natural-language queries
npm run test:search
```

### Building for Production
```bash
# Compile TypeScript and bundle with Vite
npm run build
```
Production assets are generated in the `dist/` directory.

### Previewing Production Build
```bash
npm run preview
```

---

## 8. Vercel Deployment Instructions

The project is pre-configured for seamless zero-configuration deployment to [Vercel](https://vercel.com).

### Option A: Deploy via Vercel Git Integration (Recommended)

1. **Push your repository** to GitHub, GitLab, or Bitbucket.
2. Log in to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository from the list.
4. Verify the **Project Settings**:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./` (or leave default)
   - **Build Command**: `npm run build` (or `vite build`)
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. **Environment Variables**: None required! The app is completely self-contained.
6. Click **"Deploy"**.
7. Vercel will build and publish your site with SSL in ~30 seconds.

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Authenticate and deploy
vercel

# Deploy to production
vercel --prod
```

### SPA Routing Compatibility
The included [`vercel.json`](file:///c:/Users/New/Downloads/InAmigos%20web/vercel.json) automatically routes all requests to `/index.html`:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```
This ensures that deep links (e.g. `/?tool=cursor`) load cleanly on hard refresh without 404 errors.

---

## 9. Verification & Quality Gates

AI Toolbox has passed all rigorous acceptance criteria:
- **Build**: Compiles cleanly with zero TypeScript errors and zero Vite bundle warnings (`dist/` generated).
- **Dataset**: 33 verified real AI tools with 100% authoritative vendor-owned domains.
- **Link Integrity**: 0 unverified or generic search redirect links.
- **Security**: All outbound links use `rel="noopener noreferrer"`.
- **Accessibility**: Full keyboard accessibility (`Tab`, `Enter`, `/` for search, `Escape` to close modal).
- **Responsive Design**: Tested and verified across desktop, tablet, and mobile (375px) viewports.
- **Console**: 0 runtime errors or unhandled exceptions.

---

## 10. License

Released under the [MIT License](LICENSE).
