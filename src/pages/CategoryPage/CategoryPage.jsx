import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageLayout } from '../../components/templates';
import { WebsiteGrid, CTABanner } from '../../components/organisms';
import { SearchBar, FilterDropdown, CategoryChip } from '../../components/molecules';
import { Heading, Text, Button } from '../../components/atoms';
import { categories, websites, ctaBannerData } from '../../data';
import { useFilter } from '../../hooks';
import { SORT_OPTIONS } from '../../utils/constants';

/**
 * Page: CategoryPage
 * Dynamic route (/category/:slug) reusing the WebsiteGrid organism and useFilter hook.
 */
export function CategoryPage() {
  const { slug } = useParams();

  const currentCategory = useMemo(
    () => categories.find((cat) => cat.slug === slug),
    [slug]
  );

  const {
    sortBy,
    setSortBy,
    searchQuery,
    setSearchQuery,
    clearSearch,
    filteredItems,
    categoryCounts,
    isLoading,
    resultCount,
  } = useFilter(websites, {
    initialCategory: slug || 'all',
  });

  if (!currentCategory) {
    return (
      <PageLayout
        seoTitle="Category Not Found | e-yhan"
        badge="Category Lookup"
        badgeIcon="AlertCircle"
        title="Industry Category Not Found"
        subtitle="The requested website category does not exist or may have been moved."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Portfolio', path: '/portfolio' },
          { label: 'Not Found' },
        ]}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <Button variant="primary" size="lg" to="/portfolio" leftIcon="LayoutGrid">
            Browse All Website Categories
          </Button>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      seoTitle={`${currentCategory.name} Websites | e-yhan Digital Solutions`}
      seoDescription={currentCategory.description}
      badge={currentCategory.highlight || 'Industry Solution'}
      badgeIcon={currentCategory.icon || 'Folder'}
      title={`${currentCategory.name} Websites`}
      subtitle={currentCategory.description}
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'Portfolio', path: '/portfolio' },
        { label: currentCategory.name },
      ]}
      headerActions={
        <Button
          variant="primary"
          size="md"
          to={`/contact?category=${encodeURIComponent(currentCategory.name)}`}
          rightIcon="ArrowUpRight"
        >
          Request {currentCategory.shortName} Site
        </Button>
      }
      footerBannerSlot={<CTABanner {...ctaBannerData} />}
    >
      <section className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Search & Sort Controls */}
        <div className="p-4 sm:p-6 rounded-3xl bg-white dark:bg-navy-900 border border-navy-200/80 dark:border-navy-800 shadow-soft flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="w-full md:max-w-md">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              onClear={clearSearch}
              placeholder={`Search within ${currentCategory.name}...`}
            />
          </div>

          <div className="flex flex-wrap items-center justify-between md:justify-end gap-3">
            <Text size="xs" variant="muted" className="font-medium">
              <strong className="text-navy-900 dark:text-white">{resultCount}</strong>{' '}
              {resultCount === 1 ? 'system' : 'systems'} in {currentCategory.shortName}
            </Text>
            <FilterDropdown
              id="category-sort"
              label="Sort By"
              value={sortBy}
              options={SORT_OPTIONS}
              onChange={setSortBy}
            />
          </div>
        </div>

        {/* Reused WebsiteGrid Organism */}
        <WebsiteGrid
          websites={filteredItems}
          isLoading={isLoading}
          onResetFilters={clearSearch}
          resetButtonLabel="Clear Search Keyword"
        />

        {/* Explore Other Industry Categories */}
        <div className="pt-10 border-t border-navy-200/80 dark:border-navy-800">
          <div className="flex items-center justify-between mb-4">
            <Heading as="h3" size="sm">
              Explore Other Industry Categories
            </Heading>
            <Link
              to="/portfolio"
              className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline"
            >
              View All Categories
            </Link>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <Link key={cat.slug} to={`/category/${cat.slug}`}>
                <CategoryChip
                  label={cat.shortName || cat.name}
                  icon={cat.icon}
                  count={categoryCounts[cat.slug]}
                  isActive={cat.slug === slug}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default CategoryPage;
