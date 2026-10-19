import { Component, inject, signal } from '@angular/core';
import { I18nService } from '../../../../core/i18n/i18n.service';

@Component({
  imports: [],
  selector: 'app-forgot-password-troll',
  templateUrl: './forgot-password-troll.component.html',
})
export class ForgotPasswordTrollComponent {
  readonly i18nService = inject(I18nService);
  readonly isTrolling = signal(false);

  triggerTroll(): void {
    this.isTrolling.set(true);
  }
}
