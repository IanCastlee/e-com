import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { Heading, Text, Icon, Badge } from '../../atoms';
import { SectionTitle } from '../../molecules';
import { cn } from '../../../utils/formatters';

/**
 * Organism: FAQAccordion
 * Accessible expandable FAQ accordion list.
 */
export function FAQAccordion({
  faqs = [],
  sectionHeader = null,
  defaultOpenIndex = 0,
  className = '',
}) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  const toggleItem = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section className={cn('py-16 sm:py-24', className)}>
      <div className="max-w-4xl mx-auto px-[5px] sm:px-6 lg:px-8">
        {sectionHeader && (
          <SectionTitle
            eyebrow={sectionHeader.eyebrow}
            eyebrowIcon={sectionHeader.eyebrowIcon || 'HelpCircle'}
            title={sectionHeader.title}
            subtitle={sectionHeader.subtitle}
          />
        )}

        <div className="space-y-3.5">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.id || idx}
                className={cn(
                  'rounded-2xl border transition-all duration-200 overflow-hidden',
                  isOpen
                    ? 'bg-white dark:bg-navy-900 border-brand-500/70 shadow-soft'
                    : 'bg-white/80 dark:bg-navy-900/70 border-navy-200/80 dark:border-navy-800 hover:border-navy-300 dark:hover:border-navy-700'
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  <div className="space-y-1">
                    {item.category && (
                      <Badge variant="brand" size="sm">
                        {item.category}
                      </Badge>
                    )}
                    <Heading as="h3" size="sm" className="pt-0.5">
                      {item.question}
                    </Heading>
                  </div>
                  <span
                    className={cn(
                      'inline-flex items-center justify-center w-8 h-8 rounded-lg shrink-0 transition-transform duration-200',
                      isOpen
                        ? 'bg-brand-600 text-white rotate-180'
                        : 'bg-navy-100 dark:bg-navy-800 text-navy-600 dark:text-navy-300'
                    )}
                  >
                    <Icon name="ChevronDown" size="sm" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-navy-100 dark:border-navy-800/80">
                        <Text size="sm" variant="muted">
                          {item.answer}
                        </Text>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

FAQAccordion.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      category: PropTypes.string,
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
  sectionHeader: PropTypes.shape({
    eyebrow: PropTypes.string,
    eyebrowIcon: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
  }),
  defaultOpenIndex: PropTypes.number,
  className: PropTypes.string,
};

export default FAQAccordion;
