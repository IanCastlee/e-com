import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageLayout } from '../../components/templates';
import { CategoryTabs, WebsiteGrid, CTABanner } from '../../components/organisms';
import { SearchBar, FilterDropdown, Pagination } from '../../components/molecules';
import { Text, Button } from '../../components/atoms';
import { categories, websites, ctaBannerData } from '../../data';
import { useFilter } from '../../hooks';
import { SORT_OPTIONS } from '../../utils/constants';

/**
 * Page: Portfolio
 * Full website storefront catalog with category tabs, keyword search, sorting,
 * loading skeletons, empty states, pagination, and interactive live preview modal.
 */
export function Portfolio() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';

  const {
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    searchQuery,
    setSearchQuery,
    clearSearch,
    resetFilters,
    filteredItems,
    categoryCounts,
    isLoading,
    resultCount,
    totalCount,
  } = useFilter(websites, { initialCategory: categoryParam });

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // 6 websites per page for a balanced, responsive grid

  // Reset to first page when filtering or searching
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, sortBy]);

  // Paginated slice
  const totalPages = Math.max(1, Math.ceil(filteredItems.length / itemsPerPage));
  const paginatedWebsites = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredItems.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredItems, currentPage, itemsPerPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const controlBar = document.getElementById('portfolio-control-bar');
    if (controlBar) {
      controlBar.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Keep search params in sync when category changes
  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ category: catId }, { replace: true });
    }
  };

  const handleReset = () => {
    resetFilters();
    searchParams.delete('category');
    setSearchParams(searchParams, { replace: true });
  };

  const hasActiveFilters = selectedCategory !== 'all' || Boolean(searchQuery.trim());

  return (
    <PageLayout
      seoTitle="Choose Your Website Design | e-yhan Digital Solutions"
      seoDescription="Choose a website design you like, and we'll take care of customizing it for your business. Starts at just $55 (₱3,000) for static websites."
      badge="Choose Your Design • 100% Free Customization"
      badgeIcon="Sparkles"
      title="Choose a Website Design for Your Business"
      subtitle="Choose a website design you like, and we'll take care of customizing it for your business. Starts at just $55 (₱3,000) for static websites with output first before payment."
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'Websites' },
      ]}
      headerActions={
        <Button variant="primary" size="md" to="/contact" rightIcon="ArrowUpRight">
          Request Custom Build
        </Button>
      }
      footerBannerSlot={<CTABanner {...ctaBannerData} />}
    >
      <section className="py-8 sm:py-12 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[5%] space-y-8">
        {/* Control Bar: Search + Sort + Category Filter Tabs */}
        <div
          id="portfolio-control-bar"
          className="p-3.5 sm:p-5 rounded-[10px] bg-white dark:bg-navy-900 border border-navy-200/80 dark:border-navy-800 shadow-soft space-y-4 scroll-mt-24"
        >
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="w-full md:max-w-md">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                onClear={clearSearch}
                placeholder="Search by industry, keyword, or feature (e.g. Resort, Barangay, GCash)..."
              />
            </div>

            <div className="flex flex-wrap items-center justify-between md:justify-end gap-3">
              <Text size="xs" variant="muted" className="font-medium">
                Showing <strong className="text-navy-900 dark:text-white">{resultCount}</strong> of{' '}
                {totalCount} systems
              </Text>
              <FilterDropdown
                id="portfolio-sort"
                label="Sort By"
                value={sortBy}
                options={SORT_OPTIONS}
                onChange={setSortBy}
              />
            </div>
          </div>

          <div className="pt-2 border-t border-navy-100 dark:border-navy-800/80 flex items-center justify-between gap-3">
            <CategoryTabs
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategoryChange}
              categoryCounts={categoryCounts}
              variant="tabs"
              className="flex-1"
            />
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleReset}
                leftIcon="RotateCcw"
                className="shrink-0 hidden sm:inline-flex"
              >
                Reset
              </Button>
            )}
          </div>
        </div>

        {/* Website Grid */}
        <WebsiteGrid
          websites={paginatedWebsites}
          isLoading={isLoading}
          onResetFilters={resetFilters}
        />

        {/* Pagination Navigation */}
        {!isLoading && filteredItems.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={filteredItems.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
          />
        )}
      </section>
    </PageLayout>
  );
}

export default Portfolio;
