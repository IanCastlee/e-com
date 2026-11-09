import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Badge, Heading, Text, Icon } from '../../atoms';
import { cn } from '../../../utils/formatters';

/**
 * Template: PageLayout
 * Standardized page wrapper with react-helmet-async SEO metadata, breadcrumbs, and corporate page banner.
 */
export function PageLayout({
  seoTitle = 'e-yhan | Digital Solutions',
  seoDescription = 'Ready-made and custom websites engineered in Bulusan, Sorsogon for Philippine businesses, resorts, barangays, and schools.',
  badge = '',
  badgeIcon = 'Sparkles',
  title = '',
  subtitle = '',
  breadcrumbs = [],
  headerActions = null,
  showPageHeader = true,
  children,
  footerBannerSlot = null,
  className = '',
}) {
  const fullTitle = seoTitle.includes('e-yhan') ? seoTitle : `${seoTitle} | e-yhan Digital Solutions`;

  return (
    <div className={cn('w-full', className)}>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
      </Helmet>

      {showPageHeader && title && (
        <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 via-white to-navy-50 dark:from-navy-900 dark:via-navy-950 dark:to-navy-950 pt-10 pb-12 sm:pt-14 sm:pb-16 border-b border-navy-200/80 dark:border-navy-800/80">
          <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Trail */}
            {breadcrumbs.length > 0 && (
              <nav aria-label="Breadcrumb" className="mb-4">
                <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-navy-500 dark:text-navy-400">
                  {breadcrumbs.map((crumb, index) => {
                    const isLast = index === breadcrumbs.length - 1;
                    return (
                      <li key={crumb.label} className="inline-flex items-center gap-1.5">
                        {crumb.path && !isLast ? (
                          <Link
                            to={crumb.path}
                            className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                          >
                            {crumb.label}
                          </Link>
                        ) : (
                          <span className="text-navy-800 dark:text-navy-200 font-semibold">
                            {crumb.label}
                          </span>
                        )}
                        {!isLast && <Icon name="ChevronRight" size="xs" />}
                      </li>
                    );
                  })}
                </ol>
              </nav>
            )}

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="max-w-3xl space-y-3.5">
                {badge && (
                  <div>
                    <Badge variant="brand" size="md" icon={badgeIcon}>
                      {badge}
                    </Badge>
                  </div>
                )}
                <Heading as="h1" size="2xl">
                  {title}
                </Heading>
                {subtitle && (
                  <Text size="lg" variant="muted">
                    {subtitle}
                  </Text>
                )}
              </div>

              {headerActions && <div className="shrink-0">{headerActions}</div>}
            </div>
          </div>
        </section>
      )}

      <div>{children}</div>

      {footerBannerSlot}
    </div>
  );
}

PageLayout.propTypes = {
  seoTitle: PropTypes.string,
  seoDescription: PropTypes.string,
  badge: PropTypes.string,
  badgeIcon: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string,
    })
  ),
  headerActions: PropTypes.node,
  showPageHeader: PropTypes.bool,
  children: PropTypes.node.isRequired,
  footerBannerSlot: PropTypes.node,
  className: PropTypes.string,
};

export default PageLayout;
