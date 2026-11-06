import { Component, effect, inject } from '@angular/core';
import { I18nService } from '../../../core/i18n/i18n.service';
import { LayoutStateService } from '../../../core/layout/layout-state.service';
import { CreateComponent } from '../../../features/articles/create/create.component';

@Component({
  imports: [CreateComponent],
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
})
export class CreatePageComponent {
  protected readonly layoutStateService = inject(LayoutStateService);
  protected readonly i18nService = inject(I18nService);

  constructor() {
    effect(() => {
      this.layoutStateService.setTitle(
        this.i18nService.texts().articles.create.title,
        this.i18nService.texts().articles.create.subtitle,
      );
    });
  }
}
