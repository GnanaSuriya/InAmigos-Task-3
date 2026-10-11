import { Bookmark, Share2, ArrowUpRight, Sparkles } from 'lucide-react';
import type { AITool } from '../types/tool';

interface ToolCardProps {
  tool: AITool;
  isFavorited: boolean;
  onToggleFavorite: (id: string) => void;
  onOpenDetails: (tool: AITool) => void;
  onShare: (tool: AITool) => void;
}

export const ToolCard = ({
  tool,
  isFavorited,
  onToggleFavorite,
  onOpenDetails,
  onShare,
}: ToolCardProps) => {
  // Color badges based on pricing
  const getPricingBadge = (pricing: string) => {
    switch (pricing) {
      case 'Free':
        return 'bg-emerald-950/60 text-emerald-400 border-emerald-500/40';
      case 'Freemium':
        return 'bg-blue-950/60 text-blue-400 border-blue-500/40';
      case 'Paid':
        return 'bg-purple-950/60 text-purple-400 border-purple-500/40';
      case 'Free Trial':
        return 'bg-amber-950/60 text-amber-400 border-amber-500/40';
      default:
        return 'bg-[#151F30] text-[#A7B4C8] border-[#253247]';
    }
  };

  return (
    <div className="bg-[#101827] rounded-2xl border border-[#253247] p-5.5 flex flex-col justify-between tool-card-hover relative group shadow-lg shadow-black/20">
      {/* Top Meta: Icon + Category + Pricing + Actions */}
      <div>
        <div className="flex items-start justify-between gap-2 mb-4">
          {/* Branded Geometric Tool Badge */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0B1220] border border-[#253247] flex items-center justify-center font-bold text-sm text-[#F8FAFC] group-hover:border-blue-500/70 transition-colors shadow-xs">
              <span className="bg-gradient-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent font-extrabold">
                {tool.name.substring(0, 2).toUpperCase()}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[#151F30] text-[#A7B4C8] border border-[#253247]">
                  {tool.category}
                </span>
                <span className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-semibold border ${getPricingBadge(tool.pricingType)}`}>
                  {tool.pricingType}
                </span>
              </div>
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => onShare(tool)}
              className="p-1.5 rounded-lg text-[#718096] hover:text-[#F8FAFC] hover:bg-[#151F30] transition-colors cursor-pointer"
              aria-label={`Share ${tool.name}`}
              title="Share tool"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => onToggleFavorite(tool.id)}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                isFavorited
                  ? 'text-blue-400 bg-blue-950/60 border border-blue-500/40'
                  : 'text-[#718096] hover:text-[#F8FAFC] hover:bg-[#151F30]'
              }`}
              aria-label={isFavorited ? `Remove ${tool.name} from favorites` : `Save ${tool.name} to favorites`}
              title={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isFavorited ? 'fill-blue-500' : ''}`} />
            </button>
          </div>
        </div>

        {/* Title */}
        <h3
          onClick={() => onOpenDetails(tool)}
          className="text-lg font-bold text-[#F8FAFC] group-hover:text-blue-400 transition-colors mb-2 cursor-pointer leading-snug flex items-center justify-between"
        >
          <span>{tool.name}</span>
          {tool.isFeatured && (
            <span className="text-[10px] text-[#22D3EE] font-semibold bg-cyan-950/40 border border-cyan-500/30 px-1.5 py-0.5 rounded flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" />
              <span>Featured</span>
            </span>
          )}
        </h3>

        {/* Short Description */}
        <p className="text-xs text-[#A7B4C8] line-clamp-2 leading-relaxed mb-3">
          {tool.description}
        </p>

        {/* Match Explanation Badge (when matching search query) */}
        {tool.matchReason && (
          <div className="mb-3 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-blue-950/70 border border-blue-500/30 text-[10.5px] font-medium text-[#60A5FA] max-w-full">
            <Sparkles className="w-2.5 h-2.5 text-[#22D3EE] shrink-0" />
            <span className="truncate">{tool.matchReason}</span>
          </div>
        )}

        {/* Tags / Use cases */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {tool.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#151F30] text-[#718096] border border-[#1A2639]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Actions: View Details + Visit Tool */}
      <div className="pt-3 border-t border-[#1A2639] grid grid-cols-2 gap-2">
        <button
          onClick={() => onOpenDetails(tool)}
          className="w-full py-2 px-3 rounded-xl border border-[#253247] hover:border-blue-500/50 bg-[#151F30] hover:bg-[#1A2639] text-[#F8FAFC] text-xs font-semibold text-center transition-colors cursor-pointer"
        >
          View Details
        </button>

        <a
          href={tool.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold text-center inline-flex items-center justify-center gap-1 shadow-xs shadow-blue-600/20 hover:shadow-blue-600/40 transition-all cursor-pointer"
          aria-label={`Visit official website for ${tool.name} (opens in new tab)`}
        >
          <span>Visit Tool</span>
          <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
        </a>
      </div>
    </div>
  );
};
