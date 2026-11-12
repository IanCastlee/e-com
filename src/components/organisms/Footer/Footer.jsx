import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Logo, Heading, Text, Icon, Badge } from '../../atoms';
import { SocialLinks } from '../../molecules';

/**
 * Organism: Footer
 * Multi-column corporate footer with brand mission, navigation columns, contact details, and regional pride badge.
 */
export function Footer({
  brand = {},
  columns = [],
  socialLinks = [],
  copyright = '',
  madeInBadge = '',
}) {
  return (
    <footer className="bg-navy-950 text-navy-200 border-t border-navy-800/90">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[5%] py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-5 space-y-5">
            <Logo
              brandName={brand.name || 'e-yhan'}
              subtitle="Digital Solutions"
              variant="light"
              size="lg"
            />
            {brand.tagline && (
              <Text size="sm" variant="light" className="text-navy-300 max-w-md">
                {brand.tagline}
              </Text>
            )}
            <div className="space-y-2 text-xs text-navy-300">
              {brand.location && (
                <div className="flex items-center gap-2.5">
                  <Icon name="MapPin" size="sm" className="text-brand-400" />
                  <span>{brand.location}</span>
                </div>
              )}
              {brand.email && (
                <div className="flex items-center gap-2.5">
                  <Icon name="Mail" size="sm" className="text-brand-400" />
                  <a href={`mailto:${brand.email}`} className="hover:text-brand-400 transition-colors">
                    {brand.email}
                  </a>
                </div>
              )}
              {brand.phone && (
                <div className="flex items-center gap-2.5">
                  <Icon name="Phone" size="sm" className="text-brand-400" />
                  <a href={`tel:${brand.phone.replace(/\s+/g, '')}`} className="hover:text-brand-400 transition-colors">
                    {brand.phone}
                  </a>
                </div>
              )}
            </div>
            {socialLinks.length > 0 && (
              <SocialLinks links={socialLinks} variant="dark" size="md" />
            )}
          </div>

          {/* Link Columns */}
          {columns.map((col) => (
            <div key={col.title} className="lg:col-span-3 space-y-4">
              <Heading as="h3" size="xs" color="light" className="text-brand-400">
                {col.title}
              </Heading>
              <ul className="space-y-2.5">
                {col.links.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-sm text-navy-300 hover:text-white inline-flex items-center gap-1.5 transition-colors"
                    >
                      <Icon name="ChevronRight" size="xs" className="text-brand-500/70" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Legal & Pride Bar */}
        <div className="mt-12 pt-8 border-t border-navy-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Text size="xs" variant="light" className="text-navy-400 text-center sm:text-left">
            {copyright}
          </Text>
          {madeInBadge && (
            <Badge variant="brand" size="sm" icon="Heart">
              {madeInBadge}
            </Badge>
          )}
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  brand: PropTypes.shape({
    name: PropTypes.string,
    tagline: PropTypes.string,
    location: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          path: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ),
  socialLinks: PropTypes.array,
  copyright: PropTypes.string,
  madeInBadge: PropTypes.string,
};

export default Footer;
