import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Badge, Heading, Text, Button, Icon } from '../../atoms';
import { Link } from 'react-router-dom';

/**
 * Organism: Hero
 * Corporate hero section featuring value proposition, CTAs, 3D cascading glass auto-scroll carousel, and enterprise metrics.
 */
export function Hero({
  originBadge = '',
  headline = '',
  highlightedText = '',
  subheadline = '',
  primaryCta = { label: 'View Portfolio', path: '/portfolio', icon: 'LayoutGrid' },
  secondaryCta = { label: 'Get a Website', path: '/contact', icon: 'ArrowUpRight' },
  trustBadges = [],
  companyStats = [],
  showcaseWebsites = [],
}) {
  // Only use websites with local thumbnails from the public folder
  const localWebsites = (showcaseWebsites || []).filter(
    (site) => site.thumbnail && site.thumbnail.startsWith('/')
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = localWebsites.length;

  // Auto-scroll through thumbnails every 4 seconds
  useEffect(() => {
    if (!total || isPaused) return undefined;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(interval);
  }, [total, isPaused]);

  // Helper to get cards relative to center
  const getCardAtOffset = (offset) => {
    if (!total) return null;
    const index = (currentIndex + offset + total) % total;
    return { website: localWebsites[index], index };
  };

  const prevItem = getCardAtOffset(-1);
  const currentItem = getCardAtOffset(0);
  const nextItem = getCardAtOffset(1);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/50 via-white to-navy-50 dark:from-navy-950 dark:via-navy-900 dark:to-navy-950 pt-10 pb-16 sm:pt-16 sm:pb-24 border-b border-navy-200/70 dark:border-navy-800/80">
      {/* Subtle Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-brand-400/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-accent-400/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Copy Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-6 space-y-6"
          >
            {originBadge && (
              <div>
                <Badge variant="brand" size="md" icon="MapPin">
                  {originBadge}
                </Badge>
              </div>
            )}

            <Heading as="h1" size="2xl" className="tracking-tight">
              {headline}{' '}
              {highlightedText && (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400 dark:from-brand-400 dark:to-brand-300">
                  {highlightedText}
                </span>
              )}
            </Heading>

            {subheadline && (
              <Text size="lg" variant="muted" className="max-w-2xl">
                {subheadline}
              </Text>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {primaryCta && (
                <Button
                  variant="primary"
                  size="lg"
                  to={primaryCta.path}
                  rightIcon={primaryCta.icon || 'ArrowUpRight'}
                >
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button
                  variant="white"
                  size="lg"
                  to={secondaryCta.path}
                  leftIcon={secondaryCta.icon || 'LayoutGrid'}
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>

            {/* Trust Badges */}
            {trustBadges.length > 0 && (
              <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2.5 border-t border-navy-200/70 dark:border-navy-800/80">
                {trustBadges.map((item) => (
                  <div
                    key={item.label}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-navy-600 dark:text-navy-300"
                  >
                    <Icon name={item.icon || 'CheckCircle2'} size="sm" className="text-brand-600 dark:text-brand-400" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right Column: 3D Cascading Auto-Scroll Cards Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none h-[440px] sm:h-[490px] flex items-center justify-center select-none">
              {/* Radial Ambient Lighting Behind Center */}
              <div
                className="absolute inset-x-10 inset-y-10 rounded-full bg-brand-500/15 blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Left Flanking Card (Sharp, No Blur, Full Image Display) */}
              {prevItem && (
                <div
                  onClick={() => setCurrentIndex(prevItem.index)}
                  className="hidden sm:flex flex-col justify-between absolute left-0 sm:left-2 lg:left-0 w-[240px] md:w-[280px] h-[360px] md:h-[400px] rounded-2xl md:rounded-3xl p-3 md:p-4 bg-navy-950/90 border border-navy-700/80 shadow-xl opacity-60 hover:opacity-95 transform -rotate-3 scale-90 cursor-pointer transition-all duration-500 ease-out z-10"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] md:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30 line-clamp-1">
                      {prevItem.website.categoryName}
                    </span>
                    <span className="text-[10px] font-mono text-navy-400">
                      {String(prevItem.index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Sharp Full Image Container */}
                  <div className="relative w-full aspect-[16/10] my-2 rounded-xl overflow-hidden bg-navy-900/90 border border-white/10 flex items-center justify-center p-1.5">
                    <img
                      src={prevItem.website.thumbnail}
                      alt={prevItem.website.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-white line-clamp-1">
                      {prevItem.website.title}
                    </h4>
                    <p className="text-[11px] text-navy-300 line-clamp-1 mt-0.5">
                      {prevItem.website.shortDescription}
                    </p>
                    <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-brand-400">
                      <span>Click to view</span>
                      <Icon name="ChevronRight" size="xs" />
                    </span>
                  </div>
                </div>
              )}

              {/* Right Flanking Card (Sharp, No Blur, Full Image Display) */}
              {nextItem && (
                <div
                  onClick={() => setCurrentIndex(nextItem.index)}
                  className="hidden sm:flex flex-col justify-between absolute right-0 sm:right-2 lg:right-0 w-[240px] md:w-[280px] h-[360px] md:h-[400px] rounded-2xl md:rounded-3xl p-3 md:p-4 bg-navy-950/90 border border-navy-700/80 shadow-xl opacity-60 hover:opacity-95 transform rotate-3 scale-90 cursor-pointer transition-all duration-500 ease-out z-10"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] md:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30 line-clamp-1">
                      {nextItem.website.categoryName}
                    </span>
                    <span className="text-[10px] font-mono text-navy-400">
                      {String(nextItem.index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Sharp Full Image Container */}
                  <div className="relative w-full aspect-[16/10] my-2 rounded-xl overflow-hidden bg-navy-900/90 border border-white/10 flex items-center justify-center p-1.5">
                    <img
                      src={nextItem.website.thumbnail}
                      alt={nextItem.website.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-white line-clamp-1">
                      {nextItem.website.title}
                    </h4>
                    <p className="text-[11px] text-navy-300 line-clamp-1 mt-0.5">
                      {nextItem.website.shortDescription}
                    </p>
                    <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-brand-400">
                      <span>Click to view</span>
                      <Icon name="ChevronRight" size="xs" />
                    </span>
                  </div>
                </div>
              )}

              {/* Center Active Focal Card (Sharp, Full Image, Explore Website CTA) */}
              {currentItem && (
                <div className="relative w-[300px] sm:w-[360px] md:w-[410px] rounded-2xl sm:rounded-3xl p-4 sm:p-5 bg-gradient-to-b from-navy-900/95 via-navy-950 to-navy-950 border-2 border-brand-400/60 shadow-2xl z-20 transform scale-100 transition-all duration-500 ease-out flex flex-col justify-between group">
                  {/* Top Bar: Category Pill & Slide Counter */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-500/20 text-brand-300 border border-brand-500/30">
                      <Icon name="Sparkles" size="xs" />
                      {currentItem.website.categoryName}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-navy-200 px-2.5 py-1 rounded-full bg-navy-800/80 border border-white/10">
                      {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Dedicated Full Image Screen Showcase — Completely Sharp & Uncropped */}
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-navy-900/80 border border-white/15 shadow-inner flex items-center justify-center p-2 group-hover:border-brand-400/50 transition-colors duration-300">
                    <img
                      src={currentItem.website.thumbnail}
                      alt={currentItem.website.title}
                      className="w-full h-full object-contain drop-shadow-md transform group-hover:scale-[1.02] transition-transform duration-500"
                      loading="eager"
                    />
                  </div>

                  {/* Card Content & Action Button */}
                  <div className="mt-3.5 text-center flex flex-col items-center">
                    <h3 className="font-display font-bold text-base sm:text-lg md:text-xl text-white tracking-tight leading-snug line-clamp-1">
                      {currentItem.website.title}
                    </h3>

                    <p className="mt-1 text-xs sm:text-sm text-navy-200 line-clamp-2 leading-relaxed px-1">
                      {currentItem.website.shortDescription}
                    </p>

                    {/* Explore Website CTA */}
                    <div className="mt-4">
                      <Link
                        to={`/portfolio/${currentItem.website.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-navy-950 font-bold text-xs sm:text-sm shadow-glow transition-all active:scale-95"
                      >
                        <span>Explore Website</span>
                        <Icon name="ArrowUpRight" size="xs" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Arrows for manual control */}
              <button
                type="button"
                onClick={() => setCurrentIndex((prev) => (prev - 1 + total) % total)}
                aria-label="Previous website showcase"
                className="absolute left-1 sm:-left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-navy-900/90 hover:bg-brand-600 text-white border border-white/20 shadow-lg flex items-center justify-center transition-all"
              >
                <Icon name="ChevronLeft" size="sm" />
              </button>
              <button
                type="button"
                onClick={() => setCurrentIndex((prev) => (prev + 1) % total)}
                aria-label="Next website showcase"
                className="absolute right-1 sm:-right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-navy-900/90 hover:bg-brand-600 text-white border border-white/20 shadow-lg flex items-center justify-center transition-all"
              >
                <Icon name="ChevronRight" size="sm" />
              </button>
            </div>

            {/* Slider Dots Indicator */}
            <div className="mt-4 flex items-center justify-center gap-2">
              {localWebsites.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setCurrentIndex(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === dotIdx ? 'w-7 bg-brand-500' : 'w-2 bg-navy-300 dark:bg-navy-700'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Corporate Metrics Strip */}
        {companyStats.length > 0 && (
          <div className="mt-14 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {companyStats.map((stat) => (
              <div
                key={stat.label}
                className="p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-navy-900/90 backdrop-blur-sm border border-navy-200/80 dark:border-navy-800 shadow-soft"
              >
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-brand-600 dark:text-brand-400">
                  {stat.value}
                </div>
                <Heading as="h3" size="sm" className="mt-1">
                  {stat.label}
                </Heading>
                {stat.detail && (
                  <Text size="xs" variant="muted" className="mt-0.5">
                    {stat.detail}
                  </Text>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

Hero.propTypes = {
  originBadge: PropTypes.string,
  headline: PropTypes.string.isRequired,
  highlightedText: PropTypes.string,
  subheadline: PropTypes.string,
  primaryCta: PropTypes.shape({
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    icon: PropTypes.string,
  }),
  secondaryCta: PropTypes.shape({
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    icon: PropTypes.string,
  }),
  trustBadges: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      label: PropTypes.string.isRequired,
    })
  ),
  companyStats: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      detail: PropTypes.string,
    })
  ),
  showcaseWebsites: PropTypes.arrayOf(PropTypes.object),
};

export default Hero;
