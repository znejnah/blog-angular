import { computed, Service, signal } from '@angular/core';
import { LangCode, SUPPORTED_LANGUAGES } from './config/i18n.config';
import { en } from './dictionaries/en';
import { fr } from './dictionaries/fr';
import { TranslationDict } from './translation.type';

@Service()
export class I18nService {
  private readonly _currentLang = signal<LangCode>('fr');
  protected readonly currentLang = this._currentLang.asReadonly();

  protected readonly supportedLanguages = SUPPORTED_LANGUAGES;

  readonly texts = computed<TranslationDict>(() => {
    return this._currentLang() === 'fr' ? fr : en;
  });

  protected setLanguage(lang: LangCode): void {
    this._currentLang.set(lang);
  }
}
