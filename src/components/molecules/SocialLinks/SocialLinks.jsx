import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../atoms';
import { cn } from '../../../utils/formatters';

/**
 * Molecule: SocialLinks
 * Renders accessible social & messaging channel buttons.
 */
export function SocialLinks({
  links = [],
  variant = 'default',
  size = 'md',
  showLabels = false,
  className = '',
}) {
  const buttonSize =
    size === 'sm' ? 'h-9 px-2.5' : size === 'lg' ? 'h-11 px-3.5' : 'h-10 px-3';

  const variantClasses =
    variant === 'dark'
      ? 'bg-navy-800/90 hover:bg-brand-600 text-navy-200 hover:text-white border-navy-700 hover:border-brand-500'
      : 'bg-white dark:bg-navy-900 hover:bg-brand-50 dark:hover:bg-brand-950/60 text-navy-700 dark:text-navy-200 hover:text-brand-600 dark:hover:text-brand-400 border-navy-200 dark:border-navy-800 hover:border-brand-400';

  return (
    <div className={cn('flex flex-wrap items-center gap-2.5', className)}>
      {links.map((item) => (
        <a
          key={item.id || item.platform}
          href={item.url}
          target={item.url?.startsWith('mailto:') ? undefined : '_blank'}
          rel={item.url?.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
          aria-label={item.platform}
          className={cn(
            'inline-flex items-center justify-center gap-2 rounded-xl border text-xs font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500',
            buttonSize,
            !showLabels && 'w-10 !px-0',
            variantClasses
          )}
        >
          <Icon name={item.icon || 'Globe'} size="sm" />
          {showLabels && <span>{item.platform}</span>}
        </a>
      ))}
    </div>
  );
}

SocialLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      platform: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.string,
    })
  ).isRequired,
  variant: PropTypes.oneOf(['default', 'dark']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  showLabels: PropTypes.bool,
  className: PropTypes.string,
};

export default SocialLinks;
