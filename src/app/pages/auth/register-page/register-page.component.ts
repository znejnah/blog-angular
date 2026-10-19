import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';
import { RegisterRequestDto } from '../../../core/auth/dto/requests/register-request.dto';
import { APP_ROUTES } from '../../../core/constants/app-routes.constant';
import { I18nService } from '../../../core/i18n/i18n.service';
import { RegisterFormComponent } from '../../../features/auth/components/register-form/register-form.component';
import { TextLinkComponent } from '../../../shared/components/text-link/text-link.component';

@Component({
  imports: [RegisterFormComponent, TextLinkComponent],
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
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

  constructor() {
    this.authService.clearError();
  }

  async onRegisterAttempt(registerDto: RegisterRequestDto): Promise<void> {
    const success = await this.authService.register(registerDto);
  }

  onLoginLinkSubmit(): void {
    this.router.navigate(['/', this.routes.auth.login], { replaceUrl: true });
  }
}
