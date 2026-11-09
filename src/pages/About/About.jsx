import React from 'react';
import { PageLayout } from '../../components/templates';
import { TestimonialSection, CTABanner } from '../../components/organisms';
import { SectionTitle } from '../../components/molecules';
import { Avatar, Badge, Heading, Text, Icon, Tag, Button } from '../../components/atoms';
import { aboutPageData, testimonials, ctaBannerData } from '../../data';

/**
 * Page: About
 * Presents the story of e-yhan in Bulusan, Sorsogon, company mission,
 * founder profile, core engineering values, and technical skills.
 */
export function About() {
  const {
    badge,
    headline,
    leadParagraph,
    missionTitle,
    missionStatement,
    visionTitle,
    visionStatement,
    founderProfile,
    coreValues = [],
    skillGroups = [],
    milestones = [],
  } = aboutPageData;

  return (
    <PageLayout
      seoTitle="About e-yhan | Web Engineering Studio in Bulusan, Sorsogon"
      seoDescription={leadParagraph}
      badge={badge}
      badgeIcon="MapPin"
      title={headline}
      subtitle={leadParagraph}
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'About Company' },
      ]}
      headerActions={
        <Button variant="primary" size="md" to="/contact" rightIcon="ArrowUpRight">
          Partner With Us
        </Button>
      }
      footerBannerSlot={<CTABanner {...ctaBannerData} />}
    >
      {/* 1. Mission, Vision & Founder Profile */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Mission & Vision Column */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border border-navy-200/80 dark:border-navy-800 shadow-soft space-y-3 flex-1">
              <Badge variant="brand" size="sm" icon="Target">
                {missionTitle}
              </Badge>
              <Heading as="h2" size="lg">
                Empowering Local Businesses & Communities Online
              </Heading>
              <Text size="md" variant="muted">
                {missionStatement}
              </Text>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border border-navy-200/80 dark:border-navy-800 shadow-soft space-y-3 flex-1">
              <Badge variant="accent" size="sm" icon="ShieldCheck">
                {visionTitle}
              </Badge>
              <Heading as="h2" size="lg">
                Enterprise Architecture, Local Accessibility
              </Heading>
              <Text size="md" variant="muted">
                {visionStatement}
              </Text>
            </div>
          </div>

          {/* Founder / Lead Architect Spotlight */}
          {founderProfile && (
            <div className="lg:col-span-6 p-6 sm:p-10 rounded-3xl bg-navy-900 text-white border border-navy-800 shadow-elevated flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <Avatar initials="EY" size="xl" variant="brand" />
                  <div>
                    <Badge variant="accent" size="sm" icon="Code2">
                      Bulusan, Sorsogon Engineer
                    </Badge>
                    <Heading as="h3" size="lg" color="light" className="mt-1.5">
                      {founderProfile.name}
                    </Heading>
                    <Text size="sm" variant="light" className="text-brand-300 font-medium">
                      {founderProfile.role}
                    </Text>
                  </div>
                </div>

                <Text size="md" variant="light" className="text-navy-200">
                  {founderProfile.bio}
                </Text>

                <blockquote className="p-5 rounded-2xl bg-navy-950/80 border-l-4 border-brand-500 italic text-sm text-navy-100">
                  {founderProfile.quote}
                </blockquote>
              </div>

              <div className="pt-4 border-t border-navy-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-brand-300">
                  <Icon name="MapPin" size="sm" />
                  <span>{founderProfile.location}</span>
                </div>
                <Button variant="primary" size="sm" to="/portfolio" rightIcon="ArrowRight">
                  Explore Our Work
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* 2. Journey Milestones */}
        {milestones.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {milestones.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-navy-200/80 dark:border-navy-800 shadow-soft space-y-2"
              >
                <Badge variant="brand" size="sm">
                  {item.year}
                </Badge>
                <Heading as="h3" size="md">
                  {item.title}
                </Heading>
                <Text size="sm" variant="muted">
                  {item.description}
                </Text>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 3. Core Engineering Values */}
      <section className="py-16 sm:py-20 bg-white dark:bg-navy-900/60 border-y border-navy-200/70 dark:border-navy-800/80">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Our Guiding Principles"
            eyebrowIcon="HeartHandshake"
            title="Why Philippine Organizations Choose e-yhan"
            subtitle="We combine modern software engineering rigor with genuine care for our local clients."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val) => (
              <div
                key={val.title}
                className="p-6 rounded-2xl bg-navy-50/70 dark:bg-navy-900 border border-navy-200/70 dark:border-navy-800 space-y-3"
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-600 text-white">
                  <Icon name={val.icon} size="md" />
                </span>
                <Heading as="h3" size="sm">
                  {val.title}
                </Heading>
                <Text size="sm" variant="muted">
                  {val.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Technical Stack & Capabilities */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Technical Capabilities"
          eyebrowIcon="Cpu"
          title="Modern Tech Stack Built to Scale"
          subtitle="Every e-yhan website is engineered with clean, modular code that can grow alongside your organization."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900 border border-navy-200/80 dark:border-navy-800 shadow-soft space-y-4"
            >
              <Heading as="h3" size="md">
                {group.category}
              </Heading>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Tag key={skill} label={skill} variant="brand" size="md" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Client Endorsements */}
      <TestimonialSection
        testimonials={testimonials}
        sectionHeader={{
          eyebrow: 'Community & Client Voices',
          eyebrowIcon: 'MessageSquareQuote',
          title: 'What Our Clients in Sorsogon & Bicol Say',
          subtitle: 'Proudly partnering with local businesses, schools, and barangays.',
        }}
      />
    </PageLayout>
  );
}

export default About;
