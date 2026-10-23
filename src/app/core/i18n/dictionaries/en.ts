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
    },
    states: {
      loading: 'Loading...',
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
    [APP_ROUTES.home.root]: 'Home',
    [APP_ROUTES.dashboard.root]: 'Dashboard',
  },
};
