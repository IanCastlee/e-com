import { CURRENCY_SYMBOL } from './constants';

/**
 * Formats a numeric value or range string into Dollar ($) currency string.
 * @param {number|string} amount
 * @param {boolean} showDecimals
 * @returns {string}
 */
export function formatCurrencyPHP(amount, showDecimals = false) {
  if (amount === null || amount === undefined) {
    return `${CURRENCY_SYMBOL}0`;
  }
  if (
    typeof amount === 'string' &&
    (amount.includes('–') || amount.includes('-') || amount.includes('$') || amount.includes('₱'))
  ) {
    return amount;
  }
  if (Number.isNaN(Number(amount))) {
    return String(amount);
  }
  const numericAmount = Number(amount);
  const formatted = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: showDecimals ? 2 : 0,
    maximumFractionDigits: showDecimals ? 2 : 0,
  }).format(numericAmount);

  return `${CURRENCY_SYMBOL}${formatted}`;
}

/**
 * Formats an ISO date string into a readable English date.
 * @param {string} dateStr
 * @returns {string}
 */
export function formatDate(dateStr) {
  if (!dateStr) return '';
  try {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  } catch {
    return dateStr;
  }
}

/**
 * Simple class name joiner that filters out falsy values.
 * @param  {...any} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
