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
  values = {},
  errors = {},
  isSubmitting = false,
  isSubmitted = false,
  websiteTypeOptions = [],
  budgetOptions = [],
  onChange,
  onSubmit,
  onReset,
  submitLabel = 'Submit Project Inquiry',
  successTitle = 'Maraming Salamat! Inquiry Received.',
  successMessage = 'We have received your website request in Bulusan, Sorsogon. Expect a personalized reply via email or phone/Messenger within 24 business hours.',
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
  values: PropTypes.object.isRequired,
  errors: PropTypes.object,
  isSubmitting: PropTypes.bool,
  isSubmitted: PropTypes.bool,
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
