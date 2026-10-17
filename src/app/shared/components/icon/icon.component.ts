import { Component, computed, input } from '@angular/core';
import { APP_ICONS, IconName } from './icons.constant';

@Component({
  imports: [],
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  host: { class: 'inline-block' },
})
export class IconComponent {
  name = input.required<IconName>();
  readonly path = computed(() => APP_ICONS[this.name()]);
}
