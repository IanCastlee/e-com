import React from 'react';
import PropTypes from 'prop-types';
import * as LucideIcons from 'lucide-react';
import { cn } from '../../../utils/formatters';

const SIZE_CLASSES = {
  xs: 'w-3.5 h-3.5',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
};

/**
 * Atom: Icon
 * Renders a Lucide icon by name or component reference with standardized sizing.
 */
export function Icon({
  name = 'Circle',
  size = 'md',
  strokeWidth = 2,
  className = '',
  ariaLabel,
  ...rest
}) {
  const IconComponent =
    typeof name === 'function' || typeof name === 'object'
      ? name
      : LucideIcons[name] || LucideIcons.Globe;

  return (
    <IconComponent
      strokeWidth={strokeWidth}
      aria-label={ariaLabel || undefined}
      aria-hidden={!ariaLabel}
      className={cn('shrink-0 inline-block', SIZE_CLASSES[size] || SIZE_CLASSES.md, className)}
      {...rest}
    />
  );
}

Icon.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  strokeWidth: PropTypes.number,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export default Icon;
