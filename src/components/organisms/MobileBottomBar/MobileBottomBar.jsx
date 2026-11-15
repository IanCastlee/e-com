import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon, Logo, Button, Badge } from '../../atoms';
import { BRAND_INFO } from '../../../utils/constants';
import { cn } from '../../../utils/formatters';

/**
 * Organism: MobileBottomBar
 * Modern mobile bottom navigation bar with 4 primary destinations + "More" bottom sheet drawer.
 * Tabs: Home, Storefront & Portfolio, Solutions & Pricing, Contact Us, and More.
 */
export function MobileBottomBar({
  isMoreOpen = false,
  onToggleMore,
  onCloseMore,
  isDark = false,
  onToggleTheme,
}) {
  const location = useLocation();
  const currentPath = location.pathname;

  // Primary mobile navigation tabs (matching the user's selected navbar items)
  const tabs = [
    {
      label: 'Home',
      path: '/',
      icon: 'Home',
      isActive: currentPath === '/',
    },
    {
      label: 'Websites',
      path: '/portfolio',
      icon: 'LayoutGrid',
      isActive: currentPath.startsWith('/portfolio') || currentPath.startsWith('/category'),
    },
    {
      label: 'Pricing',
      path: '/services',
      icon: 'Sparkles',
      isActive: currentPath === '/services' || currentPath === '/pricing',
    },
    {
      label: 'Contact',
      path: '/contact',
      icon: 'Send',
      isActive: currentPath === '/contact',
    },
  ];

  const isMoreActive = isMoreOpen || currentPath === '/faqs' || currentPath === '/about';

  return (
    <>
      {/* Fixed Mobile Bottom Tab Bar */}
      <nav
        aria-label="Mobile Bottom Navigation"
        className={cn(
          'fixed bottom-0 inset-x-0 z-40 lg:hidden',
          'h-16 pb-[max(0.25rem,env(safe-area-inset-bottom,0px))]',
          'bg-white/95 dark:bg-navy-950/95 backdrop-blur-xl',
          'border-t border-navy-200/80 dark:border-white/10',
          'shadow-[0_-4px_25px_rgba(0,0,0,0.08)] dark:shadow-[0_-8px_30px_rgba(0,0,0,0.4)]',
          'transition-all duration-300'
        )}
      >
        <div className="grid grid-cols-5 h-full items-center px-1 max-w-lg mx-auto">
          {tabs.map((tab) => (
            <Link
              key={tab.path}
              to={tab.path}
              onClick={onCloseMore}
              className={cn(
                'relative flex flex-col items-center justify-center h-full py-1.5 transition-all group select-none',
                tab.isActive
                  ? 'text-brand-600 dark:text-brand-400'
                  : 'text-navy-500 dark:text-navy-400 hover:text-navy-900 dark:hover:text-white'
              )}
            >
              {/* Active Top Glow Pill */}
              {tab.isActive && (
                <span className="absolute top-0 w-8 h-0.5 rounded-full bg-brand-500 shadow-[0_0_8px_rgba(20,184,166,0.7)]" />
              )}
              <div
                className={cn(
                  'p-1 rounded-xl transition-all duration-200',
                  tab.isActive && 'scale-110'
                )}
              >
                <Icon name={tab.icon} size="md" />
              </div>
              <span
                className={cn(
                  'text-[10px] sm:text-[11px] font-medium leading-none tracking-tight transition-colors',
                  tab.isActive ? 'font-semibold text-brand-600 dark:text-brand-400' : 'text-navy-500 dark:text-navy-400'
                )}
              >
                {tab.label}
              </span>
            </Link>
          ))}

          {/* 5th Tab: "More" Action Trigger */}
          <button
            type="button"
            onClick={onToggleMore}
            aria-label="Open more navigation options"
            aria-expanded={isMoreOpen}
            className={cn(
              'relative flex flex-col items-center justify-center h-full py-1.5 transition-all group select-none focus:outline-none',
              isMoreActive
                ? 'text-brand-600 dark:text-brand-400'
                : 'text-navy-500 dark:text-navy-400 hover:text-navy-900 dark:hover:text-white'
            )}
          >
            {isMoreActive && (
              <span className="absolute top-0 w-8 h-0.5 rounded-full bg-brand-500 shadow-[0_0_8px_rgba(20,184,166,0.7)]" />
            )}
            <div
              className={cn(
                'p-1 rounded-xl transition-all duration-200',
                isMoreActive && 'scale-110'
              )}
            >
              <Icon name="MoreHorizontal" size="md" />
            </div>
            <span
              className={cn(
                'text-[10px] sm:text-[11px] font-medium leading-none tracking-tight transition-colors',
                isMoreActive ? 'font-semibold text-brand-600 dark:text-brand-400' : 'text-navy-500 dark:text-navy-400'
              )}
            >
              More
            </span>
          </button>
        </div>
      </nav>

      {/* Slide-Up "More" Bottom Sheet Modal */}
      <AnimatePresence>
        {isMoreOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={onCloseMore}
              className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Bottom Sheet Card */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className={cn(
                'relative z-10 w-full max-w-lg mx-auto',
                'bg-white dark:bg-navy-900',
                'rounded-t-[28px] border-t border-navy-200 dark:border-white/10',
                'shadow-[0_-12px_40px_rgba(0,0,0,0.35)]',
                'p-5 pb-[max(1.5rem,env(safe-area-inset-bottom,0px))] space-y-4',
                'max-h-[85vh] overflow-y-auto'
              )}
            >
              {/* Drag Handle Indicator */}
              <div className="w-12 h-1.5 rounded-full bg-navy-200 dark:bg-navy-700 mx-auto" />

              {/* Sheet Header */}
              <div className="flex items-center justify-between pb-3 border-b border-navy-100 dark:border-navy-800">
                <div className="flex items-center gap-2.5">
                  <Logo size="sm" />
                  <span className="text-xs text-navy-400 font-medium">More Options & Links</span>
                </div>
                <button
                  type="button"
                  onClick={onCloseMore}
                  aria-label="Close more options menu"
                  className="p-1.5 rounded-full hover:bg-navy-100 dark:hover:bg-navy-800 text-navy-400 hover:text-navy-900 dark:hover:text-white transition-colors"
                >
                  <Icon name="X" size="sm" />
                </button>
              </div>

              {/* Additional Nav Links Section */}
              <div className="space-y-2">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-navy-400">
                  Explore Pages
                </div>

                <Link
                  to="/faqs"
                  onClick={onCloseMore}
                  className={cn(
                    'flex items-center justify-between p-3 rounded-2xl border transition-all',
                    currentPath === '/faqs'
                      ? 'border-brand-500 bg-brand-500/10 text-brand-600 dark:text-brand-400'
                      : 'border-navy-100 dark:border-navy-800 bg-navy-50/60 dark:bg-navy-950/60 hover:bg-brand-50/50 dark:hover:bg-navy-800/80 text-navy-800 dark:text-navy-100'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                      <Icon name="HelpCircle" size="md" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">FAQs</div>
                      <div className="text-xs text-navy-500 dark:text-navy-400">
                        Frequently asked questions & clarity
                      </div>
                    </div>
                  </div>
                  <Icon name="ChevronRight" size="sm" className="text-navy-400" />
                </Link>

                <Link
                  to="/about"
                  onClick={onCloseMore}
                  className={cn(
                    'flex items-center justify-between p-3 rounded-2xl border transition-all',
                    currentPath === '/about'
                      ? 'border-brand-500 bg-brand-500/10 text-brand-600 dark:text-brand-400'
                      : 'border-navy-100 dark:border-navy-800 bg-navy-50/60 dark:bg-navy-950/60 hover:bg-brand-50/50 dark:hover:bg-navy-800/80 text-navy-800 dark:text-navy-100'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                      <Icon name="Building2" size="md" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">About Company</div>
                      <div className="text-xs text-navy-500 dark:text-navy-400">
                        Studio story, team & Bulusan roots
                      </div>
                    </div>
                  </div>
                  <Icon name="ChevronRight" size="sm" className="text-navy-400" />
                </Link>
              </div>

              {/* Quick Actions (Theme Switcher + Messenger) */}
              <div className="space-y-2 pt-1">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-navy-400">
                  Quick Actions
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {onToggleTheme && (
                    <button
                      type="button"
                      onClick={onToggleTheme}
                      className="flex items-center justify-center gap-2 p-3 rounded-2xl border border-navy-200 dark:border-navy-800 bg-white dark:bg-navy-950/70 text-navy-700 dark:text-navy-200 text-xs font-semibold hover:border-brand-500 transition-colors"
                    >
                      <Icon name={isDark ? 'Sun' : 'Moon'} size="sm" className="text-brand-500" />
                      <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                    </button>
                  )}

                  <a
                    href={BRAND_INFO.messengerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-2xl border border-navy-200 dark:border-navy-800 bg-white dark:bg-navy-950/70 text-navy-700 dark:text-navy-200 text-xs font-semibold hover:border-brand-500 transition-colors"
                  >
                    <Icon name="MessageCircle" size="sm" className="text-brand-500" />
                    <span>Messenger</span>
                  </a>
                </div>
              </div>

              {/* Direct Support Quick Info */}
              <div className="p-3 rounded-2xl bg-navy-50/80 dark:bg-navy-950/80 border border-navy-100 dark:border-navy-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-navy-600 dark:text-navy-300">
                  <Icon name="PhoneCall" size="xs" className="text-brand-500" />
                  <span>{BRAND_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-navy-600 dark:text-navy-300">
                  <Icon name="Mail" size="xs" className="text-brand-500" />
                  <span>{BRAND_INFO.email}</span>
                </div>
              </div>

              {/* Primary CTA Button */}
              <div className="pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  to="/contact"
                  rightIcon="ArrowUpRight"
                  onClick={onCloseMore}
                >
                  Get a Custom Website
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

MobileBottomBar.propTypes = {
  isMoreOpen: PropTypes.bool,
  onToggleMore: PropTypes.func,
  onCloseMore: PropTypes.func,
  isDark: PropTypes.bool,
  onToggleTheme: PropTypes.func,
};

export default MobileBottomBar;
