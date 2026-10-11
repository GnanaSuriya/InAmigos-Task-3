import type { AITool, FilterState } from '../types/tool';

export function filterAndSortTools(
  tools: AITool[],
  filters: FilterState,
  favoriteIds: string[]
): AITool[] {
  const query = filters.searchQuery.trim().toLowerCase();

  // 1. Filter
  const filtered = tools.filter((tool) => {
    // Only favorites
    if (filters.onlyFavorites && !favoriteIds.includes(tool.id)) {
      return false;
    }

    // Category
    if (filters.category && filters.category !== 'All Categories' && tool.category !== filters.category) {
      return false;
    }

    // Pricing Type
    if (filters.pricingType && filters.pricingType !== 'All Pricing' && tool.pricingType !== filters.pricingType) {
      return false;
    }

    // Curated Collection
    if (filters.collection && filters.collection !== 'all') {
      if (!tool.collections.includes(filters.collection)) {
        return false;
      }
    }

    // Search query
    if (query) {
      const matchName = tool.name.toLowerCase().includes(query);
      const matchDesc = tool.description.toLowerCase().includes(query);
      const matchOverview = tool.overview.toLowerCase().includes(query);
      const matchCategory = tool.category.toLowerCase().includes(query);
      const matchTags = tool.tags.some(t => t.toLowerCase().includes(query));
      const matchUseCases = tool.useCases.some(u => u.toLowerCase().includes(query));

      if (!matchName && !matchDesc && !matchOverview && !matchCategory && !matchTags && !matchUseCases) {
        return false;
      }
    }

    return true;
  });

  // 2. Sort
  return filtered.sort((a, b) => {
    if (filters.sortBy === 'name-asc') {
      return a.name.localeCompare(b.name);
    }

    if (filters.sortBy === 'recently-verified') {
      return new Date(b.lastVerifiedAt).getTime() - new Date(a.lastVerifiedAt).getTime();
    }

    // Query relevance weighting if searching
    if (query) {
      const aNameMatch = a.name.toLowerCase().includes(query) ? 4 : 0;
      const bNameMatch = b.name.toLowerCase().includes(query) ? 4 : 0;
      const aTagMatch = a.tags.some(t => t.toLowerCase().includes(query)) ? 2 : 0;
      const bTagMatch = b.tags.some(t => t.toLowerCase().includes(query)) ? 2 : 0;

      const aScore = aNameMatch + aTagMatch;
      const bScore = bNameMatch + bTagMatch;

      if (bScore !== aScore) {
        return bScore - aScore;
      }
    }

    // Default: 'featured'
    if (a.isFeatured && !b.isFeatured) return -1;
    if (!a.isFeatured && b.isFeatured) return 1;
    return a.name.localeCompare(b.name);
  });
}
