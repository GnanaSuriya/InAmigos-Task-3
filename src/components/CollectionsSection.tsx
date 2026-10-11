import { BookOpen, Code, Palette, Video, Gift, ArrowRight } from 'lucide-react';
import { CURATED_COLLECTIONS } from '../data/tools';

interface CollectionsSectionProps {
  onSelectCollection: (collectionId: string) => void;
}

export const CollectionsSection = ({
  onSelectCollection,
}: CollectionsSectionProps) => {
  const getCollectionIcon = (id: string) => {
    switch (id) {
      case 'students':
        return BookOpen;
      case 'developers':
        return Code;
      case 'designers':
        return Palette;
      case 'creators':
        return Video;
      case 'free-freemium':
        return Gift;
      default:
        return BookOpen;
    }
  };

  return (
    <section id="collections-section" className="py-16 sm:py-20 border-b border-[#253247] bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-bold text-[#60A5FA] tracking-wider uppercase mb-2">
            Tailored Workflows
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mb-3">
            Curated Collections
          </h2>
          <p className="text-sm text-[#A7B4C8] leading-relaxed">
            Jump directly into toolsets handpicked for specific disciplines, professions, and budgets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CURATED_COLLECTIONS.map((col) => {
            const Icon = getCollectionIcon(col.id);
            return (
              <div
                key={col.id}
                onClick={() => onSelectCollection(col.id)}
                className="bg-[#101827] rounded-2xl border border-[#253247] p-6 hover:border-blue-500/60 transition-all cursor-pointer group shadow-lg shadow-black/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#151F30] border border-[#253247] text-[#60A5FA] flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-blue-400 bg-blue-950/60 border border-blue-500/30 px-2 py-0.5 rounded">
                      {col.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#F8FAFC] group-hover:text-blue-300 transition-colors mb-2">
                    {col.title}
                  </h3>
                  <p className="text-xs text-[#A7B4C8] leading-relaxed mb-6">
                    {col.description}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#60A5FA] group-hover:text-blue-300 transition-colors">
                  <span>Browse Collection</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
