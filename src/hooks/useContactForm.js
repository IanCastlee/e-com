import { useState, useCallback, useEffect } from 'react';

const INITIAL_VALUES = {
  fullName: '',
  email: '',
  phone: '',
  websiteType: '',
  budget: '',
  message: '',
};

const DEFAULT_WEB3FORMS_KEY = '868609e0-f5a4-4c13-978d-3c7fac522e46';

/**
 * Custom hook encapsulating Contact Form validation, pre-filled query parameters,
 * and email submission via Web3Forms API to ml99997955@gmail.com.
 * @param {Object} prefill - Optional initial field overrides
 * @param {Object} options - Optional submission configurations (e.g. selectedWebsite details)
 */
export function useContactForm(prefill = {}, options = {}) {
  const [values, setValues] = useState({ ...INITIAL_VALUES, ...prefill });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    if (prefill && Object.keys(prefill).length > 0) {
      setValues((prev) => ({ ...prev, ...prefill }));
    }
  }, [prefill.websiteType, prefill.budget, prefill.message]);

  const validate = useCallback((formValues) => {
    const nextErrors = {};

    if (!formValues.fullName || formValues.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name or organization contact person.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formValues.email || !emailRegex.test(formValues.email.trim())) {
      nextErrors.email = 'Please provide a valid email address.';
    }

    const phoneClean = (formValues.phone || '').replace(/\s+/g, '');
    if (!phoneClean || phoneClean.length < 7) {
      nextErrors.phone = 'Please enter a valid Philippine mobile or landline number.';
    }

    if (!formValues.websiteType) {
      nextErrors.websiteType = 'Please select the type of website you need.';
    }

    if (!formValues.budget) {
      nextErrors.budget = 'Please select your estimated budget range.';
    }

    if (!formValues.message || formValues.message.trim().length < 15) {
      nextErrors.message = 'Please share a brief description of your project (at least 15 characters).';
    }

    return nextErrors;
  }, []);

  const handleChange = useCallback((field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const updated = { ...prev };
      delete updated[field];
      return updated;
    });
    setSubmitError(null);
  }, []);

  const handleSubmit = useCallback(
    async (event) => {
      if (event && event.preventDefault) event.preventDefault();
      const validationErrors = validate(values);
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length > 0) {
        return false;
      }

      setIsSubmitting(true);
      setSubmitError(null);

      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || options.accessKey || DEFAULT_WEB3FORMS_KEY;

      if (!accessKey) {
        // If access key is not yet configured, gracefully simulate success in dev/preview
        // while informing developer via console.
        console.info(
          '[e-yhan Contact] Form submitted locally. Set VITE_WEB3FORMS_ACCESS_KEY to send directly to ml99997955@gmail.com'
        );
        setTimeout(() => {
          setIsSubmitting(false);
          setIsSubmitted(true);
        }, 500);
        return true;
      }

      try {
        const timestamp = new Date().toLocaleString('en-US', {
          weekday: 'short',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          timeZoneName: 'short',
        });

        const selectedDesign = options.selectedWebsiteCode
          ? `${options.selectedWebsiteTitle || 'Website'} [Code: ${options.selectedWebsiteCode}]`
          : 'Custom Project (No Template Selected)';

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `💼 [New Client Inquiry] ${values.fullName} • ${options.selectedWebsiteCode || values.websiteType}`,
            from_name: 'e-yhan Web Studio Inquiry',
            replyto: values.email,

            // Clean, beautifully labeled fields for the email notification
            'Client Full Name': values.fullName,
            'Client Email Address': values.email,
            'Contact Number / Messenger': values.phone,
            'Preferred Website Design': selectedDesign,
            'Template Code': options.selectedWebsiteCode || 'N/A',
            'Solution Category': values.websiteType,
            'Estimated Budget Range': values.budget,
            'Project Scope & Details': values.message,
            'Submission Date & Time': timestamp,
            'Origin Website': 'e-yhan Digital Solutions • https://e-yhan.onrender.com',
          }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          setIsSubmitted(true);
        } else {
          setSubmitError(
            data.message || 'Unable to submit your inquiry at this moment. Please try again or email us directly.'
          );
        }
      } catch (err) {
        console.error('Contact form submission error:', err);
        setSubmitError(
          'A network error occurred. Please check your connection or contact us directly at ml99997955@gmail.com.'
        );
      } finally {
        setIsSubmitting(false);
      }

      return true;
    },
    [validate, values, options]
  );

  const resetForm = useCallback(() => {
    setValues({ ...INITIAL_VALUES });
    setErrors({});
    setSubmitError(null);
    setIsSubmitted(false);
  }, []);

  return {
    values,
    errors,
    isSubmitting,
    isSubmitted,
    submitError,
    handleChange,
    handleSubmit,
    resetForm,
  };
}

export default useContactForm;
