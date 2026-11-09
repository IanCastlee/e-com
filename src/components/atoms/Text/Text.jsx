import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../../utils/formatters';

const SIZE_CLASSES = {
  xs: 'text-xs leading-relaxed',
  sm: 'text-sm leading-relaxed',
  md: 'text-base leading-relaxed',
  lg: 'text-lg leading-relaxed',
};

const VARIANT_CLASSES = {
  body: 'text-navy-700 dark:text-navy-200',
  muted: 'text-navy-500 dark:text-navy-400',
  strong: 'text-navy-900 dark:text-white font-semibold',
  brand: 'text-brand-600 dark:text-brand-400 font-medium',
  light: 'text-navy-100',
  danger: 'text-red-600 dark:text-red-400',
};

/**
 * Atom: Text
 * Standardized typographic primitive for body copy, captions, and helper text.
 */
export function Text({
  as: Component = 'p',
  size = 'md',
  variant = 'body',
  children,
  className = '',
  ...rest
}) {
  return (
    <Component
      className={cn(
        'font-sans',
        SIZE_CLASSES[size] || SIZE_CLASSES.md,
        VARIANT_CLASSES[variant] || VARIANT_CLASSES.body,
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}

Text.propTypes = {
  as: PropTypes.oneOf(['p', 'span', 'div', 'label', 'small']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  variant: PropTypes.oneOf(['body', 'muted', 'strong', 'brand', 'light', 'danger']),
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Text;
