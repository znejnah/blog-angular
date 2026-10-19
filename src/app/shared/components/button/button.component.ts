import { Component, computed, input } from '@angular/core';
import { TranslationDict } from '../../i18n/translation.type';
import { BUTTON_BASE_CLASS, BUTTON_VARIANT_CLASSES } from './button.constant';
import { BUTTON_TYPES, BUTTON_VARIANT, ButtonType, ButtonVariant } from './button.type';

@Component({
  imports: [],
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  type = input<ButtonType>(BUTTON_TYPES.BUTTON);
  variant = input<ButtonVariant>(BUTTON_VARIANT.PRIMARY);
  disabled = input<boolean>(false);
  isLoading = input<boolean>(false);
  texts = input.required<TranslationDict>();

  readonly isDisabled = computed(() => this.disabled() || this.isLoading());

  readonly buttonClasses = computed(
    () => `${BUTTON_BASE_CLASS} ${BUTTON_VARIANT_CLASSES[this.variant()]}`,
  );
}
