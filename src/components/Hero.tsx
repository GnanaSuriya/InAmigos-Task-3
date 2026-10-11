import { Search, Sparkles, ArrowDown, Grid, X } from 'lucide-react';
import { CURATED_COLLECTIONS } from '../data/tools';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onExploreClick: () => void;
  onCategoriesClick: () => void;
  onSelectCollection: (collectionId: string) => void;
  activeCollection: string;
  totalToolsCount: number;
}

export const Hero = ({
  searchQuery,
  onSearchChange,
  onExploreClick,
  onCategoriesClick,
  onSelectCollection,
  activeCollection,
  totalToolsCount,
}: HeroProps) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-14 md:pt-18 md:pb-20 border-b border-[#253247] bg-gradient-to-b from-[#0B1220] via-[#070B12] to-[#070B12]">
      {/* Background ambient grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dark-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#253247" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dark-grid)" />
        </svg>
      </div>

      {/* Subtle radial glow in the center */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101827] border border-blue-500/30 text-[#60A5FA] text-xs font-semibold tracking-wide uppercase mb-6 shadow-xs shadow-blue-500/10">
          <Sparkles className="w-3.5 h-3.5 text-[#22D3EE]" />
          <span>Curated AI Intelligence Directory • {totalToolsCount} Verified Tools</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F8FAFC] tracking-tight leading-[1.15] mb-5">
          Discover the right AI <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
            for every task.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-[#A7B4C8] max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
          Explore a curated collection of AI tools that help you build faster, create smarter, and get more done.
        </p>

        {/* Prominent Search Field */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative flex items-center">
            <div className="absolute left-4 text-[#60A5FA] pointer-events-none">
              <Search className="w-5 h-5" />
            </div>
            <input
              id="hero-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search AI tools, categories, or use cases..."
              className="w-full pl-12 pr-12 py-3.5 rounded-2xl bg-[#101827] border border-[#253247] text-[#F8FAFC] placeholder:text-[#718096] text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-lg shadow-black/40"
              aria-label="Search AI tools, categories, or use cases"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-4 text-[#718096] hover:text-[#F8FAFC] transition-colors p-1"
                aria-label="Clear search query"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={onExploreClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md shadow-blue-600/25 transition-all cursor-pointer group"
          >
            <span>Explore Tools</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={onCategoriesClick}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#101827] hover:bg-[#151F30] text-[#F8FAFC] font-semibold text-sm border border-[#253247] hover:border-[#3B82F6]/50 shadow-xs transition-all cursor-pointer"
          >
            <Grid className="w-4 h-4 text-[#60A5FA]" />
            <span>Browse Categories</span>
          </button>
        </div>

        {/* Curated Collection Shortcuts */}
        <div className="pt-6 border-t border-[#1A2639]">
          <div className="text-[11px] font-semibold text-[#718096] uppercase tracking-wider mb-3">
            Curated Workflows
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CURATED_COLLECTIONS.map((col) => {
              const isSelected = activeCollection === col.id;
              return (
                <button
                  key={col.id}
                  onClick={() => onSelectCollection(isSelected ? 'all' : col.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-blue-950/80 text-blue-300 border-blue-500 shadow-xs shadow-blue-500/20'
                      : 'bg-[#101827] text-[#A7B4C8] hover:text-[#F8FAFC] border-[#253247] hover:border-blue-500/40'
                  }`}
                >
                  {col.title.replace('AI Tools for ', '').replace('Best AI Tools for ', '')}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
