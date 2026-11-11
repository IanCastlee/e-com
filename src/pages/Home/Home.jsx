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

  const localShowcaseWebsites = useMemo(
    () => websites.filter((site) => site.thumbnail && site.thumbnail.startsWith('/')),
    []
  );

  return (
    <PageLayout
      seoTitle="e-yhan | Ready-Made & Custom Websites — Bulusan, Sorsogon"
      seoDescription="e-yhan Web Engineering & Digital Solutions builds ready-made and custom websites for resorts, barangays, schools, stores, and businesses across Sorsogon and the Philippines."
      showPageHeader={false}
      footerBannerSlot={<CTABanner {...ctaBannerData} />}
    >
      {/* 1. Direct Product-Focused Hero */}
      <Hero
        originBadge={heroData.originBadge}
        headline={heroData.headline}
        highlightedText={heroData.highlightedText}
        subheadline={heroData.subheadline}
        primaryCta={heroData.primaryCta}
        secondaryCta={heroData.secondaryCta}
        trustBadges={heroData.trustBadges}
        showcaseWebsites={localShowcaseWebsites}
      />

      {/* 1.5. Corporate Value Highlights Strip (Dedicated Section Below Hero, No Peeking in Desktop Hero) */}
      <section className="relative z-10 py-8 sm:py-12 bg-white dark:bg-[#060913] border-b border-navy-200/80 dark:border-navy-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {heroData.companyStats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 sm:p-5 md:p-6 rounded-[10px] bg-navy-50/70 dark:bg-navy-900/80 backdrop-blur-sm border border-navy-200/80 dark:border-navy-800 shadow-soft hover:shadow-elevated transition-all duration-300"
              >
                <div className="font-display text-lg sm:text-2xl md:text-3xl font-extrabold text-brand-600 dark:text-brand-400 leading-tight">
                  {stat.value}
                </div>
                <Heading as="h3" size="sm" className="mt-1 text-xs sm:text-sm md:text-base font-bold line-clamp-1">
                  {stat.label}
                </Heading>
                {stat.detail && (
                  <Text size="xs" variant="muted" className="mt-0.5 text-[10px] sm:text-xs leading-normal line-clamp-2">
                    {stat.detail}
                  </Text>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Featured Websites Showcase (Immediate Product Visibility) */}
      <FeaturedSlider
        websites={websites}
        maxItems={6}
        eyebrow="Curated Website Solutions"
        title="Featured Websites for Your Business"
        subtitle="Pick a website design that fits your brand. Free logo, colors, and content customization included — inspect the working live preview before paying."
      />

      {/* 3. Industry Categories Grid (8 Categories) */}
      <CategoryTabs
        variant="cards"
        categories={categories}
        categoryCounts={categoryCounts}
        sectionHeader={{
          eyebrow: 'Websites for Every Industry',
          eyebrowIcon: 'Layers',
          title: 'Browse Websites by Sector',
          subtitle:
            'Select your category below to explore live website solutions built for resorts, personal portfolios, barangays, schools, and stores.',
        }}
      />

      {/* 4. How It Works Process Steps (Choose > Customize > Launch) */}
      <ProcessSteps
        steps={processSteps}
        sectionHeader={{
          eyebrow: 'Simple 3-Step Process',
          eyebrowIcon: 'Workflow',
          title: 'How to Get Your Website Live in 3 Simple Steps',
          subtitle:
            'No complicated technical jargon. Choose a website template, send us your details, and test the live demo before paying.',
        }}
      />

      {/* 5. Customer Guarantees & Highlights */}
      <section className="py-12 sm:py-16 bg-white dark:bg-navy-900 border-b border-navy-200/70 dark:border-navy-800/80">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
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
