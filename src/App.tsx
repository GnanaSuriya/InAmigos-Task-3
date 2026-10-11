import { useState, useEffect, useMemo, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SearchBar } from './components/SearchBar';
import { FilterBar } from './components/FilterBar';
import { InternshipCard } from './components/InternshipCard';
import { InternshipDetailModal } from './components/InternshipDetailModal';
import { EmptyState } from './components/EmptyState';
import { HowItWorks } from './components/HowItWorks';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { Toast, type ToastMessage } from './components/Toast';
import { INAMIGOS_INTERNSHIPS } from './data/internships';
import { filterAndSortInternships } from './utils/filterInternships';
import { useBookmarks } from './hooks/useBookmarks';
import { shareInternship } from './utils/storage';
import type { Internship, FilterState } from './types/internship';

export function App() {
  const { savedIds, savedCount, toggleBookmark, isBookmarked } = useBookmarks();

  // Filters State
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    category: 'All Roles',
    workMode: 'All Modes',
    duration: 'All Durations',
    onlyBookmarked: false,
    sortBy: 'relevance',
  });

  // Selected Internship for Detail Modal
  const [selectedInternship, setSelectedInternship] = useState<Internship | null>(null);

  // Toast Notifications
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = useCallback((message: string, type: 'success' | 'info' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3800);
  }, []);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // Sync with URL query parameters for deep linking (?role=id)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const roleId = params.get('role');
    if (roleId) {
      const match = INAMIGOS_INTERNSHIPS.find((item) => item.id === roleId);
      if (match) {
        setSelectedInternship(match);
      }
    }

    const handlePopState = () => {
      const currentParams = new URLSearchParams(window.location.search);
      const currentRoleId = currentParams.get('role');
      if (currentRoleId) {
        const found = INAMIGOS_INTERNSHIPS.find((item) => item.id === currentRoleId);
        setSelectedInternship(found || null);
      } else {
        setSelectedInternship(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update URL query parameter when modal opens or closes
  const handleOpenDetails = useCallback((internship: Internship) => {
    setSelectedInternship(internship);
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set('role', internship.id);
    window.history.pushState({}, '', newUrl);
  }, []);

  const handleCloseDetails = useCallback(() => {
    setSelectedInternship(null);
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.delete('role');
    window.history.pushState({}, '', newUrl);
  }, []);

  // Handle Bookmarks Toggle with feedback
  const handleToggleBookmark = useCallback((id: string) => {
    const isNowSaved = toggleBookmark(id);
    const item = INAMIGOS_INTERNSHIPS.find((i) => i.id === id);
    if (isNowSaved) {
      addToast(`Saved "${item?.title || 'Internship'}" to shortlist`);
    } else {
      addToast(`Removed from saved shortlist`, 'info');
    }
  }, [toggleBookmark, addToast]);

  // Handle Share action
  const handleShare = useCallback(async (internship: Internship) => {
    const res = await shareInternship(internship.title, internship.id);
    if (res.success) {
      if (res.method === 'clipboard') {
        addToast('Link copied to clipboard!');
      }
    } else {
      addToast('Could not share link. Please copy the URL.', 'info');
    }
  }, [addToast]);

  // Filter updates
  const handleFilterChange = (updates: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...updates }));
  };

  const handleResetFilters = () => {
    setFilters({
      searchQuery: '',
      category: 'All Roles',
      workMode: 'All Modes',
      duration: 'All Durations',
      onlyBookmarked: false,
      sortBy: 'relevance',
    });
  };

  const hasActiveFilters = useMemo(() => {
    return (
      filters.searchQuery.trim() !== '' ||
      filters.category !== 'All Roles' ||
      filters.workMode !== 'All Modes' ||
      filters.duration !== 'All Durations' ||
      filters.onlyBookmarked ||
      filters.sortBy !== 'relevance'
    );
  }, [filters]);

  // Filter and sort items
  const filteredInternships = useMemo(() => {
    return filterAndSortInternships(INAMIGOS_INTERNSHIPS, filters, savedIds);
  }, [filters, savedIds]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
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
    <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-[#0F172A]">
      {/* Sticky Navigation */}
      <Navbar
        savedCount={savedCount}
        onOpenSavedOnly={() => handleFilterChange({ onlyBookmarked: !filters.onlyBookmarked })}
        isSavedOnlyActive={filters.onlyBookmarked}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreClick={() => scrollToSection('explore-section')}
          onHowItWorksClick={() => scrollToSection('how-it-works-section')}
          totalRolesCount={INAMIGOS_INTERNSHIPS.length}
        />

        {/* Internship Discovery Section */}
        <section id="explore-section" className="py-16 sm:py-20 border-b border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Heading */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div className="max-w-xl">
                <div className="text-xs font-bold text-purple-700 tracking-wider uppercase mb-2">
                  Verified Opportunities
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                  Explore InAmigos Internships
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Find an opportunity to learn, contribute, and build practical experience.
                </p>
              </div>

              {/* Quick Search Input */}
              <div className="w-full md:w-96">
                <SearchBar
                  query={filters.searchQuery}
                  onChange={(val) => handleFilterChange({ searchQuery: val })}
                  onClear={() => handleFilterChange({ searchQuery: '' })}
                />
              </div>
            </div>

            {/* Filter and Controls Toolbar */}
            <div className="mb-10">
              <FilterBar
                filters={filters}
                onFilterChange={handleFilterChange}
                onResetFilters={handleResetFilters}
                resultsCount={filteredInternships.length}
                totalCount={INAMIGOS_INTERNSHIPS.length}
                savedCount={savedCount}
                hasActiveFilters={hasActiveFilters}
              />
            </div>

            {/* Listings Grid or Empty State */}
            {filteredInternships.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredInternships.map((internship) => (
                  <InternshipCard
                    key={internship.id}
                    internship={internship}
                    isSaved={isBookmarked(internship.id)}
                    onToggleSave={handleToggleBookmark}
                    onOpenDetails={handleOpenDetails}
                    onShare={handleShare}
                  />
                ))}
              </div>
            ) : (
              <EmptyState
                isBookmarkedMode={filters.onlyBookmarked && savedCount === 0}
                onResetFilters={handleResetFilters}
              />
            )}
          </div>
        </section>

        {/* How It Works Section */}
        <HowItWorks />

        {/* About Section */}
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Internship Detail Modal */}
      <InternshipDetailModal
        internship={selectedInternship}
        onClose={handleCloseDetails}
        isSaved={selectedInternship ? isBookmarked(selectedInternship.id) : false}
        onToggleSave={handleToggleBookmark}
        onShare={handleShare}
      />

      {/* Toast Notifications */}
      <Toast toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}

export default App;
