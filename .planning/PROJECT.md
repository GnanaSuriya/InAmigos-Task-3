# AI Toolbox — Curated AI Tools Directory

## Product Overview
**AI Toolbox** is a polished, fast, production-ready discovery directory designed to help developers, designers, students, creators, and professionals discover, compare, and navigate directly to authentic, verified AI tools across a wide variety of workflows.

**Tagline**: *"Discover the right AI for every task."*  
**Description**: *"One curated directory to discover AI tools for coding, design, writing, research, productivity, video, audio, and more."*

## Target Audience
- **Developers & Engineers**: Finding modern AI code editors, copilot extensions, full-stack builders, and model hubs.
- **Designers & Creative Directors**: Discovering image generators, canvas augmentations, vector designers, and UI generators.
- **Writers & Content Creators**: Finding grammar assistants, scriptwriters, video synthesizers, and voice generators.
- **Students & Researchers**: Discovering academic paper synthesizers, citation assistants, and intelligent notebooks.
- **Productivity Seekers & Knowledge Workers**: Discovering automated workflow connectors, spreadsheet assistants, and AI notes.

## Core Directives & Principles
1. **Curated & Authentic**: Every listed tool represents a genuine, notable AI software product with a verified official URL (no affiliate links, no search engine redirects, no spam directories).
2. **Direct Navigation**: Clicking "Visit Tool" / "Visit Official Website" opens the tool's genuine official domain in a new tab (`target="_blank"`, `rel="noopener noreferrer"`).
3. **No Fabricated Data**: Accurate pricing models (Free, Freemium, Paid, Commercial Free Trial) verified from vendor disclosures; unknown prices marked explicitly as "Pricing varies". Zero fake user counts, inflated ratings, or fake reviews.
4. **Distinctive Dark UI Design**: Tailored SaaS dark theme (`#070B12`, `#0B1220`, `#101827`, `#151F30`, `#3B82F6`, `#22D3EE`, `#F8FAFC`). No generic templates or flashy gimmicks.
5. **Fast Client-Side Experience**: Instant multi-field search, multi-category filtering, use-case filters, curation collections, custom sorting, deep-linkable tool detail modals (`?tool=<slug>`), and local browser favorites.

## Technical Architecture
- **Framework**: React 19 + Vite 8
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + Custom Dark Theme CSS tokens
- **Icons**: Lucide React
- **Storage**: Browser LocalStorage for persistent user favorites
- **Deployment**: Static build output (`dist/`) ready for Vercel SPA hosting (`vercel.json`)
