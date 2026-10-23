import { Component, computed, input, signal } from '@angular/core';
import { FieldState, FormField } from '@angular/forms/signals';
import { TranslationDict } from '../../../../core/i18n/translation.type';
import { ValidationErrorPipe } from '../../../pipes/validation-error-pipe';
import { FORM_STYLES } from '../../constants/form-styles.constant';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { ICON_NAMES } from '../icon/icons.constant';
import { FormInputType, INPUT_TYPES } from './form-input.type';

@Component({
  imports: [FormField, ValidationErrorPipe, IconButtonComponent],
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
})
export class FormInputComponent {
  field = input.required<FieldState<string, string>>();
  label = input.required<string>();
  placeholder = input<string>('');
  type = input<FormInputType>(INPUT_TYPES.TEXT);
  texts = input.required<TranslationDict>();

  readonly showPassword = signal(false);

  readonly passwordIcon = computed(() =>
    this.showPassword() ? ICON_NAMES.EYE_OFF : ICON_NAMES.EYE,
  );

  readonly isPassword = computed(() => this.type() === INPUT_TYPES.PASSWORD);

  readonly hasError = computed(() => this.field().touched() && this.field().invalid());

  readonly inputClasses = computed(() =>
    this.hasError() ? FORM_STYLES.INPUT_ERROR : FORM_STYLES.INPUT_DEFAULT,
  );

  readonly currentType = computed(() => {
    if (this.type() === INPUT_TYPES.PASSWORD) {
      return this.showPassword() ? INPUT_TYPES.TEXT : INPUT_TYPES.PASSWORD;
    }
    return this.type();
  });

  togglePassword(): void {
    this.showPassword.update((state) => !state);
  }
}
