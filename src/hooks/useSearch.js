import { useState, useMemo, useCallback } from 'react';

/**
 * Custom hook for searching items by keyword across specified fields.
 * @param {Array} items - Array of data objects to search
 * @param {Array<string>} searchFields - Keys to match against
 * @param {string} initialQuery - Optional initial search term
 */
export function useSearch(
  items = [],
  searchFields = ['title', 'shortDescription', 'description', 'categoryName', 'techStack'],
  initialQuery = ''
) {
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  const clearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  const searchedItems = useMemo(() => {
    const trimmed = searchQuery.trim().toLowerCase();
    if (!trimmed) return items;

    return items.filter((item) =>
      searchFields.some((field) => {
        const value = item?.[field];
        if (Array.isArray(value)) {
          return value.some((entry) => String(entry).toLowerCase().includes(trimmed));
        }
        if (value !== undefined && value !== null) {
          return String(value).toLowerCase().includes(trimmed);
        }
        return false;
      })
    );
  }, [items, searchFields, searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    clearSearch,
    searchedItems,
  };
}

export default useSearch;
