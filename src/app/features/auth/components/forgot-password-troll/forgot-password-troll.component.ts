import { Component, inject, signal } from '@angular/core';
import { I18nService } from '../../../../core/i18n/i18n.service';
import { ButtonComponent } from '../../../../shared/ui/components/button/button.component';

@Component({
  imports: [ButtonComponent],
  selector: 'app-forgot-password-troll',
  templateUrl: './forgot-password-troll.component.html',
})
export class ForgotPasswordTrollComponent {
  readonly i18nService = inject(I18nService);
  readonly isTrolling = signal(false);

  toggleTroll(): void {
    this.isTrolling.set(!this.isTrolling());
  }
}
