import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, input, signal } from '@angular/core';
import { form, maxLength, minLength, pattern, required } from '@angular/forms/signals';
import { Router } from '@angular/router';
import { ArticleStore } from '../../../core/articles/article.store';
import { CreateArticleRequestDto } from '../../../core/articles/dto/requests/create-article.dto';
import { CategoryStore } from '../../../core/categories/category.store';
import { APP_ROUTES } from '../../../core/constants/app-routes.constant';
import { TranslationDict } from '../../../core/i18n/translation.type';
import { ToastService } from '../../../core/toast/toast.service';
import { FILE_FORMATS } from '../../../shared/constants/file-formats.constant';
import { REGEX_PATTERNS } from '../../../shared/constants/regex.constant';
import { VALIDATION_RULES } from '../../../shared/constants/validation-rules.constant';
import { ButtonComponent } from '../../../shared/ui/components/button/button.component';
import { FormFileComponent } from '../../../shared/ui/components/form-file/form-file.component';
import { FormInputComponent } from '../../../shared/ui/components/form-input/form-input.component';
import { FormSelectComponent } from '../../../shared/ui/components/form-select/form-select.component';
import { TextLinkComponent } from '../../../shared/ui/components/text-link/text-link.component';

type CreateFormModel = {
  title: string;
  description: string;
  categoryId: string;
  postImage: File | null;
};

@Component({
  imports: [
    FormInputComponent,
    FormSelectComponent,
    FormFileComponent,
    TextLinkComponent,
    ButtonComponent,
  ],
  selector: 'app-create',
  templateUrl: './create.component.html',
})
export class CreateComponent {
  readonly texts = input.required<TranslationDict>();
  readonly apiError = signal<string | null>(null);
  readonly toastService = inject(ToastService);

  private readonly router = inject(Router);
  protected readonly APP_ROUTES = APP_ROUTES;
  protected readonly FILE_FORMATS = FILE_FORMATS;
  protected readonly articleStore = inject(ArticleStore);
  protected readonly categoryStore = inject(CategoryStore);

  protected readonly createModel = signal<CreateFormModel>({
    title: '',
    description: '',
    categoryId: '',
    postImage: null,
  });

  protected readonly createForm = form(this.createModel, (schemaPath) => {
    required(schemaPath.title);
    pattern(schemaPath.title, REGEX_PATTERNS.NOT_EMPTY);
    minLength(schemaPath.title, VALIDATION_RULES.ARTICLE.TITLE_MIN_LENGTH);
    maxLength(schemaPath.title, VALIDATION_RULES.ARTICLE.TITLE_MAX_LENGTH);

    required(schemaPath.description);
    pattern(schemaPath.description, REGEX_PATTERNS.NOT_EMPTY);

    required(schemaPath.categoryId);
    required(schemaPath.postImage);
  });

  onFileSelected(file: File): void {
    this.createModel.update((model) => ({
      ...model,
      postImage: file,
    }));
  }

  async onSubmit(): Promise<void> {
    if (this.createForm().invalid()) return;

    const model = this.createModel();

    const payload: CreateArticleRequestDto = {
      title: model.title,
      description: model.description,
      categoryId: model.categoryId,
      postImage: model.postImage!,
    };

    try {
      this.apiError.set(null);

      await this.articleStore.create(payload);
      await this.router.navigate(['/', APP_ROUTES.ARTICLES.ROOT], { replaceUrl: true });
    } catch (e) {
      if (e instanceof HttpErrorResponse) {
        this.toastService.error(e.message);
      } else {
        this.toastService.error(this.texts().common.errors.default);
      }
    }
  }
}
