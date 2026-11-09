import React, { useMemo } from 'react';
import { PageLayout } from '../../components/templates';
import {
  Hero,
  CategoryTabs,
  FeaturedSlider,
  ProcessSteps,
  PricingTable,
  TestimonialSection,
  FAQAccordion,
  CTABanner,
} from '../../components/organisms';
import { Heading, Text, Icon } from '../../components/atoms';
import {
  heroData,
  companyHighlights,
  categories,
  websites,
  processSteps,
  pricingTiers,
  customEnterprisePackage,
  testimonials,
  faqs,
  ctaBannerData,
} from '../../data';
import { useFilter } from '../../hooks';

/**
 * Page: Home
 * Main company landing page composing Hero, Category showcase, FeaturedSlider,
 * ProcessSteps, PricingTable preview, TestimonialSection, FAQAccordion, and CTABanner.
 */
export function Home() {
  const { categoryCounts } = useFilter(websites, { enableLoadingTransition: false });

  const featuredWebsites = useMemo(
    () => websites.filter((site) => site.featured),
    []
  );

  const flagshipSite = featuredWebsites[0] || websites[0];

  return (
    <PageLayout
      seoTitle="e-yhan | Ready-Made & Custom Websites — Bulusan, Sorsogon"
      seoDescription="e-yhan Web Engineering & Digital Solutions builds ready-made and custom websites for resorts, barangays, schools, stores, and businesses across Sorsogon and the Philippines."
      showPageHeader={false}
      footerBannerSlot={<CTABanner {...ctaBannerData} />}
    >
      {/* 1. Corporate Hero */}
      <Hero
        originBadge={heroData.originBadge}
        headline={heroData.headline}
        highlightedText={heroData.highlightedText}
        subheadline={heroData.subheadline}
        primaryCta={heroData.primaryCta}
        secondaryCta={heroData.secondaryCta}
        trustBadges={heroData.trustBadges}
        companyStats={heroData.companyStats}
        heroImage={heroData.heroImage}
      />

      {/* 2. Enterprise Engineering Pillars */}
      <section className="py-12 sm:py-16 bg-white dark:bg-navy-900 border-b border-navy-200/70 dark:border-navy-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {companyHighlights.map((pillar) => (
              <div
                key={pillar.id}
                className="flex items-start gap-4 p-5 rounded-2xl bg-navy-50/70 dark:bg-navy-950/60 border border-navy-200/60 dark:border-navy-800"
              >
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-600 text-white shrink-0">
                  <Icon name={pillar.icon} size="md" />
                </span>
                <div>
                  <Heading as="h3" size="sm">
                    {pillar.title}
                  </Heading>
                  <Text size="xs" variant="muted" className="mt-1">
                    {pillar.description}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Industry Categories Grid (8 Categories) */}
      <CategoryTabs
        variant="cards"
        categories={categories}
        categoryCounts={categoryCounts}
        sectionHeader={{
          eyebrow: 'Industry-Tailored Digital Solutions',
          eyebrowIcon: 'Layers',
          title: 'Websites Built for Every Local Sector',
          subtitle:
            'Select an industry category below to explore ready-made systems engineered for Philippine resorts, barangays, schools, stores, and enterprises.',
        }}
      />

      {/* 4. Featured Websites Slider */}
      <FeaturedSlider websites={featuredWebsites} />

      {/* 5. How It Works Process Steps (Choose > Customize > Launch) */}
      <ProcessSteps
        steps={processSteps}
        sectionHeader={{
          eyebrow: 'Turnkey Engineering Workflow',
          eyebrowIcon: 'Workflow',
          title: 'How We Launch Your Website in 3 Simple Steps',
          subtitle:
            'Skip the 6-month agency delays. Our modular architecture gets your organization live in days while tailored 100% to your brand.',
        }}
      />

      {/* 6. Pricing & Packages Preview */}
      <PricingTable
        tiers={pricingTiers}
        showComparison={false}
        className="bg-white dark:bg-navy-900/40 border-t border-navy-200/70 dark:border-navy-800/80"
        sectionHeader={{
          eyebrow: 'Transparent Pricing & Payment Terms',
          eyebrowIcon: 'Wallet',
          title: 'Simple Pricing: Static vs. Website with Database',
        }}
      />

      {/* 7. Client Testimonials */}
      <TestimonialSection
        testimonials={testimonials}
        sectionHeader={{
          eyebrow: 'Verified Client Impact',
          eyebrowIcon: 'Award',
          title: 'Trusted by Resorts, Barangays, Schools & SMEs',
          subtitle:
            'Real results from organizations across Bulusan, Sorsogon, and the Bicol Region that upgraded their digital presence with e-yhan.',
        }}
      />

      {/* 8. Frequently Asked Questions */}
      <FAQAccordion
        faqs={faqs}
        sectionHeader={{
          eyebrow: 'Common Questions',
          eyebrowIcon: 'HelpCircle',
          title: 'Everything You Need to Know Before Launching',
          subtitle:
            'Have questions about turnaround time, GCash payment terms, or domain setup? Here are clear answers.',
        }}
      />
    </PageLayout>
  );
}

export default Home;
