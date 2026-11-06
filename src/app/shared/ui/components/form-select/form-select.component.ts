import { Component, input } from '@angular/core';
import { FieldTree, FormField } from '@angular/forms/signals';
import { TranslationDict } from '../../../../core/i18n/translation.type';
import { ValidationErrorPipe } from '../../../pipes/validation-error-pipe';

@Component({
  imports: [ValidationErrorPipe, FormField],
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
})
export class FormSelectComponent {
  readonly field = input.required<FieldTree<string>>();
  readonly texts = input.required<TranslationDict>();
  readonly label = input.required<string>();
  readonly isRequired = input<boolean>();
}
