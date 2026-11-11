import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../../utils/formatters';
import { Icon } from '../Icon';

const SIZE_CLASSES = {
  sm: 'px-3 py-2 text-xs rounded-[10px]',
  md: 'px-4 py-3 text-sm rounded-[10px]',
  lg: 'px-4 py-3.5 text-base rounded-[10px]',
};

/**
 * Atom: Input
 * Supports input, textarea, and select elements with consistent focus rings and error states.
 */
export function Input({
  as = 'input',
  type = 'text',
  id,
  name,
  value,
  onChange,
  placeholder = '',
  size = 'md',
  hasError = false,
  disabled = false,
  leftIcon,
  rightIcon,
  options = [],
  rows = 5,
  className = '',
  ...rest
}) {
  const baseInputClasses = cn(
    'w-full bg-white dark:bg-[#070d18] text-navy-900 dark:text-white placeholder:text-navy-400 dark:placeholder:text-navy-400/70 border rounded-[10px] transition-all duration-200 focus:outline-none focus:ring-2 shadow-xs',
    SIZE_CLASSES[size] || SIZE_CLASSES.md,
    hasError
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
      : 'border-navy-200 dark:border-navy-700/90 hover:border-navy-300 dark:hover:border-navy-600 focus:border-brand-500 dark:focus:border-brand-400 focus:ring-brand-500/20',
    leftIcon && 'pl-11',
    rightIcon && 'pr-11',
    disabled && 'opacity-60 cursor-not-allowed bg-navy-100 dark:bg-navy-800',
    className
  );

  if (as === 'textarea') {
    return (
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        aria-invalid={hasError}
        className={cn(
          baseInputClasses,
          'resize-none overflow-y-auto leading-relaxed no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'
        )}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        {...rest}
      />
    );
  }

  if (as === 'select') {
    return (
      <div className="relative w-full">
        {leftIcon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-400 dark:text-navy-400 pointer-events-none">
            <Icon name={leftIcon} size="sm" />
          </span>
        )}
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          aria-invalid={hasError}
          className={cn(baseInputClasses, 'appearance-none pr-10 cursor-pointer')}
          {...rest}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-white dark:bg-navy-900 text-navy-900 dark:text-white">
              {opt.label}
            </option>
          ))}
        </select>
        <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-navy-400 dark:text-navy-400 pointer-events-none">
          <Icon name="ChevronDown" size="sm" />
        </span>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {leftIcon && (
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-400 dark:text-navy-400 pointer-events-none">
          <Icon name={leftIcon} size="sm" />
        </span>
      )}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={hasError}
        className={baseInputClasses}
        {...rest}
      />
      {rightIcon && (
        <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-navy-400 dark:text-navy-400">
          {rightIcon}
        </span>
      )}
    </div>
  );
}

Input.propTypes = {
  as: PropTypes.oneOf(['input', 'textarea', 'select']),
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  hasError: PropTypes.bool,
  disabled: PropTypes.bool,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.node,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  rows: PropTypes.number,
  className: PropTypes.string,
};

export default Input;
