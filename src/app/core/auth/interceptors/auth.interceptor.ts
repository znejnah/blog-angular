import { HttpInterceptorFn } from '@angular/common/http';
import { STORAGE_KEYS } from '../../constants/storage-keys.constant';
import { AUTH_HEADERS } from '../constants/auth-headers.constant';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem(STORAGE_KEYS.accessToken);

  if (token) {
    const clonedRequest = req.clone({
      setHeaders: { [AUTH_HEADERS.KEY]: `${AUTH_HEADERS.PREFIX} ${token}` },
    });
  }
  return next(req);
};
