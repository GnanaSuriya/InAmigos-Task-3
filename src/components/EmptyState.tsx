import { SearchX, BookmarkX, RotateCcw, Sparkles, X } from 'lucide-react';

interface EmptyStateProps {
  isFavoritesMode: boolean;
  searchQuery?: string;
  onResetFilters: () => void;
  onSelectQuery?: (query: string) => void;
  onClearSearch?: () => void;
}

const SUGGESTED_QUERIES = [
  'best AI for research',
  'best AI for coding',
  'make a presentation',
  'generate images',
  'summarize PDFs',
  'free AI tools for students',
];

export const EmptyState = ({
  isFavoritesMode,
  searchQuery,
  onResetFilters,
  onSelectQuery,
  onClearSearch,
}: EmptyStateProps) => {
  if (isFavoritesMode) {
    return (
      <div className="bg-[#101827] rounded-3xl border border-[#253247] p-10 sm:p-12 text-center max-w-xl mx-auto shadow-xl shadow-black/20">
        <div className="w-12 h-12 rounded-2xl bg-blue-950/60 text-[#60A5FA] border border-blue-500/30 flex items-center justify-center mx-auto mb-4">
          <BookmarkX className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">No Favorite Tools Saved Yet</h3>
        <p className="text-xs text-[#A7B4C8] mb-6 leading-relaxed">
          You haven't bookmarked any AI tools yet. Click the bookmark icon on any tool card while browsing to save it to your local favorites.
        </p>
        <button
          onClick={onResetFilters}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-xs cursor-pointer transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Browse All AI Tools</span>
        </button>
      </div>
    );
  }

  const hasSearch = Boolean(searchQuery && searchQuery.trim().length > 0);

  return (
    <div className="bg-[#101827] rounded-3xl border border-[#253247] p-8 sm:p-12 text-center max-w-xl mx-auto shadow-xl shadow-black/20">
      <div className="w-12 h-12 rounded-2xl bg-[#151F30] text-[#718096] border border-[#253247] flex items-center justify-center mx-auto mb-4">
        <SearchX className="w-6 h-6" />
      </div>

      <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">
        {hasSearch ? 'No Exact Matches' : 'No Matching AI Tools Found'}
      </h3>

      <p className="text-xs text-[#A7B4C8] mb-6 leading-relaxed max-w-md mx-auto">
        {hasSearch ? (
          <>
            No verified AI tools matched <span className="text-[#F8FAFC] font-semibold">"{searchQuery}"</span>. Try searching for one of these common workflows or clear your query.
          </>
        ) : (
          'We could not find any tools matching your active filters. Try broadening your category or pricing filters.'
        )}
      </p>

      {/* Suggested Search Query Chips */}
      {hasSearch && onSelectQuery && (
        <div className="mb-7">
          <div className="text-[11px] font-semibold text-[#60A5FA] uppercase tracking-wider mb-2.5 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#22D3EE]" />
            <span>Suggested Workflows</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {SUGGESTED_QUERIES.map((sq) => (
              <button
                key={sq}
                onClick={() => onSelectQuery(sq)}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#151F30] hover:bg-[#1A2639] text-[#A7B4C8] hover:text-[#F8FAFC] border border-[#253247] hover:border-blue-500/50 transition-colors cursor-pointer"
              >
                "{sq}"
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {hasSearch && onClearSearch && (
          <button
            onClick={onClearSearch}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#151F30] hover:bg-[#1A2639] border border-[#253247] text-[#F8FAFC] text-xs font-semibold cursor-pointer transition-colors"
          >
            <X className="w-3.5 h-3.5 text-[#718096]" />
            <span>Clear Search</span>
          </button>
        )}

        <button
          onClick={onResetFilters}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-xs cursor-pointer transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset All Filters</span>
        </button>
      </div>
    </div>
  );
};
