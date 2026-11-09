import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Heading, Text, Button } from '../../atoms';
import { cn } from '../../../utils/formatters';

/**
 * Organism: CTABanner
 * High-conversion corporate call-to-action banner.
 */
export function CTABanner({
  badge = '',
  headline = '',
  subheadline = '',
  primaryCta = null,
  secondaryCta = null,
  className = '',
}) {
  return (
    <section className={cn('py-14 sm:py-20 px-4 sm:px-6 lg:px-8', className)}>
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-brand-950 to-navy-950 text-white px-6 py-12 sm:px-12 sm:py-16 shadow-elevated border border-brand-800/50 text-center">
          <div
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-brand-500/20 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-accent-500/15 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-3xl mx-auto space-y-5">
            {badge && (
              <div className="flex justify-center">
                <Badge variant="accent" size="md" icon="Sparkles">
                  {badge}
                </Badge>
              </div>
            )}

            <Heading as="h2" size="xl" color="light" align="center">
              {headline}
            </Heading>

            {subheadline && (
              <Text size="md" variant="light" className="text-navy-200 sm:text-lg max-w-2xl mx-auto">
                {subheadline}
              </Text>
            )}

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5">
              {primaryCta && (
                <Button
                  variant="accent"
                  size="lg"
                  to={primaryCta.path}
                  rightIcon="ArrowUpRight"
                >
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button
                  variant="outline"
                  size="lg"
                  to={secondaryCta.path}
                  leftIcon="LayoutGrid"
                  className="border-navy-600 text-white hover:bg-white/10"
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

CTABanner.propTypes = {
  badge: PropTypes.string,
  headline: PropTypes.string.isRequired,
  subheadline: PropTypes.string,
  primaryCta: PropTypes.shape({
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }),
  secondaryCta: PropTypes.shape({
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }),
  className: PropTypes.string,
};

export default CTABanner;
