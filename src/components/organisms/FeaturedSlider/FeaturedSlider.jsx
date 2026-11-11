import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Icon, Tag } from '../../atoms';
import { SectionTitle } from '../../molecules';
import { cn } from '../../../utils/formatters';

/**
 * Organism: FeaturedSlider
 * Feed-style responsive showcase of featured website solutions.
 * Caps at max 6 items and conditionally displays a "View All" button.
 */
export function FeaturedSlider({
  websites = [],
  eyebrow = 'Curated Web Solutions',
  title = 'Featured Websites for Your Business',
  subtitle = 'Pick a website design that fits your brand. Free logo, colors, and content customization included — inspect the working live preview before paying.',
  viewAllLabel = 'View All Websites in Catalog',
  viewAllPath = '/portfolio',
  maxItems = 6,
  className = '',
}) {
  if (!websites || websites.length === 0) return null;

  const displayWebsites = websites.slice(0, maxItems);
  const hasMoreThanSix = websites.length > maxItems;

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

          <div className="hidden md:flex items-center gap-2 shrink-0">
            <span className="text-xs font-semibold text-brand-600 dark:text-brand-400 bg-brand-500/10 px-3 py-1 rounded-[10px] border border-brand-500/20">
              Showing {displayWebsites.length} of {websites.length} Designs
            </span>
            <Button
              variant="outline"
              size="sm"
              to={viewAllPath}
              rightIcon="ArrowUpRight"
              className="rounded-[10px] border-navy-200 dark:border-navy-700 text-navy-800 dark:text-white hover:bg-navy-50 dark:hover:bg-navy-900"
            >
              Browse All
            </Button>
          </div>
        </div>

        {/* Feed-Style Cards Grid (Mobile 1 col feed, Tablet 2 cols, Desktop 3 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {displayWebsites.map((site) => (
            <div
              key={site.id}
              className="rounded-[10px] overflow-hidden bg-white dark:bg-navy-900/90 border border-navy-200/80 dark:border-navy-800 shadow-soft dark:shadow-lg flex flex-col justify-between hover:shadow-elevated hover:border-brand-500/50 transition-all duration-300 group"
            >
              {/* Website Preview Image Showcase — Full Bleed (Sagad sa taas, kaliwa, at kanan) */}
              <div className="relative w-full aspect-video bg-gradient-to-b from-navy-100/70 to-navy-50/40 dark:from-navy-950 dark:to-navy-900/60 border-b border-navy-100 dark:border-navy-800/80 flex items-center justify-center overflow-hidden">
                {/* Free Customization Badge — Elegant Premium Glassmorphism (Adapts to Light & Dark) */}
                <div className="absolute top-2.5 left-2.5 z-20 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[10px] text-[10px] sm:text-xs font-semibold tracking-wide backdrop-blur-md transition-all duration-300 bg-white/95 text-navy-950 border border-amber-300/80 shadow-[0_2px_10px_rgba(245,158,11,0.15)] dark:bg-navy-950/90 dark:text-amber-300 dark:border-amber-400/40 dark:shadow-[0_0_15px_rgba(245,158,11,0.25)]">
                    <Icon name="Sparkles" size="xs" className="text-amber-500 dark:text-amber-400 shrink-0" />
                    <span>Free Customization</span>
                  </span>
                </div>

                <Link
                  to={`/portfolio/${site.slug}`}
                  className="w-full h-full flex items-center justify-center cursor-pointer"
                  title={`View ${site.title}`}
                >
                  <img
                    src={site.thumbnail}
                    alt={site.title}
                    className="w-full h-full object-contain drop-shadow-sm transform group-hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                </Link>
              </div>

              {/* Card Content & Action Links */}
              <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
                <div>
                  <Link
                    to={`/portfolio/${site.slug}`}
                    className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                  >
                    <h3 className="font-display font-bold text-base sm:text-lg text-navy-900 dark:text-white tracking-tight leading-snug line-clamp-1">
                      {site.title}
                    </h3>
                  </Link>

                  <p className="mt-1 text-xs sm:text-sm text-navy-600 dark:text-navy-300 line-clamp-2 leading-relaxed">
                    {site.shortDescription}
                  </p>

                  {/* Tech Stack Pills */}
                  {site.techStack && site.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2.5">
                      {site.techStack.slice(0, 3).map((tech) => (
                        <Tag
                          key={tech}
                          label={tech}
                          size="sm"
                          className="bg-navy-50 dark:bg-navy-800/80 text-navy-600 dark:text-navy-300 border-navy-200/70 dark:border-navy-700 text-[10px] py-0.5 rounded-[10px]"
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Actions: Live Preview & Details */}
                <div className="mt-4 pt-3 border-t border-navy-100 dark:border-navy-800/80 flex items-center justify-between">
                  <a
                    href={site.demoUrl || `/portfolio/${site.slug}`}
                    target={site.demoUrl ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand-600 dark:text-brand-400 hover:underline"
                  >
                    <Icon name="Eye" size="xs" />
                    <span>Live Preview</span>
                  </a>

                  <Link
                    to={`/portfolio/${site.slug}`}
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-navy-800 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                  >
                    <span>Details</span>
                    <Icon name="ArrowRight" size="xs" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button: Rendered if lumampas sa 6 (or when catalog has 5+) */}
        {(hasMoreThanSix || websites.length >= 5) && (
          <div className="mt-10 sm:mt-12 text-center flex flex-col items-center justify-center gap-2">
            <Button
              variant="primary"
              size="lg"
              to={viewAllPath}
              leftIcon="LayoutGrid"
              rightIcon="ArrowRight"
              className="w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base font-bold shadow-soft hover:shadow-glow rounded-[10px]"
            >
              {viewAllLabel}
            </Button>
            <span className="text-xs text-navy-500 dark:text-navy-400">
              Explore all industry designs with instant live demos & free customization
            </span>
          </div>
        )}
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
  maxItems: PropTypes.number,
  className: PropTypes.string,
};

export default FeaturedSlider;
