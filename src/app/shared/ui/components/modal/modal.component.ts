import { Component, input, output } from '@angular/core';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { ICON_NAMES } from '../icon/icons.constant';

@Component({
  imports: [IconButtonComponent],
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  readonly title = input<string>('');

  protected readonly iconNames = ICON_NAMES;

  readonly close = output<void>();

  protected onClose(): void {
    this.close.emit();
  }
}
