import { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook that scrolls window to top on route change
 * and tracks whether the user has scrolled past a threshold.
 * @param {number} threshold - Scroll Y offset in pixels
 */
export function useScrollTop(threshold = 24) {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  // Track scroll position for sticky navbar styling & back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return { isScrolled, scrollToTop };
}

export default useScrollTop;
