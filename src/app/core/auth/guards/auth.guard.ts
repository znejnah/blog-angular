import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { APP_ROUTES } from '../../constants/app-routes.constant';
import { AuthStore } from '../auth.store';

export const authGuard: CanActivateFn = () => {
  const authStore = inject(AuthStore);
  const router = inject(Router);

  if (authStore.isAuthenticated()) {
    return true;
  }

  router.navigate(['/', APP_ROUTES.AUTH.ROOT, APP_ROUTES.AUTH.LOGIN], { replaceUrl: true });
  return false;
};
