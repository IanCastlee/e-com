import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../atoms';
import { formatCurrencyPHP, cn } from '../../../utils/formatters';

const SIZE_MAP = {
  sm: { prefix: 'xs', amount: 'text-lg font-extrabold', suffix: 'xs' },
  md: { prefix: 'xs', amount: 'text-2xl font-extrabold', suffix: 'xs' },
  lg: { prefix: 'sm', amount: 'text-3xl sm:text-4xl font-extrabold', suffix: 'sm' },
};

/**
 * Molecule: PriceTag
 * Formats and displays Philippine Peso (₱) pricing with optional prefix/suffix labels.
 */
export function PriceTag({
  amount,
  prefix = 'Starting at',
  suffix = '',
  size = 'md',
  className = '',
}) {
  const scale = SIZE_MAP[size] || SIZE_MAP.md;

  return (
    <div className={cn('inline-flex flex-col', className)}>
      {prefix && (
        <Text as="span" size={scale.prefix} variant="muted" className="uppercase tracking-wider font-semibold">
          {prefix}
        </Text>
      )}
      <div className="flex items-baseline gap-1.5">
        <span className={cn('font-display text-navy-900 dark:text-white tracking-tight', scale.amount)}>
          {formatCurrencyPHP(amount)}
        </span>
        {suffix && (
          <Text as="span" size={scale.suffix} variant="muted">
            {suffix}
          </Text>
        )}
      </div>
    </div>
  );
}

PriceTag.propTypes = {
  amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};

export default PriceTag;
