import { VALIDATION_ERRORS } from '../../../shared/constants/validation-errors.constant';
import { AuthError } from '../../auth/enums/auth-error.enum';
import { APP_ROUTES } from '../../constants/app-routes.constant';
import { TranslationDict } from '../translation.type';

export const en: TranslationDict = {
  common: {
    fields: {
      emailLabel: 'Email address',
      emailPlaceholder: 'john@example.com',
      passwordLabel: 'Password',
      firstnameLabel: 'Firstname',
      firstnamePlaceholder: 'John',
      lastnameLabel: 'Lastname',
      lastnamePlaceholder: 'Doe',
      confirmPasswordLabel: 'Confirm password',
    },
    actions: {
      close: 'Close',
      logout: 'Logout',
      togglePassword: 'Show/hide password',
      seeMore: 'See more',
      retry: 'Try again',
    },
    states: {
      loading: 'Loading...',
      empty: 'Empty',
    },
    errors: {
      default: 'An unexpected error occurred.',
    },
  },
  auth: {
    login: {
      title: 'Sign In',
      submitBtn: 'Log in',
      noAccountLink: 'No account yet ?',
      forgotPasswordLink: 'Forgotten password ?',
      trollMessage: 'Too bad for you ! 🤷‍♂️',
    },
    apiErrors: {
      [AuthError.INVALID_CREDENTIALS]: 'Invalid email or password.',
      [AuthError.UNKNOWN_ERROR]: 'An unexpected error occured, please try again.',
    },
    register: {
      title: 'Sign Up',
      submitBtn: 'Register',
      hasAccountLink: 'Already have an account ?',
      passwordCriteria: {
        minChars: '8 characters minimun',
        lowercase: '1 lowercase',
        uppercase: '1 uppercase',
        number: '1 number',
        specialChar: '1 special character',
      },
    },
    welcomeMessage: (name: string) => `Welcome, ${name}!`,
  },
  home: {
    title: 'News',
    subtitle: 'Discover latest news.',
  },
  validation: {
    messages: {
      [VALIDATION_ERRORS.REQUIRED]: 'This field is required.',
      [VALIDATION_ERRORS.PATTERN]: 'Invalid format.',
      [VALIDATION_ERRORS.PASSWORD_MISMATCH]: "Passwords don't match",
    },
    templates: {
      minLength: (min) => `Minimum ${min} characters required.`,
    },
  },
  navigation: {
    [APP_ROUTES.ARTICLES.ROOT]: 'Articles feed',
    [APP_ROUTES.ARTICLES.CREATE]: 'New article',
  },
  feed: {
    actions: {
      createArticle: 'Write a new article',
    },
    errors: {
      loadFailed: 'Unable to load the feed.',
    },
    emptyState: {
      title: 'The thread is empty',
      suggestion: '',
    },
  },
};
