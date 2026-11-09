import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStore } from '../../../core/auth/auth.store';
import { RegisterRequestDto } from '../../../core/auth/dto/requests/register-request.dto';
import { APP_ROUTES } from '../../../core/constants/app-routes.constant';
import { I18nService } from '../../../core/i18n/i18n.service';
import { ToastService } from '../../../core/toast/toast.service';
import { RegisterFormComponent } from '../../../features/auth/components/register-form/register-form.component';
import { TextLinkComponent } from '../../../shared/ui/components/text-link/text-link.component';

@Component({
  imports: [RegisterFormComponent, TextLinkComponent],
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
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

  constructor() {
    this.authStore.clearError();
  }

  protected async onRegisterSubmit(registerDto: RegisterRequestDto): Promise<void> {
    try {
      await this.authStore.register(registerDto);
      const user = this.authStore.currentUser();
      if (user?.firstname) {
        this.toastService.info(this.i18nService.texts().auth.welcomeMessage(user.firstname));
      }
      await this.router.navigate(['/', APP_ROUTES.ARTICLES.ROOT], { replaceUrl: true });
    } catch (e) {}
  }
}
