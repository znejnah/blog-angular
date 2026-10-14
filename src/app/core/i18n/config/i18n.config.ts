export const SUPPORTED_LANGUAGES = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
] as const;

export type LangCode = (typeof SUPPORTED_LANGUAGES)[number]['code'];

export type LangOption = (typeof SUPPORTED_LANGUAGES)[number];
