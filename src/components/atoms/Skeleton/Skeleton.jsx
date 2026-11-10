import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../../utils/formatters';

const VARIANT_CLASSES = {
  text: 'h-4 w-full rounded',
  rectangular: 'rounded-none',
  rounded: 'rounded-xl',
  circular: 'rounded-full',
  card: 'rounded-2xl',
};

/**
 * Atom: Skeleton
 * Reusable animated placeholder component for loading states across cards, text, images, and containers.
 */
export function Skeleton({
  variant = 'rounded',
  width,
  height,
  className = '',
  animate = true,
  children,
  ...rest
}) {
  return (
    <div
      aria-hidden="true"
      style={{
        width: width || undefined,
        height: height || undefined,
      }}
      className={cn(
        'bg-navy-200/80 dark:bg-navy-800/80 select-none pointer-events-none',
        VARIANT_CLASSES[variant] || VARIANT_CLASSES.rounded,
        animate && 'animate-pulse',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

Skeleton.propTypes = {
  variant: PropTypes.oneOf(['text', 'rectangular', 'rounded', 'circular', 'card']),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  animate: PropTypes.bool,
  children: PropTypes.node,
};

export default Skeleton;
