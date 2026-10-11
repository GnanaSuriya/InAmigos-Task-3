# Phase 3 Plan: Verified AI Tools Dataset & Link Validation

## Objective
Assemble a verified dataset of 30+ real AI tools with canonical official vendor URLs and implement an automated schema and URL validation test suite.

## Scope & Tasks
1. Define strict TypeScript interfaces in `src/types/tool.ts` (`AITool`, `Category`, `PricingType`, `CuratedCollection`).
2. Curate 33 well-known AI tools in `src/data/tools.ts` with accurate factual descriptions, categories, pricing, features, and verified official URLs.
3. Build standalone Node validation script `scripts/validate-tools.mjs` to enforce:
   - Unique tool IDs and slugs.
   - Absolute HTTPS vendor URLs (no search queries or aggregator links).
   - Valid non-empty categories, names, and descriptions.
   - ISO `lastVerifiedAt` timestamps.
4. Add npm script `validate:tools` to `package.json`.
5. Run and verify that all 33 tools pass validation with 0 errors.
