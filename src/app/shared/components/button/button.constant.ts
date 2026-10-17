import { ButtonVariant } from './button.type';

export const BUTTON_BASE_CLASS =
  'w-full flex justify-center items-center py-2 px-4 rounded-md transition-colors...';

export const BUTTON_VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
  secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
} as const;
