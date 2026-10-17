import { Pipe, PipeTransform } from '@angular/core';
import { ValidationError } from '@angular/forms/signals';
import { TranslationDict } from '../i18n/translation.type';

@Pipe({
  name: 'validationError',
})
export class ValidationErrorPipe implements PipeTransform {
  transform(error: ValidationError, texts: TranslationDict): string {
    console.log(error.kind);
    if (!error?.kind) return '';

    const { messages, templates } = texts.validation;

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
}
