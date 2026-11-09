import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../components/templates';
import { Spinner, Text } from '../components/atoms';
import { useScrollTop, useTheme } from '../hooks';
import { navLinks, footerData } from '../data';
import { BRAND_INFO } from '../utils/constants';

// Lazy-loaded route pages for optimal bundle splitting
const Home = lazy(() => import('../pages/Home'));
const Portfolio = lazy(() => import('../pages/Portfolio'));
const CategoryPage = lazy(() => import('../pages/CategoryPage'));
const WebsiteDetails = lazy(() => import('../pages/WebsiteDetails'));
const Services = lazy(() => import('../pages/Services'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3">
      <Spinner size="lg" variant="primary" />
      <Text size="sm" variant="muted">
        Loading e-yhan experience...
      </Text>
    </div>
  );
}

/**
 * Central Route Configuration for e-yhan Digital Solutions
 */
export function AppRoutes() {
  const { isScrolled, scrollToTop } = useScrollTop(24);
  const { isDark, toggleTheme } = useTheme();

  const navbarProps = {
    brandName: BRAND_INFO.name,
    brandSubtitle: 'Digital Solutions',
    originText: BRAND_INFO.originBadge,
    contactEmail: BRAND_INFO.email,
    contactPhone: BRAND_INFO.phone,
    links: navLinks,
    ctaButton: { label: 'Get a Website', path: '/contact' },
    isDark,
    onToggleTheme: toggleTheme,
  };

  return (
    <MainLayout
      navbarProps={navbarProps}
      footerProps={footerData}
      isScrolled={isScrolled}
      onScrollTop={scrollToTop}
    >
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<WebsiteDetails />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
}

export default AppRoutes;
