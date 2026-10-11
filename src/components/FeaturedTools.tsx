import { Sparkles, ArrowRight } from 'lucide-react';
import type { AITool } from '../types/tool';
import { ToolCard } from './ToolCard';

interface FeaturedToolsProps {
  tools: AITool[];
  favoriteIds: string[];
  onToggleFavorite: (id: string) => void;
  onOpenDetails: (tool: AITool) => void;
  onShare: (tool: AITool) => void;
  onExploreMore: () => void;
}

export const FeaturedTools = ({
  tools,
  favoriteIds,
  onToggleFavorite,
  onOpenDetails,
  onShare,
  onExploreMore,
}: FeaturedToolsProps) => {
  const featured = tools.filter((t) => t.isFeatured).slice(0, 6);

  if (featured.length === 0) return null;

  return (
    <section className="py-14 sm:py-18 border-b border-[#253247] bg-[#070B12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#60A5FA] tracking-wider uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#22D3EE]" />
              <span>Curated Highlights</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
              Featured AI Tools
            </h2>
            <p className="text-xs sm:text-sm text-[#A7B4C8] mt-1">
              Handpicked industry benchmarks across programming, creative generation, and deep research.
            </p>
          </div>

          <button
            onClick={onExploreMore}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#60A5FA] hover:text-blue-300 transition-colors cursor-pointer group shrink-0"
          >
            <span>View All in Directory</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((tool) => (
            <ToolCard
              key={tool.id}
              tool={tool}
              isFavorited={favoriteIds.includes(tool.id)}
              onToggleFavorite={onToggleFavorite}
              onOpenDetails={onOpenDetails}
              onShare={onShare}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
