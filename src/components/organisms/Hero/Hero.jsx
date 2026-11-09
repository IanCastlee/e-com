import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Badge, Heading, Text, Button, Icon } from '../../atoms';

/**
 * Organism: Hero
 * Corporate hero section featuring value proposition, CTAs, layered hero visual showcase, and enterprise metrics.
 */
export function Hero({
  originBadge = '',
  headline = '',
  highlightedText = '',
  subheadline = '',
  primaryCta = { label: 'View Portfolio', path: '/portfolio', icon: 'LayoutGrid' },
  secondaryCta = { label: 'Get a Website', path: '/contact', icon: 'ArrowUpRight' },
  trustBadges = [],
  companyStats = [],
  heroImage = null,
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/50 via-white to-navy-50 dark:from-navy-950 dark:via-navy-900 dark:to-navy-950 pt-10 pb-16 sm:pt-16 sm:pb-24 border-b border-navy-200/70 dark:border-navy-800/80">
      {/* Subtle Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-brand-400/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-accent-400/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Copy Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7 space-y-6"
          >
            {originBadge && (
              <div>
                <Badge variant="brand" size="md" icon="MapPin">
                  {originBadge}
                </Badge>
              </div>
            )}

            <Heading as="h1" size="2xl" className="tracking-tight">
              {headline}{' '}
              {highlightedText && (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400 dark:from-brand-400 dark:to-brand-300">
                  {highlightedText}
                </span>
              )}
            </Heading>

            {subheadline && (
              <Text size="lg" variant="muted" className="max-w-2xl">
                {subheadline}
              </Text>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {primaryCta && (
                <Button
                  variant="primary"
                  size="lg"
                  to={primaryCta.path}
                  leftIcon={primaryCta.icon || 'LayoutGrid'}
                >
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button
                  variant="outline"
                  size="lg"
                  to={secondaryCta.path}
                  rightIcon={secondaryCta.icon || 'ArrowUpRight'}
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>

            {/* Trust Badges */}
            {trustBadges.length > 0 && (
              <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2.5 border-t border-navy-200/70 dark:border-navy-800/80">
                {trustBadges.map((item) => (
                  <div
                    key={item.label}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-navy-600 dark:text-navy-300"
                  >
                    <Icon name={item.icon || 'CheckCircle2'} size="sm" className="text-brand-600 dark:text-brand-400" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right Corporate Hero Image Column */}
          {heroImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Decorative Glow Frame */}
                <div
                  className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-brand-500/25 via-brand-400/10 to-accent-400/20 blur-xl pointer-events-none"
                  aria-hidden="true"
                />

                {/* Main Showcase Image Container */}
                <div className="relative rounded-3xl overflow-hidden bg-navy-900 border-2 border-white dark:border-navy-800 shadow-elevated">
                  {/* Browser / Window Top Bar */}
                  <div className="px-4 py-3 bg-navy-900/95 border-b border-navy-800 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-accent-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-400" />
                    </div>
                    <span className="text-[11px] font-medium text-navy-300 tracking-wide">
                      e-yhan.ph • Digital Solutions Studio
                    </span>
                    <Icon name="Sparkles" size="xs" className="text-brand-400" />
                  </div>

                  {/* Hero Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={heroImage.src}
                      alt={heroImage.alt}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />

                    {/* Bottom Image Caption Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-navy-950/80 backdrop-blur-md border border-white/15 text-white flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-xl bg-brand-600 text-white inline-flex items-center justify-center shrink-0">
                          <Icon name="Code2" size="md" />
                        </span>
                        <div>
                          <div className="font-display font-bold text-sm text-white">
                            {heroImage.floatingBottomTitle}
                          </div>
                          <div className="text-xs text-navy-200">
                            {heroImage.floatingBottomSubtitle}
                          </div>
                        </div>
                      </div>
                      <Badge variant="accent" size="sm">
                        Live
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Floating Top-Right Pill Badge */}
                {heroImage.floatingTopBadge && (
                  <div className="hidden sm:flex items-center gap-2.5 absolute -top-4 -right-3 px-4 py-2.5 rounded-2xl bg-white dark:bg-navy-900 border border-navy-200 dark:border-navy-700 shadow-elevated">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-500 animate-ping" />
                    <span className="text-xs font-bold text-navy-900 dark:text-white">
                      {heroImage.floatingTopBadge}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>

        {/* Corporate Metrics Strip */}
        {companyStats.length > 0 && (
          <div className="mt-14 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {companyStats.map((stat) => (
              <div
                key={stat.label}
                className="p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-navy-900/90 backdrop-blur-sm border border-navy-200/80 dark:border-navy-800 shadow-soft"
              >
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-brand-600 dark:text-brand-400">
                  {stat.value}
                </div>
                <Heading as="h3" size="sm" className="mt-1">
                  {stat.label}
                </Heading>
                {stat.detail && (
                  <Text size="xs" variant="muted" className="mt-0.5">
                    {stat.detail}
                  </Text>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

Hero.propTypes = {
  originBadge: PropTypes.string,
  headline: PropTypes.string.isRequired,
  highlightedText: PropTypes.string,
  subheadline: PropTypes.string,
  primaryCta: PropTypes.shape({
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    icon: PropTypes.string,
  }),
  secondaryCta: PropTypes.shape({
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    icon: PropTypes.string,
  }),
  trustBadges: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      label: PropTypes.string.isRequired,
    })
  ),
  companyStats: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      detail: PropTypes.string,
    })
  ),
  heroImage: PropTypes.shape({
    src: PropTypes.string.isRequired,
    secondarySrc: PropTypes.string,
    alt: PropTypes.string,
    floatingTopBadge: PropTypes.string,
    floatingBottomTitle: PropTypes.string,
    floatingBottomSubtitle: PropTypes.string,
  }),
};

export default Hero;
