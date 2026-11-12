import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { Heading, Text, Button, Icon, Badge, Tag } from '../../atoms';
import { WebsiteCard, PriceTag } from '../../molecules';
import { cn } from '../../../utils/formatters';

/**
 * Organism: WebsiteGrid
 * Displays a responsive grid of WebsiteCards, loading skeletons, empty state,
 * and an interactive multi-device Live Demo Preview Modal.
 */
export function WebsiteGrid({
  websites = [],
  isLoading = false,
  skeletonCount = 6,
  emptyTitle = 'No matching websites found',
  emptyDescription = 'Try adjusting your search keywords or selecting a different industry category.',
  resetButtonLabel = 'Reset All Filters',
  onResetFilters,
  className = '',
}) {
  const [previewSite, setPreviewSite] = useState(null);

  if (isLoading) {
    return (
      <div
        aria-busy="true"
        aria-label="Loading website solutions"
        className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7', className)}
      >
        {Array.from({ length: skeletonCount }).map((_, idx) => (
          <div
            key={`skeleton-${idx}`}
            className="flex flex-col rounded-2xl bg-white dark:bg-navy-900 border border-navy-200/80 dark:border-navy-800/90 overflow-hidden shadow-soft animate-pulse"
          >
            {/* Thumbnail Skeleton */}
            <div className="relative aspect-[16/9] w-full bg-navy-200/80 dark:bg-navy-800 flex items-center justify-center border-b border-navy-100 dark:border-navy-800/80">
              <Icon name="Image" size="md" className="text-navy-300 dark:text-navy-700" />
              {/* Badge placeholder */}
              <div className="absolute top-3 left-3 h-5 w-28 bg-navy-300/80 dark:bg-navy-700/80 rounded-full" />
            </div>

            {/* Card Body Skeleton */}
            <div className="flex flex-col flex-1 p-5 sm:p-6 space-y-4">
              {/* Title */}
              <div className="h-5 w-3/4 bg-navy-200 dark:bg-navy-800 rounded-md" />

              {/* Short Description */}
              <div className="space-y-2 flex-1">
                <div className="h-3.5 w-full bg-navy-100 dark:bg-navy-800/60 rounded" />
                <div className="h-3.5 w-5/6 bg-navy-100 dark:bg-navy-800/60 rounded" />
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                <div className="h-5 w-16 bg-navy-100 dark:bg-navy-800/70 rounded-md" />
                <div className="h-5 w-12 bg-navy-100 dark:bg-navy-800/70 rounded-md" />
                <div className="h-5 w-20 bg-navy-100 dark:bg-navy-800/70 rounded-md" />
              </div>

              {/* Price & Action Footer */}
              <div className="mt-4 pt-4 border-t border-navy-100 dark:border-navy-800/80 flex items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="h-2.5 w-14 bg-navy-200/70 dark:bg-navy-800/70 rounded" />
                  <div className="h-5 w-20 bg-navy-200 dark:bg-navy-800 rounded-md" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-20 bg-navy-100 dark:bg-navy-800 rounded-xl" />
                  <div className="h-8 w-16 bg-brand-500/20 dark:bg-brand-500/30 rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!websites || websites.length === 0) {
    return (
      <div className="rounded-3xl bg-white dark:bg-navy-900 border border-dashed border-navy-300 dark:border-navy-700 p-12 sm:p-16 text-center max-w-2xl mx-auto my-6">
        <div className="w-16 h-16 rounded-2xl bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 inline-flex items-center justify-center mb-4">
          <Icon name="SearchX" size="xl" />
        </div>
        <Heading as="h3" size="lg" align="center">
          {emptyTitle}
        </Heading>
        <Text size="md" variant="muted" className="mt-2 max-w-md mx-auto">
          {emptyDescription}
        </Text>
        {onResetFilters && (
          <div className="mt-6">
            <Button variant="primary" size="md" leftIcon="RotateCcw" onClick={onResetFilters}>
              {resetButtonLabel}
            </Button>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7', className)}>
        {websites.map((site, idx) => (
          <motion.div
            key={site.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: Math.min(idx * 0.04, 0.25) }}
          >
            <WebsiteCard
              website={site}
              onPreviewDemo={(selected) => {
                setPreviewSite(selected);
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Interactive Live Demo Preview Modal */}
      <AnimatePresence>
        {previewSite && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-6 bg-navy-950/80 backdrop-blur-sm"
            onClick={() => setPreviewSite(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${previewSite.title} Interactive Preview`}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl bg-white dark:bg-navy-900 rounded-3xl border border-navy-200 dark:border-navy-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
            >
              {/* Modal Top Toolbar */}
              <div className="px-4 sm:px-6 py-3.5 bg-navy-900 text-white flex items-center justify-between gap-3 border-b border-navy-800">
                <div className="flex items-center gap-3">
                  <Badge variant="brand" size="sm">
                    {previewSite.categoryName}
                  </Badge>
                  <Heading as="h3" size="sm" color="light" className="line-clamp-1">
                    {previewSite.title}
                  </Heading>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setPreviewSite(null)}
                  aria-label="Close preview"
                  className="text-navy-200 hover:text-white !p-1.5"
                >
                  <Icon name="X" size="md" />
                </Button>
              </div>

              {/* Viewport Canvas */}
              <div className="flex-1 overflow-y-auto bg-navy-100 dark:bg-navy-950 p-4 sm:p-8 flex flex-col items-center justify-center">
                <div className="w-full bg-navy-900 rounded-none overflow-hidden shadow-2xl border border-navy-700/80">
                  <img
                    src={previewSite.thumbnail}
                    alt={previewSite.title}
                    className="w-full h-auto max-h-[60vh] object-contain mx-auto rounded-none"
                  />
                  <div className="p-5 sm:p-6 bg-white dark:bg-navy-900 border-t border-navy-200 dark:border-navy-800 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <Text size="sm" variant="muted">
                        {previewSite.shortDescription}
                      </Text>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {(previewSite.features || []).slice(0, 4).map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs text-navy-700 dark:text-navy-200">
                          <Icon name="CheckCircle2" size="xs" className="text-brand-500" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Bottom Action Bar */}
              <div className="px-5 sm:px-6 py-4 bg-white dark:bg-navy-900 border-t border-navy-200 dark:border-navy-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <PriceTag amount={previewSite.price} size="sm" />
                  <div className="hidden md:flex flex-wrap gap-1.5">
                    {(previewSite.techStack || []).map((t) => (
                      <Tag key={t} label={t} size="sm" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Button
                    variant="outline"
                    size="md"
                    to={`/portfolio/${previewSite.slug}`}
                    onClick={() => setPreviewSite(null)}
                  >
                    Full Specifications
                  </Button>
                  <Button
                    variant="primary"
                    size="md"
                    to={`/contact?website=${encodeURIComponent(previewSite.title)}&category=${encodeURIComponent(previewSite.categoryName)}`}
                    rightIcon="ArrowRight"
                    onClick={() => setPreviewSite(null)}
                  >
                    Request This Website
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

WebsiteGrid.propTypes = {
  websites: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool,
  skeletonCount: PropTypes.number,
  emptyTitle: PropTypes.string,
  emptyDescription: PropTypes.string,
  resetButtonLabel: PropTypes.string,
  onResetFilters: PropTypes.func,
  className: PropTypes.string,
};

export default WebsiteGrid;
