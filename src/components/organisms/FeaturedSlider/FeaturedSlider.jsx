import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Icon, Badge, Heading, Text, Tag } from '../../atoms';
import { SectionTitle, PriceTag } from '../../molecules';
import { cn } from '../../../utils/formatters';

/**
 * Organism: FeaturedSlider
 * Interactive spotlight carousel showcasing featured ready-made website systems.
 */
export function FeaturedSlider({
  websites = [],
  eyebrow = 'Curated Web Solutions',
  title = 'Featured Websites for Your Business',
  subtitle = 'Production-tested digital solutions ready to be customized with your brand, pricing, and domain.',
  viewAllLabel = 'Browse All Websites',
  viewAllPath = '/portfolio',
  requestLabel = 'Get This Website',
  detailsLabel = 'Details',
  className = '',
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const total = websites.length;

  const handlePrev = useCallback(() => {
    if (!total) return;
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    if (!total) return;
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  if (!total) return null;

  const currentSite = websites[activeIndex] || websites[0];

  return (
    <section
      className={cn(
        'py-14 sm:py-20 bg-white dark:bg-navy-950 text-navy-900 dark:text-white relative overflow-hidden border-y border-navy-200/80 dark:border-navy-800/80',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <SectionTitle
            eyebrow={eyebrow}
            eyebrowIcon="Sparkles"
            title={title}
            subtitle={subtitle}
            align="left"
            className="!mb-0"
          />

          {/* Slider Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous featured website"
              className="w-10 h-10 rounded-[5px] border border-navy-200/90 dark:border-navy-700 bg-white dark:bg-navy-900 text-navy-800 dark:text-white hover:bg-brand-50 dark:hover:bg-navy-800 flex items-center justify-center shadow-sm transition-all"
            >
              <Icon name="ChevronLeft" size="sm" />
            </button>
            <span className="text-xs font-semibold text-navy-600 dark:text-navy-300 px-2 font-mono">
              {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next featured website"
              className="w-10 h-10 rounded-[5px] border border-navy-200/90 dark:border-navy-700 bg-white dark:bg-navy-900 text-navy-800 dark:text-white hover:bg-brand-50 dark:hover:bg-navy-800 flex items-center justify-center shadow-sm transition-all"
            >
              <Icon name="ChevronRight" size="sm" />
            </button>
          </div>
        </div>

        {/* Main Active Slide Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSite.id}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -18 }}
            transition={{ duration: 0.28 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center bg-navy-50/70 dark:bg-navy-900/60 border border-navy-200/90 dark:border-navy-700/80 rounded-[5px] p-4 sm:p-7 lg:p-10 shadow-soft dark:shadow-elevated"
          >
            {/* Left Image Preview */}
            <div className="lg:col-span-7 overflow-hidden rounded-[5px] border border-navy-200/80 dark:border-navy-700 bg-white dark:bg-navy-950 p-2 sm:p-3 flex items-center justify-center">
              <img
                src={currentSite.thumbnail}
                alt={currentSite.title}
                className="w-full h-auto max-h-[380px] sm:max-h-[440px] object-contain rounded-[5px]"
              />
            </div>

            {/* Right Specification Details */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="brand" size="sm" className="rounded-[5px]">
                  {currentSite.categoryName}
                </Badge>
                {currentSite.turnaround && (
                  <Badge variant="accent" size="sm" icon="Clock" className="rounded-[5px]">
                    {currentSite.turnaround}
                  </Badge>
                )}
              </div>

              <Heading as="h3" size="lg" className="text-navy-900 dark:text-white text-lg sm:text-2xl font-bold">
                {currentSite.title}
              </Heading>

              <Text size="sm" variant="muted" className="text-navy-600 dark:text-navy-300 text-xs sm:text-sm leading-relaxed">
                {currentSite.description}
              </Text>

              {/* Key Features List */}
              <ul className="space-y-2 pt-1">
                {(currentSite.features || []).slice(0, 4).map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-xs sm:text-sm text-navy-700 dark:text-navy-200">
                    <Icon name="CheckCircle2" size="xs" className="text-brand-600 dark:text-brand-400 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {(currentSite.techStack || []).map((tech) => (
                  <Tag
                    key={tech}
                    label={tech}
                    size="sm"
                    className="bg-white dark:bg-navy-900/90 text-navy-700 dark:text-navy-200 border-navy-200/80 dark:border-navy-700 rounded-[5px]"
                  />
                ))}
              </div>

              {/* Price & Actions */}
              <div className="pt-4 border-t border-navy-200/80 dark:border-navy-700/80 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
                <PriceTag
                  amount={currentSite.price}
                  size="md"
                />
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                  <Button
                    variant="outline"
                    size="sm"
                    to={currentSite.demoUrl || `/portfolio/${currentSite.slug}`}
                    leftIcon="Eye"
                    className="rounded-[5px]"
                  >
                    Live Preview
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    to={`/portfolio/${currentSite.slug}`}
                    rightIcon="ArrowRight"
                    className="rounded-[5px]"
                  >
                    {detailsLabel}
                  </Button>
                  <Button
                    variant="accent"
                    size="sm"
                    to={`/contact?website=${encodeURIComponent(currentSite.title)}&category=${encodeURIComponent(currentSite.categoryName)}`}
                    className="rounded-[5px]"
                  >
                    {requestLabel}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Selector Thumbnails & View All Link */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {websites.map((site, index) => (
              <button
                key={site.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  'px-3 py-1.5 rounded-[5px] text-xs font-semibold transition-all duration-200 border',
                  index === activeIndex
                    ? 'bg-brand-600 text-white border-brand-500 shadow-sm'
                    : 'bg-white dark:bg-navy-900/80 text-navy-700 dark:text-navy-300 border-navy-200 dark:border-navy-700 hover:text-navy-900 dark:hover:text-white hover:border-brand-500/50'
                )}
              >
                {site.title}
              </button>
            ))}
          </div>

          <Button
            variant="outline"
            size="md"
            to={viewAllPath}
            rightIcon="ArrowUpRight"
            className="rounded-[5px] border-navy-200 dark:border-navy-700 text-navy-800 dark:text-white hover:bg-navy-50 dark:hover:bg-navy-900 shrink-0"
          >
            {viewAllLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}

FeaturedSlider.propTypes = {
  websites: PropTypes.arrayOf(PropTypes.object).isRequired,
  eyebrow: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  viewAllLabel: PropTypes.string,
  viewAllPath: PropTypes.string,
  requestLabel: PropTypes.string,
  detailsLabel: PropTypes.string,
  className: PropTypes.string,
};

export default FeaturedSlider;
