export const REGEX_PATTERNS = {
  EMAIL: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  STRONG_PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
  LOWERCASE: /[a-z]/,
  UPPERCASE: /[A-Z]/,
  DIGIT: /[0-9]/,
  SPECIAL_CHARACTER: /[^A-Za-z0-9]/,
};
