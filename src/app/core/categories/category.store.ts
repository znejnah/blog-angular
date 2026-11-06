import { inject, resource, Service } from '@angular/core';
import { CategoryApiService } from './category-api.service';

@Service()
export class CategoryStore {
  private readonly api = inject(CategoryApiService);

  readonly categoriesList = resource({
    loader: () => this.api.getAll(),
  });
}
