import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TEXT_LINK_STYLES } from './text-link.constant';
import { TEXT_LINK_VARIANTS, TextLinkVariant } from './text-link.type';

@Component({
  imports: [RouterLink],
  selector: 'app-text-link',
  templateUrl: './text-link.component.html',
})
export class TextLinkComponent {
  readonly to = input.required<string | any[]>();
  readonly replaceUrl = input<boolean>(true);

  readonly variant = input<TextLinkVariant>(TEXT_LINK_VARIANTS.PRIMARY);

  protected readonly linkClasses = computed(() => {
    const base = TEXT_LINK_STYLES.BASE;
    const variantStyle = TEXT_LINK_STYLES.VARIANTS[this.variant()];
    return base + variantStyle;
  });
}
