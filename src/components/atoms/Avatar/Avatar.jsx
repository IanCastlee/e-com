import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../../utils/formatters';

const SIZE_CLASSES = {
  sm: 'w-9 h-9 text-xs',
  md: 'w-11 h-11 text-sm',
  lg: 'w-14 h-14 text-base',
  xl: 'w-20 h-20 text-xl',
};

const VARIANT_CLASSES = {
  brand:
    'bg-gradient-to-br from-brand-500 to-brand-700 text-white ring-2 ring-brand-500/20',
  navy:
    'bg-gradient-to-br from-navy-800 to-navy-950 text-white ring-2 ring-navy-700/30',
  accent:
    'bg-gradient-to-br from-accent-400 to-accent-600 text-navy-950 ring-2 ring-accent-400/20',
};

/**
 * Atom: Avatar
 * Displays user/client photo or styled initials fallback.
 */
export function Avatar({
  src,
  alt = '',
  initials = 'EY',
  size = 'md',
  variant = 'brand',
  className = '',
}) {
  return (
    <div
      className={cn(
        'relative inline-flex items-center justify-center rounded-full font-display font-bold shrink-0 overflow-hidden select-none',
        SIZE_CLASSES[size] || SIZE_CLASSES.md,
        VARIANT_CLASSES[variant] || VARIANT_CLASSES.brand,
        className
      )}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      ) : (
        <span aria-label={alt || initials}>{initials}</span>
      )}
    </div>
  );
}

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  initials: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  variant: PropTypes.oneOf(['brand', 'navy', 'accent']),
  className: PropTypes.string,
};

export default Avatar;
