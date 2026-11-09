import { Component, computed, input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { ICON_NAMES } from '../icon/icons.constant';
import { BUTTON_BASE_CLASS, BUTTON_VARIANT_CLASSES } from './button.constant';
import { BUTTON_TYPES, BUTTON_VARIANT, ButtonType, ButtonVariant } from './button.type';

@Component({
  imports: [IconComponent],
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  readonly type = input<ButtonType>(BUTTON_TYPES.BUTTON);
  readonly variant = input<ButtonVariant>(BUTTON_VARIANT.PRIMARY);
  readonly disabled = input<boolean>(false);
  readonly isLoading = input<boolean>(false);
  readonly loadingText = input<string>();

  protected readonly iconNames = ICON_NAMES;
  protected readonly isDisabled = computed(() => this.disabled() || this.isLoading());

  protected readonly buttonClasses = computed(
    () => `${BUTTON_BASE_CLASS} ${BUTTON_VARIANT_CLASSES[this.variant()]}`,
  );
}
