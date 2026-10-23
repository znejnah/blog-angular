import { Component, computed, input } from '@angular/core';
import { IconName } from './icons.constant';

@Component({
  imports: [],
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  host: { class: 'inline-block' },
})
export class IconComponent {
  name = input.required<IconName>();
  readonly path = computed(() => `url(assets/icons/${this.name()}.svg)`);
}
