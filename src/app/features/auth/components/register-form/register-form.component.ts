import { Component, input, output, signal } from '@angular/core';
import { form, minLength, pattern, required, validate } from '@angular/forms/signals';
import { RegisterRequestDto } from '../../../../core/auth/dto/requests/register-request.dto';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { FormInputComponent } from '../../../../shared/components/form-input/form-input.component';
import { REGEX_PATTERNS } from '../../../../shared/constants/regex.constant';
import { VALIDATION_ERRORS } from '../../../../shared/constants/validation-errors.constant';
import { VALIDATION_RULES } from '../../../../shared/constants/validation-rules.constant';
import { TranslationDict } from '../../../../shared/i18n/translation.type';
import { PasswordStrengthMeterComponent } from '../password-strength-meter/password-strength-meter.component';

type RegisterFormModel = RegisterRequestDto & {
  confirmPassword: string;
};

@Component({
  imports: [CardComponent, FormInputComponent, ButtonComponent, PasswordStrengthMeterComponent],
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent {
  texts = input.required<TranslationDict>();
  isLoading = input<boolean>(false);
  apiError = input<string | null>(null);

  submitRegister = output<RegisterRequestDto>();

  // CHANGE SIGNAL TYPE TO RegisterRequestDto IF/WHEN CLIENT CHANGE HIS MIND ABOUT CONFIRM PASSWORD
  // AND GET RID OF confirmPassword ATTR
  readonly registerModel = signal<RegisterFormModel>({
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    confirmPassword: '',
  });

  readonly registerForm = form(this.registerModel, (schemaPath) => {
    required(schemaPath.email);
    pattern(schemaPath.email, REGEX_PATTERNS.EMAIL);

    required(schemaPath.firstname);
    minLength(schemaPath.firstname, VALIDATION_RULES.NAME_MIN_LENGTH);

    required(schemaPath.lastname);
    minLength(schemaPath.lastname, VALIDATION_RULES.NAME_MIN_LENGTH);

    required(schemaPath.password);
    pattern(schemaPath.password, REGEX_PATTERNS.STRONG_PASSWORD);

    // COMMENT THIS BLOC IF/WHEN CLIENT CHANGE HIS MIND ABOUT CONFIRM PASSWORD
    validate(schemaPath.confirmPassword, (ctx) => {
      const confirmPwd = ctx.value;
      return confirmPwd() === this.registerModel().password
        ? null
        : { kind: VALIDATION_ERRORS.PASSWORD_MISMATCH };
    });
    // END OF BLOC
  });

  onSubmit(): void {
    if (this.registerForm().invalid()) return;

    this.submitRegister.emit(this.registerModel());
  }
}
