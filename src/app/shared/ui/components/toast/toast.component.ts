import { Component, inject } from '@angular/core';
import { ToastService } from '../../../../core/toast/toast.service';
import { IconComponent } from '../icon/icon.component';
import { ICON_NAMES } from '../icon/icons.constant';

@Component({
  imports: [IconComponent],
  selector: 'app-toast',
  templateUrl: './toast.component.html',
})
export class ToastComponent {
  protected readonly toastService = inject(ToastService);
  protected readonly closeIcon = ICON_NAMES.CROSS;
}
