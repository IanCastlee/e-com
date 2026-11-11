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

  const {
    title,
    slug,
    categoryName,
    shortDescription,
    techStack = [],
    price,
    thumbnail,
    featured,
    turnaround,
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

        {/* Free Customization Badge — Elegant Premium Glassmorphism (Adapts to Light & Dark) */}
        <div className="absolute top-2.5 left-2.5 z-20 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[10px] text-[10px] sm:text-xs font-semibold tracking-wide backdrop-blur-md transition-all duration-300 bg-white/95 text-navy-950 border border-amber-300/80 shadow-[0_2px_10px_rgba(245,158,11,0.15)] dark:bg-navy-950/90 dark:text-amber-300 dark:border-amber-400/40 dark:shadow-[0_0_15px_rgba(245,158,11,0.25)]">
            <Icon name="Sparkles" size="xs" className="text-amber-500 dark:text-amber-400 shrink-0" />
            <span>Free Customization</span>
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
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

        <Text size="sm" variant="muted" className="mt-2 line-clamp-2 flex-1">
          {shortDescription}
        </Text>

        {/* Tech Stack Tags */}
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {techStack.slice(0, 4).map((tech) => (
              <Tag key={tech} label={tech} variant="subtle" size="sm" />
            ))}
          </div>
        )}

        {/* Price & Action Footer */}
        <div className="mt-5 pt-4 border-t border-navy-100 dark:border-navy-800/80 flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <Text as="span" size="xs" variant="muted" className="uppercase tracking-wider font-semibold text-[10px]">
              {pricePrefix}
            </Text>
            <span className="font-display text-lg sm:text-xl font-extrabold text-navy-900 dark:text-white">
              {formatCurrencyPHP(price)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {onPreviewDemo ? (
              <Button
                variant="outline"
                size="sm"
                leftIcon="Eye"
                onClick={() => onPreviewDemo(website)}
              >
                {demoButtonLabel}
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                to={detailsPath}
                leftIcon="Eye"
              >
                {demoButtonLabel}
              </Button>
            )}
            <Button
              variant="primary"
              size="sm"
              to={detailsPath}
              rightIcon="ArrowRight"
            >
              {detailsButtonLabel}
            </Button>
          </div>
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
