import { imageUrl, videoUrl } from './cloudinary.js'

/** Public IDs at Cloudinary root (upload via scripts/upload-portfolio-assets.mjs + manual uploads). */

export const portfolioItems = [
  {
    id: 1,
    category: 'Graphic Design',
    type: 'image',
    title: 'Ragini Emotional Campaign',
    media: imageUrl('ragini1')
  },
  {
    id: 2,
    category: 'Graphic Design',
    type: 'image',
    title: 'Ragini Home Energy',
    media: imageUrl('ragini2')
  },
  {
    id: 3,
    category: 'Graphic Design',
    type: 'image',
    title: 'Ragini Knee Pain Solution',
    media: imageUrl('ragini3')
  },
  {
    id: 4,
    category: 'Graphic Design',
    type: 'image',
    title: 'Ragini Vastu',
    media: imageUrl('ragini4')
  },
  {
    id: 5,
    category: 'Logo',
    type: 'image',
    title: 'AFS Logo Design',
    media: imageUrl('afslogo')
  },
  {
    id: 6,
    category: 'Video Editing',
    type: 'video',
    title: 'Client Advertisement',
    media: videoUrl('clientvideo1')
  },
  {
    id: 7,
    category: 'Video Editing',
    type: 'video',
    title: 'Restaurant Promotion',
    media: videoUrl('clientvideo2')
  },
  {
    id: 8,
    category: 'Web Development',
    type: 'image',
    title: 'BELISA Website',
    media: imageUrl('belisa')
  },
  {
    id: 9,
    category: 'Web Development',
    type: 'image',
    title: 'Vajra Website',
    media: imageUrl('vajra')
  },
  {
    id: 10,
    category: 'Web Development',
    type: 'image',
    title: 'SKR Group Website',
    media: imageUrl('skr')
  }
]
