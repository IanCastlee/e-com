import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { cn } from '../../../utils/formatters';

const SIZE_MAP = {
  sm: { img: 'h-8 sm:h-9' },
  md: { img: 'h-9 sm:h-11 md:h-12' },
  lg: { img: 'h-12 sm:h-14 md:h-16' },
};

/**
 * Atom: Logo
 * Brand identity mark displaying the official <e/>-yhan logo.
 * Automatically adapts between dark mode (logo.png) and light mode (logo-light.png).
 */
export function Logo({
  brandName = '<e/>-yhan',
  subtitle = 'Digital Solutions',
  to = '/',
  size = 'md',
  variant = 'default',
  showSubtitle = false,
  className = '',
}) {
  const dimensions = SIZE_MAP[size] || SIZE_MAP.md;

  return (
    <Link
      to={to}
      aria-label={`${brandName} ${subtitle}`}
      className={cn(
        'inline-flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-xl select-none',
        className
      )}
    >
      {/* Dark Mode / Default Logo (Glowing cyan & metallic white) */}
      <img
        src="/logo.png"
        alt={brandName}
        className={cn(
          'w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]',
          variant === 'light' ? 'block' : 'hidden dark:block',
          dimensions.img
        )}
      />

      {/* Light Mode Logo (High contrast deep navy & cyan) */}
      {variant !== 'light' && (
        <img
          src="/logo-light.png"
          alt={brandName}
          className={cn(
            'w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] block dark:hidden',
            dimensions.img
          )}
        />
      )}
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
