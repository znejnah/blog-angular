import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, input, output, signal } from '@angular/core';
import { form, required } from '@angular/forms/signals';
import { CategoryStore } from '../../../core/categories/category.store';
import { CreateCategoryRequestDto } from '../../../core/categories/dto/requests/create-category.dto';
import { I18nService } from '../../../core/i18n/i18n.service';
import { TranslationDict } from '../../../core/i18n/translation.type';
import { ToastService } from '../../../core/toast/toast.service';
import { FormInputComponent } from '../../../shared/ui/components/form-input/form-input.component';
import { ModalComponent } from '../../../shared/ui/components/modal/modal.component';

@Component({
  imports: [ModalComponent, FormInputComponent],
  selector: 'app-create',
  templateUrl: './create.component.html',
})
export class CreateComponent {
  readonly texts = input.required<TranslationDict>();
  readonly apiError = signal<string | null>(null);
  readonly toastService = inject(ToastService);

  protected readonly categoryStore = inject(CategoryStore);
  protected readonly i18nService = inject(I18nService);

  readonly close = output<void>();

  protected readonly createModel = signal<CreateCategoryRequestDto>({
    title: '',
    description: '',
  });

  protected readonly createForm = form(this.createModel, (schemaPath) => {
    required(schemaPath.title);
    required(schemaPath.description);
  });

  async onSubmit() {
    if (this.createForm().invalid()) return;

    const model = this.createModel();

    const payload: CreateCategoryRequestDto = {
      title: model.title,
      description: model.description,
    };

    try {
      this.apiError.set(null);

      this.categoryStore.createCategory(payload, () => {
        this.close.emit();
      });
    } catch (e) {
      if (e instanceof HttpErrorResponse) {
        this.toastService.error(e.message);
      } else {
        this.toastService.error(this.texts().common.errors.default);
      }
    }
  }
}
