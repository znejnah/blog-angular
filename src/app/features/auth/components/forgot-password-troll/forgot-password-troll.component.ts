import { Component, inject, signal } from '@angular/core';
import { I18nService } from '../../../../core/i18n/i18n.service';
import { ButtonComponent } from '../../../../shared/ui/components/button/button.component';

@Component({
  imports: [ButtonComponent],
  selector: 'app-forgot-password-troll',
  templateUrl: './forgot-password-troll.component.html',
})
export class ForgotPasswordTrollComponent {
  protected readonly i18nService = inject(I18nService);

  protected readonly isTrolling = signal(false);

  protected toggleTroll(): void {
    this.isTrolling.set(!this.isTrolling());
  }
}
