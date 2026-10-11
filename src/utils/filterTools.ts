import type { AITool, FilterState } from '../types/tool';
import { scoreAndRankTools } from './searchEngine';

export function filterAndSortTools(
  tools: AITool[],
  filters: FilterState,
  favoriteIds: string[]
): AITool[] {
  const query = filters.searchQuery.trim();

  // 1. If searching, apply intent-aware relevance scoring and ranking first
  let candidates: AITool[] = query ? scoreAndRankTools(tools, query) : [...tools];

  // 2. Filter across categorical and user constraints
  const filtered = candidates.filter((tool) => {
    // Only favorites filter
    if (filters.onlyFavorites && !favoriteIds.includes(tool.id)) {
      return false;
    }

    // Category filter
    if (filters.category && filters.category !== 'All Categories' && tool.category !== filters.category) {
      return false;
    }

    // Pricing Type filter
    if (filters.pricingType && filters.pricingType !== 'All Pricing' && tool.pricingType !== filters.pricingType) {
      return false;
    }

    // Curated Collection filter
    if (filters.collection && filters.collection !== 'all') {
      if (!tool.collections.includes(filters.collection)) {
        return false;
      }
    }

    return true;
  });

  // 3. Sorting
  // If the user explicitly picked Alphabetical or Recently Verified, honor that choice
  if (filters.sortBy === 'name-asc') {
    return filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (filters.sortBy === 'recently-verified') {
    return filtered.sort(
      (a, b) => new Date(b.lastVerifiedAt).getTime() - new Date(a.lastVerifiedAt).getTime()
    );
  }

  // Default 'featured' sorting:
  // When there is an active search query, preserve the relevance-scored order from scoreAndRankTools!
  if (query) {
    return filtered;
  }

  // Without a search query, show featured tools first, then alphabetical
  return filtered.sort((a, b) => {
    if (a.isFeatured && !b.isFeatured) return -1;
    if (!a.isFeatured && b.isFeatured) return 1;
    return a.name.localeCompare(b.name);
  });
}
