import { Component, computed, inject, input } from '@angular/core';
import { AuthService } from '../../../../core/auth/auth.service';
import { I18nService } from '../../../../core/i18n/i18n.service';
import { LangSwitcherComponent } from '../../../../features/i18n/components/lang-switcher/lang-switcher.component';
import { IconButtonComponent } from '../../../../shared/ui/components/icon-button/icon-button.component';
import { ICON_NAMES, IconName } from '../../../../shared/ui/components/icon/icons.constant';

@Component({
  imports: [LangSwitcherComponent, IconButtonComponent],
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  readonly authService = inject(AuthService);
  readonly i18nService = inject(I18nService);

  readonly userInitials = computed(() => {
    const user = this.authService.currentUser();
    if (!user) return '?';

    const firstname = user.firstname ? user.firstname[0].toUpperCase() : '';
    const lastname = user.lastname ? user.lastname[0].toUpperCase() : '';

    return firstname + lastname || '?';
  });

  readonly logoutIcon = input<IconName>(ICON_NAMES.LOGOUT);

  logout(): void {
    this.authService.logout();
  }
}
