import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../../utils/formatters';

const SIZE_CLASSES = {
  '2xl': 'text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12]',
  xl: 'text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.18]',
  lg: 'text-xl sm:text-2xl font-bold tracking-tight leading-snug',
  md: 'text-lg sm:text-xl font-bold leading-snug',
  sm: 'text-base sm:text-lg font-semibold leading-snug',
  xs: 'text-sm font-semibold uppercase tracking-wider',
};

const COLOR_CLASSES = {
  default: 'text-navy-900 dark:text-white',
  brand: 'text-brand-600 dark:text-brand-400',
  light: 'text-white',
  muted: 'text-navy-600 dark:text-navy-300',
};

const ALIGN_CLASSES = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

/**
 * Atom: Heading
 * Semantic heading element with decoupled visual scale.
 */
export function Heading({
  as: Component = 'h2',
  size = 'xl',
  color = 'default',
  align = 'left',
  children,
  className = '',
  ...rest
}) {
  return (
    <Component
      className={cn(
        'font-display',
        SIZE_CLASSES[size] || SIZE_CLASSES.xl,
        COLOR_CLASSES[color] || COLOR_CLASSES.default,
        ALIGN_CLASSES[align] || ALIGN_CLASSES.left,
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: PropTypes.oneOf(['2xl', 'xl', 'lg', 'md', 'sm', 'xs']),
  color: PropTypes.oneOf(['default', 'brand', 'light', 'muted']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Heading;
