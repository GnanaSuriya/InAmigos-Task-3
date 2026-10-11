import { SearchX, BookmarkX, RotateCcw } from 'lucide-react';

interface EmptyStateProps {
  isBookmarkedMode: boolean;
  onResetFilters: () => void;
}

export const EmptyState = ({
  isBookmarkedMode,
  onResetFilters,
}: EmptyStateProps) => {
  if (isBookmarkedMode) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200/90 p-12 text-center max-w-lg mx-auto shadow-2xs">
        <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-4">
          <BookmarkX className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">No Saved Internships Yet</h3>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          You haven't bookmarked any opportunities. Browse the listings and click the bookmark icon on any card to save it for quick reference.
        </p>
        <button
          onClick={onResetFilters}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-xs font-semibold shadow-xs cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Show All Opportunities</span>
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-12 text-center max-w-lg mx-auto shadow-2xs">
      <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-500 flex items-center justify-center mx-auto mb-4">
        <SearchX className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">No Matching Opportunities Found</h3>
      <p className="text-sm text-slate-600 mb-6 leading-relaxed">
        We couldn't find any InAmigos Foundation internships matching your current search criteria or active filters. Try broadening your keywords or resetting filters.
      </p>
      <button
        onClick={onResetFilters}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-xs font-semibold shadow-xs cursor-pointer"
      >
        <RotateCcw className="w-3.5 h-3.5" />
        <span>Reset Filters & Search</span>
      </button>
    </div>
  );
};
