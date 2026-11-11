import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Text, Button, Icon, Badge } from '../../atoms';
import { FormField } from '../../molecules';
import { cn } from '../../../utils/formatters';

/**
 * Organism: ContactForm
 * Props-driven project inquiry and website request form with validation feedback and success state.
 */
export function ContactForm({
  title = 'Request a Website or Custom Quote',
  subtitle = 'Fill out the project brief below and receive a detailed response and PHP estimate within 24 hours.',
  selectedWebsite = null,
  values = {},
  errors = {},
  isSubmitting = false,
  isSubmitted = false,
  submitError = null,
  websiteTypeOptions = [],
  budgetOptions = [],
  onChange,
  onSubmit,
  onReset,
  submitLabel = 'Submit Project Inquiry',
  successTitle = 'Thank You! Inquiry Received.',
  successMessage = 'We have received your project details. Our team will review your requirements and respond via email or phone/Messenger within 24 business hours.',
  className = '',
}) {
  if (isSubmitted) {
    return (
      <div
        className={cn(
          'rounded-3xl bg-white dark:bg-navy-900 border border-brand-500/50 p-8 sm:p-12 text-center shadow-elevated space-y-5',
          className
        )}
      >
        <div className="w-16 h-16 rounded-2xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 inline-flex items-center justify-center mx-auto">
          <Icon name="CheckCircle2" size="xl" />
        </div>
        <Badge variant="brand" size="md" icon="Sparkles">
          Project Brief Logged
        </Badge>
        <Heading as="h3" size="lg" align="center">
          {successTitle}
        </Heading>
        <Text size="md" variant="muted" className="max-w-lg mx-auto">
          {successMessage}
        </Text>
        <div className="p-4 rounded-2xl bg-navy-50 dark:bg-navy-950 border border-navy-200 dark:border-navy-800 max-w-md mx-auto text-left text-xs space-y-1.5">
          <div className="flex justify-between">
            <span className="text-navy-500">Contact:</span>
            <span className="font-semibold text-navy-900 dark:text-white">{values.fullName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-navy-500">Website Type:</span>
            <span className="font-semibold text-brand-600 dark:text-brand-400">{values.websiteType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-navy-500">Estimated Budget:</span>
            <span className="font-semibold text-navy-900 dark:text-white">{values.budget}</span>
          </div>
        </div>
        {onReset && (
          <div className="pt-2">
            <Button variant="outline" size="md" onClick={onReset} leftIcon="RotateCcw">
              Send Another Inquiry
            </Button>
          </div>
        )}
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={cn(
        'rounded-3xl bg-white dark:bg-navy-900 border border-navy-200/90 dark:border-navy-800 p-6 sm:p-10 shadow-soft space-y-6',
        className
      )}
    >
      <div>
        <Heading as="h3" size="lg">
          {title}
        </Heading>
        {subtitle && (
          <Text size="sm" variant="muted" className="mt-1.5">
            {subtitle}
          </Text>
        )}
      </div>

      {/* Selected Website Design Banner */}
      {selectedWebsite && (
        <div className="p-4 sm:p-5 rounded-[10px] bg-gradient-to-r from-brand-50/90 via-white to-brand-50/40 dark:from-navy-950 dark:via-navy-900/90 dark:to-navy-950 border-2 border-brand-500/70 dark:border-brand-500/50 shadow-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            {selectedWebsite.thumbnail && (
              <img
                src={selectedWebsite.thumbnail}
                alt={selectedWebsite.title}
                className="w-20 h-13 aspect-video object-cover rounded-[6px] border border-brand-200 dark:border-brand-800 shadow-xs shrink-0"
              />
            )}
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-[5px] bg-brand-600 text-white shadow-xs">
                  Code: {selectedWebsite.code}
                </span>
                {selectedWebsite.categoryName && (
                  <span className="text-[11px] font-semibold text-brand-700 dark:text-brand-300 bg-brand-500/15 px-2 py-0.5 rounded-[5px]">
                    {selectedWebsite.categoryName}
                  </span>
                )}
              </div>
              <h4 className="font-display font-bold text-sm sm:text-base text-navy-900 dark:text-white mt-1">
                {selectedWebsite.title}
              </h4>
              <p className="text-xs text-navy-600 dark:text-navy-300 mt-0.5">
                ✨ Selected Design • 100% Free customization included
              </p>
            </div>
          </div>

          {selectedWebsite.demoUrl && (
            <a
              href={selectedWebsite.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline shrink-0"
            >
              <Icon name="Eye" size="xs" />
              <span>Preview Demo</span>
            </a>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField
          name="fullName"
          label="Your Name / Organization"
          required
          placeholder="e.g.Juan Dela Cruz / Villa Resort"
          value={values.fullName || ''}
          error={errors.fullName}
          leftIcon="User"
          onChange={(e) => onChange('fullName', e.target.value)}
        />

        <FormField
          name="email"
          type="email"
          label="Email Address"
          required
          placeholder="you@organization.ph"
          value={values.email || ''}
          error={errors.email}
          leftIcon="Mail"
          onChange={(e) => onChange('email', e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField
          name="phone"
          type="tel"
          label="Mobile / Viber / Messenger Number"
          required
          placeholder="e.g. 0917 842 9104"
          value={values.phone || ''}
          error={errors.phone}
          leftIcon="Phone"
          onChange={(e) => onChange('phone', e.target.value)}
        />

        <FormField
          name="websiteType"
          as="select"
          label="Website Category / Solution"
          required
          placeholder="Select website type..."
          options={websiteTypeOptions}
          value={values.websiteType || ''}
          error={errors.websiteType}
          leftIcon="LayoutGrid"
          onChange={(e) => onChange('websiteType', e.target.value)}
        />
      </div>

      <FormField
        name="budget"
        as="select"
        label="Estimated Project Budget (USD $ / PHP ₱)"
        required
        placeholder="Select budget range..."
        options={budgetOptions}
        value={values.budget || ''}
        error={errors.budget}
        leftIcon="Wallet"
        onChange={(e) => onChange('budget', e.target.value)}
      />

      <FormField
        name="message"
        as="textarea"
        rows={4}
        label="Project Details & Goals"
        required
        placeholder="Tell us about your resort, barangay, school, or business, target launch date, and any specific features you need..."
        value={values.message || ''}
        error={errors.message}
        onChange={(e) => onChange('message', e.target.value)}
      />

      {submitError && (
        <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-sm flex items-start gap-3">
          <Icon name="AlertCircle" size="md" className="shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold">{submitError}</p>
            <p className="text-xs text-navy-600 dark:text-navy-300">
              You can also contact our studio directly via email:{' '}
              <a
                href={`mailto:ml99997955@gmail.com?subject=Website%20Inquiry%20from%20${encodeURIComponent(values.fullName || 'Client')}&body=${encodeURIComponent(values.message || '')}`}
                className="underline font-semibold text-brand-600 dark:text-brand-400 hover:opacity-80"
              >
                ml99997955@gmail.com
              </a>
            </p>
          </div>
        </div>
      )}

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-navy-500 dark:text-navy-400">
          <Icon name="ShieldCheck" size="sm" className="text-brand-600 dark:text-brand-400 shrink-0" />
          <span>100% confidential. Direct consultation with our Bulusan studio.</span>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isSubmitting}
          rightIcon="Send"
        >
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}

ContactForm.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  selectedWebsite: PropTypes.object,
  values: PropTypes.object.isRequired,
  errors: PropTypes.object,
  isSubmitting: PropTypes.bool,
  isSubmitted: PropTypes.bool,
  submitError: PropTypes.string,
  websiteTypeOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  budgetOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func,
  submitLabel: PropTypes.string,
  successTitle: PropTypes.string,
  successMessage: PropTypes.string,
  className: PropTypes.string,
};

export default ContactForm;
