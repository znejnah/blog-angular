import { Routes } from '@angular/router';
import { authGuard } from './core/auth/guards/auth.guard';
import { guestGuard } from './core/auth/guards/guest.guard';
import { APP_ROUTES } from './core/constants/app-routes.constant';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';
import { RegisterPageComponent } from './pages/auth/register-page/register-page.component';

export const routes: Routes = [
  {
    path: APP_ROUTES.auth.root,
    component: AuthLayoutComponent,
    canActivate: [guestGuard],
    children: [
      { path: APP_ROUTES.auth.login, component: LoginPageComponent },
      { path: APP_ROUTES.auth.register, component: RegisterPageComponent },
      { path: '', redirectTo: APP_ROUTES.auth.login, pathMatch: 'full' },
    ],
  },

  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: APP_ROUTES.dashboard.root, component: MainLayoutComponent },
      { path: '', redirectTo: APP_ROUTES.dashboard.root, pathMatch: 'full' },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
