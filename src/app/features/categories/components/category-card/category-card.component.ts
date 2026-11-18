import { Component, input } from '@angular/core';
import { Category } from '../../../../core/categories/models/category.model';
import { TranslationDict } from '../../../../core/i18n/translation.type';
import { IconButtonComponent } from '../../../../shared/ui/components/icon-button/icon-button.component';
import { ICON_NAMES } from '../../../../shared/ui/components/icon/icons.constant';

@Component({
  imports: [IconButtonComponent],
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
})
export class CategoryCardComponent {
  readonly category = input.required<Category>();

  readonly texts = input.required<TranslationDict>();

  readonly iconNames = ICON_NAMES;
}
