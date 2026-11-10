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
  const [touchStartX, setTouchStartX] = useState(null);

  const total = localWebsites.length;

  // Touch swipe support for smooth mobile swiping
  const handleTouchStart = (e) => {
    if (e.touches && e.touches.length > 0) {
      setTouchStartX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    if (e.changedTouches && e.changedTouches.length > 0) {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (diff > 45) {
        // Swiped left -> next
        setCurrentIndex((prev) => (prev + 1) % total);
      } else if (diff < -45) {
        // Swiped right -> prev
        setCurrentIndex((prev) => (prev - 1 + total) % total);
      }
    }
    setTouchStartX(null);
  };

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
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/50 via-white to-navy-50 dark:from-navy-950 dark:via-navy-900 dark:to-navy-950 pt-6 pb-12 sm:pt-16 sm:pb-24 border-b border-navy-200/70 dark:border-navy-800/80">
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

      <div className="relative max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Copy Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-6 space-y-4 sm:space-y-6"
          >
            {originBadge && (
              <div className="flex items-center">
                <span className="inline-flex items-center gap-1 sm:gap-1.5 font-semibold text-[10px] sm:text-xs text-brand-700 dark:text-brand-300 bg-brand-500/10 dark:bg-brand-500/15 sm:bg-brand-50 sm:dark:bg-brand-950/60 px-2 py-0.5 sm:px-3 sm:py-1 rounded-[5px] border-0 sm:border sm:border-brand-200 sm:dark:border-brand-800 transition-colors tracking-normal">
                  <Icon name="MapPin" size="xs" className="shrink-0" />
                  <span>{originBadge}</span>
                </span>
              </div>
            )}

            <Heading as="h1" size="2xl" className="tracking-tight leading-tight">
              {headline}{' '}
              {highlightedText && (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400 dark:from-brand-400 dark:to-brand-300">
                  {highlightedText}
                </span>
              )}
            </Heading>

            {subheadline && (
              <Text size="lg" variant="muted" className="max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed">
                {subheadline}
              </Text>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 pt-1 sm:pt-2">
              {primaryCta && (
                <Button
                  variant="primary"
                  size="md"
                  to={primaryCta.path}
                  rightIcon={primaryCta.icon || 'ArrowUpRight'}
                  className="w-full sm:w-auto text-sm sm:text-base py-2.5 sm:py-3.5"
                >
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button
                  variant="white"
                  size="md"
                  to={secondaryCta.path}
                  leftIcon={secondaryCta.icon || 'LayoutGrid'}
                  className="w-full sm:w-auto text-sm sm:text-base py-2.5 sm:py-3.5"
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          </motion.div>

          {/* Right Column: 3D Cascading Auto-Scroll Cards Carousel (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden lg:block lg:col-span-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="relative mx-auto w-full max-w-lg lg:max-w-none min-h-[360px] sm:min-h-[390px] md:h-[410px] flex items-center justify-center select-none px-2 sm:px-0"
            >
              {/* Radial Ambient Lighting Behind Center */}
              <div
                className="absolute inset-x-10 inset-y-10 rounded-full bg-brand-500/15 blur-3xl pointer-events-none"
                aria-hidden="true"
              />

              {/* Left Flanking Card (Desktop Only - Sharp, No Blur, Full Image Display) */}
              {prevItem && (
                <div
                  onClick={() => setCurrentIndex(prevItem.index)}
                  className="hidden sm:flex flex-col justify-between absolute left-0 sm:left-2 lg:left-0 top-1/2 -translate-y-1/2 w-[240px] md:w-[280px] h-[300px] md:h-[330px] rounded-[5px] p-3 md:p-3.5 bg-white/95 dark:bg-navy-950/90 border border-navy-200/80 dark:border-navy-800 shadow-soft dark:shadow-xl opacity-70 hover:opacity-100 transform -rotate-3 scale-90 cursor-pointer transition-all duration-500 ease-out z-10"
                >
                  {/* Sharp Full Image Container — Clean, No Inner Border */}
                  <div className="relative w-full aspect-[16/10] my-1 rounded-[5px] overflow-hidden bg-navy-100/50 dark:bg-navy-950 flex items-center justify-center">
                    <img
                      src={prevItem.website.thumbnail}
                      alt={prevItem.website.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-navy-900 dark:text-white line-clamp-1">
                      {prevItem.website.title}
                    </h4>
                    <p className="text-[11px] text-navy-600 dark:text-navy-300 line-clamp-1 mt-0.5">
                      {prevItem.website.shortDescription}
                    </p>
                    <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-brand-600 dark:text-brand-400">
                      <span>Click to view</span>
                      <Icon name="ChevronRight" size="xs" />
                    </span>
                  </div>
                </div>
              )}

              {/* Right Flanking Card (Desktop Only - Sharp, No Blur, Full Image Display) */}
              {nextItem && (
                <div
                  onClick={() => setCurrentIndex(nextItem.index)}
                  className="hidden sm:flex flex-col justify-between absolute right-0 sm:right-2 lg:right-0 top-1/2 -translate-y-1/2 w-[240px] md:w-[280px] h-[300px] md:h-[330px] rounded-[5px] p-3 md:p-3.5 bg-white/95 dark:bg-navy-950/90 border border-navy-200/80 dark:border-navy-800 shadow-soft dark:shadow-xl opacity-70 hover:opacity-100 transform rotate-3 scale-90 cursor-pointer transition-all duration-500 ease-out z-10"
                >
                  {/* Sharp Full Image Container — Clean, No Inner Border */}
                  <div className="relative w-full aspect-[16/10] my-1 rounded-[5px] overflow-hidden bg-navy-100/50 dark:bg-navy-950 flex items-center justify-center">
                    <img
                      src={nextItem.website.thumbnail}
                      alt={nextItem.website.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-navy-900 dark:text-white line-clamp-1">
                      {nextItem.website.title}
                    </h4>
                    <p className="text-[11px] text-navy-600 dark:text-navy-300 line-clamp-1 mt-0.5">
                      {nextItem.website.shortDescription}
                    </p>
                    <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-brand-600 dark:text-brand-400">
                      <span>Click to view</span>
                      <Icon name="ChevronRight" size="xs" />
                    </span>
                  </div>
                </div>
              )}

              {/* Center Active Focal Card (Desktop Responsive) */}
              {currentItem && (
                <div className="relative w-full max-w-[340px] sm:w-[360px] md:w-[410px] rounded-[5px] overflow-hidden bg-white dark:bg-navy-950 border border-navy-200/80 dark:border-navy-800 shadow-xl dark:shadow-2xl z-20 transform scale-100 transition-all duration-500 ease-out flex flex-col justify-between group">
                  {/* Dedicated Full Image Screen Showcase — Full Bleed */}
                  <div className="relative w-full aspect-[16/10] bg-navy-100/50 dark:bg-navy-950 flex items-center justify-center">
                    {/* Free Customization Badge */}
                    <div className="absolute top-2.5 left-2.5 z-20 pointer-events-none">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[5px] text-[10px] sm:text-xs font-bold bg-amber-400 text-navy-950 shadow-sm">
                        <Icon name="Sparkles" size="xs" />
                        <span>Free Customization</span>
                      </span>
                    </div>

                    <Link
                      to={`/portfolio/${currentItem.website.slug}`}
                      className="w-full h-full flex items-center justify-center cursor-pointer"
                      title={`View ${currentItem.website.title}`}
                    >
                      <img
                        src={currentItem.website.thumbnail}
                        alt={currentItem.website.title}
                        className="w-full h-full object-contain drop-shadow-sm transform group-hover:scale-[1.02] transition-transform duration-500"
                        loading="eager"
                      />
                    </Link>
                  </div>

                  {/* Card Content with Padding */}
                  <div className="p-3.5 sm:p-4 text-center flex flex-col items-center">
                    <Link
                      to={`/portfolio/${currentItem.website.slug}`}
                      className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                    >
                      <h3 className="font-display font-bold text-sm sm:text-base md:text-xl text-navy-900 dark:text-white tracking-tight leading-snug line-clamp-1">
                        {currentItem.website.title}
                      </h3>
                    </Link>

                    <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-navy-600 dark:text-navy-300 line-clamp-2 leading-relaxed px-1">
                      {currentItem.website.shortDescription}
                    </p>
                  </div>

                  {/* Card Action Footer */}
                  <div className="mt-3 pt-3 border-t border-navy-100 dark:border-white/10 w-full flex items-center justify-between px-1">
                    <a
                      href={currentItem.website.demoUrl || `/portfolio/${currentItem.website.slug}`}
                      target={currentItem.website.demoUrl ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-600 dark:text-brand-400 hover:underline"
                    >
                      <Icon name="Eye" size="xs" />
                      <span>Live Preview</span>
                    </a>
                    <Link
                      to={`/portfolio/${currentItem.website.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-navy-800 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                    >
                      <span>Details</span>
                      <Icon name="ArrowRight" size="xs" />
                    </Link>
                  </div>
                </div>
              )}

              {/* Floating Desktop-only Navigation Arrows */}
              <button
                type="button"
                onClick={() => setCurrentIndex((prev) => (prev - 1 + total) % total)}
                aria-label="Previous website showcase"
                className="hidden sm:flex absolute -left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-[5px] bg-white/95 dark:bg-navy-900/90 hover:bg-brand-600 hover:text-white text-navy-800 dark:text-white border border-navy-200/90 dark:border-white/20 shadow-lg items-center justify-center transition-all"
              >
                <Icon name="ChevronLeft" size="sm" />
              </button>
              <button
                type="button"
                onClick={() => setCurrentIndex((prev) => (prev + 1) % total)}
                aria-label="Next website showcase"
                className="hidden sm:flex absolute -right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-[5px] bg-white/95 dark:bg-navy-900/90 hover:bg-brand-600 hover:text-white text-navy-800 dark:text-white border border-navy-200/90 dark:border-white/20 shadow-lg items-center justify-center transition-all"
              >
                <Icon name="ChevronRight" size="sm" />
              </button>
            </div>

            {/* Slider Dots Indicator */}
            <div className="mt-4 sm:mt-5 flex items-center justify-center gap-1.5 px-1">
              {localWebsites.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setCurrentIndex(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === dotIdx ? 'w-6 sm:w-7 bg-brand-500' : 'w-2 bg-navy-300 dark:bg-navy-700'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Mobile Feed-Style Scrollable Showcase (lg:hidden) */}
          <div className="lg:hidden col-span-1 space-y-4 pt-4">
            <div className="flex items-center justify-between px-1 mb-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-navy-800 dark:text-navy-100">
                  Featured Website Feed
                </span>
              </div>
              <span className="text-[11px] font-semibold text-brand-600 dark:text-brand-400 bg-brand-500/10 px-2.5 py-0.5 rounded-[5px] border border-brand-500/20">
                {localWebsites.length} Designs
              </span>
            </div>

            {/* Scrollable Feed List */}
            <div className="space-y-4">
              {localWebsites.map((site) => (
                <div
                  key={site.id}
                  className="rounded-[5px] overflow-hidden bg-white dark:bg-navy-900 border border-navy-200/80 dark:border-navy-800 shadow-sm flex flex-col justify-between"
                >
                  {/* Website Preview Image Showcase — Full Bleed (Sagad sa taas, kaliwa, at kanan) */}
                  <div className="relative w-full aspect-[16/10] bg-navy-100/50 dark:bg-navy-950 flex items-center justify-center active:scale-[0.98] transition-transform overflow-hidden">
                    {/* Free Customization Badge */}
                    <div className="absolute top-2.5 left-2.5 z-20 pointer-events-none">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[5px] text-[10px] font-bold bg-amber-400 text-navy-950 shadow-sm">
                        <Icon name="Sparkles" size="xs" />
                        <span>Free Customization</span>
                      </span>
                    </div>

                    <Link
                      to={`/portfolio/${site.slug}`}
                      className="w-full h-full flex items-center justify-center"
                      title={`View ${site.title}`}
                    >
                      <img
                        src={site.thumbnail}
                        alt={site.title}
                        className="w-full h-full object-cover sm:object-contain drop-shadow-sm"
                        loading="lazy"
                      />
                    </Link>
                  </div>

                  {/* Card Content & Action Link */}
                  <div className="p-3.5 flex flex-col flex-1 justify-between">
                    <div>
                      <Link
                        to={`/portfolio/${site.slug}`}
                        className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                      >
                        <h4 className="font-display font-bold text-sm text-navy-900 dark:text-white tracking-tight leading-snug line-clamp-1">
                          {site.title}
                        </h4>
                      </Link>
                      <p className="mt-1 text-xs text-navy-600 dark:text-navy-300 line-clamp-2 leading-relaxed">
                        {site.shortDescription}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-navy-100 dark:border-navy-800/80 flex items-center justify-between">
                      <a
                        href={site.demoUrl || `/portfolio/${site.slug}`}
                        target={site.demoUrl ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline"
                      >
                        <Icon name="Eye" size="xs" />
                        <span>Live Preview</span>
                      </a>
                      <Link
                        to={`/portfolio/${site.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-navy-800 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                      >
                        <span>Details</span>
                        <Icon name="ArrowRight" size="xs" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Button sa baba */}
            <div className="pt-2 pb-1 text-center">
              <Button
                variant="white"
                size="md"
                to="/portfolio"
                leftIcon="LayoutGrid"
                rightIcon="ArrowRight"
                className="w-full py-3 justify-center text-sm font-bold shadow-soft hover:shadow-glow"
              >
                View All Websites in Catalog
              </Button>
            </div>
          </div>
        </div>

        {/* Corporate Metrics Strip */}
        {companyStats.length > 0 && (
          <div className="mt-8 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
            {companyStats.map((stat) => (
              <div
                key={stat.label}
                className="p-3 sm:p-5 md:p-6 rounded-[5px] bg-white/90 dark:bg-navy-900/90 backdrop-blur-sm border border-navy-200/80 dark:border-navy-800 shadow-soft"
              >
                <div className="font-display text-base sm:text-2xl md:text-3xl font-extrabold text-brand-600 dark:text-brand-400 leading-tight">
                  {stat.value}
                </div>
                <Heading as="h3" size="sm" className="mt-1 text-xs sm:text-sm md:text-base font-bold line-clamp-1">
                  {stat.label}
                </Heading>
                {stat.detail && (
                  <Text size="xs" variant="muted" className="mt-0.5 text-[10px] sm:text-xs leading-normal line-clamp-2">
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
