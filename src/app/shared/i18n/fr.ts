import { AuthError } from '../../core/auth/enums/auth-error.enum';
import { TranslationDict } from './translation.type';

export const fr: TranslationDict = {
  auth: {
    login: {
      title: 'Connexion',
      emailLabel: 'Adresse email',
      emailPlaceholder: 'jean@exemple.com',
      passwordLabel: 'Mot de passe',
      submitBtn: 'Se connecter',
      noAccountLink: 'Pas encore de compte ?',
    },
    apiErrors: {
      [AuthError.INVALID_CREDENTIALS]: 'Email ou mot de passe incorrect.',
      [AuthError.UNKNOWN_ERROR]: 'Une erreur inattendue est survenue, veuillez réessayer.',
    },
  },
  validation: {
    messages: {
      required: 'Ce champ est obligatoire.',
      email: 'Veuillez entrer un email valide.',
    },
    templates: {
      minLength: (min) => `Au moins ${min} caractères requis.`,
    },
  },
};
