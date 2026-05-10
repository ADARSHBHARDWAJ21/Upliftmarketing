import { imageUrl, videoUrl } from './cloudinary.js';

/** Local → Cloudinary: create folder uplift-site/, upload each file using the
 *  public ID string (path after folder) listed here so URLs resolve. */

const FOLDER = 'uplift-site';

export const siteImages = {
  headerLogo: imageUrl(`${FOLDER}/upplifft.png`),
  heroAirplane: imageUrl(`${FOLDER}/airplane.png`),
  whyTeam: imageUrl(`${FOLDER}/IMG_1314.PNG`)
};

/** Order matches titles in ClientWork.jsx */
export const siteClientVideos = [
  videoUrl(`${FOLDER}/Anushka-Mam-Reel-1-Color-Graded.mp4`),
  videoUrl(`${FOLDER}/Edit-Swami-Vivekananda.mp4`),
  videoUrl(`${FOLDER}/Gym-Product-Edit-Khushi-C1.mp4`),
  videoUrl(`${FOLDER}/Harsh-Express-HR.mp4`),
  videoUrl(`${FOLDER}/Product-10-H1-CTA-1-0.mp4`),
  videoUrl(`${FOLDER}/Product-9-H2-CTA-2.mp4`),
  videoUrl(`${FOLDER}/Smile-Gallery-3-TIPS.mp4`),
  videoUrl(`${FOLDER}/Smile-Gallery-3rd-Oct-Final.mp4`),
  videoUrl(`${FOLDER}/Sonal-Apsara-Natraj-Pencil.mp4`),
  videoUrl(`${FOLDER}/TOT-Basic.mp4`),
  videoUrl(`${FOLDER}/AdiBytes-61-Final.mp4`)
];
