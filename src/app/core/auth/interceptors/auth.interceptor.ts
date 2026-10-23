import { HttpInterceptorFn } from '@angular/common/http';
import { STORAGE_KEYS } from '../../constants/storage-keys.constant';
import { AUTH_ENDPOINTS } from '../constants/auth-endpoints.constant';
import { AUTH_HEADERS } from '../constants/auth-headers.constant';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem(STORAGE_KEYS.accessToken);

  const isAuthRoute =
    req.url.includes(AUTH_ENDPOINTS.login) || req.url.includes(AUTH_ENDPOINTS.register);

  if (token && !isAuthRoute) {
    const clonedRequest = req.clone({
      setHeaders: { [AUTH_HEADERS.KEY]: `${AUTH_HEADERS.PREFIX} ${token}` },
    });
  }
  return next(req);
};
