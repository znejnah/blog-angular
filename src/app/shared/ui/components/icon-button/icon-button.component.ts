import { Component, computed, input, output } from '@angular/core';
import { BUTTON_TYPES, BUTTON_VARIANT, ButtonType, ButtonVariant } from '../../types/button.type';
import { IconComponent } from '../icon/icon.component';
import { IconName } from '../icon/icons.constant';
import { ICON_BUTTON_BASE_CLASS, ICON_BUTTON_VARIANT_CLASSES } from './icon-button.constant';

@Component({
  imports: [IconComponent],
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
})
export class IconButtonComponent {
  readonly icon = input.required<IconName>();
  readonly ariaLabel = input.required<string>();
  readonly type = input<ButtonType>(BUTTON_TYPES.BUTTON);

  readonly variant = input<ButtonVariant>(BUTTON_VARIANT.SECONDARY);

  readonly buttonClasses = computed(
    () => `${ICON_BUTTON_BASE_CLASS} ${ICON_BUTTON_VARIANT_CLASSES[this.variant()]}`,
  );

  clicked = output<MouseEvent>();
}
