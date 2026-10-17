import { AuthError } from '../../core/auth/enums/auth-error.enum';
import { TranslationDict } from './translation.type';

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
    action: {
      close: 'Close',
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
      required: 'This field is required.',
      pattern: 'Invalid format.',
      passwordMismatch: "Passwords don't match",
    },
    templates: {
      minLength: (min) => `Minimum ${min} characters required.`,
    },
  },
};
