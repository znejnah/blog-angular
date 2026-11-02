import { Component, computed, inject, signal } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';
import { LoginRequestDto } from '../../../core/auth/dto/requests/login-request.dto';
import { APP_ROUTES } from '../../../core/constants/app-routes.constant';
import { I18nService } from '../../../core/i18n/i18n.service';
import { ForgotPasswordTrollComponent } from '../../../features/auth/components/forgot-password-troll/forgot-password-troll.component';
import { LoginFormComponent } from '../../../features/auth/components/login-form/login-form.component';
import { TextLinkComponent } from '../../../shared/ui/components/text-link/text-link.component';

@Component({
  imports: [LoginFormComponent, ForgotPasswordTrollComponent, TextLinkComponent],
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  protected readonly routes = APP_ROUTES;

  protected readonly i18nService = inject(I18nService);
  protected readonly authService = inject(AuthService);

  protected readonly translatedApiError = computed(() => {
    const errCode = this.authService.error();
    if (!errCode) return null;

    const dict = this.i18nService.texts().auth.apiErrors;
    return dict[errCode as keyof typeof dict] ?? dict['UNKNOWN_ERROR'];
  });

  protected readonly isTrolling = signal(false);

  constructor() {
    this.authService.clearError();
  }

  triggerTroll(): void {
    this.isTrolling.set(true);
  }

  protected async onLoginAttempt(loginDto: LoginRequestDto): Promise<void> {
    await this.authService.login(loginDto);
  }
}
