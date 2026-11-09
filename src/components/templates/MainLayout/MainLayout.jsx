import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '../../organisms';
import { Button, Icon } from '../../atoms';

/**
 * Template: MainLayout
 * Root application layout shell with Navbar + Footer slots and scroll-to-top trigger.
 */
export function MainLayout({
  navbarProps = {},
  footerProps = {},
  navbarSlot = null,
  footerSlot = null,
  isScrolled = false,
  onScrollTop,
  children,
}) {
  return (
    <div className="min-h-screen flex flex-col bg-navy-50 dark:bg-navy-950 text-navy-900 dark:text-navy-50 transition-colors duration-300">
      {navbarSlot || <Navbar {...navbarProps} isScrolled={isScrolled} />}

      <main id="main-content" className="flex-1">
        {children || <Outlet />}
      </main>

      {footerSlot || <Footer {...footerProps} />}

      {/* Floating Back-to-Top Button */}
      {isScrolled && onScrollTop && (
        <div className="fixed bottom-6 right-6 z-40">
          <Button
            variant="primary"
            size="sm"
            onClick={onScrollTop}
            aria-label="Scroll back to top"
            className="w-11 h-11 !p-0 rounded-full shadow-elevated"
          >
            <Icon name="ArrowUp" size="sm" />
          </Button>
        </div>
      )}
    </div>
  );
}

MainLayout.propTypes = {
  navbarProps: PropTypes.object,
  footerProps: PropTypes.object,
  navbarSlot: PropTypes.node,
  footerSlot: PropTypes.node,
  isScrolled: PropTypes.bool,
  onScrollTop: PropTypes.func,
  children: PropTypes.node,
};

export default MainLayout;
