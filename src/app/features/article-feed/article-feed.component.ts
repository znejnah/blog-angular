import { Component, computed, inject, input, signal } from '@angular/core';
import { ArticleService } from '../../core/api/article.service';
import { I18nService } from '../../core/i18n/i18n.service';
import { ButtonComponent } from '../../shared/ui/components/button/button.component';
import { IconButtonComponent } from '../../shared/ui/components/icon-button/icon-button.component';
import { ICON_NAMES, IconName } from '../../shared/ui/components/icon/icons.constant';
import { ResourceStateComponent } from '../../shared/ui/components/resource-state/resource-state.component';
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
  ],
  selector: 'app-article-feed',
  templateUrl: './article-feed.component.html',
})
export class ArticleFeedComponent {
  private readonly articleService = inject(ArticleService);
  protected readonly i18nService = inject(I18nService);

  readonly writeIcon = input<IconName>(ICON_NAMES.WRITE);

  protected readonly skeletonArray = Array(ARTICLE_FEED_CONFIG.SKELETON_COUNT);

  protected readonly articlesRessource = this.articleService.getArticlesRessource();

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

  protected writeNewArticle(): void {
    // TECH DEBT : replace with Create Article page redirect
    console.log('WRITE NEW ARTICLE CLICKED');
  }

  protected loadMore(): void {
    this.currentPage.update((page) => ++page);
  }
}
