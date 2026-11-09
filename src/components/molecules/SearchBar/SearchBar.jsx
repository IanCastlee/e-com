import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button, Icon } from '../../atoms';
import { cn } from '../../../utils/formatters';

/**
 * Molecule: SearchBar
 * Combines Input and clear/action controls for searching catalog items.
 */
export function SearchBar({
  value = '',
  onChange,
  onClear,
  placeholder = '',
  ariaLabel = 'Search websites',
  size = 'md',
  className = '',
}) {
  const clearButton = value ? (
    <Button
      variant="ghost"
      size="sm"
      onClick={onClear}
      aria-label="Clear search query"
      className="!p-1 h-6 w-6 rounded-full"
    >
      <Icon name="X" size="xs" />
    </Button>
  ) : null;

  return (
    <div className={cn('relative w-full', className)}>
      <Input
        type="search"
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={ariaLabel}
        size={size}
        leftIcon="Search"
        rightIcon={clearButton}
      />
    </div>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func,
  placeholder: PropTypes.string,
  ariaLabel: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};

export default SearchBar;
