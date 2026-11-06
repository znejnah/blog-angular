import { inject, resource, Service, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ArticleApiService } from './article-api.service';
import { CreateArticleRequestDto } from './dto/requests/create-article.dto';
import { Article } from './models/article.model';

@Service()
export class ArticleStore {
  private readonly api = inject(ArticleApiService);

  readonly articlesRessource = resource<Article[], void>({
    loader: async () => {
      if (environment.production) {
        return await firstValueFrom(this.api.fetchArticles());
      } else {
        // return await this.api.fetchMockArticles();
        return await firstValueFrom(this.api.fetchArticles());
      }
    },
  });

  private readonly _isCreating = signal<boolean>(false);
  readonly isCreating = this._isCreating.asReadonly();

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
