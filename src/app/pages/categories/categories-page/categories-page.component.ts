import { Component, computed, effect, inject, signal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { CategoryStore } from '../../../core/categories/category.store';
import { I18nService } from '../../../core/i18n/i18n.service';
import { LayoutStateService } from '../../../core/layout/layout-state.service';
import { CategoryCardComponent } from '../../../features/categories/components/category-card/category-card.component';
import { CreateComponent } from '../../../features/categories/create/create.component';
import { IconButtonComponent } from '../../../shared/ui/components/icon-button/icon-button.component';
import { IconComponent } from '../../../shared/ui/components/icon/icon.component';
import { ICON_NAMES } from '../../../shared/ui/components/icon/icons.constant';

@Component({
  imports: [IconComponent, IconButtonComponent, CreateComponent, CategoryCardComponent],
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
})
export class CategoriesPageComponent {
  protected readonly layoutStateService = inject(LayoutStateService);
  protected i18nService = inject(I18nService);
  protected readonly categoryStore = inject(CategoryStore);

  readonly iconNames = ICON_NAMES;

  readonly isCreating = signal(false);

  protected readonly searchData = signal({ search: '' });
  protected readonly searchForm = form(this.searchData);

  protected readonly filteredCategories = computed(() => {
    const allCategories = this.categoryStore.categoriesList.value() ?? [];

    const search = (this.searchForm.search().value() || '').trim().toLowerCase();

    if (!search) return allCategories;

    return allCategories.filter((category) => category.title.toLowerCase().includes(search));
  });

  constructor() {
    effect(() => {
      this.layoutStateService.setTitle(
        this.i18nService.texts().categories.title,
        this.i18nService.texts().categories.subtitle,
      );
    });
  }
}
