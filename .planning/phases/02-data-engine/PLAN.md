# Phase 2 Plan: Centralized Internship Data Engine & Models

## Objective
Implement strict TypeScript types, a centralized dataset of verified InAmigos Foundation opportunities on Internshala, and local bookmark/shortlist storage utilities.

## Requirements Checklist
- [x] Schema with: `id`, `title`, `organization`, `category`, `description`, `responsibilities`, `skills`, `eligibility`, `duration`, `workMode`, `stipend`, `deadline`, `status`, `sourceUrl`, `applicationUrl`, `lastVerifiedAt`.
- [x] Exclusively InAmigos Foundation opportunities (zero unrelated organizations).
- [x] Verified listing attributes: 2 weeks, remote/WFH, unpaid (certificate & LOR provided), real verified Internshala URLs or safe fallback.
- [x] Storage utility for local bookmarks (`getSavedInternships`, `toggleSavedInternship`, `isInternshipSaved`).
- [x] Filter and search query helper.
