import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Heading, Text } from '../../atoms';
import { cn } from '../../../utils/formatters';

/**
 * Molecule: SectionTitle
 * Standardized section header with eyebrow badge, headline, and supporting subtitle.
 */
export function SectionTitle({
  eyebrow,
  eyebrowIcon = 'Sparkles',
  title,
  subtitle,
  align = 'center',
  theme = 'default',
  className = '',
}) {
  const isCentered = align === 'center';
  const headingColor = theme === 'dark' ? 'light' : 'default';
  const textVariant = theme === 'dark' ? 'light' : 'muted';

  return (
    <div
      className={cn(
        'max-w-3xl mb-10 sm:mb-14',
        isCentered ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <div className={cn('mb-3', isCentered ? 'flex justify-center' : 'flex justify-start')}>
          <Badge variant={theme === 'dark' ? 'accent' : 'brand'} size="md" icon={eyebrowIcon}>
            {eyebrow}
          </Badge>
        </div>
      )}

      <Heading as="h2" size="xl" color={headingColor} align={align}>
        {title}
      </Heading>

      {subtitle && (
        <Text size="md" variant={textVariant} className="mt-3.5 sm:text-lg">
          {subtitle}
        </Text>
      )}
    </div>
  );
}

SectionTitle.propTypes = {
  eyebrow: PropTypes.string,
  eyebrowIcon: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center']),
  theme: PropTypes.oneOf(['default', 'dark']),
  className: PropTypes.string,
};

export default SectionTitle;
