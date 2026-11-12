import React from 'react';
import PropTypes from 'prop-types';
import { CategoryChip, SectionTitle } from '../../molecules';
import { cn } from '../../../utils/formatters';

/**
 * Organism: CategoryTabs
 * Renders either horizontal filter tabs ('tabs') or a responsive showcase grid of category cards ('cards').
 */
export function CategoryTabs({
  categories = [],
  selectedCategory = 'all',
  onSelectCategory,
  categoryCounts = {},
  allLabel = 'All Solutions',
  variant = 'tabs',
  sectionHeader = null,
  className = '',
}) {
  if (variant === 'cards') {
    return (
      <section className={cn('py-16 sm:py-24', className)}>
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[5%]">
          {sectionHeader && (
            <SectionTitle
              eyebrow={sectionHeader.eyebrow}
              eyebrowIcon={sectionHeader.eyebrowIcon}
              title={sectionHeader.title}
              subtitle={sectionHeader.subtitle}
            />
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {categories.map((cat) => (
              <CategoryChip
                key={cat.id || cat.slug}
                variant="card"
                label={cat.name}
                icon={cat.icon}
                description={cat.description}
                highlight={cat.highlight}
                count={categoryCounts[cat.slug]}
                to={`/category/${cat.slug}`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <div
      role="tablist"
      aria-label="Filter websites by category"
      className={cn(
        'flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar',
        className
      )}
    >
      <CategoryChip
        label={allLabel}
        icon="LayoutGrid"
        count={categoryCounts.all}
        isActive={selectedCategory === 'all'}
        onClick={() => onSelectCategory && onSelectCategory('all')}
      />
      {categories.map((cat) => (
        <CategoryChip
          key={cat.id || cat.slug}
          label={cat.shortName || cat.name}
          icon={cat.icon}
          count={categoryCounts[cat.slug]}
          isActive={selectedCategory === cat.slug}
          onClick={() => onSelectCategory && onSelectCategory(cat.slug)}
        />
      ))}
    </div>
  );
}

CategoryTabs.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      slug: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      shortName: PropTypes.string,
      icon: PropTypes.string,
      description: PropTypes.string,
      highlight: PropTypes.string,
    })
  ).isRequired,
  selectedCategory: PropTypes.string,
  onSelectCategory: PropTypes.func,
  categoryCounts: PropTypes.object,
  allLabel: PropTypes.string,
  variant: PropTypes.oneOf(['tabs', 'cards']),
  sectionHeader: PropTypes.shape({
    eyebrow: PropTypes.string,
    eyebrowIcon: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
  }),
  className: PropTypes.string,
};

export default CategoryTabs;
