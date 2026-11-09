import React from 'react';
import PropTypes from 'prop-types';
import { Input, Text, Icon } from '../../atoms';
import { cn } from '../../../utils/formatters';

/**
 * Molecule: FormField
 * Accessible form control combining label, Input atom, helper caption, and validation error feedback.
 */
export function FormField({
  id,
  name,
  label,
  required = false,
  helperText = '',
  error = '',
  as = 'input',
  type = 'text',
  value,
  onChange,
  placeholder = '',
  options = [],
  rows = 4,
  leftIcon,
  className = '',
  ...rest
}) {
  const fieldId = id || name;

  return (
    <div className={cn('flex flex-col gap-1.5 w-full', className)}>
      {label && (
        <label
          htmlFor={fieldId}
          className="text-xs sm:text-sm font-semibold text-navy-800 dark:text-navy-100 flex items-center gap-1"
        >
          <span>{label}</span>
          {required && (
            <span className="text-brand-600 dark:text-brand-400" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      <Input
        id={fieldId}
        name={name}
        as={as}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        options={options}
        rows={rows}
        leftIcon={leftIcon}
        hasError={Boolean(error)}
        aria-describedby={error ? `${fieldId}-error` : helperText ? `${fieldId}-helper` : undefined}
        {...rest}
      />

      {error ? (
        <div
          id={`${fieldId}-error`}
          role="alert"
          className="flex items-center gap-1.5 text-red-600 dark:text-red-400 mt-0.5"
        >
          <Icon name="AlertCircle" size="xs" />
          <Text as="span" size="xs" variant="danger">
            {error}
          </Text>
        </div>
      ) : (
        helperText && (
          <Text id={`${fieldId}-helper`} as="span" size="xs" variant="muted">
            {helperText}
          </Text>
        )
      )}
    </div>
  );
}

FormField.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
  helperText: PropTypes.string,
  error: PropTypes.string,
  as: PropTypes.oneOf(['input', 'textarea', 'select']),
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  rows: PropTypes.number,
  leftIcon: PropTypes.string,
  className: PropTypes.string,
};

export default FormField;
