import { useState, useMemo, useEffect, useCallback } from 'react';
import { useSearch } from './useSearch';

/**
 * Custom hook encapsulating filtering by category, searching by keyword,
 * and sorting website items.
 * @param {Array} items - Array of website objects
 * @param {Object} options - Initial filter/sort configuration
 */
export function useFilter(items = [], options = {}) {
  const {
    initialCategory = 'all',
    initialSort = 'popular',
    initialSearch = '',
    enableLoadingTransition = true,
    initialLoading = true,
    loadingDuration = 320,
  } = options;

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState(initialSort);
  const [isLoading, setIsLoading] = useState(initialLoading);

  // Initial skeleton loader simulation on mount
  useEffect(() => {
    if (initialLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, loadingDuration);
      return () => clearTimeout(timer);
    }
  }, [initialLoading, loadingDuration]);

  const { searchQuery, setSearchQuery, clearSearch, searchedItems } = useSearch(
    items,
    ['title', 'shortDescription', 'description', 'categoryName', 'techStack', 'clientType'],
    initialSearch
  );

  // Sync external initialCategory changes (e.g., when navigating between /category/:slug routes)
  useEffect(() => {
    if (initialCategory !== selectedCategory) {
      if (enableLoadingTransition) {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), loadingDuration);
        setSelectedCategory(initialCategory);
        return () => clearTimeout(timer);
      }
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory, selectedCategory, enableLoadingTransition, loadingDuration]);

  const handleCategoryChange = useCallback(
    (categorySlug) => {
      if (enableLoadingTransition && categorySlug !== selectedCategory) {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), loadingDuration);
      }
      setSelectedCategory(categorySlug);
    },
    [enableLoadingTransition, selectedCategory, loadingDuration]
  );

  const handleSortChange = useCallback(
    (newSort) => {
      if (enableLoadingTransition && newSort !== sortBy) {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 240);
      }
      setSortBy(newSort);
    },
    [enableLoadingTransition, sortBy]
  );

  const handleSearchChange = useCallback(
    (val) => {
      if (enableLoadingTransition) {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 260);
      }
      setSearchQuery(val);
    },
    [enableLoadingTransition, setSearchQuery]
  );

  const resetFilters = useCallback(() => {
    if (enableLoadingTransition) {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 240);
    }
    setSelectedCategory('all');
    setSortBy('popular');
    clearSearch();
  }, [enableLoadingTransition, clearSearch]);

  // Compute counts per category
  const categoryCounts = useMemo(() => {
    const counts = { all: items.length };
    items.forEach((item) => {
      if (item.category) {
        counts[item.category] = (counts[item.category] || 0) + 1;
      }
    });
    return counts;
  }, [items]);

  // Filter by category and apply sorting
  const filteredItems = useMemo(() => {
    const byCategory =
      selectedCategory === 'all' || !selectedCategory
        ? searchedItems
        : searchedItems.filter((item) => item.category === selectedCategory);

    const sorted = [...byCategory].sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
        case 'price-asc':
          return Number(a.price || 0) - Number(b.price || 0);
        case 'price-desc':
          return Number(b.price || 0) - Number(a.price || 0);
        case 'popular':
        default: {
          if (a.featured !== b.featured) return a.featured ? -1 : 1;
          return Number(b.popularScore || 0) - Number(a.popularScore || 0);
        }
      }
    });

    return sorted;
  }, [searchedItems, selectedCategory, sortBy]);

  return {
    selectedCategory,
    setSelectedCategory: handleCategoryChange,
    sortBy,
    setSortBy: handleSortChange,
    searchQuery,
    setSearchQuery: handleSearchChange,
    clearSearch,
    resetFilters,
    filteredItems,
    categoryCounts,
    isLoading,
    totalCount: items.length,
    resultCount: filteredItems.length,
  };
}

export default useFilter;
