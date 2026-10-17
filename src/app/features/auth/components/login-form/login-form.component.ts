import { Component, input, output, signal } from '@angular/core';
import { debounce, form, minLength, pattern, required } from '@angular/forms/signals';
import { LoginRequestDto } from '../../../../core/auth/dto/requests/login-request.dto';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { FormInputComponent } from '../../../../shared/components/form-input/form-input.component';
import { TranslationDict } from '../../../../shared/i18n/translation.type';

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
    debounce(schemaPath.email, 500);
    required(schemaPath.email);
    pattern(schemaPath.email, /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

    required(schemaPath.password);
    minLength(schemaPath.password, 8);
  });

  onSubmit(): void {
    if (this.loginForm().invalid()) return;
    this.submitLogin.emit(this.loginModel());
  }
}
