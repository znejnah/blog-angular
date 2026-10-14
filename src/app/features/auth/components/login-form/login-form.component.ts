import { Component, input, output, signal } from '@angular/core';
import {
  debounce,
  email,
  form,
  FormField,
  minLength,
  required,
  ValidationError,
} from '@angular/forms/signals';

import { LoginRequestDto } from '../../../../core/auth/dto/requests/login-request.dto';
import { TranslationDict } from '../../../../shared/i18n/translation.type';

@Component({
  imports: [FormField],
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
    email(schemaPath.email);

    required(schemaPath.password);
    minLength(schemaPath.password, 8);
  });

  getErrMsg(error: ValidationError): string {
    if (!error?.kind) return '';

    const { messages, templates } = this.texts().validation;

    if (error.kind in messages) {
      return messages[error.kind as keyof typeof messages];
    }

    if (error.kind in templates) {
      const templateFunction = templates[error.kind as keyof typeof templates];
      const errObj = error as Record<string, any>;
      const paramVal: number = errObj[error.kind];

      return templateFunction(paramVal);
    }

    return error.kind;
  }

  onSubmit(): void {
    if (this.loginForm().invalid()) return;

    this.submitLogin.emit(this.loginModel());
  }
}
