import { useState, useEffect } from 'react';

/**
 * Custom hook to evaluate a CSS media query reactively.
 * @param {string} query - CSS media query string e.g. '(min-width: 768px)'
 * @returns {boolean}
 */
export function useMediaQuery(query) {
  const getMatches = (q) => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia(q).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState(() => getMatches(query));

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;

    const mediaQueryList = window.matchMedia(query);
    const listener = (event) => setMatches(event.matches);

    setMatches(mediaQueryList.matches);
    mediaQueryList.addEventListener('change', listener);

    return () => mediaQueryList.removeEventListener('change', listener);
  }, [query]);

  return matches;
}

export default useMediaQuery;
