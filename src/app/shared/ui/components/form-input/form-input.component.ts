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
  readonly field = input.required<FieldState<string, string>>();
  readonly label = input.required<string>();
  readonly placeholder = input<string>('');
  readonly type = input<FormInputType>(INPUT_TYPES.TEXT);
  readonly texts = input.required<TranslationDict>();

  protected readonly showPassword = signal(false);

  protected readonly passwordIcon = computed(() =>
    this.showPassword() ? ICON_NAMES.EYE_OFF : ICON_NAMES.EYE,
  );

  protected readonly isPassword = computed(() => this.type() === INPUT_TYPES.PASSWORD);

  protected readonly hasError = computed(() => this.field().touched() && this.field().invalid());

  protected readonly inputClasses = computed(() =>
    this.hasError() ? FORM_STYLES.INPUT_ERROR : FORM_STYLES.INPUT_DEFAULT,
  );

  protected readonly currentType = computed(() => {
    if (this.type() === INPUT_TYPES.PASSWORD) {
      return this.showPassword() ? INPUT_TYPES.TEXT : INPUT_TYPES.PASSWORD;
    }
    return this.type();
  });

  protected togglePassword(): void {
    this.showPassword.update((state) => !state);
  }
}
