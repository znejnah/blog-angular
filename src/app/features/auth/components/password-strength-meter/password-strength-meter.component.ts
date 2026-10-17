import { Component, computed, input } from '@angular/core';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { ICON_NAMES } from '../../../../shared/constants/icons.constant';
import { TranslationDict } from '../../../../shared/i18n/translation.type';
import { SCORE_COLORS } from './password-strength-meter.constant';

@Component({
  imports: [IconComponent],
  selector: 'app-password-strength-meter',
  templateUrl: './password-strength-meter.component.html',
})
export class PasswordStrengthMeterComponent {
  texts = input.required<TranslationDict>();
  password = input.required<string>();

  readonly criteria = computed(() => {
    const pwd = this.password() || '';
    const criteriaTexts = this.texts().auth.register.passwordCriteria;
    return [
      { label: criteriaTexts.minChars, met: pwd.length >= 8 },
      { label: criteriaTexts.lowercase, met: /[a-z]/.test(pwd) },
      { label: criteriaTexts.uppercase, met: /[A-Z]/.test(pwd) },
      { label: criteriaTexts.number, met: /[0-9]/.test(pwd) },
      { label: criteriaTexts.specialChar, met: /[^A-Za-z0-9]/.test(pwd) },
    ];
  });

  readonly score = computed(() => this.criteria().filter((c) => c.met).length);

  readonly barColor = computed(() => SCORE_COLORS[this.score()] ?? SCORE_COLORS[0]);

  readonly scoreBars = computed(() =>
    Array.from({ length: this.criteria().length }, (_, i) => i + 1),
  );

  readonly iconNames = ICON_NAMES;
}
