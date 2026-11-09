import React from 'react';
import PropTypes from 'prop-types';
import { Input, Text } from '../../atoms';
import { cn } from '../../../utils/formatters';

/**
 * Molecule: FilterDropdown
 * Accessible select dropdown for sorting or filtering collections.
 */
export function FilterDropdown({
  id = 'sort-filter',
  label,
  value,
  options = [],
  onChange,
  icon = 'ArrowUpDown',
  className = '',
}) {
  return (
    <div className={cn('inline-flex items-center gap-2.5', className)}>
      {label && (
        <Text
          as="label"
          htmlFor={id}
          size="xs"
          variant="muted"
          className="whitespace-nowrap font-semibold uppercase tracking-wider hidden sm:inline-block"
        >
          {label}
        </Text>
      )}
      <Input
        id={id}
        as="select"
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        options={options}
        leftIcon={icon}
        aria-label={label || 'Sort options'}
        className="min-w-[210px]"
      />
    </div>
  );
}

FilterDropdown.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.string,
  className: PropTypes.string,
};

export default FilterDropdown;
