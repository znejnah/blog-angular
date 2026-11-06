import { Component, input, output } from '@angular/core';
import { TranslationDict } from '../../../../core/i18n/translation.type';
import { AllowedFileFormat, FILE_FORMATS } from '../../../constants/file-formats.constant';
import { ValidationErrorPipe } from '../../../pipes/validation-error-pipe';

@Component({
  imports: [ValidationErrorPipe],
  selector: 'app-form-file',
  templateUrl: './form-file.component.html',
})
export class FormFileComponent {
  readonly field = input.required<any>();
  readonly texts = input.required<TranslationDict>();
  readonly label = input.required<string>();
  readonly accept = input<AllowedFileFormat>(FILE_FORMATS.ALL_IMAGES);
  readonly isRequired = input<boolean>(false);

  readonly fileSelected = output<File>();

  protected onFileChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files?.length) {
      this.fileSelected.emit(inputElement.files[0]);
    }
  }
}
