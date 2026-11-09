import React, { useRef, useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Avatar, Badge, Heading, Text, Icon, Button } from '../../atoms';
import { SectionTitle } from '../../molecules';
import { cn } from '../../../utils/formatters';

/**
 * Truncates text at the nearest word boundary before maxChars.
 */
function truncateQuote(text = '', maxChars = 185) {
  if (!text || text.length <= maxChars) return text;
  const sliced = text.slice(0, maxChars);
  const lastSpace = sliced.lastIndexOf(' ');
  return lastSpace > 120 ? sliced.slice(0, lastSpace) : sliced;
}

/**
 * Organism: TestimonialSection
 * Horizontal carousel/slider displaying verified client endorsements, impact metrics,
 * inline "...read more" / "Show less" quote expansion, and links to deployed systems.
 */
export function TestimonialSection({
  testimonials = [],
  sectionHeader = null,
  maxChars = 185,
  readMoreLabel = '..read more',
  showLessLabel = 'Show less',
  prevAriaLabel = 'Slide testimonials left',
  nextAriaLabel = 'Slide testimonials right',
  className = '',
}) {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIds, setExpandedIds] = useState({});

  const total = testimonials.length;

  const toggleExpand = useCallback((id) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }, []);

  const scrollToIndex = useCallback(
    (index) => {
      const container = sliderRef.current;
      if (!container || !total) return;

      const boundedIndex = ((index % total) + total) % total;
      const cards = container.querySelectorAll('[data-testimonial-card]');
      const targetCard = cards[boundedIndex];

      if (targetCard) {
        container.scrollTo({
          left: targetCard.offsetLeft - container.offsetLeft,
          behavior: 'smooth',
        });
        setActiveIndex(boundedIndex);
      }
    },
    [total]
  );

  const handlePrev = useCallback(() => {
    scrollToIndex(activeIndex - 1);
  }, [activeIndex, scrollToIndex]);

  const handleNext = useCallback(() => {
    scrollToIndex(activeIndex + 1);
  }, [activeIndex, scrollToIndex]);

  // Update active dot indicator on manual touch/trackpad horizontal scroll
  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return undefined;

    const handleScroll = () => {
      const cards = container.querySelectorAll('[data-testimonial-card]');
      if (!cards.length) return;
      const cardWidth = cards[0].offsetWidth + 24;
      const idx = Math.round(container.scrollLeft / cardWidth);
      if (idx >= 0 && idx < total) {
        setActiveIndex(idx);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [total]);

  if (!total) return null;

  return (
    <section
      className={cn(
        'py-16 sm:py-24 bg-navy-100/60 dark:bg-navy-900/50 border-y border-navy-200/70 dark:border-navy-800/80 overflow-hidden',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + Horizontal Slider Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          {sectionHeader && (
            <SectionTitle
              eyebrow={sectionHeader.eyebrow}
              eyebrowIcon={sectionHeader.eyebrowIcon || 'MessageSquareQuote'}
              title={sectionHeader.title}
              subtitle={sectionHeader.subtitle}
              align="left"
              className="!mb-0"
            />
          )}

          <div className="flex items-center gap-2.5 shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrev}
              aria-label={prevAriaLabel}
              className="w-11 h-11 !p-0 rounded-xl bg-white dark:bg-navy-900 shadow-sm"
            >
              <Icon name="ChevronLeft" size="md" />
            </Button>
            <span className="text-xs font-semibold text-navy-500 dark:text-navy-400 px-2">
              {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={handleNext}
              aria-label={nextAriaLabel}
              className="w-11 h-11 !p-0 rounded-xl bg-white dark:bg-navy-900 shadow-sm"
            >
              <Icon name="ChevronRight" size="md" />
            </Button>
          </div>
        </div>

        {/* Horizontal Scroll-Snap Slider Track */}
        <div
          ref={sliderRef}
          className="flex items-stretch gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pb-4 -mx-1 px-1"
        >
          {testimonials.map((item) => {
            const isLong = (item.quote || '').length > maxChars;
            const isExpanded = Boolean(expandedIds[item.id]);
            const displayedQuote =
              isLong && !isExpanded
                ? truncateQuote(item.quote, maxChars)
                : item.quote;

            return (
              <article
                key={item.id}
                data-testimonial-card
                className="w-[86vw] sm:w-[420px] lg:w-[460px] shrink-0 snap-start flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border border-navy-200/80 dark:border-navy-800 shadow-soft hover:shadow-elevated hover:border-brand-500/50 transition-all duration-300"
              >
                <div>
                  {/* Top Rating & Metric Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                    <div
                      className="flex items-center gap-1 text-accent-500"
                      aria-label={`${item.rating || 5} out of 5 stars`}
                    >
                      {Array.from({ length: item.rating || 5 }).map((_, idx) => (
                        <Icon key={idx} name="Star" size="sm" className="fill-current" />
                      ))}
                    </div>
                    {item.metricHighlight && (
                      <Badge variant="brand" size="sm" icon="TrendingUp">
                        {item.metricHighlight}
                      </Badge>
                    )}
                  </div>

                  {/* Quote with inline "..read more" / "Show less" toggle */}
                  <Text size="md" variant="body" className="italic text-navy-800 dark:text-navy-100">
                    &ldquo;{displayedQuote}
                    {!isLong && <>&rdquo;</>}
                    {isLong && isExpanded && <>&rdquo;</>}
                    {isLong && (
                      <button
                        type="button"
                        onClick={() => toggleExpand(item.id)}
                        className="ml-1 not-italic font-semibold text-sm text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 hover:underline focus:outline-none"
                      >
                        {isExpanded ? showLessLabel : readMoreLabel}
                      </button>
                    )}
                  </Text>
                </div>

                {/* Author Footer */}
                <div className="mt-6 pt-5 border-t border-navy-100 dark:border-navy-800 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <Avatar
                      initials={item.avatarInitials}
                      alt={item.name}
                      size="md"
                      variant="brand"
                    />
                    <div>
                      <Heading as="h4" size="sm">
                        {item.name}
                      </Heading>
                      <Text size="xs" variant="muted">
                        {item.role} • {item.organization}
                      </Text>
                      {item.location && (
                        <Text
                          size="xs"
                          variant="brand"
                          className="text-[11px] flex items-center gap-1 mt-0.5"
                        >
                          <Icon name="MapPin" size="xs" />
                          <span>{item.location}</span>
                        </Text>
                      )}
                    </div>
                  </div>

                  {item.projectSlug && (
                    <Link
                      to={`/portfolio/${item.projectSlug}`}
                      className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline shrink-0"
                    >
                      <span>View System</span>
                      <Icon name="ArrowUpRight" size="xs" />
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Pagination Dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {testimonials.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={cn(
                'h-2.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500',
                activeIndex === idx
                  ? 'w-8 bg-brand-600 dark:bg-brand-400'
                  : 'w-2.5 bg-navy-300 dark:bg-navy-700 hover:bg-brand-400'
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

TestimonialSection.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string,
      organization: PropTypes.string,
      location: PropTypes.string,
      avatarInitials: PropTypes.string,
      rating: PropTypes.number,
      metricHighlight: PropTypes.string,
      quote: PropTypes.string.isRequired,
      projectSlug: PropTypes.string,
    })
  ).isRequired,
  sectionHeader: PropTypes.shape({
    eyebrow: PropTypes.string,
    eyebrowIcon: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
  }),
  maxChars: PropTypes.number,
  readMoreLabel: PropTypes.string,
  showLessLabel: PropTypes.string,
  prevAriaLabel: PropTypes.string,
  nextAriaLabel: PropTypes.string,
  className: PropTypes.string,
};

export default TestimonialSection;
