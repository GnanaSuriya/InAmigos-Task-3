# Phase 11 Plan: Intent-Aware Smart Search & Natural Query Engine

## Objective
Upgrade the search engine from simple literal substring matching to an intent-aware, client-side semantic-style search system that understands natural-language task descriptions, handles synonyms, recognizes task intents, and ranks tools by weighted relevance without requiring external AI APIs or backend servers.

## Problem Statement
Currently, searching for "research" matches research tools, but natural-language queries like "best AI for research" return 0 results because no tool literally contains the phrase "best ai for research".

## Scope & Tasks
1. **Data Model Enrichment (`src/types/tool.ts` & `src/data/tools.ts`)**:
   - Add optional `capabilities?: string[]` and `searchKeywords?: string[]` to `AITool`.
   - Add transient `matchReason?: string` and `matchScore?: number` to `AITool` in search results.
   - Populate all 33 tools with verified, factual capabilities and domain search keywords.
2. **Intent Engine & Preprocessing (`src/utils/searchEngine.ts`)**:
   - Normalization: lowercase, trim, strip non-alphanumeric punctuation, collapse whitespace.
   - Tokenization and stop-word filtering (removing noise words like "best", "the", "for", "me", "using", "to", "ai", "tools" while preserving intent terms like "free", "coding", "research", "pdf", "students", "images").
   - Intent classifier: detect high-level intent (Research, Study/Students, Coding/Websites, Presentations/Slides, Images/Design, Video, Audio, Writing/Essays, PDF Summarization, Free pricing).
   - Weighted scoring:
     - Exact name / slug match (+120)
     - Name tokens (+40 per token)
     - Category match (+50)
     - Capabilities match (+35 each)
     - Use cases match (+30 each)
     - Search keywords / synonyms (+25 each)
     - Tags (+20 each)
     - Description / Overview token matches (+8 / +6)
     - Domain Intent alignment boost (+60 to +90)
     - Pricing alignment: "free" query awards +45 to Free, +25 to Freemium, -40 to Paid-only.
     - Dynamic `matchReason` generator for transparent explainability.
3. **Integration with Directory (`src/utils/filterTools.ts`)**:
   - Replace primitive substring search with `searchAndScoreTools`.
   - Preserve category, pricing tier, curated collection, and favorites filtering.
   - When no search query is present, maintain featured/alphabetical/recent sorting.
4. **UI Match Explanations & Empty State (`ToolCard.tsx`, `EmptyState.tsx`, `App.tsx`)**:
   - Display match reason badge on tool cards when matching search intent.
   - In `EmptyState.tsx`, display query suggestions with clickable chips for zero-result queries.
5. **Testing & Verification**:
   - Build automated benchmark test suite `scripts/test-search.mjs` verifying the 9 required test queries:
     1. "best AI for research"
     2. "research"
     3. "help me study"
     4. "best AI for coding"
     5. "make a presentation"
     6. "generate images"
     7. "free AI tools for students"
     8. "summarize PDFs"
     9. Unrelated query ("buy cheap car insurance") yielding empty state.
   - Run `npm run validate:tools` and `npm run build`.
   - Verify in browser via browser subagent.
