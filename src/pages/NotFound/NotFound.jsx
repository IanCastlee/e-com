import React from 'react';
import { PageLayout } from '../../components/templates';
import { Badge, Heading, Text, Button, Icon } from '../../components/atoms';

/**
 * Page: NotFound (404)
 * Friendly corporate 404 recovery page with quick navigation actions.
 */
export function NotFound({
  code = '404',
  badge = 'Page Not Found',
  title = 'We Couldn’t Find That Page',
  description = 'The link you followed may be outdated or the page may have moved. Explore our ready-made website catalog or return to the e-yhan homepage.',
  homeLabel = 'Back to Homepage',
  catalogLabel = 'Browse Website Catalog',
}) {
  return (
    <PageLayout
      seoTitle="404 Page Not Found | e-yhan Digital Solutions"
      showPageHeader={false}
    >
      <section className="py-20 sm:py-32 max-w-3xl mx-auto px-3.5 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-14 rounded-3xl bg-white dark:bg-navy-900 border border-navy-200/80 dark:border-navy-800 shadow-elevated space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400">
            <Icon name="Compass" size="xl" />
          </div>

          <div className="flex justify-center">
            <Badge variant="brand" size="md">
              Error {code} • {badge}
            </Badge>
          </div>

          <Heading as="h1" size="2xl" align="center">
            {title}
          </Heading>

          <Text size="md" variant="muted" className="max-w-lg mx-auto">
            {description}
          </Text>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5">
            <Button variant="primary" size="lg" to="/" leftIcon="Home">
              {homeLabel}
            </Button>
            <Button variant="outline" size="lg" to="/portfolio" leftIcon="LayoutGrid">
              {catalogLabel}
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default NotFound;
