import { useState, useCallback, useEffect } from 'react';

const INITIAL_VALUES = {
  fullName: '',
  email: '',
  phone: '',
  websiteType: '',
  budget: '',
  message: '',
};

/**
 * Custom hook encapsulating Contact Form validation, pre-filled query parameters,
 * and submission state.
 * @param {Object} prefill - Optional initial field overrides
 */
export function useContactForm(prefill = {}) {
  const [values, setValues] = useState({ ...INITIAL_VALUES, ...prefill });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      if (event && event.preventDefault) event.preventDefault();
      const validationErrors = validate(values);
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length > 0) {
        return false;
      }

      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 450);

      return true;
    },
    [validate, values]
  );

  const resetForm = useCallback(() => {
    setValues({ ...INITIAL_VALUES });
    setErrors({});
    setIsSubmitted(false);
  }, []);

  return {
    values,
    errors,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleSubmit,
    resetForm,
  };
}

export default useContactForm;
