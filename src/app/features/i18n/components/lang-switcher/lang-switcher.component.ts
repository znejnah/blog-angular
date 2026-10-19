import { Component, inject } from '@angular/core';
import { I18nService } from '../../../../core/i18n/i18n.service';

@Component({
  imports: [],
  selector: 'app-lang-switcher',
  templateUrl: './lang-switcher.component.html',
})
export class LangSwitcherComponent {
  readonly i18nService = inject(I18nService);
}
