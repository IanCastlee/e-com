import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageLayout } from '../../components/templates';
import { WebsiteGrid, CTABanner } from '../../components/organisms';
import { PriceTag, SectionTitle } from '../../components/molecules';
import { Badge, Heading, Text, Button, Icon, Tag } from '../../components/atoms';
import { websites, ctaBannerData } from '../../data';
import { BRAND_INFO } from '../../utils/constants';
import { formatDate, cn } from '../../utils/formatters';

/**
 * Page: WebsiteDetails
 * Detailed system blueprint view with interactive gallery, feature breakdown,
 * tech stack, pricing card, "Request this website" CTA, and related websites.
 */
export function WebsiteDetails() {
  const { slug } = useParams();

  const website = useMemo(
    () => websites.find((item) => item.slug === slug),
    [slug]
  );

  const galleryImages = useMemo(() => {
    if (!website) return [];
    if (Array.isArray(website.gallery) && website.gallery.length > 0) {
      return website.gallery;
    }
    return [website.thumbnail];
  }, [website]);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [slug]);

  const relatedWebsites = useMemo(() => {
    if (!website) return [];
    const sameCategory = websites.filter(
      (item) => item.category === website.category && item.id !== website.id
    );
    const others = websites.filter(
      (item) => item.category !== website.category && item.id !== website.id
    );
    return [...sameCategory, ...others].slice(0, 3);
  }, [website]);

  if (!website) {
    return (
      <PageLayout
        seoTitle="Website System Not Found | e-yhan"
        badge="System Lookup"
        badgeIcon="AlertCircle"
        title="Website Blueprint Not Found"
        subtitle="The website template you are looking for may have been renamed or moved."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Portfolio', path: '/portfolio' },
          { label: 'Not Found' },
        ]}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <Button variant="primary" size="lg" to="/portfolio" leftIcon="LayoutGrid">
            Return to Website Catalog
          </Button>
        </div>
      </PageLayout>
    );
  }

  const requestUrl = `/contact?website=${encodeURIComponent(website.title)}&category=${encodeURIComponent(website.categoryName)}`;

  return (
    <PageLayout
      seoTitle={`${website.title} | Ready-Made Website by e-yhan`}
      seoDescription={website.shortDescription}
      badge={website.categoryName}
      badgeIcon="Layers"
      title={website.title}
      subtitle={website.shortDescription}
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'Portfolio', path: '/portfolio' },
        { label: website.categoryName, path: `/category/${website.category}` },
        { label: website.title },
      ]}
      headerActions={
        <Button variant="primary" size="lg" to={requestUrl} rightIcon="ArrowUpRight">
          Request This Website
        </Button>
      }
      footerBannerSlot={<CTABanner {...ctaBannerData} />}
    >
      <section className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Gallery + Overview + Features + Tech Stack */}
          <div className="lg:col-span-8 space-y-10">
            {/* Large Preview Gallery */}
            <div className="space-y-4">
              <div className="rounded-none overflow-hidden border border-navy-200 dark:border-navy-800 bg-navy-100 dark:bg-navy-950 shadow-soft flex items-center justify-center">
                <img
                  src={galleryImages[activeImageIndex] || website.thumbnail}
                  alt={`${website.title} preview screen ${activeImageIndex + 1}`}
                  className="w-full h-auto object-contain rounded-none"
                />
              </div>

              {galleryImages.length > 1 && (
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {galleryImages.map((imgSrc, idx) => (
                    <button
                      key={`thumb-${idx}`}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={cn(
                        'rounded-none overflow-hidden border-2 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500',
                        activeImageIndex === idx
                          ? 'border-brand-500 ring-2 ring-brand-500/30 scale-[1.01]'
                          : 'border-navy-200 dark:border-navy-800 opacity-70 hover:opacity-100'
                      )}
                    >
                      <img
                        src={imgSrc}
                        alt={`${website.title} view ${idx + 1}`}
                        className="w-full aspect-[16/10] object-cover rounded-none"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Architecture Overview */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border border-navy-200/80 dark:border-navy-800 shadow-soft space-y-4">
              <Heading as="h2" size="lg">
                System Overview & Use Case
              </Heading>
              <Text size="md" variant="body">
                {website.description}
              </Text>

              {website.clientType && (
                <div className="pt-4 border-t border-navy-100 dark:border-navy-800 flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                  <Icon name="Building2" size="sm" className="text-brand-600 dark:text-brand-400" />
                  <span className="font-semibold text-navy-900 dark:text-white">Best Suited For:</span>
                  <span className="text-navy-600 dark:text-navy-300">{website.clientType}</span>
                </div>
              )}
            </div>

            {/* Key Features List */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border border-navy-200/80 dark:border-navy-800 shadow-soft space-y-5">
              <div className="flex items-center justify-between gap-2">
                <Heading as="h2" size="lg">
                  Included Features & Modules
                </Heading>
                <Badge variant="brand" size="sm" icon="CheckCircle2">
                  {(website.features || []).length} Core Modules
                </Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(website.features || []).map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-navy-50/70 dark:bg-navy-950/60 border border-navy-200/60 dark:border-navy-800"
                  >
                    <Icon
                      name="CheckCircle2"
                      size="sm"
                      className="text-brand-600 dark:text-brand-400 mt-0.5 shrink-0"
                    />
                    <Text size="sm" variant="strong" className="font-medium">
                      {feature}
                    </Text>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack & Engineering Standards */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border border-navy-200/80 dark:border-navy-800 shadow-soft space-y-4">
              <Heading as="h2" size="lg">
                Technology Stack & Standards
              </Heading>
              <Text size="sm" variant="muted">
                Built with modern, maintainable frontend architecture so your site stays fast, secure, and ready for future API or backend expansion.
              </Text>
              <div className="flex flex-wrap gap-2 pt-2">
                {(website.techStack || []).map((tech) => (
                  <Tag key={tech} label={tech} variant="brand" size="md" />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Order / Request Specification Card */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border-2 border-brand-500/70 shadow-elevated space-y-6">
              <div className="flex items-center justify-between gap-2 pb-5 border-b border-navy-100 dark:border-navy-800">
                <PriceTag
                  amount={website.price}
                  prefix="Complete Turnkey Package"
                  size="lg"
                />
                {website.featured && (
                  <Badge variant="accent" size="sm" icon="Sparkles">
                    Bestseller
                  </Badge>
                )}
              </div>

              {/* Quick Meta Specifications */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between py-1.5 border-b border-navy-100 dark:border-navy-800/80">
                  <span className="text-navy-500 flex items-center gap-2">
                    <Icon name="Clock" size="xs" /> Turnaround
                  </span>
                  <span className="font-semibold text-navy-900 dark:text-white">
                    {website.turnaround || '5–7 Business Days'}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-navy-100 dark:border-navy-800/80">
                  <span className="text-navy-500 flex items-center gap-2">
                    <Icon name="Folder" size="xs" /> Category
                  </span>
                  <Link
                    to={`/category/${website.category}`}
                    className="font-semibold text-brand-600 dark:text-brand-400 hover:underline"
                  >
                    {website.categoryName}
                  </Link>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-navy-100 dark:border-navy-800/80">
                  <span className="text-navy-500 flex items-center gap-2">
                    <Icon name="Calendar" size="xs" /> Latest Release
                  </span>
                  <span className="font-semibold text-navy-900 dark:text-white">
                    {formatDate(website.createdAt)}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-navy-500 flex items-center gap-2">
                    <Icon name="MapPin" size="xs" /> Support Studio
                  </span>
                  <span className="font-semibold text-navy-900 dark:text-white">
                    Bulusan, Sorsogon
                  </span>
                </div>
              </div>

              {/* Included in Every Deployment */}
              <div className="p-4 rounded-2xl bg-brand-50/60 dark:bg-brand-950/40 border border-brand-200/70 dark:border-brand-800/70 space-y-2">
                <Text size="xs" variant="brand" className="uppercase tracking-wider font-bold">
                  Included With Your Build:
                </Text>
                <ul className="space-y-1.5 text-xs text-navy-700 dark:text-navy-200">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size="xs" className="text-brand-600" />
                    <span>100% Custom Branding, Logo & Copy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size="xs" className="text-brand-600" />
                    <span>Mobile, Tablet & Desktop Optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size="xs" className="text-brand-600" />
                    <span>Custom Domain & SSL Security Setup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size="xs" className="text-brand-600" />
                    <span>1-on-1 Live Handover & Support</span>
                  </li>
                </ul>
              </div>

              {/* Primary CTA Buttons */}
              <div className="space-y-3 pt-1">
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  to={requestUrl}
                  rightIcon="ArrowRight"
                >
                  Request This Website
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  fullWidth
                  href={BRAND_INFO.messengerUrl}
                  leftIcon="MessageCircle"
                >
                  Ask via Facebook Messenger
                </Button>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Websites Section */}
        {relatedWebsites.length > 0 && (
          <div className="mt-20 pt-14 border-t border-navy-200/80 dark:border-navy-800">
            <SectionTitle
              eyebrow="Similar Solutions"
              eyebrowIcon="Layers"
              title="Related Website Systems You May Like"
              subtitle="Compare other ready-made templates in our catalog."
              align="left"
            />
            <WebsiteGrid websites={relatedWebsites} />
          </div>
        )}
      </section>
    </PageLayout>
  );
}

export default WebsiteDetails;
