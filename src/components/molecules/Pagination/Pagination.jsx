import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../atoms';
import { cn } from '../../../utils/formatters';

/**
 * Molecule: Pagination
 * Accessible pagination controls with page numbers, prev/next arrows,
 * and result count indicator.
 */
export function Pagination({
  currentPage = 1,
  totalPages = 1,
  totalItems = 0,
  itemsPerPage = 6,
  onPageChange,
  className = '',
}) {
  if (totalItems === 0) return null;

  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  // Generate page numbers with smart ellipsis
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) {
        pages.push('...');
      }
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) pages.push(i);
      }
      if (currentPage < totalPages - 2) {
        pages.push('...');
      }
      if (!pages.includes(totalPages)) {
        pages.push(totalPages);
      }
    }
    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div
      className={cn(
        'w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 pb-2 border-t border-navy-200/80 dark:border-navy-800/80',
        className
      )}
    >
      {/* Result Status Text */}
      <div className="text-xs sm:text-sm text-navy-500 dark:text-navy-400 font-medium order-2 sm:order-1">
        Showing{' '}
        <span className="text-navy-900 dark:text-white font-semibold">
          {startItem}–{endItem}
        </span>{' '}
        of{' '}
        <span className="text-navy-900 dark:text-white font-semibold">
          {totalItems}
        </span>{' '}
        websites
      </div>

      {/* Pagination Navigation Controls */}
      <nav
        aria-label="Website catalog pagination"
        className="flex items-center gap-1.5 order-1 sm:order-2 select-none"
      >
        {/* Previous Button */}
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          aria-label="Previous page"
          className={cn(
            'flex items-center gap-1 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border',
            currentPage <= 1
              ? 'border-transparent text-navy-400 dark:text-navy-600 opacity-50 cursor-not-allowed'
              : 'border-navy-200 dark:border-navy-800 bg-white dark:bg-navy-900 text-navy-700 dark:text-navy-200 hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-400 shadow-sm active:scale-95'
          )}
        >
          <Icon name="ChevronLeft" size="sm" />
          <span className="hidden sm:inline">Prev</span>
        </button>

        {/* Page Number Buttons */}
        <div className="flex items-center gap-1">
          {pages.map((p, idx) => {
            if (p === '...') {
              return (
                <span
                  key={`ellipsis-${idx}`}
                  className="px-2 text-navy-400 dark:text-navy-600 text-xs sm:text-sm select-none"
                >
                  •••
                </span>
              );
            }

            const isActive = p === currentPage;
            return (
              <button
                key={`page-${p}`}
                type="button"
                onClick={() => onPageChange(p)}
                aria-current={isActive ? 'page' : undefined}
                aria-label={`Page ${p}`}
                className={cn(
                  'w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center',
                  isActive
                    ? 'bg-brand-500 text-white shadow-md shadow-brand-500/30 scale-105 pointer-events-none'
                    : 'border border-navy-200 dark:border-navy-800 bg-white dark:bg-navy-900 text-navy-700 dark:text-navy-200 hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-400 shadow-sm active:scale-95'
                )}
              >
                {p}
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          aria-label="Next page"
          className={cn(
            'flex items-center gap-1 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border',
            currentPage >= totalPages
              ? 'border-transparent text-navy-400 dark:text-navy-600 opacity-50 cursor-not-allowed'
              : 'border-navy-200 dark:border-navy-800 bg-white dark:bg-navy-900 text-navy-700 dark:text-navy-200 hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-400 shadow-sm active:scale-95'
          )}
        >
          <span className="hidden sm:inline">Next</span>
          <Icon name="ChevronRight" size="sm" />
        </button>
      </nav>
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Pagination;
