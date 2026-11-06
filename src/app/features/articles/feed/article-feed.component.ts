import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArticleStore } from '../../../core/articles/article.store';
import { APP_ROUTES } from '../../../core/constants/app-routes.constant';
import { I18nService } from '../../../core/i18n/i18n.service';
import { ToastService } from '../../../core/toast/toast.service';
import { ButtonComponent } from '../../../shared/ui/components/button/button.component';
import { IconButtonComponent } from '../../../shared/ui/components/icon-button/icon-button.component';
import { ICON_NAMES, IconName } from '../../../shared/ui/components/icon/icons.constant';
import { ResourceStateComponent } from '../../../shared/ui/components/resource-state/resource-state.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { ArticleSkeletonComponent } from './components/article-skeleton/article-skeleton.component';
import { ARTICLE_FEED_CONFIG } from './constants/article-feed.constant';

@Component({
  imports: [
    ArticleCardComponent,
    ButtonComponent,
    ArticleSkeletonComponent,
    IconButtonComponent,
    ResourceStateComponent,
    RouterLink,
  ],
  selector: 'app-article-feed',
  templateUrl: './article-feed.component.html',
})
export class ArticleFeedComponent {
  private readonly articleStore = inject(ArticleStore);
  private readonly toastService = inject(ToastService);
  protected readonly i18nService = inject(I18nService);

  protected readonly APP_ROUTES = APP_ROUTES;

  readonly writeIcon = input<IconName>(ICON_NAMES.WRITE);

  protected readonly skeletonArray = Array(ARTICLE_FEED_CONFIG.SKELETON_COUNT);

  protected readonly articlesRessource = this.articleStore.articlesRessource;

  protected readonly currentPage = signal<number>(1);

  protected readonly displayedArticles = computed(() => {
    if (this.articlesRessource.error()) return [];

    const allArticles = this.articlesRessource.value() ?? [];
    return allArticles.slice(0, this.currentPage() * ARTICLE_FEED_CONFIG.ITEMS_PER_PAGE);
  });

  protected readonly hasMore = computed(() => {
    if (this.articlesRessource.error()) return false;

    const allArticles = this.articlesRessource.value() ?? [];
    return this.displayedArticles().length < allArticles.length;
  });

  constructor() {
    effect(() => {
      if (this.articlesRessource.error()) {
        this.toastService.error(this.i18nService.texts().common.errors.network);
      }
    });
  }

  protected loadMore(): void {
    this.currentPage.update((page) => ++page);
  }
}
