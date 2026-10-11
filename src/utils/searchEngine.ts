import type { AITool, ToolCategory } from '../types/tool';

// Common stop words and generic fillers that do not convey task intent
const STOP_WORDS = new Set([
  'the', 'a', 'an', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
  'have', 'has', 'had', 'do', 'does', 'did', 'to', 'of', 'in', 'for',
  'on', 'by', 'at', 'with', 'about', 'from', 'into', 'through', 'and',
  'or', 'so', 'me', 'my', 'i', 'we', 'you', 'your', 'it', 'its', 'them',
  'they', 'what', 'which', 'who', 'when', 'where', 'why', 'how', 'all',
  'any', 'some', 'this', 'that', 'these', 'those'
]);

// Generic query modifiers (filtered out when substantive terms exist)
const FILLER_MODIFIERS = new Set([
  'best', 'top', 'good', 'great', 'tool', 'tools', 'ai', 'app', 'apps',
  'software', 'platform', 'help', 'using', 'use', 'find', 'looking',
  'want', 'need', 'give', 'recommend', 'suggest', 'show'
]);

export interface IntentDefinition {
  id: string;
  label: string;
  keywords: string[];
  boostCategories: ToolCategory[];
  targetToolIds?: string[];
  pricingPreference?: 'Free' | 'Freemium';
}

export const SEARCH_INTENTS: IntentDefinition[] = [
  {
    id: 'research',
    label: 'Academic Research & Citations',
    keywords: [
      'research', 'researching', 'researcher', 'academic', 'academics',
      'paper', 'papers', 'literature', 'literature review', 'citation',
      'citations', 'sources', 'source', 'scientific', 'journals',
      'fact check', 'grounding', 'research assistant', 'topic research'
    ],
    boostCategories: ['Research & Education'],
    targetToolIds: ['notebooklm', 'elicit', 'perplexity', 'gemini']
  },
  {
    id: 'study',
    label: 'Student Learning & Study Assistance',
    keywords: [
      'study', 'studying', 'student', 'students', 'learning', 'learn',
      'homework', 'assignment', 'assignments', 'notes', 'flashcards',
      'exam', 'exams', 'course', 'university', 'college', 'school',
      'study assistant', 'help me study'
    ],
    boostCategories: ['Research & Education', 'AI Assistants'],
    targetToolIds: ['notebooklm', 'elicit', 'perplexity', 'chatgpt', 'gemini']
  },
  {
    id: 'coding',
    label: 'AI Code Editor & Software Development',
    keywords: [
      'coding', 'code', 'programming', 'programmer', 'developer',
      'software development', 'debugging', 'debug', 'refactoring',
      'terminal', 'ide', 'codebase', 'repository', 'github', 'fullstack',
      'frontend', 'backend', 'syntax', 'autocomplete'
    ],
    boostCategories: ['Coding & Development'],
    targetToolIds: ['cursor', 'github-copilot', 'replit', 'lovable', 'v0', 'tabnine', 'codeium']
  },
  {
    id: 'websites',
    label: 'Web App & UI Builder',
    keywords: [
      'build websites', 'build website', 'make websites', 'make website',
      'website builder', 'web app', 'landing page', 'ui builder',
      'prototype web', 'frontend builder', 'react builder', 'app builder'
    ],
    boostCategories: ['Coding & Development'],
    targetToolIds: ['v0', 'lovable', 'replit', 'cursor']
  },
  {
    id: 'presentations',
    label: 'AI Presentations & Slide Decks',
    keywords: [
      'presentation', 'presentations', 'presentation using ai',
      'make presentations', 'make a presentation', 'make presentation',
      'slides', 'slide', 'deck', 'decks', 'pitch deck', 'pitch decks',
      'powerpoint', 'keynote', 'slideshow'
    ],
    boostCategories: ['Writing & Content', 'Image Generation & Design'],
    targetToolIds: ['gamma', 'canva-magic']
  },
  {
    id: 'pdf-summary',
    label: 'PDF & Document Summarization',
    keywords: [
      'summarize pdfs', 'summarize pdf', 'summarize long pdfs',
      'pdf summary', 'summarize documents', 'summarize papers',
      'extract pdf', 'read pdf', 'pdf analysis', 'summarize',
      'summary', 'summarizing', 'tldr', 'pdf'
    ],
    boostCategories: ['Research & Education', 'AI Assistants'],
    targetToolIds: ['notebooklm', 'elicit', 'claude', 'chatgpt']
  },
  {
    id: 'images',
    label: 'AI Image Generation & Visual Artwork',
    keywords: [
      'generate images', 'generate image', 'image generation',
      'create images', 'make images', 'pictures', 'photos',
      'digital art', 'illustration', 'draw', 'photorealistic',
      'artwork', 'graphic design', 'image', 'images'
    ],
    boostCategories: ['Image Generation & Design'],
    targetToolIds: ['midjourney', 'adobe-firefly', 'canva-magic', 'ideogram', 'leonardo-ai']
  },
  {
    id: 'video',
    label: 'AI Video & Motion Generation',
    keywords: [
      'video generation', 'generate video', 'make video', 'create video',
      'animation', 'motion', 'cinematic', 'filmmaking', 'footage',
      'video clips', 'video', 'videos'
    ],
    boostCategories: ['Video & Animation'],
    targetToolIds: ['runway', 'luma-dream', 'pika']
  },
  {
    id: 'audio-music',
    label: 'Audio, Music & Voice Generation',
    keywords: [
      'audio', 'music', 'generate music', 'make music', 'songs',
      'voice generation', 'voice cloning', 'text to speech', 'tts',
      'voiceover', 'speech synthesis', 'sound effects'
    ],
    boostCategories: ['Audio & Music'],
    targetToolIds: ['elevenlabs', 'suno', 'udio']
  },
  {
    id: 'writing',
    label: 'Writing & Essay Refinement',
    keywords: [
      'writing assignments', 'writing assignment', 'writing', 'write essay',
      'essay', 'essays', 'grammar', 'proofread', 'proofreading',
      'copywriting', 'blog writing', 'content drafting', 'rewriting',
      'write', 'writer'
    ],
    boostCategories: ['Writing & Content', 'AI Assistants'],
    targetToolIds: ['grammarly', 'claude', 'chatgpt', 'deepl']
  },
  {
    id: 'student-free',
    label: 'Free for Students & Education',
    keywords: [
      'free ai tools for students', 'free for students', 'free student tools',
      'student free', 'free ai tools', 'free tools for students'
    ],
    boostCategories: ['Research & Education', 'AI Assistants', 'Coding & Development'],
    targetToolIds: ['notebooklm', 'huggingface', 'perplexity', 'gemini', 'chatgpt'],
    pricingPreference: 'Free'
  }
];

export interface PreprocessedQuery {
  raw: string;
  normalized: string;
  tokens: string[];
  intents: IntentDefinition[];
  hasFreeIntent: boolean;
  hasStudentIntent: boolean;
}

/**
 * Robust word boundary token matching helper.
 * Prevents false sub-word matches (e.g. 'car' matching 'card', or 'art' matching 'start').
 */
function matchTokenInText(text: string, token: string): boolean {
  if (!text || !token) return false;
  const normalizedText = text.toLowerCase();
  const normalizedToken = token.toLowerCase();

  // If exact match
  if (normalizedText === normalizedToken) return true;

  // Stem trailing 's' for simple singular/plural parity
  const baseToken = normalizedToken.endsWith('s') && normalizedToken.length > 3
    ? normalizedToken.slice(0, -1)
    : normalizedToken;

  const escaped = baseToken.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  if (baseToken.length <= 3) {
    // Strict boundary for short tokens: must be surrounded by non-alphanumeric chars or boundaries
    const regex = new RegExp(`(^|[^a-z0-9])${escaped}s?([^a-z0-9]|$)`, 'i');
    return regex.test(normalizedText);
  }

  // For longer tokens, match word boundaries or word beginnings
  const regex = new RegExp(`(^|[^a-z0-9])${escaped}`, 'i');
  return regex.test(normalizedText);
}

/**
 * Preprocess and normalize natural-language search query.
 */
export function preprocessQuery(rawQuery: string): PreprocessedQuery {
  const raw = rawQuery.trim();
  const normalized = raw
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const allWords = normalized.split(' ').filter(Boolean);

  // Filter out stop words
  const nonStopWords = allWords.filter((w) => !STOP_WORDS.has(w));

  // Filter out generic filler words if substantive terms exist
  const substantive = nonStopWords.filter((w) => !FILLER_MODIFIERS.has(w));

  const tokens = substantive.length > 0
    ? substantive
    : nonStopWords.length > 0
    ? nonStopWords
    : allWords;

  // Match high-level intents
  const matchedIntents: IntentDefinition[] = [];
  for (const intent of SEARCH_INTENTS) {
    const isMatched = intent.keywords.some((kw) => {
      // Check full keyword phrase or individual token inclusion
      if (normalized.includes(kw)) return true;
      if (kw.includes(' ') && kw.split(' ').every((k) => normalized.includes(k))) return true;
      return false;
    });

    if (isMatched) {
      matchedIntents.push(intent);
    }
  }

  const hasFreeIntent = normalized.includes('free') || normalized.includes('no cost');
  const hasStudentIntent =
    normalized.includes('student') ||
    normalized.includes('students') ||
    normalized.includes('study') ||
    normalized.includes('studying') ||
    normalized.includes('assignment');

  return {
    raw,
    normalized,
    tokens,
    intents: matchedIntents,
    hasFreeIntent,
    hasStudentIntent,
  };
}

/**
 * Client-side semantic-style relevance scorer and ranker.
 */
export function scoreAndRankTools(tools: AITool[], queryText: string): AITool[] {
  if (!queryText.trim()) {
    return tools.map((t) => ({ ...t, matchReason: undefined, matchScore: undefined }));
  }

  const prep = preprocessQuery(queryText);
  if (!prep.normalized) {
    return tools;
  }

  const scored: Array<{ tool: AITool; score: number; reason?: string }> = [];

  for (const tool of tools) {
    let score = 0;
    const reasons: string[] = [];

    const toolNameLower = tool.name.toLowerCase();
    const toolSlugLower = tool.slug.toLowerCase();
    const toolDescLower = tool.description.toLowerCase();
    const toolOverviewLower = tool.overview.toLowerCase();
    const toolCatLower = tool.category.toLowerCase();
    const toolTagsLower = tool.tags.map((t) => t.toLowerCase());
    const toolUseCasesLower = tool.useCases.map((u) => u.toLowerCase());
    const toolCapabilitiesLower = (tool.capabilities || []).map((c) => c.toLowerCase());
    const toolKeywordsLower = (tool.searchKeywords || []).map((k) => k.toLowerCase());

    // 1. Exact Name / Slug match (Highest priority)
    if (toolNameLower === prep.normalized || toolSlugLower === prep.normalized) {
      score += 150;
      reasons.push('Exact tool name match');
    } else if (matchTokenInText(toolNameLower, prep.normalized)) {
      score += 85;
      reasons.push('Direct name match');
    }

    // 2. High-Level Task Intent Alignment
    for (const intent of prep.intents) {
      if (intent.targetToolIds?.includes(tool.id)) {
        score += 85;
        reasons.push(`Matched intent: ${intent.label}`);
      } else if (intent.boostCategories.includes(tool.category)) {
        score += 50;
        reasons.push(`Matched intent: ${intent.label}`);
      }
    }

    // 3. Pricing Intent Adjustments
    if (prep.hasFreeIntent) {
      if (tool.pricingType === 'Free') {
        score += 50;
        reasons.push('Verified 100% Free');
      } else if (tool.pricingType === 'Freemium') {
        score += 25;
      } else if (tool.pricingType === 'Paid') {
        score -= 60; // Penalize paid-only when user explicitly asked for free
      }
    }

    // 4. Student / Study Intent Adjustments
    if (prep.hasStudentIntent) {
      if (tool.collections.includes('students')) {
        score += 45;
        if (!reasons.some((r) => r.includes('Student') || r.includes('Study'))) {
          reasons.push('Curated for students & academics');
        }
      }
    }

    // 5. Token Matches across Data Model using word-boundary matching
    for (const token of prep.tokens) {
      // Name token
      if (matchTokenInText(toolNameLower, token)) {
        score += 35;
      }

      // Capabilities token match
      if (toolCapabilitiesLower.some((c) => matchTokenInText(c, token))) {
        score += 30;
      }

      // Curated search keywords match
      if (toolKeywordsLower.some((k) => matchTokenInText(k, token))) {
        score += 28;
      }

      // Use cases token match
      if (toolUseCasesLower.some((u) => matchTokenInText(u, token))) {
        score += 24;
      }

      // Category match
      if (matchTokenInText(toolCatLower, token)) {
        score += 25;
      }

      // Tags match
      if (toolTagsLower.some((t) => matchTokenInText(t, token))) {
        score += 18;
      }

      // Description & Overview match
      if (matchTokenInText(toolDescLower, token)) {
        score += 10;
      }
      if (matchTokenInText(toolOverviewLower, token)) {
        score += 6;
      }
    }

    // Full phrase match in description or overview
    if (toolDescLower.includes(prep.normalized)) {
      score += 25;
    }
    if (toolOverviewLower.includes(prep.normalized)) {
      score += 15;
    }

    // Tie-breaker: slight preference for featured tools
    if (tool.isFeatured) {
      score += 2;
    }

    // Inclusion Threshold: must have meaningful score >= 25
    if (score >= 25) {
      scored.push({
        tool: {
          ...tool,
          matchScore: score,
          matchReason: reasons[0] || `Matched: ${tool.category}`,
        },
        score,
        reason: reasons[0],
      });
    }
  }

  // Sort descending by calculated score
  scored.sort((a, b) => b.score - a.score);

  return scored.map((item) => item.tool);
}
