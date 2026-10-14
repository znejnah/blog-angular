import { AuthError } from '../../core/auth/enums/auth-error.enum';
import { TranslationDict } from './translation.type';

export const en: TranslationDict = {
  auth: {
    login: {
      title: 'Sign In',
      emailLabel: 'Email address',
      emailPlaceholder: 'john@example.com',
      passwordLabel: 'Password',
      submitBtn: 'Log in',
      noAccountLink: 'No account yet ?',
    },
    apiErrors: {
      [AuthError.INVALID_CREDENTIALS]: 'Invalid email or password.',
      [AuthError.UNKNOWN_ERROR]: 'An unexpected error occured, please try again.',
    },
  },
  validation: {
    messages: {
      required: 'This field is required.',
      email: 'Please enter a valid email.',
    },
    templates: {
      minLength: (min) => `Minimum ${min} characters required.`,
    },
  },
};
