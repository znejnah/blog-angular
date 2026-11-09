export const FILE_FORMATS = {
  ALL_IMAGES: 'image/*',
  STRICT_IMAGES: 'image/jpeg, image/png, image/webp',
};

export type AllowedFileFormat = (typeof FILE_FORMATS)[keyof typeof FILE_FORMATS];
