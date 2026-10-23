export const ICON_NAMES = {
  EYE: 'eye',
  EYE_OFF: 'eye-off',
  SPINNER: 'spinner',
  CHECK: 'check',
  CROSS: 'cross',
  LOGOUT: 'logout',
  HOME: 'home',
  DASHBOARD: 'dashboard',
};

export type IconName = (typeof ICON_NAMES)[keyof typeof ICON_NAMES];
