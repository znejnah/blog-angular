import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: '',
    component: MainLayoutComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
