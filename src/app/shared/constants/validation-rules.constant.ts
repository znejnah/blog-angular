export const VALIDATION_RULES = {
  AUTH: {
    NAME_MIN_LENGTH: 3,
    PASSWORD_MIN_LENGTH: 8,
  },
  ARTICLE: {
    TITLE_MIN_LENGTH: 8,
    TITLE_MAX_LENGTH: 255,
  },
} as const;
