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
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-white/95 dark:bg-navy-950/95 backdrop-blur-md shadow-soft border-b border-navy-200/80 dark:border-navy-800/80'
          : 'bg-white/85 dark:bg-navy-950/85 backdrop-blur-sm border-b border-navy-200/50 dark:border-navy-800/50'
      )}
    >
      {/* Top Corporate Bar */}
      {(originText || contactEmail || contactPhone) && (
        <div className="bg-navy-900 dark:bg-navy-950 text-navy-200 border-b border-navy-800 text-xs py-1.5">
          <div className="w-full max-w-[1600px] mx-auto flex flex-wrap items-center justify-between gap-2 px-4 sm:px-6 md:px-8 lg:px-[5%]">
            {originText && (
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
                <Text as="span" size="xs" variant="light" className="font-medium">
                  {originText}
                </Text>
              </div>
            )}
            <div className="hidden md:flex items-center gap-5 text-navy-300">
              {contactPhone && (
                <a
                  href={`tel:${contactPhone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-1.5 hover:text-brand-400 transition-colors"
                >
                  <Icon name="Phone" size="xs" />
                  <span>{contactPhone}</span>
                </a>
              )}
              {contactEmail && (
                <a
                  href={`mailto:${contactEmail}`}
                  className="inline-flex items-center gap-1.5 hover:text-brand-400 transition-colors"
                >
                  <Icon name="Mail" size="xs" />
                  <span>{contactEmail}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation Row */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[5%] h-16 sm:h-20 flex items-center justify-between gap-4">
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

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden overflow-hidden bg-white dark:bg-navy-900 border-b border-navy-200 dark:border-navy-800"
          >
            <nav aria-label="Mobile navigation" className="px-4 pt-3 pb-6 space-y-1.5">
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

              {originText && (
                <div className="pt-2 flex justify-center">
                  <Badge variant="brand" size="sm" icon="MapPin">
                    {originText}
                  </Badge>
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
