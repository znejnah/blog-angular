import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleStore } from '../../../../core/articles/article.store';
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
  protected readonly i18nService = inject(I18nService);
  private readonly routes = APP_ROUTES;
  private readonly router = inject(Router);
  private readonly articleStore = inject(ArticleStore);

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

  protected onLogoClick(): void {
    this.router.url === `/${APP_ROUTES.ARTICLES.ROOT}`
      ? this.articleStore.refreshArticle()
      : this.router.navigate(['/', APP_ROUTES.ARTICLES.ROOT]);
  }
}
