import type { Internship, FilterState } from '../types/internship';

export function filterAndSortInternships(
  internships: Internship[],
  filters: FilterState,
  savedIds: string[]
): Internship[] {
  const query = filters.searchQuery.trim().toLowerCase();

  // 1. Filter
  const filtered = internships.filter((item) => {
    // Only bookmarked filter
    if (filters.onlyBookmarked && !savedIds.includes(item.id)) {
      return false;
    }

    // Category filter
    if (filters.category && filters.category !== 'All Roles' && item.category !== filters.category) {
      return false;
    }

    // Work Mode filter
    if (filters.workMode && filters.workMode !== 'All Modes' && item.workMode !== filters.workMode) {
      return false;
    }

    // Duration filter
    if (filters.duration && filters.duration !== 'All Durations' && item.duration !== filters.duration) {
      return false;
    }

    // Search query
    if (query) {
      const matchTitle = item.title.toLowerCase().includes(query);
      const matchShortDesc = item.shortDescription.toLowerCase().includes(query);
      const matchOverview = item.overview.toLowerCase().includes(query);
      const matchCategory = item.category.toLowerCase().includes(query);
      const matchSkills = item.skills.some(skill => skill.toLowerCase().includes(query));

      if (!matchTitle && !matchShortDesc && !matchOverview && !matchCategory && !matchSkills) {
        return false;
      }
    }

    return true;
  });

  // 2. Sort
  return filtered.sort((a, b) => {
    if (filters.sortBy === 'title-asc') {
      return a.title.localeCompare(b.title);
    }

    if (filters.sortBy === 'recently-verified') {
      return new Date(b.lastVerifiedAt).getTime() - new Date(a.lastVerifiedAt).getTime();
    }

    // Default 'relevance'
    if (query) {
      // Prioritize exact or start matches in title
      const aTitleMatch = a.title.toLowerCase().includes(query) ? 3 : 0;
      const bTitleMatch = b.title.toLowerCase().includes(query) ? 3 : 0;
      const aSkillMatch = a.skills.some(s => s.toLowerCase().includes(query)) ? 2 : 0;
      const bSkillMatch = b.skills.some(s => s.toLowerCase().includes(query)) ? 2 : 0;

      const aScore = aTitleMatch + aSkillMatch;
      const bScore = bTitleMatch + bSkillMatch;

      if (bScore !== aScore) {
        return bScore - aScore;
      }
    }

    // Fallback: featured items first, then alphabetical
    if (a.isFeatured && !b.isFeatured) return -1;
    if (!a.isFeatured && b.isFeatured) return 1;
    return a.title.localeCompare(b.title);
  });
}
