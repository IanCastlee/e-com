import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon, Heading, Text, Badge } from '../../atoms';
import { cn } from '../../../utils/formatters';

/**
 * Molecule: CategoryChip
 * Renders either an interactive filter chip ('pill') or a rich category showcase card ('card').
 */
export function CategoryChip({
  label,
  icon = 'Folder',
  description = '',
  highlight = '',
  count,
  isActive = false,
  variant = 'pill',
  to,
  onClick,
  className = '',
}) {
  if (variant === 'card') {
    const Wrapper = to ? Link : 'button';
    const wrapperProps = to ? { to } : { type: 'button', onClick };

    return (
      <Wrapper
        {...wrapperProps}
        className={cn(
          'group text-left flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-navy-900 border border-navy-200/80 dark:border-navy-800 hover:border-brand-500 dark:hover:border-brand-400 shadow-soft hover:shadow-elevated transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500',
          className
        )}
      >
        <div>
          <div className="flex items-center justify-between gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-950/70 text-brand-600 dark:text-brand-400 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
              <Icon name={icon} size="lg" />
            </span>
            {count !== undefined && (
              <Badge variant="navy" size="sm">
                {count} {count === 1 ? 'System' : 'Systems'}
              </Badge>
            )}
          </div>
          <Heading as="h3" size="sm" className="group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
            {label}
          </Heading>
          {description && (
            <Text size="sm" variant="muted" className="mt-2 line-clamp-2">
              {description}
            </Text>
          )}
        </div>
        {highlight && (
          <div className="mt-5 pt-3.5 border-t border-navy-100 dark:border-navy-800/80 flex items-center justify-between text-xs font-semibold text-brand-600 dark:text-brand-400">
            <span>{highlight}</span>
            <Icon
              name="ArrowUpRight"
              size="xs"
              className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </div>
        )}
      </Wrapper>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={cn(
        'inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500',
        isActive
          ? 'bg-brand-600 text-white border-brand-600 shadow-sm'
          : 'bg-white dark:bg-navy-900 text-navy-700 dark:text-navy-200 border-navy-200 dark:border-navy-800 hover:border-brand-500 dark:hover:border-brand-400 hover:text-brand-600 dark:hover:text-brand-400',
        className
      )}
    >
      {icon && <Icon name={icon} size="xs" />}
      <span>{label}</span>
      {count !== undefined && (
        <span
          className={cn(
            'px-1.5 py-0.5 text-[11px] rounded-full leading-none',
            isActive
              ? 'bg-white/20 text-white'
              : 'bg-navy-100 dark:bg-navy-800 text-navy-600 dark:text-navy-300'
          )}
        >
          {count}
        </span>
      )}
    </button>
  );
}

CategoryChip.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  description: PropTypes.string,
  highlight: PropTypes.string,
  count: PropTypes.number,
  isActive: PropTypes.bool,
  variant: PropTypes.oneOf(['pill', 'card']),
  to: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default CategoryChip;
