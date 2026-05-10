import { imageUrl, videoUrl } from './cloudinary.js';

/** Local → Cloudinary: create folder uplift-site/, upload each file using the
 *  public ID string (path after folder) listed here so URLs resolve. */

const FOLDER = 'uplift-site';

/** Navbar logo public ID in Cloudinary (must match Media Library id, not alt text). */
const HEADER_LOGO_PUBLIC_ID =
  import.meta.env.VITE_CLOUDINARY_HEADER_LOGO || 'upplifft_a09dza';

export const siteImages = {
  headerLogo: imageUrl(HEADER_LOGO_PUBLIC_ID),
  heroAirplane: imageUrl('airplane_ilalls.png'),
  whyTeam: imageUrl(`${FOLDER}/IMG_1314.PNG`)
};

/** Client Work section — only clips verified on Cloudinary */
export const clientShowcaseVideos = [
  {
    title: 'BOLLYWOOD OBSESSION WITH NUMEROLOGY NUMBERS',
    src: videoUrl('Product_9_H2_CTA_2_rh4d6v.mp4')
  },
  {
    title: 'BUSINESS GROWTH TRICKS WITH NUMEROLOGY PART 1',
    src: videoUrl('Smile_Gallery_3_TIPS_e8sewv.mp4')
  },
  {
    title: 'VIDEO EDITING SHOWCASE',
    src: videoUrl('AdiBytes_61_Final_qzce42.mp4')
  }
];
