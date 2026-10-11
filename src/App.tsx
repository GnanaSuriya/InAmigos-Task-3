import { useState, useEffect, useMemo, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedTools } from './components/FeaturedTools';
import { SearchBar } from './components/SearchBar';
import { FilterBar } from './components/FilterBar';
import { ToolCard } from './components/ToolCard';
import { ToolDetailModal } from './components/ToolDetailModal';
import { CollectionsSection } from './components/CollectionsSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { EmptyState } from './components/EmptyState';
import { Toast, type ToastMessage } from './components/Toast';
import { AI_TOOLS } from './data/tools';
import { filterAndSortTools } from './utils/filterTools';
import { useFavorites } from './hooks/useFavorites';
import { shareTool } from './utils/storage';
import type { AITool, FilterState } from './types/tool';

export function App() {
  const { favoriteIds, favoritesCount, toggleFavorite, isFavorited } = useFavorites();

  // Filters State
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    category: 'All Categories',
    pricingType: 'All Pricing',
    collection: 'all',
    onlyFavorites: false,
    sortBy: 'featured',
  });

  // Selected Tool for Detail Modal
  const [selectedTool, setSelectedTool] = useState<AITool | null>(null);

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

  // Sync with URL query parameter for deep linking (?tool=slug)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const toolParam = params.get('tool');
    if (toolParam) {
      const match = AI_TOOLS.find((t) => t.id === toolParam || t.slug === toolParam);
      if (match) {
        setSelectedTool(match);
      }
    }

    const handlePopState = () => {
      const currentParams = new URLSearchParams(window.location.search);
      const currentParam = currentParams.get('tool');
      if (currentParam) {
        const found = AI_TOOLS.find((t) => t.id === currentParam || t.slug === currentParam);
        setSelectedTool(found || null);
      } else {
        setSelectedTool(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Keyboard shortcut: '/' focuses search input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        const searchInput = document.getElementById('hero-search-input');
        searchInput?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Modal open/close handlers
  const handleOpenDetails = useCallback((tool: AITool) => {
    setSelectedTool(tool);
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set('tool', tool.slug);
    window.history.pushState({}, '', newUrl);
  }, []);

  const handleCloseDetails = useCallback(() => {
    setSelectedTool(null);
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.delete('tool');
    window.history.pushState({}, '', newUrl);
  }, []);

  // Handle Favorites toggle with user feedback
  const handleToggleFavorite = useCallback((id: string) => {
    const isNowSaved = toggleFavorite(id);
    const tool = AI_TOOLS.find((t) => t.id === id);
    if (isNowSaved) {
      addToast(`Added "${tool?.name || 'Tool'}" to favorites`);
    } else {
      addToast(`Removed from favorites`, 'info');
    }
  }, [toggleFavorite, addToast]);

  // Handle Share action
  const handleShare = useCallback(async (tool: AITool) => {
    const res = await shareTool(tool.name, tool.slug);
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
      category: 'All Categories',
      pricingType: 'All Pricing',
      collection: 'all',
      onlyFavorites: false,
      sortBy: 'featured',
    });
  };

  const hasActiveFilters = useMemo(() => {
    return (
      filters.searchQuery.trim() !== '' ||
      filters.category !== 'All Categories' ||
      filters.pricingType !== 'All Pricing' ||
      filters.collection !== 'all' ||
      filters.onlyFavorites ||
      filters.sortBy !== 'featured'
    );
  }, [filters]);

  // Filter and sort items
  const filteredTools = useMemo(() => {
    return filterAndSortTools(AI_TOOLS, filters, favoriteIds);
  }, [filters, favoriteIds]);

  // Related tools for the active modal
  const relatedTools = useMemo(() => {
    if (!selectedTool) return [];
    return AI_TOOLS.filter(
      (t) => t.category === selectedTool.category && t.id !== selectedTool.id
    );
  }, [selectedTool]);

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

  const handleSelectCollection = (collectionId: string) => {
    handleFilterChange({ collection: collectionId, onlyFavorites: false });
    scrollToSection('discover-section');
  };

  const handleSelectCategory = (categoryName: string) => {
    handleFilterChange({ category: categoryName, onlyFavorites: false });
    scrollToSection('discover-section');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070B12] text-[#F8FAFC]">
      {/* Sticky Navigation */}
      <Navbar
        favoritesCount={favoritesCount}
        onOpenFavorites={() => {
          handleFilterChange({ onlyFavorites: !filters.onlyFavorites });
          scrollToSection('discover-section');
        }}
        isFavoritesActive={filters.onlyFavorites}
        onSearchFocus={() => {
          const input = document.getElementById('hero-search-input');
          input?.focus();
        }}
        onNavigate={scrollToSection}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          searchQuery={filters.searchQuery}
          onSearchChange={(val) => handleFilterChange({ searchQuery: val })}
          onExploreClick={() => scrollToSection('discover-section')}
          onCategoriesClick={() => scrollToSection('categories-section')}
          onSelectCollection={handleSelectCollection}
          activeCollection={filters.collection}
          totalToolsCount={AI_TOOLS.length}
        />

        {/* Featured Tools Section */}
        {!filters.onlyFavorites && filters.collection === 'all' && filters.searchQuery === '' && (
          <FeaturedTools
            tools={AI_TOOLS}
            favoriteIds={favoriteIds}
            onToggleFavorite={handleToggleFavorite}
            onOpenDetails={handleOpenDetails}
            onShare={handleShare}
            onExploreMore={() => scrollToSection('discover-section')}
          />
        )}

        {/* Main Directory Discovery Section */}
        <section id="discover-section" className="py-16 sm:py-20 border-b border-[#253247]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header and Quick Search */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <div className="text-xs font-bold text-[#60A5FA] tracking-wider uppercase mb-2">
                  Directory Index
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
                  {filters.onlyFavorites ? 'Your Favorite AI Tools' : 'Explore All AI Tools'}
                </h2>
                <p className="text-xs sm:text-sm text-[#A7B4C8] mt-1 leading-relaxed">
                  Browse verified tools, compare features, and visit authentic official destinations.
                </p>
              </div>

              <div className="w-full md:w-80">
                <SearchBar
                  query={filters.searchQuery}
                  onChange={(val) => handleFilterChange({ searchQuery: val })}
                  onClear={() => handleFilterChange({ searchQuery: '' })}
                />
              </div>
            </div>

            {/* Filter and Sorting Toolbar */}
            <div className="mb-10">
              <FilterBar
                filters={filters}
                onFilterChange={handleFilterChange}
                onResetFilters={handleResetFilters}
                resultsCount={filteredTools.length}
                totalCount={AI_TOOLS.length}
                favoritesCount={favoritesCount}
                hasActiveFilters={hasActiveFilters}
              />
            </div>

            {/* Tool Cards Grid or Empty State */}
            {filteredTools.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filteredTools.map((tool) => (
                  <ToolCard
                    key={tool.id}
                    tool={tool}
                    isFavorited={isFavorited(tool.id)}
                    onToggleFavorite={handleToggleFavorite}
                    onOpenDetails={handleOpenDetails}
                    onShare={handleShare}
                  />
                ))}
              </div>
            ) : (
              <EmptyState
                isFavoritesMode={filters.onlyFavorites && favoritesCount === 0}
                onResetFilters={handleResetFilters}
              />
            )}
          </div>
        </section>

        {/* Curated Collections Section */}
        <CollectionsSection onSelectCollection={handleSelectCollection} />

        {/* About Section */}
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onSelectCategory={handleSelectCategory}
        onOpenFavorites={() => {
          handleFilterChange({ onlyFavorites: true });
          scrollToSection('discover-section');
        }}
      />

      {/* Tool Detail Modal */}
      <ToolDetailModal
        tool={selectedTool}
        onClose={handleCloseDetails}
        isFavorited={selectedTool ? isFavorited(selectedTool.id) : false}
        onToggleFavorite={handleToggleFavorite}
        onShare={handleShare}
        relatedTools={relatedTools}
        onSelectRelated={handleOpenDetails}
      />

      {/* Toast Notifications */}
      <Toast toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}

export default App;
