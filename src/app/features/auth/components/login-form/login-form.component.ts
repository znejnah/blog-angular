import { Component, input, output, signal } from '@angular/core';
import { debounce, form, pattern, required } from '@angular/forms/signals';
import { LoginRequestDto } from '../../../../core/auth/dto/requests/login-request.dto';
import { TranslationDict } from '../../../../core/i18n/translation.type';
import { REGEX_PATTERNS } from '../../../../shared/constants/regex.constant';
import { UI_TIMING } from '../../../../shared/constants/timings.constant';
import { ButtonComponent } from '../../../../shared/ui/components/button/button.component';
import { CardComponent } from '../../../../shared/ui/components/card/card.component';
import { FormInputComponent } from '../../../../shared/ui/components/form-input/form-input.component';

@Component({
  imports: [CardComponent, FormInputComponent, ButtonComponent],
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  readonly texts = input.required<TranslationDict>();
  readonly isLoading = input<boolean>(false);
  readonly apiError = input<string | null>(null);

  readonly submitLogin = output<LoginRequestDto>();

  protected readonly loginModel = signal<LoginRequestDto>({
    email: 'bmarley@raggae.com',
    password: 'P@ssword1',
  });

  protected readonly loginForm = form(this.loginModel, (schemaPath) => {
    debounce(schemaPath.email, UI_TIMING.FORM_DEBOUNCE);
    required(schemaPath.email);
    pattern(schemaPath.email, REGEX_PATTERNS.EMAIL);

    required(schemaPath.password);
  });

  protected onSubmit(): void {
    if (this.loginForm().invalid()) return;
    this.submitLogin.emit(this.loginModel());
  }
}
