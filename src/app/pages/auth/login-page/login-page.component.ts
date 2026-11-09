import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStore } from '../../../core/auth/auth.store';
import { LoginRequestDto } from '../../../core/auth/dto/requests/login-request.dto';
import { APP_ROUTES } from '../../../core/constants/app-routes.constant';
import { I18nService } from '../../../core/i18n/i18n.service';
import { ToastService } from '../../../core/toast/toast.service';
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
  protected readonly authStore = inject(AuthStore);
  private readonly toastService = inject(ToastService);
  private readonly router = inject(Router);

  protected readonly translatedApiError = computed(() => {
    const errCode = this.authStore.error();
    if (!errCode) return null;

    const dict = this.i18nService.texts().auth.apiErrors;
    return dict[errCode as keyof typeof dict] ?? dict['UNKNOWN_ERROR'];
  });

  protected readonly isTrolling = signal(false);

  constructor() {
    this.authStore.clearError();
  }

  triggerTroll(): void {
    this.isTrolling.set(true);
  }

  protected async onLoginSubmit(loginDto: LoginRequestDto): Promise<void> {
    try {
      await this.authStore.login(loginDto);
      const user = this.authStore.currentUser();
      if (user?.firstname) {
        this.toastService.info(this.i18nService.texts().auth.welcomeMessage(user.firstname));
      }
      await this.router.navigate(['/', APP_ROUTES.ARTICLES.ROOT], { replaceUrl: true });
    } catch (e) {}
  }
}
