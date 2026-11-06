import { Component, effect, inject } from '@angular/core';
import { I18nService } from '../../../core/i18n/i18n.service';
import { LayoutStateService } from '../../../core/layout/layout-state.service';
import { ArticleFeedComponent } from '../../../features/articles/feed/article-feed.component';

@Component({
  imports: [ArticleFeedComponent],
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
})
export class FeedPageComponent {
  protected readonly layoutStateService = inject(LayoutStateService);
  protected readonly i18nService = inject(I18nService);

  constructor() {
    effect(() => {
      this.layoutStateService.setTitle(
        this.i18nService.texts().articles.feed.title,
        this.i18nService.texts().articles.feed.subtitle,
      );
    });
  }
}
