import { ButtonVariant } from '../../types/button.type';

export const ICON_BUTTON_BASE_CLASS =
  'flex items-center justify-center p-2 rounded-full transition-colors focus:outline-none focus:ring-2 disabled:opacity-50 cursor-pointer';

export const ICON_BUTTON_VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-200',
  secondary: 'text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:ring-gray-200',
  danger: 'text-red-600 hover:bg-red-50 focus:ring-red-200',
};
