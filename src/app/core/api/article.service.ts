import { HttpClient, httpResource } from '@angular/common/http';
import { inject, resource, Service } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MOCK_ARTICLES } from '../mocks/article.mock';
import { Article } from '../models/article.model';
import { API_URL } from '../tokens/api-url.token';
import { API_ENDPOINTS } from './constants/api-endpoints.constant';

@Service()
export class ArticleService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(API_URL);

  getArticlesRessource() {
    // // --- PROD --------------------------------------------------------------------------------------------------
    // return httpResource<Article[]>(() => this.baseUrl + API_ENDPOINTS.ARTICLES);
    // // -----------------------------------------------------------------------------------------------------------

    // --- DEV : Delay on fake network ---------------------------------------------------------------------------
    return resource<Article[], void>({
      loader: async () => {
        if (!environment.production) {
          await new Promise((resolve) => setTimeout(resolve, environment.mockNetworkDelay));
        }
        return MOCK_ARTICLES;
      },
    });
    // -----------------------------------------------------------------------------------------------------------
  }
}
