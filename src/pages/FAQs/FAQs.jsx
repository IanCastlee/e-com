import React from 'react';
import { PageLayout } from '../../components/templates';
import { FAQAccordion, CTABanner } from '../../components/organisms';
import { Button } from '../../components/atoms';
import { faqs, ctaBannerData } from '../../data';

/**
 * Page: FAQs
 * Dedicated Frequently Asked Questions page answering queries on:
 * - Basic Static Websites vs. Premium Dynamic Systems with Database & Admin Panel
 * - Project requirements & materials needed from clients
 * - Turnaround times, domains, hosting, and warranty support
 */
export function FAQs() {
  return (
    <PageLayout
      seoTitle="FAQs | Frequently Asked Questions | e-yhan Digital Solutions"
      seoDescription="Learn the difference between Basic Static Websites ($55 / ₱3k) and Premium Dynamic Systems with Admin & Database, materials needed, and payment policies."
      badge="Help & Knowledge Base"
      badgeIcon="HelpCircle"
      title="Frequently Asked Questions"
      subtitle="Clear answers about our website packages, required materials, static vs. dynamic architectures, and our Output First Before Payment guarantee."
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'FAQs' },
      ]}
      headerActions={
        <Button variant="primary" size="md" to="/contact" rightIcon="ArrowUpRight">
          Ask a Direct Question
        </Button>
      }
      footerBannerSlot={<CTABanner {...ctaBannerData} />}
    >
      <section className="py-12 sm:py-20 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[5%]">
        <FAQAccordion
          faqs={faqs}
          sectionHeader={{
            eyebrow: 'Transparent Answers',
            eyebrowIcon: 'HelpCircle',
            title: 'Common Questions About Building Your Website',
            subtitle:
              'Have questions before starting your project? Explore our detailed answers below or reach out directly to our Bulusan studio.',
          }}
        />
      </section>
    </PageLayout>
  );
}

export default FAQs;
