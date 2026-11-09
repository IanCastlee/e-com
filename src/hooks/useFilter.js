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
  } = options;

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState(initialSort);
  const [isLoading, setIsLoading] = useState(false);

  const { searchQuery, setSearchQuery, clearSearch, searchedItems } = useSearch(
    items,
    ['title', 'shortDescription', 'description', 'categoryName', 'techStack', 'clientType'],
    initialSearch
  );

  // Sync external initialCategory changes (e.g., when navigating between /category/:slug routes)
  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const handleCategoryChange = useCallback(
    (categorySlug) => {
      if (enableLoadingTransition) {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 180);
      }
      setSelectedCategory(categorySlug);
    },
    [enableLoadingTransition]
  );

  const handleSortChange = useCallback(
    (newSort) => {
      if (enableLoadingTransition) {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 150);
      }
      setSortBy(newSort);
    },
    [enableLoadingTransition]
  );

  const resetFilters = useCallback(() => {
    setSelectedCategory('all');
    setSortBy('popular');
    clearSearch();
  }, [clearSearch]);

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
    setSearchQuery,
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
