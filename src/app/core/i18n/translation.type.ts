import { VALIDATION_ERRORS } from '../../shared/constants/validation-errors.constant';
import { AuthError } from '../auth/enums/auth-error.enum';
import { APP_ROUTES } from '../constants/app-routes.constant';

export type TranslationDict = {
  common: {
    actions: {
      close: string;
      logout: string;
      togglePassword: string;
      seeMore: string;
      retry: string;
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
      empty: string;
    };
    errors: {
      default: string;
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
    welcomeMessage: (name: string) => string;
    apiErrors: {
      [AuthError.INVALID_CREDENTIALS]: string;
      [AuthError.UNKNOWN_ERROR]: string;
    };
  };
  home: {
    title: string;
    subtitle: string;
  };
  validation: {
    messages: {
      [VALIDATION_ERRORS.REQUIRED]: string;
      [VALIDATION_ERRORS.PATTERN]: string;
      [VALIDATION_ERRORS.PASSWORD_MISMATCH]: string;
    };
    templates: {
      minLength: (min: number) => string;
    };
  };
  navigation: {
    [APP_ROUTES.ARTICLES.ROOT]: string;
    [APP_ROUTES.ARTICLES.CREATE]: string;
  };
  feed: {
    actions: {
      createArticle: string;
    };
    errors: {
      loadFailed: string;
    };
    emptyState: {
      title: string;
      suggestion: string;
    };
  };
};
