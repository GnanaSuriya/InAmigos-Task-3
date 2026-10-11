# InAmigos Internships — AI-Powered Internship Discovery Website

## Product Overview
**InAmigos Internships** is a focused, refined, and production-quality internship discovery portal that displays solely and strictly internship opportunities offered by **InAmigos Foundation** (a registered Section 8 NGO based in Bilaspur, Chhattisgarh, India).

The website serves as an intuitive discovery, filtering, and review layer that redirects applicants to official listing application destinations (principally Internshala). It does not falsify applications, fabricate opportunities, or impersonate an official operational wing of the foundation.

## Core Directives & Guardrails
1. **Strict Organization Scope**: Only display internships verified for InAmigos Foundation. No unrelated company listings.
2. **Honest Application Redirection**: Applications take place on the original Internshala listing. No fake internal submission forms.
3. **Data Authenticity**: All listings, categories, stipends, and URLs must be grounded in verified reality. If a specific application link or attribute is unavailable, state clearly rather than inventing placeholder URLs.
4. **Design Aesthetic**: Linear-style visual clarity, warm off-white background, deep navy typography, restrained violet accent, soft lavender highlights, subtle shadows, modern typography, zero generic clutter or aggressive AI tropes.
5. **Full Functional Suite**: Search, category filters, duration/mode filters, sorting, local bookmarking (localStorage), Web Share API / clipboard fallback, detail drawer/page, accessible UI, and mobile navigation.

## Target Audience
Students, undergraduates, and early-career individuals in India seeking practical experience, volunteer internships, technical training, and social work exposure at InAmigos Foundation.

## Technology Stack
- **Framework**: React 19 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS Variables (warm off-white `#FAFAF9`, navy `#0F172A`, violet `#6D28D9`, lavender `#F5F3FF`)
- **Icons**: Lucide React
- **Client Storage**: LocalStorage for saved/shortlisted internships
- **Deployment**: Static build output (Vite `dist`) compatible with Vercel/Netlify/GitHub Pages
