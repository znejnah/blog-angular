import { Component, computed, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStore } from '../../../../core/auth/auth.store';
import { APP_ROUTES } from '../../../../core/constants/app-routes.constant';
import { I18nService } from '../../../../core/i18n/i18n.service';
import { LayoutStateService } from '../../../../core/layout/layout-state.service';
import { LangSwitcherComponent } from '../../../../features/i18n/components/lang-switcher/lang-switcher.component';
import { IconButtonComponent } from '../../../../shared/ui/components/icon-button/icon-button.component';
import { ICON_NAMES, IconName } from '../../../../shared/ui/components/icon/icons.constant';

@Component({
  imports: [LangSwitcherComponent, IconButtonComponent],
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  protected readonly authStore = inject(AuthStore);
  protected readonly i18nService = inject(I18nService);
  protected readonly layoutStateService = inject(LayoutStateService);
  private readonly router = inject(Router);

  readonly pageTitle = input<string>();
  readonly logoutIcon = input<IconName>(ICON_NAMES.LOGOUT);

  protected readonly userInitials = computed(() => {
    const user = this.authStore.currentUser();
    if (!user) return '?';

    const f = user.firstname ? user.firstname[0].toUpperCase() : '';
    const l = user.lastname ? user.lastname[0].toUpperCase() : '';

    return f + l || '?';
  });

  protected logout(): void {
    this.authStore.logout();
    this.router.navigate(['/', APP_ROUTES.AUTH.ROOT], { replaceUrl: true });
  }
}
