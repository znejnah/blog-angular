import { VALIDATION_ERRORS } from '../../../shared/constants/validation-errors.constant';
import { AuthError } from '../../auth/enums/auth-error.enum';
import { APP_ROUTES } from '../../constants/app-routes.constant';
import { TranslationDict } from '../translation.type';

export const en: TranslationDict = {
  common: {
    siteLogo: 'My Site Logo',
    actions: {
      close: 'Close',
      logout: 'Logout',
      togglePassword: 'Show/hide password',
      seeMore: 'See more',
      retry: 'Try again',
      cancel: 'Cancel',
    },
    states: {
      loading: 'Loading...',
      empty: 'Empty',
    },
    errors: {
      default: 'An unexpected error occurred.',
      network: 'Connection to the server lost. Check your internet.',
      timeout: 'The server is taking too long to respond.',
    },
  },
  users: {
    fields: {
      emailLabel: 'Email address',
      emailPlaceholder: 'john@example.com',
      firstnameLabel: 'Firstname',
      firstnamePlaceholder: 'John',
      lastnameLabel: 'Lastname',
      lastnamePlaceholder: 'Doe',
    },
  },
  auth: {
    fields: {
      passwordLabel: 'Password',
      confirmPasswordLabel: 'Confirm password',
    },
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
  articles: {
    feed: {
      title: 'News',
      subtitle: 'Discover latest news.',
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
    create: {
      title: 'Write an article',
      subtitle: 'Share your ideas and knowledge with the community.',
      submitBtn: 'Publish article',
      fields: {
        titleLabel: 'Article title',
        titlePlaceholder: 'Ex: Angular v22 Architecture...',
        categoryLabel: 'Category',
        categoryPlaceholder: 'Select a category',
        imageLabel: 'Cover image',
        descriptionLabel: 'Description',
        descriptionPlaceholder: 'Description or content of your article...',
      },
      errors: {
        categoryError: 'Failed to load categories',
      },
    },
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
};
