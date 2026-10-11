# Phase 9 Plan: SEO, Performance & Production Verification

## Objective
Validate the production build, schema/link verification script, accessibility, responsive viewports, and interactive features via automated browser testing.

## Scope & Tasks
1. Execute `npm run validate:tools` to verify data schema and 100% canonical HTTPS vendor URLs.
2. Execute `npm run build` (`tsc -b && vite build`) to verify clean compilation with zero warnings or errors.
3. Run automated browser agent to verify:
   - Initial page load, dark styling, and typography.
   - Live search (e.g., query "cursor").
   - Category filtering (e.g., "Coding & Development") and results count updates.
   - Clear filters functionality.
   - Favorites bookmarking and counter increments.
   - Deep-linked modal opening with verified external link CTA.
   - Responsive mobile rendering (375px viewport).
   - Clean browser console without errors.
