import { Component, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';
import { LoginRequestDto } from '../../../core/auth/dto/requests/login-request.dto';
import { APP_ROUTES } from '../../../core/constants/app-routes.constant';
import { I18nService } from '../../../core/i18n/i18n.service';
import { LoginFormComponent } from '../../../features/auth/components/login-form/login-form.component';
import { LangSwitcherComponent } from '../../../features/i18n/components/lang-switcher/lang-switcher.component';

@Component({
  imports: [LoginFormComponent, LangSwitcherComponent, RouterLink],
  selector: 'app-login-page',
  styles: '',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  private readonly router = inject(Router);
  readonly routes = APP_ROUTES;

  readonly i18nService = inject(I18nService);
  readonly authService = inject(AuthService);

  readonly translatedApiError = computed(() => {
    const errCode = this.authService.error();
    if (!errCode) return null;

    const dict = this.i18nService.texts().auth.apiErrors;
    return dict[errCode as keyof typeof dict] ?? dict['UNKNOWN_ERROR'];
  });

  async onLoginAttempt(loginDto: LoginRequestDto): Promise<void> {
    const success = await this.authService.login(loginDto);

    console.log('Success :', success);

    if (success) {
      console.log('LOGIN => DASHBOARD');
      // TECH DEBT : IMPLEMENT ROUTING WHEN PAGE EXIST
      // this.router.navigate(['/', this.routes.dashboard]);
    }
  }
}
