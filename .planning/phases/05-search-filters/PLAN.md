# Phase 5 Plan: Search, Categories, Filters & Sorting

## Objective
Implement client-side search across multiple fields, functional category filtering, pricing filters, collection filters, and sorting.

## Scope & Tasks
1. Implement `src/utils/filterTools.ts`:
   - Full-text search across `name`, `description`, `category`, `tags`, and `useCases`.
   - Category filtering (matching 10 data-driven categories).
   - Pricing tier filtering (`Free`, `Freemium`, `Paid`, `Pricing varies`).
   - Collection filtering (matching curated collection tool IDs).
   - Favorites filtering (`onlyFavorites`).
   - Sorting options: `featured` (curated top), `name` (A-Z), `recent` (last verified date).
2. Implement `src/components/SearchBar.tsx`:
   - Interactive search input with clear icon and result counts.
3. Implement `src/components/FilterBar.tsx`:
   - Category pills with count badges.
   - Pricing filter dropdown, collection filter dropdown, and sort selector.
   - Active filters count and "Clear filters" button.
4. Implement `src/components/EmptyState.tsx`:
   - Polished empty state with contextual messages for zero search results and empty favorites.
