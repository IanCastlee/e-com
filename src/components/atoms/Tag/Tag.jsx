import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../../utils/formatters';

const VARIANT_CLASSES = {
  subtle:
    'bg-navy-100/90 dark:bg-navy-800/80 text-navy-700 dark:text-navy-200 border-navy-200/80 dark:border-navy-700/80',
  brand:
    'bg-brand-50/90 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 border-brand-200/80 dark:border-brand-800/80',
  outline:
    'bg-transparent text-navy-600 dark:text-navy-300 border-navy-300 dark:border-navy-700',
};

const SIZE_CLASSES = {
  sm: 'px-2 py-0.5 text-[11px] rounded-md',
  md: 'px-2.5 py-1 text-xs rounded-lg',
};

/**
 * Atom: Tag
 * Compact technical or taxonomy label used in cards and detail views.
 */
export function Tag({
  label,
  variant = 'subtle',
  size = 'sm',
  className = '',
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium border transition-colors',
        VARIANT_CLASSES[variant] || VARIANT_CLASSES.subtle,
        SIZE_CLASSES[size] || SIZE_CLASSES.sm,
        className
      )}
    >
      {label}
    </span>
  );
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['subtle', 'brand', 'outline']),
  size: PropTypes.oneOf(['sm', 'md']),
  className: PropTypes.string,
};

export default Tag;
