import { useState, useEffect } from 'react';
import { Bookmark, Menu, X, ArrowUpRight, Search } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  favoritesCount: number;
  onOpenFavorites: () => void;
  isFavoritesActive: boolean;
  onSearchFocus: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar = ({
  favoritesCount,
  onOpenFavorites,
  isFavoritesActive,
  onSearchFocus,
  onNavigate,
}: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#070B12]/95 backdrop-blur-md border-b border-[#253247] shadow-lg shadow-black/30'
          : 'bg-[#070B12] border-b border-[#1A2639]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
          aria-label="AI Toolbox Home"
        >
          <Logo />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#A7B4C8]">
          <button
            onClick={() => handleLinkClick('discover-section')}
            className="hover:text-[#F8FAFC] transition-colors cursor-pointer"
          >
            Discover
          </button>
          <button
            onClick={() => handleLinkClick('categories-section')}
            className="hover:text-[#F8FAFC] transition-colors cursor-pointer"
          >
            Categories
          </button>
          <button
            onClick={() => handleLinkClick('collections-section')}
            className="hover:text-[#F8FAFC] transition-colors cursor-pointer"
          >
            Collections
          </button>
          <button
            onClick={() => handleLinkClick('about-section')}
            className="hover:text-[#F8FAFC] transition-colors cursor-pointer"
          >
            About
          </button>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Quick Search Trigger */}
          <button
            onClick={onSearchFocus}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#101827] text-[#A7B4C8] hover:text-[#F8FAFC] border border-[#253247] hover:border-blue-500/50 transition-colors cursor-pointer"
            title="Focus search input"
          >
            <Search className="w-3.5 h-3.5 text-[#60A5FA]" />
            <span>Search</span>
            <kbd className="px-1.5 py-0.5 rounded text-[10px] bg-[#151F30] text-[#718096] border border-[#253247]">
              /
            </kbd>
          </button>

          {/* Favorites Button */}
          <button
            onClick={onOpenFavorites}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border cursor-pointer ${
              isFavoritesActive
                ? 'bg-blue-950/60 text-[#60A5FA] border-blue-500/80 shadow-xs shadow-blue-500/20'
                : 'bg-[#101827] text-[#A7B4C8] border-[#253247] hover:bg-[#151F30] hover:text-[#F8FAFC] hover:border-blue-500/40'
            }`}
            title="View saved favorite tools"
            aria-label={`Saved favorites: ${favoritesCount}`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${favoritesCount > 0 ? 'fill-blue-500 text-blue-500' : 'text-[#718096]'}`} />
            <span>Favorites</span>
            <span
              className={`ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                favoritesCount > 0
                  ? 'bg-blue-600 text-white'
                  : 'bg-[#151F30] text-[#718096]'
              }`}
            >
              {favoritesCount}
            </span>
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => handleLinkClick('discover-section')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-xs hover:shadow-blue-500/25 cursor-pointer"
          >
            <span>Explore All</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenFavorites}
            className={`p-2 rounded-lg border text-xs font-semibold cursor-pointer ${
              isFavoritesActive
                ? 'bg-blue-950/60 text-blue-400 border-blue-500/60'
                : 'bg-[#101827] text-[#A7B4C8] border-[#253247]'
            }`}
            aria-label="Toggle favorites"
          >
            <div className="relative">
              <Bookmark className={`w-4 h-4 ${favoritesCount > 0 ? 'fill-blue-500 text-blue-500' : ''}`} />
              {favoritesCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-blue-600 text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
                  {favoritesCount}
                </span>
              )}
            </div>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-[#253247] text-[#A7B4C8] hover:text-[#F8FAFC] hover:bg-[#101827] cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#253247] bg-[#0B1220] px-4 py-5 shadow-xl animate-fade-in">
          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleLinkClick('discover-section')}
              className="text-left font-medium text-[#F8FAFC] hover:text-blue-400 py-1.5 text-sm"
            >
              Discover Tools
            </button>
            <button
              onClick={() => handleLinkClick('categories-section')}
              className="text-left font-medium text-[#F8FAFC] hover:text-blue-400 py-1.5 text-sm"
            >
              Categories
            </button>
            <button
              onClick={() => handleLinkClick('collections-section')}
              className="text-left font-medium text-[#F8FAFC] hover:text-blue-400 py-1.5 text-sm"
            >
              Curated Collections
            </button>
            <button
              onClick={() => handleLinkClick('about-section')}
              className="text-left font-medium text-[#F8FAFC] hover:text-blue-400 py-1.5 text-sm"
            >
              About AI Toolbox
            </button>

            <div className="pt-3 border-t border-[#1A2639] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFavorites();
                }}
                className="flex items-center justify-between w-full p-2.5 rounded-lg border border-[#253247] bg-[#101827] text-sm font-medium text-[#A7B4C8] hover:text-[#F8FAFC]"
              >
                <div className="flex items-center gap-2">
                  <Bookmark className="w-4 h-4 text-blue-500" />
                  <span>Favorites</span>
                </div>
                <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                  {favoritesCount}
                </span>
              </button>

              <button
                onClick={() => handleLinkClick('discover-section')}
                className="w-full text-center py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-xs"
              >
                Explore All Tools
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
