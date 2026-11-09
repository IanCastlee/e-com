import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../../utils/formatters';

const SIZE_CLASSES = {
  sm: 'w-4 h-4 border-2',
  md: 'w-6 h-6 border-2',
  lg: 'w-10 h-10 border-[3px]',
};

const VARIANT_CLASSES = {
  primary: 'border-brand-600 border-t-transparent dark:border-brand-400 dark:border-t-transparent',
  light: 'border-white border-t-transparent',
  muted: 'border-navy-400 border-t-transparent',
};

/**
 * Atom: Spinner
 * Accessible animated loading indicator.
 */
export function Spinner({
  size = 'md',
  variant = 'primary',
  ariaLabel = 'Loading',
  className = '',
}) {
  return (
    <span
      role="status"
      aria-label={ariaLabel}
      className={cn(
        'inline-block rounded-full animate-spin shrink-0',
        SIZE_CLASSES[size] || SIZE_CLASSES.md,
        VARIANT_CLASSES[variant] || VARIANT_CLASSES.primary,
        className
      )}
    />
  );
}

Spinner.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  variant: PropTypes.oneOf(['primary', 'light', 'muted']),
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
};

export default Spinner;
