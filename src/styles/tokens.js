/**
 * Central Design Tokens for e-yhan Digital Solutions
 * Inspired by Bulusan Lake's emerald-teal waters, deep Pacific navy,
 * and warm Bicolano sunrise amber.
 */
export const DESIGN_TOKENS = {
  colors: {
    brand: {
      primary: '#0d9488', // Bulusan Teal 600
      light: '#14b8a6',   // Teal 500
      dark: '#0f766e',    // Teal 700
      surface: '#f0fdfa', // Teal 50
    },
    navy: {
      base: '#0f172a',    // Deep Corporate Navy 900
      elevated: '#1e293b',// Slate Navy 800
      muted: '#64748b',   // Slate 500
      light: '#f8fafc',   // Slate 50
    },
    accent: {
      warm: '#f59e0b',    // Warm Amber 500
      warmDark: '#d97706',// Amber 600
      surface: '#fffbeb', // Amber 50
    },
  },
  spacing: {
    sectionY: 'py-16 md:py-24',
    container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  },
  radius: {
    card: 'rounded-[10px]',
    button: 'rounded-[10px]',
    badge: 'rounded-[10px]',
  },
  shadows: {
    card: 'shadow-soft hover:shadow-elevated',
    glow: 'shadow-glow',
  },
  typography: {
    fontDisplay: 'font-display tracking-tight',
    fontBody: 'font-sans',
  },
};

export default DESIGN_TOKENS;
