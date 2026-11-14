import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [mainImageLoaded, setMainImageLoaded] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    setActiveImageIndex(0);
    setIsLightboxOpen(false);
  }, [slug]);

  const handleThumbnailClick = (idx) => {
    if (idx !== activeImageIndex) {
      setActiveImageIndex(idx);
    }
  };

  const handlePrevImage = useCallback((e) => {
    if (e) e.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  }, [galleryImages.length]);

  const handleNextImage = useCallback((e) => {
    if (e) e.stopPropagation();
    setActiveImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  }, [galleryImages.length]);

  // Keyboard navigation & body scroll locking for the lightbox modal
  useEffect(() => {
    if (!isLightboxOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen, handlePrevImage, handleNextImage]);

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
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[5%] py-16 text-center">
          <Button variant="primary" size="lg" to="/portfolio" leftIcon="LayoutGrid">
            Return to Website Catalog
          </Button>
        </div>
      </PageLayout>
    );
  }

  const requestUrl = `/contact?preferred=${encodeURIComponent(website.code || website.id)}&design=${encodeURIComponent(website.title)}&category=${encodeURIComponent(website.categoryName || '')}`;

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
        <Button variant="primary" size="lg" to={requestUrl} leftIcon="CheckCircle2" rightIcon="ArrowUpRight">
          I prefer this website design
        </Button>
      }
      footerBannerSlot={<CTABanner {...ctaBannerData} />}
    >
      <section className="py-10 sm:py-16 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[5%]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Gallery + Overview + Features + Tech Stack */}
          <div className="lg:col-span-8 space-y-10">
            {/* Large Preview Gallery with Skeleton Loader & Interactive Overlay Trigger */}
            <div className="space-y-4">
              <div
                onClick={() => setIsLightboxOpen(true)}
                className="group relative min-h-[220px] sm:min-h-[380px] rounded-none overflow-hidden border border-navy-200 dark:border-navy-800 bg-navy-100 dark:bg-navy-950 shadow-soft flex items-center justify-center cursor-zoom-in select-none"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsLightboxOpen(true);
                  }
                }}
                aria-label="Click to enlarge image in overlay"
              >
                {!mainImageLoaded && (
                  <div className="absolute inset-0 z-0 bg-navy-200/50 dark:bg-navy-800/50 animate-pulse flex items-center justify-center pointer-events-none">
                    <Icon name="Image" size="xl" className="text-navy-300 dark:text-navy-600 animate-pulse" />
                  </div>
                )}
                <img
                  src={galleryImages[activeImageIndex] || website.thumbnail}
                  alt={`${website.title} preview screen ${activeImageIndex + 1}`}
                  onLoad={() => setMainImageLoaded(true)}
                  onError={(e) => {
                    if (website.thumbnail && e.currentTarget.src !== website.thumbnail) {
                      e.currentTarget.src = website.thumbnail;
                    }
                    setMainImageLoaded(true);
                  }}
                  className="relative z-10 w-full h-auto object-contain rounded-none transition-transform duration-300 group-hover:scale-[1.01]"
                />

                {/* Enlarge Badge */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold bg-navy-950/70 text-white/90 border border-white/10 backdrop-blur-sm shadow-md transition-all group-hover:bg-brand-600 group-hover:border-brand-500">
                  <Icon name="Maximize2" size="xs" />
                  <span>Click to enlarge</span>
                </div>

                {/* Inline Prev & Next Navigation Buttons - Arrow only, positioned right at the edges */}
                {galleryImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrevImage}
                      aria-label="Previous preview"
                      className="absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 z-10 p-1.5 sm:p-2.5 text-white/75 hover:text-white active:scale-90 transition-all drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] focus:outline-none"
                    >
                      <Icon name="ChevronLeft" size="xl" className="w-8 h-8 sm:w-10 sm:h-10" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextImage}
                      aria-label="Next preview"
                      className="absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 z-10 p-1.5 sm:p-2.5 text-white/75 hover:text-white active:scale-90 transition-all drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] focus:outline-none"
                    >
                      <Icon name="ChevronRight" size="xl" className="w-8 h-8 sm:w-10 sm:h-10" />
                    </button>
                  </>
                )}
              </div>

              {galleryImages.length > 1 && (
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5 sm:gap-3">
                  {galleryImages.map((imgSrc, idx) => (
                    <button
                      key={`thumb-${idx}`}
                      type="button"
                      onClick={() => handleThumbnailClick(idx)}
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

            {/* Available Packages & Pricing Options */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border border-navy-200/80 dark:border-navy-800 shadow-soft space-y-4">
              <Heading as="h2" size="lg">
                Available Packages & Pricing
              </Heading>
              <Text size="sm" variant="muted">
                Choose the architecture that best fits your business needs. Both packages include complete customization with your logo, brand colors, and content.
              </Text>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {/* Basic Tier */}
                <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-500/30 flex flex-col justify-between gap-3">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Basic (Static Website)
                    </div>
                    <div className="mt-2.5 flex items-baseline gap-1.5">
                      <span className="font-display text-2xl font-extrabold text-navy-900 dark:text-white">
                        ${website.pricing?.basic?.usd || 55}
                      </span>
                      <span className="text-sm font-semibold text-navy-600 dark:text-navy-300">
                        (₱{(website.pricing?.basic?.php || 3000).toLocaleString()} PHP)
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-navy-600 dark:text-navy-300">
                      Ultra-fast static frontend with zero database maintenance. Output first before payment.
                    </p>
                  </div>
                </div>

                {/* Premium Tier */}
                <div className="p-4 rounded-2xl bg-brand-50/50 dark:bg-brand-950/20 border border-brand-500/30 flex flex-col justify-between gap-3">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold text-brand-700 dark:text-brand-300 bg-brand-100 dark:bg-brand-900/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                      Premium (Dynamic + Admin Panel)
                    </div>
                    <div className="mt-2.5 flex items-baseline gap-1.5">
                      <span className="font-display text-2xl font-extrabold text-navy-900 dark:text-white">
                        ${website.pricing?.premium?.usd || 180}
                      </span>
                      <span className="text-sm font-semibold text-navy-600 dark:text-navy-300">
                        (₱{(website.pricing?.premium?.php || 10000).toLocaleString()} PHP)
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-navy-600 dark:text-navy-300">
                      Full-stack system with real-time database, interactive admin panel / CMS, and management workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Order / Request Specification Card */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border-2 border-brand-500/70 shadow-elevated space-y-6">
              <div className="flex items-center justify-between gap-2 pb-5 border-b border-navy-100 dark:border-navy-800">
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider font-semibold text-navy-500 dark:text-navy-400">
                    Starts at
                  </span>
                  <div className="font-display text-2xl font-extrabold text-navy-900 dark:text-white">
                    ${website.pricing?.basic?.usd || 55}{' '}
                    <span className="text-sm font-semibold text-navy-500 dark:text-navy-400">
                      (₱{(website.pricing?.basic?.php || 3000).toLocaleString()})
                    </span>
                  </div>
                </div>
                {website.featured && (
                  <Badge variant="accent" size="sm" icon="Sparkles">
                    Bestseller
                  </Badge>
                )}
              </div>

              {/* Quick Meta Specifications */}
              <div className="space-y-3 text-sm">
                {website.code && (
                  <div className="flex items-center justify-between py-1.5 border-b border-navy-100 dark:border-navy-800/80">
                    <span className="text-navy-500 flex items-center gap-2">
                      <Icon name="Tag" size="xs" /> Template Code
                    </span>
                    <span className="font-mono font-bold text-amber-800 dark:text-amber-300 bg-amber-500/15 dark:bg-amber-500/20 px-2.5 py-0.5 rounded-[5px] border border-amber-500/30 text-xs">
                      {website.code}
                    </span>
                  </div>
                )}
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

              {/* Pricing Packages Breakdown */}
              {website.pricing && (
                <div className="p-3.5 rounded-2xl bg-navy-50/70 dark:bg-navy-800/60 border border-navy-200/80 dark:border-navy-700/80 space-y-2 text-xs">
                  <div className="font-semibold text-navy-500 dark:text-navy-400 uppercase tracking-wider text-[10px]">
                    Available Package Options
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-navy-700 dark:text-navy-200 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      Basic (Static Website)
                    </span>
                    <span className="font-bold text-navy-900 dark:text-white">
                      ${website.pricing.basic?.usd || 55} (₱{(website.pricing.basic?.php || 3000).toLocaleString()})
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-navy-700 dark:text-navy-200 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                      Premium (Dynamic + Admin)
                    </span>
                    <span className="font-bold text-navy-900 dark:text-white">
                      ${website.pricing.premium?.usd || 180} (₱{(website.pricing.premium?.php || 10000).toLocaleString()})
                    </span>
                  </div>
                </div>
              )}

              {/* Primary CTA Buttons */}
              <div className="space-y-3 pt-1">
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  to={requestUrl}
                  leftIcon="CheckCircle2"
                  rightIcon="ArrowRight"
                >
                  I prefer this website design
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

      {/* Interactive Lightbox / Fullscreen Overlay Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-navy-950/95 backdrop-blur-md p-3 sm:p-6"
            onClick={() => setIsLightboxOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`${website.title} Fullscreen Gallery`}
          >
            {/* Top Bar: Title, Count, Close Button */}
            <div
              className="flex items-center justify-between w-full max-w-7xl mx-auto pb-3 border-b border-navy-800/80 text-white select-none"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <Badge variant="brand" size="sm" className="hidden sm:inline-flex">
                  {website.categoryName}
                </Badge>
                <span className="font-semibold text-sm sm:text-base text-navy-100 truncate max-w-[200px] sm:max-w-md">
                  {website.title}
                </span>
                {galleryImages.length > 1 && (
                  <span className="text-xs text-navy-300 font-mono bg-navy-900 px-2.5 py-1 rounded-full border border-navy-800 shrink-0">
                    {activeImageIndex + 1} / {galleryImages.length}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="hidden sm:inline-block text-xs text-navy-400 mr-2">
                  Press <kbd className="px-1.5 py-0.5 rounded bg-navy-800 border border-navy-700 text-navy-300 font-mono">Esc</kbd> to close
                </span>
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(false)}
                  aria-label="Close modal"
                  className="p-2 sm:p-2.5 rounded-full bg-navy-900/90 hover:bg-navy-800 text-navy-300 hover:text-white border border-navy-700/80 transition-all focus:outline-none focus:ring-2 focus:ring-brand-400"
                >
                  <Icon name="X" size="lg" />
                </button>
              </div>
            </div>

            {/* Main Stage: Prev, Large Image, Next */}
            <div
              className="relative flex-1 flex items-center justify-center w-full max-w-7xl mx-auto py-3 sm:py-6 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {galleryImages.length > 1 && (
                <button
                  type="button"
                  onClick={handlePrevImage}
                  aria-label="Previous image"
                  className="absolute left-0 sm:left-2 z-30 p-2 sm:p-3 text-white/75 hover:text-white active:scale-90 transition-all drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] focus:outline-none group"
                >
                  <Icon name="ChevronLeft" size="xl" className="w-9 h-9 sm:w-12 sm:h-12 transition-transform group-hover:-translate-x-1" />
                </button>
              )}

              <div className="relative max-h-[72vh] sm:max-h-[78vh] max-w-[92vw] sm:max-w-[85vw] flex items-center justify-center">
                <motion.img
                  key={activeImageIndex}
                  src={galleryImages[activeImageIndex] || website.thumbnail}
                  alt={`${website.title} view ${activeImageIndex + 1}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  onError={(e) => {
                    if (website.thumbnail && e.currentTarget.src !== website.thumbnail) {
                      e.currentTarget.src = website.thumbnail;
                    }
                  }}
                  className="max-h-[72vh] sm:max-h-[78vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-navy-800 bg-navy-950 select-none"
                />
              </div>

              {galleryImages.length > 1 && (
                <button
                  type="button"
                  onClick={handleNextImage}
                  aria-label="Next image"
                  className="absolute right-0 sm:right-2 z-30 p-2 sm:p-3 text-white/75 hover:text-white active:scale-90 transition-all drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] focus:outline-none group"
                >
                  <Icon name="ChevronRight" size="xl" className="w-9 h-9 sm:w-12 sm:h-12 transition-transform group-hover:translate-x-1" />
                </button>
              )}
            </div>

            {/* Bottom Thumbnail Strip */}
            {galleryImages.length > 1 && (
              <div
                className="w-full max-w-4xl mx-auto pt-2 border-t border-navy-800/80 flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto py-2 px-2"
                onClick={(e) => e.stopPropagation()}
              >
                {galleryImages.map((imgSrc, idx) => (
                  <button
                    key={`modal-thumb-${idx}`}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={cn(
                      'shrink-0 w-14 sm:w-20 aspect-[16/10] rounded overflow-hidden border-2 transition-all focus:outline-none focus:ring-2 focus:ring-brand-400',
                      activeImageIndex === idx
                        ? 'border-brand-400 ring-2 ring-brand-400/40 scale-105 opacity-100'
                        : 'border-navy-700 opacity-60 hover:opacity-100 hover:border-navy-500'
                    )}
                  >
                    <img
                      src={imgSrc}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
}

export default WebsiteDetails;
