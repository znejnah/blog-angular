export const TEXT_LINK_VARIANTS = {
  PRIMARY: 'primary',
  NEUTRAL: 'neutral',
} as const;

export type TextLinkVariant = (typeof TEXT_LINK_VARIANTS)[keyof typeof TEXT_LINK_VARIANTS];
