import React from 'react';
import { PageLayout } from '../../components/templates';
import {
  PricingTable,
  ProcessSteps,
  FAQAccordion,
  CTABanner,
} from '../../components/organisms';
import { Button } from '../../components/atoms';
import {
  pricingTiers,
  customEnterprisePackage,
  comparisonFeatures,
  processSteps,
  faqs,
  ctaBannerData,
} from '../../data';

/**
 * Page: Services (Services & Pricing)
 * Displays the 3 transparent PHP packages, feature comparison matrix,
 * custom enterprise option, delivery process steps, and FAQs.
 */
export function Services() {
  return (
    <PageLayout
      seoTitle="Services & Pricing Packages | e-yhan Digital Solutions"
      seoDescription="Static Websites ($55–$180 / ₱3k–₱10k, Output First Before Payment) and Dynamic Websites with Database ($215–$1,450 / ₱12k–₱80k, Min. $90 / ₱5k Downpayment)."
      badge="Output First & Transparent Pricing"
      badgeIcon="CreditCard"
      title="Solutions, Packages & Pricing"
      subtitle="Clear deliverables in USD ($) and PHP (₱) with zero mandatory monthly lock-in. Get Output First Before Payment on Static Websites, or launch a Full-Stack Website with Database with just a $90 (₱5,000) minimum downpayment."
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'Solutions & Pricing' },
      ]}
      headerActions={
        <Button variant="primary" size="md" to="/contact" rightIcon="ArrowUpRight">
          Get a Free Project Quote
        </Button>
      }
      footerBannerSlot={<CTABanner {...ctaBannerData} />}
    >
      {/* 1. Unified Pricing Tiers + Full Comparison Matrix */}
      <PricingTable
        tiers={pricingTiers}
        comparisonRows={comparisonFeatures}
        showComparison={true}
      />

      {/* 2. Delivery Process Steps */}
      <ProcessSteps
        steps={processSteps}
        className="bg-white dark:bg-navy-900/50 border-y border-navy-200/70 dark:border-navy-800/80"
        sectionHeader={{
          eyebrow: 'How We Work Together',
          eyebrowIcon: 'Workflow',
          title: 'From Selection to Live Domain in Days',
          subtitle:
            'Static websites are built Output First before you pay. Database-driven websites start with a minimum $90 (₱5,000) downpayment.',
        }}
      />

      {/* 3. Pricing & Support FAQs */}
      <FAQAccordion
        faqs={faqs}
        sectionHeader={{
          eyebrow: 'Billing, Domains & Warranty',
          eyebrowIcon: 'HelpCircle',
          title: 'Frequently Asked Pricing & Service Questions',
          subtitle:
            'Everything you need to know about payments, turnaround times, and post-launch technical support.',
        }}
      />
    </PageLayout>
  );
}

export default Services;
