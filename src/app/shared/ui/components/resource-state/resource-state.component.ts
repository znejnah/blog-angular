import { Component, computed, inject, input, ResourceRef } from '@angular/core';
import { I18nService } from '../../../../core/i18n/i18n.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  imports: [ButtonComponent],
  selector: 'app-resource-state',
  templateUrl: './resource-state.component.html',
})
export class ResourceStateComponent<T> {
  protected i18nService = inject(I18nService);

  readonly resource = input.required<ResourceRef<T>>();
  readonly errorMessage = input<string>();
  readonly forceEmpty = input<boolean>();

  protected readonly isActuallyEmpty = computed(() => {
    if (this.resource().error()) return false;

    if (this.forceEmpty() !== undefined) return this.forceEmpty();

    const val = this.resource().value();

    if (Array.isArray(val)) return val.length === 0;
    return !val;
  });
}
