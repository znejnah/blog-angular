import { AuthError } from '../../core/auth/enums/auth-error.enum';

export type TranslationDict = {
  common: {
    action: {
      close: string;
    };
    fields: {
      emailLabel: string;
      emailPlaceholder: string;
      passwordLabel: string;
      firstnameLabel: string;
      firstnamePlaceholder: string;
      lastnameLabel: string;
      lastnamePlaceholder: string;
      confirmPasswordLabel: string;
    };
    states: {
      loading: string;
    };
  };
  auth: {
    login: {
      title: string;
      submitBtn: string;
      noAccountLink: string;
      forgotPasswordLink: string;
      trollMessage: string;
    };
    register: {
      title: string;
      submitBtn: string;
      hasAccountLink: string;
      passwordCriteria: {
        minChars: string;
        lowercase: string;
        uppercase: string;
        number: string;
        specialChar: string;
      };
    };
    apiErrors: {
      [AuthError.INVALID_CREDENTIALS]: string;
      [AuthError.UNKNOWN_ERROR]: string;
    };
  };
  validation: {
    messages: {
      required: string;
      pattern: string;
      passwordMismatch: string;
    };
    templates: {
      minLength: (min: number) => string;
    };
  };
};
