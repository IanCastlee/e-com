import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo, Button, Icon, Badge, Text } from '../../atoms';
import { NavLink } from '../../molecules';
import { cn } from '../../../utils/formatters';

/**
 * Organism: Navbar
 * Corporate sticky navigation bar with top announcement bar, dark mode toggle, and mobile drawer.
 */
export function Navbar({
  brandName = 'e-yhan',
  brandSubtitle = 'Digital Solutions',
  originText = '',
  contactEmail = '',
  contactPhone = '',
  links = [],
  ctaButton = { label: 'Get a Website', path: '/contact' },
  isScrolled = false,
  isDark = false,
  onToggleTheme,
  themeToggleAriaLabel = 'Toggle color theme',
  mobileMenuAriaLabel = 'Toggle navigation menu',
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 px-3 pt-2.5 pb-1 sm:p-0">
      {/* Main Navigation Row */}
      <div
        className={cn(
          'w-full max-w-[1600px] mx-auto transition-all duration-300 flex items-center justify-between gap-4',
          // Mobile: floating glass island
          'h-14 sm:h-20 px-3.5 sm:px-6 md:px-8 lg:px-[5%]',
          'rounded-[14px] sm:rounded-none',
          'bg-white/90 dark:bg-navy-900/90 sm:bg-white/85 sm:dark:bg-navy-950/85',
          'backdrop-blur-xl',
          'border border-navy-200/90 dark:border-white/10 sm:border-0 sm:border-b sm:border-navy-200/50 sm:dark:border-navy-800/50',
          'shadow-[0_8px_25px_rgba(0,0,0,0.12)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.45)] sm:shadow-none',
          isScrolled && 'sm:shadow-soft sm:border-b sm:border-navy-200/80 sm:dark:border-navy-800/80 sm:bg-white/95 sm:dark:bg-navy-950/95'
        )}
      >
        <Logo brandName={brandName} subtitle={brandSubtitle} size="md" />

        {/* Desktop Nav Links */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <NavLink key={link.path} to={link.path} label={link.label} />
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          {onToggleTheme && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleTheme}
              aria-label={themeToggleAriaLabel}
              className="w-10 h-10 !p-0 rounded-xl border border-navy-200 dark:border-navy-800"
            >
              <Icon name={isDark ? 'Sun' : 'Moon'} size="sm" />
            </Button>
          )}

          {ctaButton && (
            <div className="hidden sm:block">
              <Button
                variant="primary"
                size="md"
                to={ctaButton.path}
                rightIcon="ArrowUpRight"
              >
                {ctaButton.label}
              </Button>
            </div>
          )}

          {/* Mobile Hamburger Trigger */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuAriaLabel}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden w-10 h-10 !p-0 rounded-xl border border-navy-200 dark:border-navy-800"
          >
            <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size="md" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Drawer (Floating dropdown) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-2 max-w-[1600px] mx-auto rounded-[14px] overflow-hidden bg-white/95 dark:bg-navy-900/95 backdrop-blur-xl border border-navy-200/90 dark:border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.25)] dark:shadow-[0_15px_50px_rgba(0,0,0,0.6)]"
          >
            <nav aria-label="Mobile navigation" className="px-4 pt-3 pb-5 space-y-1.5">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  label={link.label}
                  isMobile
                  onClick={closeMobileMenu}
                />
              ))}

              {ctaButton && (
                <div className="pt-3 mt-3 border-t border-navy-100 dark:border-navy-800">
                  <Button
                    variant="primary"
                    size="md"
                    to={ctaButton.path}
                    fullWidth
                    rightIcon="ArrowUpRight"
                    onClick={closeMobileMenu}
                  >
                    {ctaButton.label}
                  </Button>
                </div>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

Navbar.propTypes = {
  brandName: PropTypes.string,
  brandSubtitle: PropTypes.string,
  originText: PropTypes.string,
  contactEmail: PropTypes.string,
  contactPhone: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
  ctaButton: PropTypes.shape({
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }),
  isScrolled: PropTypes.bool,
  isDark: PropTypes.bool,
  onToggleTheme: PropTypes.func,
  themeToggleAriaLabel: PropTypes.string,
  mobileMenuAriaLabel: PropTypes.string,
};

export default Navbar;
