import { Component, computed, input } from '@angular/core';
import { BUTTON_TYPES, BUTTON_VARIANT, ButtonType, ButtonVariant } from '../../types/button.type';
import { IconComponent } from '../icon/icon.component';
import { ICON_NAMES } from '../icon/icons.constant';
import { BUTTON_BASE_CLASS, BUTTON_VARIANT_CLASSES } from './button.constant';

@Component({
  imports: [IconComponent],
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  type = input<ButtonType>(BUTTON_TYPES.BUTTON);
  variant = input<ButtonVariant>(BUTTON_VARIANT.PRIMARY);
  disabled = input<boolean>(false);
  isLoading = input<boolean>(false);
  loadingText = input<string>();

  readonly iconNames = ICON_NAMES;
  readonly isDisabled = computed(() => this.disabled() || this.isLoading());

  readonly buttonClasses = computed(
    () => `${BUTTON_BASE_CLASS} ${BUTTON_VARIANT_CLASSES[this.variant()]}`,
  );
}
