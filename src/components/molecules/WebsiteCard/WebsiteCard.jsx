import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Badge, Tag, Heading, Text, Button, Icon } from '../../atoms';
import { formatCurrencyPHP, cn } from '../../../utils/formatters';

/**
 * Molecule: WebsiteCard
 * Storefront card displaying a ready-made or customizable website solution.
 * Strictly imports only Atoms to comply with Atomic Design rules.
 */
export function WebsiteCard({
  website,
  pricePrefix = 'Starting at',
  demoButtonLabel = 'Live Preview',
  detailsButtonLabel = 'Details',
  featuredBadgeLabel = 'Featured',
  onPreviewDemo,
  className = '',
}) {
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!website) return null;

  const {
    id,
    code,
    title,
    slug,
    category,
    categoryName,
    shortDescription,
    techStack = [],
    pricing,
    price = 55,
    thumbnail,
    featured,
    turnaround,
    demoUrl,
  } = website;

  const detailsPath = `/portfolio/${slug}`;

  return (
    <article
      className={cn(
        'group flex flex-col bg-white dark:bg-navy-900 rounded-[10px] border border-navy-200/80 dark:border-navy-800/90 overflow-hidden shadow-soft hover:shadow-elevated hover:border-brand-500/60 dark:hover:border-brand-500/50 transition-all duration-300',
        className
      )}
    >
      {/* Thumbnail Preview Container with Skeleton Placeholder */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-none bg-gradient-to-b from-navy-100/70 to-navy-50/40 dark:from-navy-950 dark:to-navy-900/60 border-b border-navy-100 dark:border-navy-800 flex items-center justify-center">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-navy-200/70 dark:bg-navy-800/80 animate-pulse flex items-center justify-center pointer-events-none z-0">
            <Icon name="Image" size="md" className="text-navy-300 dark:text-navy-600 animate-pulse" />
          </div>
        )}

        <Link to={detailsPath} aria-label={title} className="flex items-center justify-center w-full h-full relative z-10">
          <img
            src={thumbnail}
            alt={`${title} website preview`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={cn(
              'w-full h-full object-contain rounded-none transform group-hover:scale-[1.03] transition-all duration-500',
              imageLoaded ? 'opacity-100' : 'opacity-0'
            )}
          />
        </Link>

        {/* Free Customization Badge — Elevated to top edge */}
        <div className="absolute top-1.5 left-2 z-20 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[8px] text-[10px] font-semibold tracking-wide backdrop-blur-md transition-all duration-300 bg-white/95 text-navy-950 border border-amber-300/80 shadow-[0_2px_10px_rgba(245,158,11,0.15)] dark:bg-navy-950/90 dark:text-amber-300 dark:border-amber-400/40 dark:shadow-[0_0_15px_rgba(245,158,11,0.25)]">
            <Icon name="Sparkles" size="xs" className="text-amber-500 dark:text-amber-400 shrink-0" />
            <span>Free Customization</span>
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between">
        <div>
          {/* Category Tag */}
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            {categoryName && (
              <span className="text-[10px] font-bold text-brand-700 dark:text-brand-300 bg-brand-500/10 dark:bg-brand-500/20 px-2 py-0.5 rounded-[5px] border border-brand-500/20">
                {categoryName}
              </span>
            )}
          </div>

          <Link
            to={detailsPath}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-md"
          >
            <Heading
              as="h3"
              size="md"
              className="group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-1"
            >
              {title}
            </Heading>
          </Link>

          <div className="flex items-center gap-1.5 mt-1.5 text-xs text-navy-500 dark:text-navy-400 font-medium">
            <span>by</span>
            <span className="font-semibold text-navy-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
              e-yhan
            </span>
          </div>

          {/* Pricing Options */}
          {pricing && (
            <div className="mt-3.5 pt-2.5 border-t border-navy-100/90 dark:border-navy-800/80 space-y-1.5 text-xs">
              <div className="flex items-center justify-between text-navy-600 dark:text-navy-300">
                <span className="flex items-center gap-1.5 font-medium truncate pr-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span className="truncate">{pricing.basic?.name || 'Basic (Static Website)'}</span>
                </span>
                <span className="font-bold text-navy-900 dark:text-white shrink-0">
                  ${pricing.basic?.usd}{' '}
                  <span className="text-[11px] text-navy-500 dark:text-navy-400 font-normal">
                    (₱{pricing.basic?.php?.toLocaleString()})
                  </span>
                </span>
              </div>
              <div className="flex items-center justify-between text-navy-600 dark:text-navy-300">
                <span className="flex items-center gap-1.5 font-medium truncate pr-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                  <span className="truncate">{pricing.premium?.name || 'Premium (Dynamic Website + Admin Panel)'}</span>
                </span>
                <span className="font-bold text-navy-900 dark:text-white shrink-0">
                  ${pricing.premium?.usd}{' '}
                  <span className="text-[11px] text-navy-500 dark:text-navy-400 font-normal">
                    (₱{pricing.premium?.php?.toLocaleString()})
                  </span>
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Action Section: Live Preview & Details Buttons (Top) + Preferred Design CTA (Bottom) */}
        <div className="mt-4 pt-3 border-t border-navy-100 dark:border-navy-800/80 space-y-2">
          {/* Dual Action Buttons: Live Preview & Details (Transparent with Border) */}
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              size="sm"
              href={demoUrl || detailsPath}
              target={demoUrl ? "_blank" : undefined}
              leftIcon="Eye"
              className="w-full text-xs font-semibold justify-center py-2 rounded-[8px] bg-transparent border border-navy-200 dark:border-navy-700/80 hover:border-brand-500 dark:hover:border-brand-400 text-navy-800 dark:text-navy-100 hover:bg-brand-500/10 dark:hover:bg-brand-500/10 transition-colors shadow-none"
            >
              {demoButtonLabel}
            </Button>
            <Button
              variant="outline"
              size="sm"
              to={detailsPath}
              rightIcon="ArrowRight"
              className="w-full text-xs font-semibold justify-center py-2 rounded-[8px] bg-transparent border border-navy-200 dark:border-navy-700/80 hover:border-brand-500 dark:hover:border-brand-400 text-navy-800 dark:text-navy-100 hover:bg-brand-500/10 dark:hover:bg-brand-500/10 transition-colors shadow-none"
            >
              {detailsButtonLabel}
            </Button>
          </div>

          {/* Primary Action at the Bottom: I prefer this website design */}
          <Button
            to={`/contact?preferred=${encodeURIComponent(code || id)}&design=${encodeURIComponent(title)}&category=${encodeURIComponent(categoryName || category || '')}`}
            variant="primary"
            size="sm"
            leftIcon="CheckCircle2"
            className="w-full font-bold justify-center shadow-soft hover:shadow-glow text-xs sm:text-sm py-2 rounded-[8px]"
          >
            I prefer this website design
          </Button>
        </div>
      </div>
    </article>
  );
}

WebsiteCard.propTypes = {
  website: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    category: PropTypes.string,
    categoryName: PropTypes.string,
    shortDescription: PropTypes.string,
    techStack: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    demoUrl: PropTypes.string,
    featured: PropTypes.bool,
    turnaround: PropTypes.string,
  }).isRequired,
  pricePrefix: PropTypes.string,
  demoButtonLabel: PropTypes.string,
  detailsButtonLabel: PropTypes.string,
  featuredBadgeLabel: PropTypes.string,
  onPreviewDemo: PropTypes.func,
  className: PropTypes.string,
};

export default WebsiteCard;
