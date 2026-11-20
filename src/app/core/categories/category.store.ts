import { inject, Service, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { I18nService } from '../i18n/i18n.service';
import { ToastService } from '../toast/toast.service';
import { CategoryApiService } from './category-api.service';
import { CreateCategoryRequestDto } from './dto/requests/create-category.dto';
import { Category } from './models/category.model';

@Service()
export class CategoryStore {
  private readonly api = inject(CategoryApiService);

  private readonly toastService = inject(ToastService);

  readonly i18nService = inject(I18nService);

  readonly categoriesList = rxResource<Category[], void>({
    stream: () => this.api.getAll(),
  });

  readonly isCreating = signal(false);

  createCategory(dto: CreateCategoryRequestDto, onSuccess: () => void) {
    this.isCreating.set(true);

    this.api.createCategory(dto).subscribe({
      next: () => {
        this.categoriesList.reload();

        this.isCreating.set(false);
        onSuccess();
      },
      error: (err) => {
        this.isCreating.set(false);

        this.toastService.error(this.i18nService.texts().common.errors.default);

        console.error('Échec de la création de catégorie:', err);
      },
    });
  }
}
