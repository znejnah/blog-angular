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
  texts = input.required<TranslationDict>();
  isLoading = input<boolean>(false);
  apiError = input<string | null>(null);

  submitLogin = output<LoginRequestDto>();

  readonly loginModel = signal<LoginRequestDto>({
    email: 'admin@example.com',
    password: 'Password123*',
  });

  readonly loginForm = form(this.loginModel, (schemaPath) => {
    debounce(schemaPath.email, UI_TIMING.FORM_DEBOUNCE);
    required(schemaPath.email);
    pattern(schemaPath.email, REGEX_PATTERNS.EMAIL);

    required(schemaPath.password);
  });

  onSubmit(): void {
    if (this.loginForm().invalid()) return;
    this.submitLogin.emit(this.loginModel());
  }
}
