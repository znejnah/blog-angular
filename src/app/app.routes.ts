import { Routes } from '@angular/router';
import { authGuard } from './core/auth/guards/auth.guard';
import { guestGuard } from './core/auth/guards/guest.guard';
import { APP_ROUTES } from './core/constants/app-routes.constant';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { CreatePageComponent } from './pages/articles/create-page/create-page.component';
import { FeedPageComponent } from './pages/articles/feed-page/feed-page.component';
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';
import { RegisterPageComponent } from './pages/auth/register-page/register-page.component';

export const routes: Routes = [
  {
    path: APP_ROUTES.AUTH.ROOT,
    component: AuthLayoutComponent,
    canActivate: [guestGuard],
    children: [
      { path: APP_ROUTES.AUTH.LOGIN, component: LoginPageComponent },
      { path: APP_ROUTES.AUTH.REGISTER, component: RegisterPageComponent },
      { path: '', redirectTo: APP_ROUTES.AUTH.LOGIN, pathMatch: 'full' },
    ],
  },

  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: APP_ROUTES.ARTICLES.ROOT, component: FeedPageComponent },
      { path: APP_ROUTES.ARTICLES.CREATE, component: CreatePageComponent },
      { path: '', redirectTo: APP_ROUTES.ARTICLES.ROOT, pathMatch: 'full' },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
