import { Component, computed, input } from '@angular/core';
import { TranslationDict } from '../../../../core/i18n/translation.type';
import { REGEX_PATTERNS } from '../../../../shared/constants/regex.constant';
import { VALIDATION_RULES } from '../../../../shared/constants/validation-rules.constant';
import { IconComponent } from '../../../../shared/ui/components/icon/icon.component';
import { ICON_NAMES } from '../../../../shared/ui/components/icon/icons.constant';
import { SCORE_COLORS } from './password-strength-meter.constant';

@Component({
  imports: [IconComponent],
  selector: 'app-password-strength-meter',
  templateUrl: './password-strength-meter.component.html',
})
export class PasswordStrengthMeterComponent {
  readonly texts = input.required<TranslationDict>();
  readonly password = input.required<string>();

  protected readonly criteria = computed(() => {
    const pwd = this.password();
    const criteriaTexts = this.texts().auth.register.passwordCriteria;
    return [
      {
        label: criteriaTexts.minChars,
        met: pwd.length >= VALIDATION_RULES.AUTH.PASSWORD_MIN_LENGTH,
      },
      { label: criteriaTexts.lowercase, met: REGEX_PATTERNS.LOWERCASE.test(pwd) },
      { label: criteriaTexts.uppercase, met: REGEX_PATTERNS.UPPERCASE.test(pwd) },
      { label: criteriaTexts.number, met: REGEX_PATTERNS.DIGIT.test(pwd) },
      { label: criteriaTexts.specialChar, met: REGEX_PATTERNS.SPECIAL_CHARACTER.test(pwd) },
    ];
  });

  protected readonly score = computed(() => this.criteria().filter((c) => c.met).length);

  protected readonly barColor = computed(() => SCORE_COLORS[this.score()] ?? SCORE_COLORS[0]);

  protected readonly scoreBars = computed(() =>
    Array.from({ length: this.criteria().length }, (_, i) => ++i),
  );

  protected readonly iconNames = ICON_NAMES;
}
