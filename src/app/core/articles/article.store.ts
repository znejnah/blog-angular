import { inject, Service, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ArticleApiService } from './article-api.service';
import { CreateArticleRequestDto } from './dto/requests/create-article.dto';
import { Article } from './models/article.model';

@Service()
export class ArticleStore {
  private readonly api = inject(ArticleApiService);

  readonly articlesRessource = rxResource<Article[], void>({
    stream: () => (environment.production ? this.api.fetchArticles() : this.api.fetchArticles()),
  });

  private readonly _isCreating = signal<boolean>(false);
  readonly isCreating = this._isCreating.asReadonly();

  refreshArticle(): void {
    this.articlesRessource.reload();
  }

  async create(payload: CreateArticleRequestDto): Promise<Article> {
    this._isCreating.set(true);
    try {
      const newArticle = await firstValueFrom(this.api.create(payload));
      this.articlesRessource.reload();
      return newArticle;
    } catch (error) {
      throw error;
    } finally {
      this._isCreating.set(false);
    }
  }
}
