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
      cancel: string;
    };
    states: {
      loading: string;
      empty: string;
    };
    errors: {
      default: string;
      network: string;
      timeout: string;
    };
  };
  users: {
    fields: {
      emailLabel: string;
      emailPlaceholder: string;
      firstnameLabel: string;
      firstnamePlaceholder: string;
      lastnameLabel: string;
      lastnamePlaceholder: string;
    };
  };
  auth: {
    fields: {
      passwordLabel: string;
      confirmPasswordLabel: string;
    };
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
  articles: {
    feed: {
      title: string;
      subtitle: string;
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
    create: {
      title: string;
      subtitle: string;
      submitBtn: string;
      fields: {
        titleLabel: string;
        titlePlaceholder: string;
        categoryLabel: string;
        categoryPlaceholder: string;
        imageLabel: string;
        descriptionLabel: string;
        descriptionPlaceholder: string;
      };
      errors: {
        categoryError: string;
      };
    };
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
};
