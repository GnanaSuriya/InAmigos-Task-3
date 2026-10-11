import { SearchX, BookmarkX, RotateCcw } from 'lucide-react';

interface EmptyStateProps {
  isFavoritesMode: boolean;
  onResetFilters: () => void;
}

export const EmptyState = ({
  isFavoritesMode,
  onResetFilters,
}: EmptyStateProps) => {
  if (isFavoritesMode) {
    return (
      <div className="bg-[#101827] rounded-3xl border border-[#253247] p-12 text-center max-w-lg mx-auto shadow-xl shadow-black/20">
        <div className="w-12 h-12 rounded-2xl bg-blue-950/60 text-[#60A5FA] border border-blue-500/30 flex items-center justify-center mx-auto mb-4">
          <BookmarkX className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">No Favorite Tools Saved Yet</h3>
        <p className="text-xs text-[#A7B4C8] mb-6 leading-relaxed">
          You haven't bookmarked any AI tools yet. Click the bookmark icon on any tool card while browsing to save it to your local favorites.
        </p>
        <button
          onClick={onResetFilters}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-xs cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Browse All AI Tools</span>
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#101827] rounded-3xl border border-[#253247] p-12 text-center max-w-lg mx-auto shadow-xl shadow-black/20">
      <div className="w-12 h-12 rounded-2xl bg-[#151F30] text-[#718096] border border-[#253247] flex items-center justify-center mx-auto mb-4">
        <SearchX className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">No Matching AI Tools Found</h3>
      <p className="text-xs text-[#A7B4C8] mb-6 leading-relaxed">
        We couldn't find any tools matching your active search keywords or category filters. Try broadening your search or resetting active filters.
      </p>
      <button
        onClick={onResetFilters}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-xs cursor-pointer"
      >
        <RotateCcw className="w-3.5 h-3.5" />
        <span>Reset Filters & Search</span>
      </button>
    </div>
  );
};
