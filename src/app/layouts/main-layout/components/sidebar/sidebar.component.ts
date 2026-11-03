import { Component, computed, inject } from '@angular/core';
import { APP_ROUTES } from '../../../../core/constants/app-routes.constant';
import { I18nService } from '../../../../core/i18n/i18n.service';
import { ICON_NAMES } from '../../../../shared/ui/components/icon/icons.constant';
import { SidebarItemComponent } from './sidebar-item.component';

@Component({
  imports: [SidebarItemComponent],
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  readonly i18nService = inject(I18nService);
  readonly routes = APP_ROUTES;

  readonly menuItems = computed(() => [
    {
      route: ['/', APP_ROUTES.ARTICLES.ROOT],
      icon: ICON_NAMES.HOME,
      label: this.i18nService.texts().navigation[APP_ROUTES.ARTICLES.ROOT],
      exact: true,
    },
    {
      route: ['/', APP_ROUTES.ARTICLES.CREATE],
      icon: ICON_NAMES.WRITE,
      label: this.i18nService.texts().navigation[APP_ROUTES.ARTICLES.CREATE],
      exact: true,
    },
  ]);
}
