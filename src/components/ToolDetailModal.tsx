import { useEffect } from 'react';
import { 
  X, 
  ArrowUpRight, 
  Bookmark, 
  Share2, 
  CheckCircle, 
  ShieldCheck
} from 'lucide-react';
import type { AITool } from '../types/tool';

interface ToolDetailModalProps {
  tool: AITool | null;
  onClose: () => void;
  isFavorited: boolean;
  onToggleFavorite: (id: string) => void;
  onShare: (tool: AITool) => void;
  relatedTools: AITool[];
  onSelectRelated: (tool: AITool) => void;
}

export const ToolDetailModal = ({
  tool,
  onClose,
  isFavorited,
  onToggleFavorite,
  onShare,
  relatedTools,
  onSelectRelated,
}: ToolDetailModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (tool) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [tool, onClose]);

  if (!tool) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tool-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl bg-[#0B1220] rounded-3xl border border-[#253247] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-modal-up">
        {/* Modal Top Bar */}
        <div className="px-6 sm:px-8 pt-6 pb-5 border-b border-[#1A2639] flex items-start justify-between gap-4 bg-[#101827]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#070B12] border border-[#253247] flex items-center justify-center font-bold text-lg text-[#F8FAFC] shadow-sm">
              <span className="bg-gradient-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent font-extrabold">
                {tool.name.substring(0, 2).toUpperCase()}
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-blue-950/70 text-blue-400 border border-blue-500/30">
                  {tool.category}
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[#151F30] text-[#A7B4C8] border border-[#253247]">
                  {tool.pricingType}
                </span>
              </div>
              <h2 id="tool-modal-title" className="text-xl sm:text-2xl font-bold text-[#F8FAFC]">
                {tool.name}
              </h2>
            </div>
          </div>

          {/* Action icons */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => onShare(tool)}
              className="p-2 rounded-xl text-[#718096] hover:text-[#F8FAFC] hover:bg-[#151F30] transition-colors cursor-pointer"
              title="Share tool"
              aria-label="Share tool"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => onToggleFavorite(tool.id)}
              className={`p-2 rounded-xl transition-colors cursor-pointer ${
                isFavorited
                  ? 'text-blue-400 bg-blue-950/80 border border-blue-500/50'
                  : 'text-[#718096] hover:text-[#F8FAFC] hover:bg-[#151F30]'
              }`}
              title={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
              aria-label="Toggle favorite"
            >
              <Bookmark className={`w-4 h-4 ${isFavorited ? 'fill-blue-500' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#718096] hover:text-[#F8FAFC] hover:bg-[#151F30] transition-colors cursor-pointer ml-1"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="px-6 sm:px-8 py-6 overflow-y-auto space-y-6 text-sm text-[#A7B4C8]">
          {/* Overview */}
          <div>
            <h3 className="text-xs font-bold text-[#F8FAFC] uppercase tracking-wider mb-2">
              Overview
            </h3>
            <p className="leading-relaxed text-[#A7B4C8]">
              {tool.overview}
            </p>
          </div>

          {/* Verified Features */}
          <div>
            <h3 className="text-xs font-bold text-[#F8FAFC] uppercase tracking-wider mb-3">
              Verified Key Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {tool.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#101827] border border-[#1A2639] text-xs text-[#F8FAFC]">
                  <CheckCircle className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="text-xs font-bold text-[#F8FAFC] uppercase tracking-wider mb-2.5">
              Primary Use Cases
            </h3>
            <div className="flex flex-wrap gap-2">
              {tool.useCases.map((useCase) => (
                <span
                  key={useCase}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-[#101827] text-blue-300 border border-blue-500/20"
                >
                  {useCase}
                </span>
              ))}
            </div>
          </div>

          {/* Pricing Details */}
          {tool.pricingDetails && (
            <div className="p-4 rounded-xl bg-[#101827] border border-[#253247] text-xs">
              <div className="font-semibold text-[#F8FAFC] mb-1">
                Pricing Structure: <span className="text-[#60A5FA]">{tool.pricingType}</span>
              </div>
              <p className="text-[#718096]">
                {tool.pricingDetails}
              </p>
            </div>
          )}

          {/* Sourcing & Verification Metadata */}
          <div className="p-4 rounded-xl bg-[#070B12] border border-[#1A2639] text-xs text-[#718096] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Verified Official Destination • Checked on {tool.lastVerifiedAt}</span>
            </div>
            <span className="font-mono text-blue-400">{new URL(tool.officialUrl).hostname}</span>
          </div>

          {/* Related Tools */}
          {relatedTools.length > 0 && (
            <div className="pt-4 border-t border-[#1A2639]">
              <h3 className="text-xs font-bold text-[#F8FAFC] uppercase tracking-wider mb-3">
                Related {tool.category} Tools
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {relatedTools.slice(0, 3).map((rel) => (
                  <button
                    key={rel.id}
                    onClick={() => onSelectRelated(rel)}
                    className="p-3 rounded-xl bg-[#101827] border border-[#253247] hover:border-blue-500/50 text-left transition-all cursor-pointer group"
                  >
                    <div className="font-semibold text-xs text-[#F8FAFC] group-hover:text-blue-300 mb-1">
                      {rel.name}
                    </div>
                    <div className="text-[11px] text-[#718096] line-clamp-1">
                      {rel.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Sticky Footer */}
        <div className="px-6 sm:px-8 py-4 border-t border-[#1A2639] bg-[#101827] flex items-center justify-between gap-3">
          <div className="text-xs text-[#718096] hidden sm:block">
            Opens canonical vendor site in a new tab
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-[#253247] hover:bg-[#151F30] text-[#A7B4C8] text-xs font-semibold cursor-pointer"
            >
              Close
            </button>

            <a
              href={tool.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/30 transition-all cursor-pointer"
            >
              <span>Visit Official Website</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
