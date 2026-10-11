# Phase 6 Plan: Tool Detail Modal & External Navigation

## Objective
Implement tool presentation cards and an accessible detail modal with verified canonical external link navigation.

## Scope & Tasks
1. Implement `src/components/ToolCard.tsx`:
   - Dark card styling with subtle borders and hover glow.
   - Branded category badge and verified pricing badge.
   - Tool description and feature tags.
   - Direct "Visit Tool" external link button with `target="_blank"` and `rel="noopener noreferrer"`.
   - Bookmark toggle button and "Details" modal opener.
2. Implement `src/components/ToolDetailModal.tsx`:
   - Query parameter deep-linking (`?tool=<slug>`) surviving page refreshes.
   - Comprehensive tool details: verified features checklist, primary use cases, pricing details and verified sources, verification timestamp.
   - Official canonical URL navigation button.
   - Keyboard accessible navigation (`Escape` to close, backdrop dismiss, focus trap).
   - Related tools recommendation carousel.
