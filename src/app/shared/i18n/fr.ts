import { AuthError } from '../../core/auth/enums/auth-error.enum';
import { TranslationDict } from './translation.type';

export const fr: TranslationDict = {
  common: {
    fields: {
      emailLabel: 'Adresse email',
      emailPlaceholder: 'jean@exemple.com',
      passwordLabel: 'Mot de passe',
      firstnameLabel: 'Prénom',
      firstnamePlaceholder: 'Jean',
      lastnameLabel: 'Nom',
      lastnamePlaceholder: 'Dupont',
      confirmPasswordLabel: 'Confirmation mot de passe',
    },
    action: {
      close: 'Fermer',
    },
    states: {
      loading: 'Chargement...',
    },
  },
  auth: {
    login: {
      title: 'Connexion',
      submitBtn: 'Se connecter',
      noAccountLink: 'Pas encore de compte ?',
      forgotPasswordLink: 'Mot de passe oublié ?',
      trollMessage: 'Dommage pour toi ! 🤷‍♂️',
    },
    apiErrors: {
      [AuthError.INVALID_CREDENTIALS]: 'Email ou mot de passe incorrect.',
      [AuthError.UNKNOWN_ERROR]: 'Une erreur inattendue est survenue, veuillez réessayer.',
    },
    register: {
      title: 'Inscription',
      submitBtn: "S'inscrire",
      hasAccountLink: 'Déjà un compte ?',
      passwordCriteria: {
        minChars: '8 caractères minimum',
        lowercase: '1 minuscule',
        uppercase: '1 majuscule',
        number: '1 chiffre',
        specialChar: '1 caractère spécial',
      },
    },
  },
  validation: {
    messages: {
      required: 'Ce champ est obligatoire.',
      pattern: "Le format saisi n'est pas valide.",
      passwordMismatch: 'Les mots de passe ne correspondent pas.',
    },
    templates: {
      minLength: (min) => `Au moins ${min} caractères requis.`,
    },
  },
};
