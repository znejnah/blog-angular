import { Service, signal } from '@angular/core';
import { Toast, TOAST_TYPES, ToastType } from './toast.type';

@Service()
export class ToastService {
  private readonly _toasts = signal<Toast[]>([]);
  readonly toasts = this._toasts.asReadonly();

  info(message: string): void {
    this.show(message, TOAST_TYPES.INFO);
  }

  success(message: string): void {
    this.show(message, TOAST_TYPES.SUCCESS);
  }

  warning(message: string): void {
    this.show(message, TOAST_TYPES.WARNING);
  }

  error(message: string): void {
    this.show(message, TOAST_TYPES.ERROR);
  }

  remove(id: string): void {
    this._toasts.update((current) => current.filter((t) => t.id !== id));
  }

  private show(message: string, type: ToastType, durationMs = 4000): void {
    const id = crypto.randomUUID();
    const newToast: Toast = { id, message, type, durationMs };

    this._toasts.update((current) => [...current, newToast]);

    setTimeout(() => this.remove(id), durationMs);
  }
}
