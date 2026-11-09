import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { cn } from '../../../utils/formatters';

const SIZE_MAP = {
  sm: { box: 'w-8 h-8 rounded-lg', title: 'text-lg', sub: 'text-[10px]' },
  md: { box: 'w-10 h-10 rounded-xl', title: 'text-xl', sub: 'text-[11px]' },
  lg: { box: 'w-12 h-12 rounded-2xl', title: 'text-2xl', sub: 'text-xs' },
};

/**
 * Atom: Logo
 * Brand identity mark with geometric crest and optional subtitle.
 */
export function Logo({
  brandName = 'e-yhan',
  subtitle = 'Digital Solutions',
  to = '/',
  size = 'md',
  variant = 'default',
  showSubtitle = true,
  className = '',
}) {
  const dimensions = SIZE_MAP[size] || SIZE_MAP.md;
  const textColor =
    variant === 'light'
      ? 'text-white'
      : 'text-navy-900 dark:text-white';

  return (
    <Link
      to={to}
      aria-label={`${brandName} ${subtitle}`}
      className={cn(
        'inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-xl',
        className
      )}
    >
      <span
        className={cn(
          'relative inline-flex items-center justify-center bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-sm group-hover:shadow-glow transition-all duration-300 shrink-0',
          dimensions.box
        )}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="w-3/5 h-3/5"
          aria-hidden="true"
        >
          <path
            d="M7 10H25M7 16H21M7 22H16"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="23" cy="22" r="2.75" fill="#fbbf24" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display font-extrabold tracking-tight flex items-center gap-0.5',
            dimensions.title,
            textColor
          )}
        >
          {brandName}
          <span className="text-brand-500">.</span>
        </span>
        {showSubtitle && subtitle && (
          <span
            className={cn(
              'font-medium tracking-wider uppercase text-navy-500 dark:text-navy-400 mt-0.5',
              dimensions.sub,
              variant === 'light' && 'text-navy-300'
            )}
          >
            {subtitle}
          </span>
        )}
      </span>
    </Link>
  );
}

Logo.propTypes = {
  brandName: PropTypes.string,
  subtitle: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  variant: PropTypes.oneOf(['default', 'light']),
  showSubtitle: PropTypes.bool,
  className: PropTypes.string,
};

export default Logo;
