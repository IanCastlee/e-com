import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Badge, Heading, Text, Button, Icon } from '../../atoms';
import { SectionTitle, PriceTag } from '../../molecules';
import { cn } from '../../../utils/formatters';

/**
 * Organism: PricingTable
 * Unified pricing showcase comparing Static Websites ($55–$180 / ₱3k–₱10k, Output First Before Payment)
 * and Dynamic Websites with Database ($215–$1,450 / ₱12k–₱80k, Min. $90 / ₱5k Downpayment).
 */
export function PricingTable({
  tiers = [],
  comparisonRows = [],
  showComparison = false,
  sectionHeader = null,
  className = '',
}) {
  const [currencyMode, setCurrencyMode] = useState('USD');

  return (
    <section className={cn('py-16 sm:py-24', className)}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {sectionHeader && (
            <SectionTitle
              eyebrow={sectionHeader.eyebrow}
              eyebrowIcon={sectionHeader.eyebrowIcon || 'CreditCard'}
              title={sectionHeader.title}
              subtitle={sectionHeader.subtitle}
              className="!mb-6"
            />
          )}

          {/* Currency Switcher Pill (Default: USD $) */}
          <div className="mb-10 inline-flex items-center gap-1 p-1.5 rounded-2xl bg-navy-100 dark:bg-navy-900 border border-navy-200 dark:border-navy-800">
            <button
              type="button"
              onClick={() => setCurrencyMode('USD')}
              className={cn(
                'px-4 py-2 rounded-xl text-xs font-bold transition-all',
                currencyMode === 'USD'
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'text-navy-600 dark:text-navy-300 hover:text-navy-900 dark:hover:text-white'
              )}
            >
              USD ($) Dollar
            </button>
            <button
              type="button"
              onClick={() => setCurrencyMode('PHP')}
              className={cn(
                'px-4 py-2 rounded-xl text-xs font-bold transition-all',
                currencyMode === 'PHP'
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'text-navy-600 dark:text-navy-300 hover:text-navy-900 dark:hover:text-white'
              )}
            >
              PHP (₱) Peso
            </button>
          </div>
        </div>

        {/* Unified 2-Column Pricing Container */}
        <div className="rounded-3xl bg-white dark:bg-navy-900 border-2 border-navy-200/90 dark:border-navy-800 shadow-elevated overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-navy-200 dark:divide-navy-800">
            {tiers.map((tier) => {
              const primaryPrice =
                currencyMode === 'USD' ? tier.price : tier.phpEquivalent || tier.price;
              const secondaryPrice =
                currencyMode === 'USD' ? tier.phpEquivalent : `${tier.price} USD`;

              return (
                <div
                  key={tier.id}
                  className={cn(
                    'flex flex-col justify-between p-6 sm:p-10 transition-colors',
                    tier.popular
                      ? 'bg-navy-900 dark:bg-navy-950 text-white'
                      : 'bg-white dark:bg-navy-900 text-navy-900 dark:text-white'
                  )}
                >
                  <div>
                    {/* Top Row: Badge & Turnaround */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                      <Badge
                        variant={tier.popular ? 'accent' : 'brand'}
                        size="md"
                        icon={tier.popular ? 'Database' : 'ShieldCheck'}
                      >
                        {tier.badge}
                      </Badge>
                      {tier.turnaround && (
                        <span
                          className={cn(
                            'text-xs font-semibold inline-flex items-center gap-1.5',
                            tier.popular ? 'text-brand-300' : 'text-navy-500 dark:text-navy-400'
                          )}
                        >
                          <Icon name="Clock" size="xs" />
                          {tier.turnaround}
                        </span>
                      )}
                    </div>

                    {/* Package Title & Description */}
                    <Heading
                      as="h3"
                      size="lg"
                      color={tier.popular ? 'light' : 'default'}
                    >
                      {tier.name}
                    </Heading>

                    <Text
                      size="sm"
                      variant={tier.popular ? 'light' : 'muted'}
                      className={cn('mt-2', tier.popular && 'text-navy-300')}
                    >
                      {tier.description}
                    </Text>

                    {/* Price Display */}
                    <div className="mt-6 pt-6 border-t border-navy-200/70 dark:border-navy-800 flex flex-wrap items-baseline justify-between gap-3">
                      <PriceTag
                        amount={primaryPrice}
                        prefix="Package Investment"
                        size="lg"
                        className={cn(tier.popular && '[&_span]:!text-white')}
                      />
                      {secondaryPrice && (
                        <Badge
                          variant={tier.popular ? 'solid' : 'navy'}
                          size="md"
                          className="font-bold"
                        >
                          ≈ {secondaryPrice}
                        </Badge>
                      )}
                    </div>

                    {/* Payment Policy Callout Box */}
                    {tier.paymentPolicy && (
                      <div
                        className={cn(
                          'mt-5 p-4 rounded-2xl border space-y-1',
                          tier.popular
                            ? 'bg-brand-950/60 border-brand-500/40 text-brand-200'
                            : 'bg-brand-50/80 dark:bg-brand-950/40 border-brand-200 dark:border-brand-800 text-navy-800 dark:text-brand-200'
                        )}
                      >
                        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-600 dark:text-brand-400">
                          <Icon
                            name={tier.popular ? 'Wallet' : 'CheckCircle2'}
                            size="sm"
                            className={cn(tier.popular && 'text-accent-400')}
                          />
                          <span className={cn(tier.popular && 'text-accent-300')}>
                            {tier.paymentPolicy}
                          </span>
                        </div>
                        {tier.paymentPolicyDetail && (
                          <p
                            className={cn(
                              'text-xs leading-relaxed',
                              tier.popular ? 'text-navy-200' : 'text-navy-600 dark:text-navy-300'
                            )}
                          >
                            {tier.paymentPolicyDetail}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Feature Checklist */}
                    <ul className="mt-6 space-y-3">
                      {(tier.features || []).map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-sm">
                          <Icon
                            name="CheckCircle2"
                            size="sm"
                            className={cn(
                              'mt-0.5 shrink-0',
                              tier.popular ? 'text-brand-400' : 'text-brand-600 dark:text-brand-400'
                            )}
                          />
                          <span
                            className={cn(
                              tier.popular ? 'text-navy-100' : 'text-navy-700 dark:text-navy-200'
                            )}
                          >
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8 pt-4">
                    <Button
                      variant={tier.popular ? 'primary' : 'outline'}
                      size="lg"
                      fullWidth
                      to={`/contact?package=${encodeURIComponent(tier.name)}`}
                      rightIcon="ArrowRight"
                    >
                      {tier.ctaLabel}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Side-by-Side Comparison Matrix Table */}
        {showComparison && comparisonRows.length > 0 && (
          <div className="mt-16 sm:mt-20">
            <Heading as="h3" size="lg" align="center" className="mb-8">
              Static Website vs. Website with Database Comparison
            </Heading>
            <div className="overflow-x-auto rounded-2xl border border-navy-200 dark:border-navy-800 bg-white dark:bg-navy-900 shadow-soft">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-navy-50 dark:bg-navy-950 border-b border-navy-200 dark:border-navy-800">
                    <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-navy-600 dark:text-navy-300">
                      Deliverable / Policy
                    </th>
                    <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-navy-700 dark:text-navy-200">
                      Static Website ($55–$180 / ₱3k–₱10k)
                    </th>
                    <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                      Website with Database ($215–$1,450 / ₱12k–₱80k)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-100 dark:divide-navy-800/80 text-sm">
                  {comparisonRows.map((row) => (
                    <tr
                      key={row.feature}
                      className="hover:bg-navy-50/60 dark:hover:bg-navy-800/40 transition-colors"
                    >
                      <td className="py-4 px-6 font-medium text-navy-900 dark:text-white">
                        {row.feature}
                      </td>
                      <td className="py-4 px-6 text-navy-700 dark:text-navy-200 font-medium">
                        {row.staticSite}
                      </td>
                      <td className="py-4 px-6 font-semibold text-brand-700 dark:text-brand-300 bg-brand-50/30 dark:bg-brand-950/20">
                        {row.databaseSite}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

PricingTable.propTypes = {
  tiers: PropTypes.arrayOf(PropTypes.object).isRequired,
  comparisonRows: PropTypes.arrayOf(PropTypes.object),
  showComparison: PropTypes.bool,
  sectionHeader: PropTypes.shape({
    eyebrow: PropTypes.string,
    eyebrowIcon: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
  }),
  className: PropTypes.string,
};

export default PricingTable;
