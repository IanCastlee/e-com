import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageLayout } from '../../components/templates';
import { ContactForm, FAQAccordion } from '../../components/organisms';
import { SocialLinks } from '../../components/molecules';
import { Heading, Text, Icon, Badge, Button } from '../../components/atoms';
import { categories, faqs, footerData, websites } from '../../data';
import { useContactForm } from '../../hooks';
import { BRAND_INFO, BUDGET_RANGES } from '../../utils/constants';

/**
 * Page: Contact
 * Project inquiry page with ContactForm organism, pre-fill support from URL params,
 * direct Messenger/Email/Phone channels, and Bulusan, Sorsogon studio location card.
 */
export function Contact() {
  const [searchParams] = useSearchParams();

  const preferredParam = searchParams.get('preferred') || searchParams.get('code');
  const designParam = searchParams.get('design') || searchParams.get('website');
  const categoryParam = searchParams.get('category');
  const packageParam = searchParams.get('package');

  // Match selected website blueprint from websites data if provided
  const selectedWebsite = useMemo(() => {
    if (!preferredParam && !designParam) return null;
    const found = websites.find((w) => {
      if (preferredParam && w.code && w.code.toLowerCase() === preferredParam.toLowerCase()) return true;
      if (preferredParam && w.id && w.id.toLowerCase() === preferredParam.toLowerCase()) return true;
      if (designParam && w.title.toLowerCase() === designParam.toLowerCase()) return true;
      return false;
    });

    if (found) return found;

    return {
      title: designParam || preferredParam,
      code: preferredParam || 'CUSTOM',
      categoryName: categoryParam || 'Custom Website',
    };
  }, [preferredParam, designParam, categoryParam]);

  const prefill = useMemo(() => {
    const initial = {};

    if (selectedWebsite) {
      initial.websiteType = selectedWebsite.categoryName || categoryParam || 'Static Website ($55–$180 / ₱3k–₱10k • Output First)';
      initial.message = `Hello e-yhan! I prefer this website design: "${selectedWebsite.title}" (Code: ${selectedWebsite.code}).\n\nI would like to request and customize this design for my business/organization with my logo, brand colors, and content.`;
    } else {
      if (categoryParam) {
        initial.websiteType = categoryParam;
      } else if (packageParam) {
        initial.websiteType = packageParam;
      }

      if (designParam) {
        initial.message = `Hello e-yhan! We would like to request the "${designParam}" system and customize it for our organization.`;
      } else if (packageParam) {
        initial.message = `Hello e-yhan! We are interested in the "${packageParam}" package. Here are our initial project details: `;
      }
    }

    return initial;
  }, [selectedWebsite, categoryParam, packageParam, designParam]);

  const {
    values,
    errors,
    isSubmitting,
    isSubmitted,
    submitError,
    handleChange,
    handleSubmit,
    resetForm,
  } = useContactForm(prefill, {
    selectedWebsiteCode: selectedWebsite?.code,
    selectedWebsiteTitle: selectedWebsite?.title,
  });

  const websiteTypeOptions = useMemo(() => {
    const catOptions = categories.map((cat) => ({
      value: cat.name,
      label: cat.name,
    }));
    return [
      {
        value: 'Static Website ($55–$180 / ₱3k–₱10k • Output First)',
        label: 'Static Website ($55–$180 / ₱3k–₱10k • Output First Before Payment)',
      },
      {
        value: 'Website with Database ($215–$1,450 / ₱12k–₱80k)',
        label: 'Website with Database ($215–$1,450 / ₱12k–₱80k • Min. $90 / ₱5k Downpayment)',
      },
      ...catOptions,
    ];
  }, []);

  return (
    <PageLayout
      seoTitle="Contact e-yhan | Request a Website in Bulusan, Sorsogon"
      seoDescription="Get in touch with e-yhan Web Engineering & Digital Solutions in Bulusan, Sorsogon via our project form, Facebook Messenger, email, or phone."
      badge="Start Your Project"
      badgeIcon="MessageSquare"
      title="Let’s Build Your Website Together"
      subtitle="Whether you want to customize a ready-made template from our storefront or commission a custom web portal, reach out below for a fast, friendly consultation."
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'Contact Us' },
      ]}
    >
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Contact Form Organism */}
          <div className="lg:col-span-7">
            <ContactForm
              selectedWebsite={selectedWebsite}
              values={values}
              errors={errors}
              isSubmitting={isSubmitting}
              isSubmitted={isSubmitted}
              submitError={submitError}
              websiteTypeOptions={websiteTypeOptions}
              budgetOptions={BUDGET_RANGES}
              onChange={handleChange}
              onSubmit={handleSubmit}
              onReset={resetForm}
            />
          </div>

          {/* Right Column: Direct Channels & Bulusan Location Card */}
          <aside className="lg:col-span-5 space-y-6">
            {/* Direct Instant Channels Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-navy-900 text-white border border-navy-800 shadow-elevated space-y-6">
              <div>
                <Badge variant="accent" size="sm" icon="Zap">
                  Fastest Response Channels
                </Badge>
                <Heading as="h3" size="lg" color="light" className="mt-2.5">
                  Direct Studio Contact
                </Heading>
                <Text size="sm" variant="light" className="text-navy-300 mt-1">
                  Prefer chatting on Facebook Messenger or calling directly? We respond promptly during business hours.
                </Text>
              </div>

              <div className="space-y-4 text-sm">
                <a
                  href={BRAND_INFO.messengerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-navy-800/90 hover:bg-brand-600 border border-navy-700 hover:border-brand-500 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="w-10 h-10 rounded-xl bg-brand-500/20 group-hover:bg-white/20 text-brand-300 group-hover:text-white inline-flex items-center justify-center">
                      <Icon name="MessageCircle" size="md" />
                    </span>
                    <div>
                      <div className="font-semibold text-white">Facebook Messenger</div>
                      <div className="text-xs text-navy-300 group-hover:text-white/90">
                        m.me/eyhandigital
                      </div>
                    </div>
                  </div>
                  <Icon name="ArrowUpRight" size="sm" />
                </a>

                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-navy-800/90 hover:bg-brand-600 border border-navy-700 hover:border-brand-500 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="w-10 h-10 rounded-xl bg-brand-500/20 group-hover:bg-white/20 text-brand-300 group-hover:text-white inline-flex items-center justify-center">
                      <Icon name="Mail" size="md" />
                    </span>
                    <div>
                      <div className="font-semibold text-white">Official Email</div>
                      <div className="text-xs text-navy-300 group-hover:text-white/90">
                        {BRAND_INFO.email}
                      </div>
                    </div>
                  </div>
                  <Icon name="ArrowUpRight" size="sm" />
                </a>

                <a
                  href={`tel:${BRAND_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-navy-800/90 hover:bg-brand-600 border border-navy-700 hover:border-brand-500 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="w-10 h-10 rounded-xl bg-brand-500/20 group-hover:bg-white/20 text-brand-300 group-hover:text-white inline-flex items-center justify-center">
                      <Icon name="Phone" size="md" />
                    </span>
                    <div>
                      <div className="font-semibold text-white">Mobile / Viber</div>
                      <div className="text-xs text-navy-300 group-hover:text-white/90">
                        {BRAND_INFO.phone}
                      </div>
                    </div>
                  </div>
                  <Icon name="ArrowUpRight" size="sm" />
                </a>
              </div>

              <div className="pt-4 border-t border-navy-800">
                <Text size="xs" variant="light" className="text-navy-400 mb-3 uppercase tracking-wider font-semibold">
                  Connect on Social Channels
                </Text>
                <SocialLinks links={footerData.socialLinks} variant="dark" showLabels />
              </div>
            </div>

            {/* Bulusan, Sorsogon Location Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border border-navy-200/80 dark:border-navy-800 shadow-soft space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 inline-flex items-center justify-center shrink-0">
                  <Icon name="MapPin" size="md" />
                </span>
                <div>
                  <Heading as="h3" size="md">
                    Bulusan, Sorsogon HQ
                  </Heading>
                  <Text size="xs" variant="muted">
                    Bicol Region (Region V), Philippines
                  </Text>
                </div>
              </div>

              <Text size="sm" variant="muted">
                {BRAND_INFO.location}. We meet local clients in Bulusan, Irosin, Gubat, and Sorsogon City in person, and work seamlessly via Google Meet or Zoom with clients nationwide.
              </Text>

              <div className="p-4 rounded-2xl bg-navy-50 dark:bg-navy-950 border border-navy-200/70 dark:border-navy-800 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-navy-500">Consultation Hours:</span>
                  <span className="font-semibold text-navy-900 dark:text-white">
                    {BRAND_INFO.businessHours}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-navy-500">Languages Supported:</span>
                  <span className="font-semibold text-brand-600 dark:text-brand-400">
                    English • Tagalog • Bicol
                  </span>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                fullWidth
                href="https://maps.google.com/?q=Bulusan,Sorsogon,Philippines"
                leftIcon="Compass"
              >
                View Bulusan, Sorsogon on Google Maps
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <FAQAccordion
        faqs={faqs.slice(0, 4)}
        className="border-t border-navy-200/70 dark:border-navy-800/80"
        sectionHeader={{
          eyebrow: 'Quick Answers',
          eyebrowIcon: 'HelpCircle',
          title: 'Before You Submit Your Inquiry',
          subtitle: 'Common questions about project onboarding and payment milestones.',
        }}
      />
    </PageLayout>
  );
}

export default Contact;
