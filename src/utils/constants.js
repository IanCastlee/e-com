/**
 * Application-wide constants for e-yhan Digital Solutions
 */
export const CURRENCY_SYMBOL = '$';
export const CURRENCY_CODE = 'USD';

export const BRAND_INFO = {
  name: 'e-yhan',
  legalName: 'e-yhan Web Engineering & Digital Solutions',
  tagline: 'Ready-Made & Custom Websites Built for Modern Growth',
  originBadge: 'Proudly engineered in Bulusan, Sorsogon • Serving Clients Worldwide',
  location: 'Poblacion, Bulusan, Sorsogon 4704, Philippines',
  email: 'hello@e-yhan.ph',
  phone: '+63 917 842 9104',
  messengerUrl: 'https://m.me/eyhandigital',
  facebookUrl: 'https://facebook.com/eyhandigital',
  githubUrl: 'https://github.com/eyhan-dev',
  linkedinUrl: 'https://linkedin.com/company/e-yhan',
  businessHours: 'Mon – Sat, 8:00 AM – 6:00 PM (GMT+8)',
};

export const SORT_OPTIONS = [
  { value: 'popular', label: 'Most Popular & Featured' },
  { value: 'newest', label: 'Newest Releases' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
];

export const BUDGET_RANGES = [
  {
    value: '$55 - $180 (₱3k - ₱10k • Static Website - Output First)',
    label: '$55 – $180 USD (₱3,000 – ₱10,000 • Static Website — Output First Before Payment)',
  },
  {
    value: '$215 - $550 (₱12k - ₱30k • Website with Database)',
    label: '$215 – $550 USD (₱12,000 – ₱30,000 • Website with Database — Min. $90 / ₱5k Downpayment)',
  },
  {
    value: '$550 - $1,450 (₱30k - ₱80k • Full-Stack Portal / E-Commerce with DB)',
    label: '$550 – $1,450 USD (₱30,000 – ₱80,000 • Full-Stack System with Database)',
  },
];
