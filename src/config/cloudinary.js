const cloudName =
  import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'dzvjt7ecs';

export const cloudinaryBase =
  `https://res.cloudinary.com/${cloudName}`;

export const imageOptimization =
  'q_auto,f_auto';

export const videoOptimization =
  'q_auto,f_auto';

export function imageUrl (publicId) {
  return `${cloudinaryBase}/image/upload/${imageOptimization}/${publicId}`;
}

export function videoUrl (publicId) {
  return `${cloudinaryBase}/video/upload/${videoOptimization}/${publicId}`;
}

/* IMAGE URL EXAMPLE */
export const sampleImage =
  imageUrl('sample.png');

/* VIDEO URL EXAMPLE */
export const sampleVideo =
  videoUrl('sample.mp4');