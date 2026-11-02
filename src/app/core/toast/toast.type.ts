export const TOAST_TYPES = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  INFO: 'info',
};

export type ToastType = (typeof TOAST_TYPES)[keyof typeof TOAST_TYPES];

export type Toast = {
  id: string;
  message: string;
  type: ToastType;
  durationMs: number;
};
