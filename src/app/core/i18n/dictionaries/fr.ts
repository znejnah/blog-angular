import { VALIDATION_ERRORS } from '../../../shared/constants/validation-errors.constant';
import { AuthError } from '../../auth/enums/auth-error.enum';
import { APP_ROUTES } from '../../constants/app-routes.constant';
import { TranslationDict } from '../translation.type';

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
    actions: {
      close: 'Fermer',
      logout: 'Se déconnecter',
      togglePassword: 'Afficher/masquer le mot de passe',
      seeMore: 'Voir plus',
      retry: 'Réessayer',
    },
    states: {
      loading: 'Chargement...',
      empty: 'Vide',
    },
    errors: {
      default: 'Une erreur inattendue est survenue.',
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
    welcomeMessage: (name: string) => `Bienvenue, ${name}!`,
  },
  home: {
    title: 'À la une',
    subtitle: 'Découvrez les dernières publications.',
  },
  validation: {
    messages: {
      [VALIDATION_ERRORS.REQUIRED]: 'Ce champ est obligatoire.',
      [VALIDATION_ERRORS.PATTERN]: "Le format saisi n'est pas valide.",
      [VALIDATION_ERRORS.PASSWORD_MISMATCH]: 'Les mots de passe ne correspondent pas.',
    },
    templates: {
      minLength: (min) => `Au moins ${min} caractères requis.`,
    },
  },
  navigation: {
    [APP_ROUTES.home.root]: 'Accueil',
    [APP_ROUTES.dashboard.root]: 'Tableau de bord',
  },
  feed: {
    actions: {
      createArticle: 'Rédiger un nouvel article',
    },
    errors: {
      loadFailed: 'Impossible de charger le flux.',
    },
    emptyState: {
      title: 'Le fil est vide',
      suggestion: '',
    },
  },
};
