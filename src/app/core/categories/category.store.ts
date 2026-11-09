import { inject, Service } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { CategoryApiService } from './category-api.service';
import { CategoryModel } from './models/category.model';

@Service()
export class CategoryStore {
  private readonly api = inject(CategoryApiService);

  readonly categoriesList = rxResource<CategoryModel[], void>({
    stream: () => this.api.getAll(),
  });
}
