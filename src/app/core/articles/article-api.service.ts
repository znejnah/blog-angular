import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MOCK_ARTICLES } from '../mocks/article.mock';
import { API_URL } from '../tokens/api-url.token';
import { ARTICLE_ENDPOINTS } from './constants/article-endpoints.constant';
import { CreateArticleRequestDto } from './dto/requests/create-article.dto';
import { Article } from './models/article.model';

@Service()
export class ArticleApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(API_URL);

  fetchArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.baseUrl + ARTICLE_ENDPOINTS.ALL);
  }

  async fetchMockArticles(): Promise<Article[]> {
    if (!environment.production) {
      await new Promise((resolve) => setTimeout(resolve, environment.mockNetworkDelay));
    }
    return MOCK_ARTICLES;
  }

  create(payload: CreateArticleRequestDto): Observable<Article> {
    const formData = new FormData();
    const { categoryId, ...apiFields } = payload;

    Object.entries(apiFields).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        formData.append(key, value);
      }
    });

    const request$ = this.http.post<Article>(
      this.baseUrl + ARTICLE_ENDPOINTS.NEW_ARTICLE(payload.categoryId),
      formData,
    );
    return environment.production ? request$ : request$.pipe(delay(environment.mockNetworkDelay));
  }
}
