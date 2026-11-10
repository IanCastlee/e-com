import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../../utils/formatters';
import { Icon } from '../Icon';

const VARIANT_CLASSES = {
  brand:
    'bg-brand-50 text-brand-700 border-brand-200 dark:bg-brand-950/60 dark:text-brand-300 dark:border-brand-800',
  accent:
    'bg-accent-50 text-accent-700 border-accent-200 dark:bg-accent-500/15 dark:text-accent-300 dark:border-accent-500/30',
  navy:
    'bg-navy-100 text-navy-800 border-navy-200 dark:bg-navy-800 dark:text-navy-200 dark:border-navy-700',
  solid:
    'bg-brand-600 text-white border-brand-600',
  outline:
    'bg-transparent text-navy-700 dark:text-navy-300 border-navy-300 dark:border-navy-700',
};

const SIZE_CLASSES = {
  sm: 'px-2.5 py-0.5 text-[11px]',
  md: 'px-3 py-1 text-xs',
  lg: 'px-3.5 py-1.5 text-xs',
};

/**
 * Atom: Badge
 * Pill status or category badge with optional leading icon.
 */
export function Badge({
  children,
  variant = 'brand',
  size = 'md',
  icon,
  className = '',
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-semibold tracking-wide rounded-[5px] border transition-colors',
        VARIANT_CLASSES[variant] || VARIANT_CLASSES.brand,
        SIZE_CLASSES[size] || SIZE_CLASSES.md,
        className
      )}
    >
      {icon && <Icon name={icon} size="xs" />}
      <span>{children}</span>
    </span>
  );
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['brand', 'accent', 'navy', 'solid', 'outline']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  icon: PropTypes.string,
  className: PropTypes.string,
};

export default Badge;
