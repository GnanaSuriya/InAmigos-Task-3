import { AI_TOOLS } from '../src/data/tools.ts';
import { filterAndSortTools } from '../src/utils/filterTools.ts';
import { scoreAndRankTools, preprocessQuery } from '../src/utils/searchEngine.ts';
import type { FilterState } from '../src/types/tool.ts';

const defaultFilters: FilterState = {
  searchQuery: '',
  category: 'All Categories',
  pricingType: 'All Pricing',
  collection: 'all',
  onlyFavorites: false,
  sortBy: 'featured',
};

function runQuery(query: string, category = 'All Categories') {
  const filters: FilterState = {
    ...defaultFilters,
    searchQuery: query,
    category,
  };
  return filterAndSortTools(AI_TOOLS, filters, []);
}

console.log('🧪 Starting Intent-Aware Smart Search Test Suite...\n');

let failed = 0;
let passed = 0;

function assert(condition: boolean, testName: string, details?: string) {
  if (condition) {
    console.log(`✅ PASS: ${testName}`);
    passed++;
  } else {
    console.error(`❌ FAIL: ${testName}`);
    if (details) console.error(`   Details: ${details}`);
    failed++;
  }
}

// -------------------------------------------------------------
// Test 1: "best AI for research"
// -------------------------------------------------------------
const res1 = runQuery('best AI for research');
const top1Ids = res1.slice(0, 3).map((t) => t.id);
assert(
  res1.length > 0 && (top1Ids.includes('notebooklm') || top1Ids.includes('elicit') || top1Ids.includes('perplexity')),
  'Query: "best AI for research"',
  `Top 3 results: ${top1Ids.join(', ')} (expected notebooklm, elicit, or perplexity in top 3)`
);

// -------------------------------------------------------------
// Test 2: "research"
// -------------------------------------------------------------
const res2 = runQuery('research');
const top2Ids = res2.slice(0, 3).map((t) => t.id);
assert(
  res2.length > 0 && (top2Ids.includes('notebooklm') || top2Ids.includes('elicit') || top2Ids.includes('perplexity')),
  'Query: "research"',
  `Top 3 results: ${top2Ids.join(', ')}`
);

// -------------------------------------------------------------
// Test 3: "help me study"
// -------------------------------------------------------------
const res3 = runQuery('help me study');
const top3Ids = res3.slice(0, 3).map((t) => t.id);
assert(
  res3.length > 0 && (top3Ids.includes('notebooklm') || top3Ids.includes('elicit') || top3Ids.includes('perplexity')),
  'Query: "help me study"',
  `Top 3 results: ${top3Ids.join(', ')}`
);

// -------------------------------------------------------------
// Test 4: "best AI for coding"
// -------------------------------------------------------------
const res4 = runQuery('best AI for coding');
const top4Ids = res4.slice(0, 4).map((t) => t.id);
assert(
  res4.length > 0 &&
  (top4Ids.includes('cursor') || top4Ids.includes('github-copilot') || top4Ids.includes('replit') || top4Ids.includes('codeium')),
  'Query: "best AI for coding"',
  `Top 4 results: ${top4Ids.join(', ')} (expected coding tools)`
);

// -------------------------------------------------------------
// Test 5: "make a presentation" & "make presentations using AI"
// -------------------------------------------------------------
const res5a = runQuery('make a presentation');
const top5aIds = res5a.slice(0, 2).map((t) => t.id);
assert(
  res5a.length > 0 && (top5aIds.includes('gamma') || top5aIds.includes('canva-magic')),
  'Query: "make a presentation"',
  `Top 2 results: ${top5aIds.join(', ')} (expected gamma or canva-magic)`
);

const res5b = runQuery('make presentations using AI');
const top5bIds = res5b.slice(0, 2).map((t) => t.id);
assert(
  res5b.length > 0 && (top5bIds.includes('gamma') || top5bIds.includes('canva-magic')),
  'Query: "make presentations using AI"',
  `Top 2 results: ${top5bIds.join(', ')}`
);

// -------------------------------------------------------------
// Test 6: "generate images"
// -------------------------------------------------------------
const res6 = runQuery('generate images');
const top6Ids = res6.slice(0, 4).map((t) => t.id);
assert(
  res6.length > 0 &&
  (top6Ids.includes('midjourney') || top6Ids.includes('adobe-firefly') || top6Ids.includes('canva-magic') || top6Ids.includes('ideogram')),
  'Query: "generate images"',
  `Top 4 results: ${top6Ids.join(', ')} (expected image generation tools)`
);

// -------------------------------------------------------------
// Test 7: "free AI tools for students"
// -------------------------------------------------------------
const res7 = runQuery('free AI tools for students');
const top7Ids = res7.slice(0, 4).map((t) => t.id);
// Verified free tools like NotebookLM or Hugging Face must be near the top, and paid-only tools must not dominate
const notebookLmPos = res7.findIndex((t) => t.id === 'notebooklm');
assert(
  res7.length > 0 && notebookLmPos >= 0 && notebookLmPos < 3,
  'Query: "free AI tools for students"',
  `NotebookLM rank: ${notebookLmPos}, Top results: ${top7Ids.join(', ')}`
);

// -------------------------------------------------------------
// Test 8: "summarize PDFs" & "summarize long PDFs"
// -------------------------------------------------------------
const res8 = runQuery('summarize PDFs');
const top8Ids = res8.slice(0, 4).map((t) => t.id);
assert(
  res8.length > 0 &&
  (top8Ids.includes('notebooklm') || top8Ids.includes('claude') || top8Ids.includes('elicit') || top8Ids.includes('chatgpt')),
  'Query: "summarize PDFs"',
  `Top 4 results: ${top8Ids.join(', ')}`
);

// -------------------------------------------------------------
// Test 9: Unrelated query produces helpful empty state
// -------------------------------------------------------------
const res9 = runQuery('buy cheap car insurance');
assert(
  res9.length === 0,
  'Query: "buy cheap car insurance" (unrelated query produces 0 results)',
  `Results returned: ${res9.length}`
);

// -------------------------------------------------------------
// Test 10: "AI to build websites"
// -------------------------------------------------------------
const res10 = runQuery('AI to build websites');
const top10Ids = res10.slice(0, 4).map((t) => t.id);
assert(
  res10.length > 0 &&
  (top10Ids.includes('v0') || top10Ids.includes('lovable') || top10Ids.includes('replit') || top10Ids.includes('cursor')),
  'Query: "AI to build websites"',
  `Top 4 results: ${top10Ids.join(', ')} (expected web/UI builders)`
);

// -------------------------------------------------------------
// Test 11: Category filter compatibility with search
// -------------------------------------------------------------
const res11Coding = runQuery('best AI for coding', 'Coding & Development');
assert(
  res11Coding.length > 0 && res11Coding.every((t) => t.category === 'Coding & Development'),
  'Search combined with Category filter ("Coding & Development")',
  `Returned ${res11Coding.length} items, all matching category`
);

const res11Mismatch = runQuery('best AI for coding', 'Writing & Content');
assert(
  res11Mismatch.length === 0,
  'Search combined with incompatible Category filter returns 0 results cleanly',
  `Returned ${res11Mismatch.length} items`
);

// -------------------------------------------------------------
// Test 12: Match reason explanation generation
// -------------------------------------------------------------
const res12 = runQuery('best AI for research');
const firstMatch = res12[0];
assert(
  Boolean(firstMatch && firstMatch.matchReason && firstMatch.matchReason.length > 0),
  'Match explanation badge generation',
  `First match: ${firstMatch?.name}, reason: "${firstMatch?.matchReason}"`
);

console.log(`\n========================================`);
console.log(`Test Results: ${passed} Passed, ${failed} Failed`);
console.log(`========================================\n`);

if (failed > 0) {
  process.exit(1);
} else {
  console.log('🎉 All Intent-Aware Smart Search benchmarks passed successfully!');
}
