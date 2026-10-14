import { AuthError } from '../../core/auth/enums/auth-error.enum';

export type TranslationDict = {
  auth: {
    login: {
      title: string;
      emailLabel: string;
      emailPlaceholder: string;
      passwordLabel: string;
      submitBtn: string;
      noAccountLink: string;
    };
    apiErrors: {
      [AuthError.INVALID_CREDENTIALS]: string;
      [AuthError.UNKNOWN_ERROR]: string;
    };
  };
  validation: {
    messages: {
      required: string;
      email: string;
    };
    templates: {
      minLength: (min: number) => string;
    };
  };
};
