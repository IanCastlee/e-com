import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { cn } from '../../../utils/formatters';
import { Icon } from '../Icon';
import { Spinner } from '../Spinner';

const VARIANT_CLASSES = {
  primary:
    'bg-brand-600 hover:bg-brand-700 text-white shadow-sm hover:shadow-glow focus-visible:ring-brand-500 border border-transparent',
  secondary:
    'bg-navy-900 hover:bg-navy-800 text-white dark:bg-white dark:text-navy-950 dark:hover:bg-navy-100 shadow-sm focus-visible:ring-navy-500 border border-transparent',
  outline:
    'bg-transparent hover:bg-brand-50/70 dark:hover:bg-navy-800/80 text-navy-800 dark:text-navy-100 border border-navy-300 dark:border-navy-700 hover:border-brand-500 dark:hover:border-brand-400 focus-visible:ring-brand-500',
  ghost:
    'bg-transparent hover:bg-navy-100 dark:hover:bg-navy-800/70 text-navy-700 dark:text-navy-200 border border-transparent focus-visible:ring-brand-500',
  accent:
    'bg-accent-500 hover:bg-accent-600 text-navy-950 font-semibold shadow-sm focus-visible:ring-accent-400 border border-transparent',
};

const SIZE_CLASSES = {
  sm: 'px-3.5 py-2 text-xs font-semibold rounded-lg gap-1.5',
  md: 'px-5 py-2.5 text-sm font-semibold rounded-xl gap-2',
  lg: 'px-7 py-3.5 text-base font-semibold rounded-xl gap-2.5',
};

/**
 * Atom: Button
 * Reusable polymorphic button supporting primary, secondary, outline, ghost, and accent variants.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  type = 'button',
  leftIcon,
  rightIcon,
  isLoading = false,
  disabled = false,
  fullWidth = false,
  className = '',
  onClick,
  ...rest
}) {
  const iconSize = size === 'sm' ? 'xs' : size === 'lg' ? 'md' : 'sm';

  const baseClasses = cn(
    'inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.99] select-none',
    VARIANT_CLASSES[variant] || VARIANT_CLASSES.primary,
    SIZE_CLASSES[size] || SIZE_CLASSES.md,
    fullWidth && 'w-full',
    (disabled || isLoading) && 'opacity-60 pointer-events-none cursor-not-allowed',
    className
  );

  const content = (
    <>
      {isLoading ? (
        <Spinner size="sm" variant={variant === 'primary' || variant === 'secondary' ? 'light' : 'primary'} />
      ) : (
        leftIcon && <Icon name={leftIcon} size={iconSize} />
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && <Icon name={rightIcon} size={iconSize} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses} onClick={onClick} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        onClick={onClick}
        target={rest.target || '_blank'}
        rel={rest.rel || 'noopener noreferrer'}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={baseClasses}
      {...rest}
    >
      {content}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost', 'accent']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  to: PropTypes.string,
  href: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
