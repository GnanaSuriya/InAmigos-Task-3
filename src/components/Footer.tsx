import { ShieldAlert } from 'lucide-react';
import { Logo } from './Logo';
import { CATEGORIES } from '../data/tools';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectCategory: (category: string) => void;
  onOpenFavorites: () => void;
}

export const Footer = ({
  onNavigate,
  onSelectCategory,
  onOpenFavorites,
}: FooterProps) => {
  return (
    <footer className="bg-[#0B1220] border-t border-[#253247] text-[#A7B4C8] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Brand & Mission Statement */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="md" />
            <p className="text-[#718096] leading-relaxed max-w-sm">
              Discover the right AI for every task. A curated directory of software tools for coding, design, writing, research, and automation.
            </p>
            <div className="text-[11px] text-[#718096]">
              © {new Date().getFullYear()} AI Toolbox. All rights reserved.
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-bold text-[#F8FAFC] uppercase tracking-wider text-[11px]">
              Navigation
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('discover-section')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Discover Tools
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('categories-section')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Browse Categories
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collections-section')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Curated Collections
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenFavorites}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Saved Favorites
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about-section')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  About AI Toolbox
                </button>
              </li>
            </ul>
          </div>

          {/* Top Categories Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-bold text-[#F8FAFC] uppercase tracking-wider text-[11px]">
              Top Categories
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {CATEGORIES.slice(0, 6).map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    onSelectCategory(cat);
                    onNavigate('discover-section');
                  }}
                  className="text-left text-[#718096] hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Legal & Outbound Disclaimer Banner */}
        <div className="mt-12 pt-8 border-t border-[#1A2639] flex flex-col md:flex-row gap-4 items-start md:items-center justify-between text-xs text-[#718096]">
          <div className="flex items-start gap-2.5 max-w-4xl">
            <ShieldAlert className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Disclaimer:</strong> AI Toolbox is an independent discovery directory that redirects users to official third-party software provider websites. AI Toolbox does not provide, host, or operate any listed AI models or services. Trademarks, brand names, and logos belong to their respective owners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
