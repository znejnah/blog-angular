import { AuthError } from '../enums/auth-error.enum';

export const LOGIN_ERROR_MAP: Record<number, AuthError> = {
  401: AuthError.INVALID_CREDENTIALS,
  404: AuthError.INVALID_CREDENTIALS,
};

export const REGISTER_ERROR_MAP: Record<number, AuthError> = {
  409: AuthError.EMAIL_ALREADY_EXISTS,
};
