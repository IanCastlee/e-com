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
  eyebrow = 'Flagship Storefront Systems',
  title = 'Featured Ready-Made Websites',
  subtitle = 'Production-tested digital solutions ready to be customized with your brand, pricing, and domain.',
  viewAllLabel = 'Browse All 12+ Websites',
  viewAllPath = '/portfolio',
  requestLabel = 'Request This System',
  detailsLabel = 'Inspect System Details',
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
        'py-16 sm:py-24 bg-navy-900 dark:bg-navy-950 text-white relative overflow-hidden border-y border-navy-800',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <SectionTitle
            eyebrow={eyebrow}
            eyebrowIcon="Star"
            title={title}
            subtitle={subtitle}
            align="left"
            theme="dark"
            className="!mb-0"
          />

          {/* Slider Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrev}
              aria-label="Previous featured website"
              className="w-11 h-11 !p-0 rounded-xl border-navy-700 text-white hover:bg-navy-800"
            >
              <Icon name="ChevronLeft" size="md" />
            </Button>
            <span className="text-xs font-semibold text-navy-300 px-2">
              {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={handleNext}
              aria-label="Next featured website"
              className="w-11 h-11 !p-0 rounded-xl border-navy-700 text-white hover:bg-navy-800"
            >
              <Icon name="ChevronRight" size="md" />
            </Button>
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
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center bg-navy-800/60 border border-navy-700/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-elevated"
          >
            {/* Left Image Preview */}
            <div className="lg:col-span-7 overflow-hidden rounded-none border border-navy-700 bg-navy-950 flex items-center justify-center">
              <img
                src={currentSite.thumbnail}
                alt={currentSite.title}
                className="w-full h-auto max-h-[440px] object-contain rounded-none"
              />
            </div>

            {/* Right Specification Details */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <Badge variant="solid" size="sm">
                  {currentSite.categoryName}
                </Badge>
                {currentSite.turnaround && (
                  <Badge variant="accent" size="sm" icon="Clock">
                    {currentSite.turnaround}
                  </Badge>
                )}
              </div>

              <Heading as="h3" size="lg" color="light">
                {currentSite.title}
              </Heading>

              <Text size="sm" variant="light" className="text-navy-300">
                {currentSite.description}
              </Text>

              {/* Key Features List */}
              <ul className="space-y-2 pt-1">
                {(currentSite.features || []).slice(0, 4).map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-navy-200">
                    <Icon name="CheckCircle2" size="sm" className="text-brand-400 mt-0.5 shrink-0" />
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
                    className="bg-navy-900/90 text-navy-200 border-navy-700"
                  />
                ))}
              </div>

              {/* Price & Actions */}
              <div className="pt-4 border-t border-navy-700/80 flex flex-wrap items-center justify-between gap-4">
                <PriceTag
                  amount={currentSite.price}
                  size="md"
                  className="[&_span]:!text-white"
                />
                <div className="flex flex-wrap items-center gap-2.5">
                  <Button
                    variant="primary"
                    size="md"
                    to={`/portfolio/${currentSite.slug}`}
                    rightIcon="ArrowRight"
                  >
                    {detailsLabel}
                  </Button>
                  <Button
                    variant="accent"
                    size="md"
                    to={`/contact?website=${encodeURIComponent(currentSite.title)}&category=${encodeURIComponent(currentSite.categoryName)}`}
                  >
                    {requestLabel}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Selector Thumbnails & View All Link */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {websites.map((site, index) => (
              <button
                key={site.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  'px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border',
                  index === activeIndex
                    ? 'bg-brand-600 text-white border-brand-500 shadow-sm'
                    : 'bg-navy-800/70 text-navy-300 border-navy-700 hover:text-white hover:border-navy-600'
                )}
              >
                {site.title}
              </button>
            ))}
          </div>

          <Button variant="outline" size="md" to={viewAllPath} rightIcon="ArrowUpRight" className="border-navy-700 text-white hover:bg-navy-800 shrink-0">
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
