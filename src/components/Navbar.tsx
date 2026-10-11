import { useState, useEffect } from 'react';
import { Bookmark, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  savedCount: number;
  onOpenSavedOnly: () => void;
  isSavedOnlyActive: boolean;
}

export const Navbar = ({
  savedCount,
  onOpenSavedOnly,
  isSavedOnlyActive,
}: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
          : 'bg-[#FAFAF9] border-b border-slate-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Wordmark & Icon */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 rounded-md"
          aria-label="InAmigos Internships Home"
        >
          <div className="w-8 h-8 rounded-lg bg-purple-700 flex items-center justify-center text-white shadow-xs group-hover:bg-purple-800 transition-colors">
            <svg
              className="w-4.5 h-4.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <line x1="19" y1="8" x2="19" y2="14" />
              <line x1="22" y1="11" x2="16" y2="11" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 tracking-tight text-lg leading-tight font-heading group-hover:text-purple-900 transition-colors">
              InAmigos<span className="text-purple-700 font-medium"> Internships</span>
            </span>
            <span className="text-[10px] text-slate-500 font-medium tracking-wide uppercase">
              Discovery & Application Portal
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <button
            onClick={() => scrollToSection('explore-section')}
            className="hover:text-purple-700 transition-colors cursor-pointer"
          >
            Explore Internships
          </button>
          <button
            onClick={() => scrollToSection('how-it-works-section')}
            className="hover:text-purple-700 transition-colors cursor-pointer"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection('about-section')}
            className="hover:text-purple-700 transition-colors cursor-pointer"
          >
            About
          </button>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Bookmark Shortlist Button */}
          <button
            onClick={onOpenSavedOnly}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
              isSavedOnlyActive
                ? 'bg-purple-50 text-purple-700 border-purple-200 shadow-xs'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
            }`}
            title="View saved/bookmarked internships"
            aria-label={`Saved internships: ${savedCount}`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${savedCount > 0 ? 'fill-purple-600 text-purple-600' : 'text-slate-400'}`} />
            <span>Saved</span>
            <span
              className={`ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                savedCount > 0
                  ? 'bg-purple-600 text-white'
                  : 'bg-slate-100 text-slate-500'
              }`}
            >
              {savedCount}
            </span>
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => scrollToSection('explore-section')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold bg-purple-700 hover:bg-purple-800 text-white transition-all shadow-xs hover:shadow cursor-pointer"
          >
            <span>Explore Opportunities</span>
            <ArrowUpRight className="w-4 h-4 opacity-80" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenSavedOnly}
            className={`p-2 rounded-lg border text-xs font-semibold ${
              isSavedOnlyActive
                ? 'bg-purple-50 text-purple-700 border-purple-200'
                : 'bg-white text-slate-600 border-slate-200'
            }`}
            aria-label="Toggle saved internships"
          >
            <div className="relative">
              <Bookmark className={`w-4 h-4 ${savedCount > 0 ? 'fill-purple-600 text-purple-600' : ''}`} />
              {savedCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-purple-700 text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
                  {savedCount}
                </span>
              )}
            </div>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 py-5 shadow-lg animate-fade-in">
          <div className="flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('explore-section')}
              className="text-left font-medium text-slate-800 hover:text-purple-700 py-1"
            >
              Explore Internships
            </button>
            <button
              onClick={() => scrollToSection('how-it-works-section')}
              className="text-left font-medium text-slate-800 hover:text-purple-700 py-1"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('about-section')}
              className="text-left font-medium text-slate-800 hover:text-purple-700 py-1"
            >
              About InAmigos
            </button>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSavedOnly();
                }}
                className="flex items-center justify-between w-full p-2.5 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                <div className="flex items-center gap-2">
                  <Bookmark className="w-4 h-4 text-purple-600" />
                  <span>Saved Internships</span>
                </div>
                <span className="bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded-full font-bold">
                  {savedCount}
                </span>
              </button>

              <button
                onClick={() => scrollToSection('explore-section')}
                className="w-full text-center py-2.5 px-4 rounded-lg bg-purple-700 hover:bg-purple-800 text-white font-semibold text-sm shadow-xs"
              >
                Explore Opportunities
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
