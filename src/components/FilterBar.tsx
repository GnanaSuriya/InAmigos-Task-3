import { ArrowUpDown, Bookmark, RotateCcw } from 'lucide-react';
import type { FilterState, SortOption } from '../types/tool';
import { CATEGORIES, PRICING_TYPES, CURATED_COLLECTIONS } from '../data/tools';

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: (updates: Partial<FilterState>) => void;
  onResetFilters: () => void;
  resultsCount: number;
  totalCount: number;
  favoritesCount: number;
  hasActiveFilters: boolean;
}

export const FilterBar = ({
  filters,
  onFilterChange,
  onResetFilters,
  resultsCount,
  totalCount,
  favoritesCount,
  hasActiveFilters,
}: FilterBarProps) => {
  return (
    <div id="categories-section" className="flex flex-col gap-4 bg-[#101827] p-5 rounded-2xl border border-[#253247] shadow-lg shadow-black/20">
      {/* Top Row: Category Pills Scrollable */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        <button
          onClick={() => onFilterChange({ category: 'All Categories' })}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
            filters.category === 'All Categories'
              ? 'bg-blue-600 text-white font-semibold shadow-xs shadow-blue-500/20'
              : 'bg-[#151F30] text-[#A7B4C8] hover:bg-[#1A2639] hover:text-[#F8FAFC] border border-[#253247]'
          }`}
        >
          All Categories
        </button>

        {CATEGORIES.map((cat) => {
          const isSelected = filters.category === cat;
          return (
            <button
              key={cat}
              onClick={() => onFilterChange({ category: cat })}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                isSelected
                  ? 'bg-blue-600 text-white font-semibold shadow-xs shadow-blue-500/20'
                  : 'bg-[#151F30] text-[#A7B4C8] hover:bg-[#1A2639] hover:text-[#F8FAFC] border border-[#253247]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Middle Row: Detailed Selectors & Sorting */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3 border-t border-[#1A2639] text-xs">
        {/* Pricing Type Filter */}
        <div>
          <label className="block text-[11px] font-semibold text-[#718096] uppercase tracking-wider mb-1">
            Pricing Model
          </label>
          <select
            value={filters.pricingType}
            onChange={(e) => onFilterChange({ pricingType: e.target.value })}
            className="w-full bg-[#151F30] border border-[#253247] rounded-lg px-2.5 py-2 text-[#F8FAFC] text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none cursor-pointer"
          >
            {PRICING_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Curated Collection Filter */}
        <div>
          <label className="block text-[11px] font-semibold text-[#718096] uppercase tracking-wider mb-1">
            Curated Collection
          </label>
          <select
            value={filters.collection}
            onChange={(e) => onFilterChange({ collection: e.target.value })}
            className="w-full bg-[#151F30] border border-[#253247] rounded-lg px-2.5 py-2 text-[#F8FAFC] text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none cursor-pointer"
          >
            <option value="all">All Tools</option>
            {CURATED_COLLECTIONS.map((col) => (
              <option key={col.id} value={col.id}>
                {col.title}
              </option>
            ))}
          </select>
        </div>

        {/* Sort Options */}
        <div>
          <label className="block text-[11px] font-semibold text-[#718096] uppercase tracking-wider mb-1 flex items-center gap-1">
            <ArrowUpDown className="w-3 h-3 text-[#60A5FA]" />
            <span>Sort By</span>
          </label>
          <select
            value={filters.sortBy}
            onChange={(e) => onFilterChange({ sortBy: e.target.value as SortOption })}
            className="w-full bg-[#151F30] border border-[#253247] rounded-lg px-2.5 py-2 text-[#F8FAFC] text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none cursor-pointer"
          >
            <option value="featured">Featured Tools</option>
            <option value="name-asc">Alphabetical (A to Z)</option>
            <option value="recently-verified">Recently Verified</option>
          </select>
        </div>

        {/* Favorites Only Toggle */}
        <div>
          <label className="block text-[11px] font-semibold text-[#718096] uppercase tracking-wider mb-1">
            Favorites Shortlist
          </label>
          <button
            onClick={() => onFilterChange({ onlyFavorites: !filters.onlyFavorites })}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
              filters.onlyFavorites
                ? 'bg-blue-950/80 text-blue-300 border-blue-500 font-semibold'
                : 'bg-[#151F30] text-[#A7B4C8] border-[#253247] hover:bg-[#1A2639] hover:text-[#F8FAFC]'
            }`}
          >
            <div className="flex items-center gap-1.5">
              <Bookmark className={`w-3.5 h-3.5 ${filters.onlyFavorites ? 'fill-blue-500 text-blue-500' : 'text-[#718096]'}`} />
              <span>Favorites Only</span>
            </div>
            <span className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${
              filters.onlyFavorites ? 'bg-blue-600 text-white' : 'bg-[#101827] text-[#A7B4C8] border border-[#253247]'
            }`}>
              {favoritesCount}
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Bar: Results Count & Clear Filters */}
      <div className="flex items-center justify-between pt-3 border-t border-[#1A2639] text-xs text-[#A7B4C8]">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#F8FAFC]">
            {resultsCount} {resultsCount === 1 ? 'tool' : 'tools'}
          </span>
          <span className="text-[#718096]">shown of {totalCount} verified in directory</span>
        </div>

        {hasActiveFilters && (
          <button
            onClick={onResetFilters}
            className="inline-flex items-center gap-1.5 text-xs text-[#60A5FA] hover:text-blue-300 font-medium cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Clear all filters</span>
          </button>
        )}
      </div>
    </div>
  );
};
