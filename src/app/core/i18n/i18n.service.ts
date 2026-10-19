import { computed, Service, signal } from '@angular/core';
import { en } from '../../shared/i18n/en';
import { fr } from '../../shared/i18n/fr';
import { TranslationDict } from '../../shared/i18n/translation.type';
import { LangCode, SUPPORTED_LANGUAGES } from './config/i18n.config';

@Service()
export class I18nService {
  private readonly _currentLang = signal<LangCode>('fr');
  readonly currentLang = this._currentLang.asReadonly();

  readonly supportedLanguages = SUPPORTED_LANGUAGES;

  readonly texts = computed<TranslationDict>(() => {
    return this._currentLang() === 'fr' ? fr : en;
  });

  setLanguage(lang: LangCode): void {
    this._currentLang.set(lang);
  }
}
