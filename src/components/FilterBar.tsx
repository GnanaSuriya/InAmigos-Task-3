import { ArrowUpDown, Bookmark, RotateCcw } from 'lucide-react';
import type { FilterState, SortOption } from '../types/internship';
import { CATEGORIES, DURATIONS, WORK_MODES } from '../data/internships';

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: (updates: Partial<FilterState>) => void;
  onResetFilters: () => void;
  resultsCount: number;
  totalCount: number;
  savedCount: number;
  hasActiveFilters: boolean;
}

export const FilterBar = ({
  filters,
  onFilterChange,
  onResetFilters,
  resultsCount,
  totalCount,
  savedCount,
  hasActiveFilters,
}: FilterBarProps) => {
  return (
    <div className="flex flex-col gap-5 bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs">
      {/* Top Row: Category Pills Scrollable */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const isSelected = filters.category === cat;
          return (
            <button
              key={cat}
              onClick={() => onFilterChange({ category: cat })}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                isSelected
                  ? 'bg-purple-700 text-white font-semibold shadow-2xs'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/60'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Middle Row: Detailed Selectors & Sort */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3 border-t border-slate-100 text-xs">
        {/* Work Mode */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Work Arrangement
          </label>
          <select
            value={filters.workMode}
            onChange={(e) => onFilterChange({ workMode: e.target.value })}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-slate-800 text-xs focus:ring-1 focus:ring-purple-600 focus:outline-none cursor-pointer"
          >
            {WORK_MODES.map((mode) => (
              <option key={mode} value={mode}>
                {mode}
              </option>
            ))}
          </select>
        </div>

        {/* Duration */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Duration
          </label>
          <select
            value={filters.duration}
            onChange={(e) => onFilterChange({ duration: e.target.value })}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-slate-800 text-xs focus:ring-1 focus:ring-purple-600 focus:outline-none cursor-pointer"
          >
            {DURATIONS.map((dur) => (
              <option key={dur} value={dur}>
                {dur}
              </option>
            ))}
          </select>
        </div>

        {/* Sort Options */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
            <ArrowUpDown className="w-3 h-3 text-slate-400" />
            <span>Sort By</span>
          </label>
          <select
            value={filters.sortBy}
            onChange={(e) => onFilterChange({ sortBy: e.target.value as SortOption })}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-slate-800 text-xs focus:ring-1 focus:ring-purple-600 focus:outline-none cursor-pointer"
          >
            <option value="relevance">Relevant Matches</option>
            <option value="title-asc">Alphabetical (A to Z)</option>
            <option value="recently-verified">Recently Added / Verified</option>
          </select>
        </div>

        {/* Saved/Shortlist Toggle Button */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Saved Shortlist
          </label>
          <button
            onClick={() => onFilterChange({ onlyBookmarked: !filters.onlyBookmarked })}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
              filters.onlyBookmarked
                ? 'bg-purple-50 text-purple-700 border-purple-200 font-semibold'
                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center gap-1.5">
              <Bookmark className={`w-3.5 h-3.5 ${filters.onlyBookmarked ? 'fill-purple-600 text-purple-600' : 'text-slate-400'}`} />
              <span>Saved Only</span>
            </div>
            <span className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${
              filters.onlyBookmarked ? 'bg-purple-600 text-white' : 'bg-slate-200 text-slate-700'
            }`}>
              {savedCount}
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Bar: Results Count & Clear Filters */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-900">
            {resultsCount} {resultsCount === 1 ? 'opportunity' : 'opportunities'}
          </span>
          <span className="text-slate-400">found of {totalCount} total verified</span>
        </div>

        {hasActiveFilters && (
          <button
            onClick={onResetFilters}
            className="inline-flex items-center gap-1.5 text-xs text-purple-700 hover:text-purple-900 font-medium cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Clear all filters</span>
          </button>
        )}
      </div>
    </div>
  );
};
