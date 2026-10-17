export const INPUT_TYPES = {
  TEXT: 'text',
  EMAIL: 'email',
  PASSWORD: 'password',
};

export type FormInputType = (typeof INPUT_TYPES)[keyof typeof INPUT_TYPES];
