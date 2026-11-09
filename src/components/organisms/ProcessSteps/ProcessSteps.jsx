import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Text, Icon, Badge } from '../../atoms';
import { SectionTitle } from '../../molecules';
import { cn } from '../../../utils/formatters';

/**
 * Organism: ProcessSteps
 * Displays the 3-step delivery methodology (Choose > Customize > Launch).
 */
export function ProcessSteps({
  steps = [],
  sectionHeader = null,
  className = '',
}) {
  return (
    <section className={cn('py-16 sm:py-24', className)}>
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {sectionHeader && (
          <SectionTitle
            eyebrow={sectionHeader.eyebrow}
            eyebrowIcon={sectionHeader.eyebrowIcon || 'Workflow'}
            title={sectionHeader.title}
            subtitle={sectionHeader.subtitle}
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={step.stepNumber || index}
              className="relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border border-navy-200/80 dark:border-navy-800 shadow-soft hover:shadow-elevated transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-600 text-white shadow-sm">
                    <Icon name={step.icon || 'CheckCircle2'} size="lg" />
                  </span>
                  <span className="font-display text-3xl sm:text-4xl font-extrabold text-navy-200 dark:text-navy-800 select-none">
                    {step.stepNumber}
                  </span>
                </div>

                {step.subtitle && (
                  <Text size="xs" variant="brand" className="uppercase tracking-wider font-bold mb-1">
                    {step.subtitle}
                  </Text>
                )}

                <Heading as="h3" size="md">
                  {step.title}
                </Heading>

                <Text size="sm" variant="muted" className="mt-3">
                  {step.description}
                </Text>
              </div>

              {step.deliverable && (
                <div className="mt-6 pt-4 border-t border-navy-100 dark:border-navy-800">
                  <Badge variant="brand" size="sm" icon="Check">
                    Deliverable: {step.deliverable}
                  </Badge>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

ProcessSteps.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      stepNumber: PropTypes.string,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      icon: PropTypes.string,
      description: PropTypes.string.isRequired,
      deliverable: PropTypes.string,
    })
  ).isRequired,
  sectionHeader: PropTypes.shape({
    eyebrow: PropTypes.string,
    eyebrowIcon: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
  }),
  className: PropTypes.string,
};

export default ProcessSteps;
