import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Icon } from '../../atoms';
import { cn } from '../../../utils/formatters';

/**
 * Molecule: NavLink
 * Active-aware navigation link for desktop header and mobile drawer.
 */
export function NavLink({
  to,
  label,
  icon,
  isMobile = false,
  onClick,
  className = '',
}) {
  return (
    <RouterNavLink
      to={to}
      onClick={onClick}
      end={to === '/'}
      className={({ isActive }) =>
        cn(
          'inline-flex items-center gap-2 font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-xl',
          isMobile
            ? cn(
                'w-full px-4 py-3 text-base',
                isActive
                  ? 'bg-brand-50 dark:bg-brand-950/70 text-brand-600 dark:text-brand-400 font-semibold'
                  : 'text-navy-700 dark:text-navy-200 hover:bg-navy-100 dark:hover:bg-navy-800/80'
              )
            : cn(
                'px-3.5 py-2 text-sm',
                isActive
                  ? 'text-brand-600 dark:text-brand-400 font-semibold bg-brand-50/70 dark:bg-brand-950/50'
                  : 'text-navy-700 dark:text-navy-300 hover:text-navy-900 dark:hover:text-white hover:bg-navy-100/70 dark:hover:bg-navy-800/60'
              ),
          className
        )
      }
    >
      {icon && <Icon name={icon} size="sm" />}
      <span>{label}</span>
    </RouterNavLink>
  );
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  isMobile: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default NavLink;
