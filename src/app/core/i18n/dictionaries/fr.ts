import { VALIDATION_ERRORS } from '../../../shared/constants/validation-errors.constant';
import { AuthError } from '../../auth/enums/auth-error.enum';
import { APP_ROUTES } from '../../constants/app-routes.constant';
import { TranslationDict } from '../translation.type';

export const fr: TranslationDict = {
  common: {
    siteLogo: 'Logo de Mon Site',
    actions: {
      close: 'Fermer',
      logout: 'Se déconnecter',
      togglePassword: 'Afficher/masquer le mot de passe',
      seeMore: 'Voir plus',
      retry: 'Réessayer',
      cancel: 'Annuler',
    },
    states: {
      loading: 'Chargement...',
      empty: 'Vide',
    },
    errors: {
      default: 'Une erreur inattendue est survenue.',
      network: 'Connexion au serveur perdue. Vérifiez votre internet.',
      timeout: 'Le serveur met trop de temps à répondre.',
    },
  },
  users: {
    fields: {
      emailLabel: 'Adresse email',
      emailPlaceholder: 'jean@exemple.com',
      firstnameLabel: 'Prénom',
      firstnamePlaceholder: 'Jean',
      lastnameLabel: 'Nom',
      lastnamePlaceholder: 'Dupont',
    },
  },
  auth: {
    fields: {
      passwordLabel: 'Mot de passe',
      confirmPasswordLabel: 'Confirmation mot de passe',
    },
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
  articles: {
    feed: {
      title: 'À la une',
      subtitle: 'Découvrez les dernières publications.',
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
    create: {
      title: 'Rédiger un article',
      subtitle: 'Partagez vos idées et vos connaissances avec la communauté.',
      submitBtn: "Publier l'article",
      fields: {
        titleLabel: "Titre de l'article",
        titlePlaceholder: 'Ex: Architecture Angular v22...',
        categoryLabel: 'Catégorie',
        categoryPlaceholder: 'Choisir une catégorie',
        imageLabel: "Image de l'article",
        descriptionLabel: 'Description',
        descriptionPlaceholder: 'Description ou contenu de votre article...',
      },
      errors: {
        categoryError: 'Impossible de charger les catégories',
      },
    },
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
    [APP_ROUTES.ARTICLES.ROOT]: "Flux d'articles",
    [APP_ROUTES.ARTICLES.CREATE]: 'Nouvel article',
  },
};
