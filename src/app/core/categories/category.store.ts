import { inject, Service } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { CategoryApiService } from './category-api.service';
import { Category } from './models/category.model';

@Service()
export class CategoryStore {
  private readonly api = inject(CategoryApiService);

  readonly categoriesList = rxResource<Category[], void>({
    stream: () => this.api.getAll(),
  });
}
