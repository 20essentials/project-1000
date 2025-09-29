import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'tahir_dsgn';
const userId = '';
const prefixUrl = '';
const followers = 133_832;
const followed = 402;
const profileDescription = `Premium Web & 3D Design for SaaS`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `✨ Your website isn’t just a page. It’s an experience.
A real brand leaves an aura — it doesn’t settle for templates or cookie-cutter designs.`, /*1*/
  `#appdesign #appredesign #uiuxdesign #mobileappdesign #modernappdesign #premiumui #uxstrategy #productdesign #digitalproductdesign #luxurybranding #businessgrowth #founderslife #scalingbusiness #techstartups #usabusiness #canadianbusiness #europebusiness #highenddesign #conversiondesign #wealthyentrepreneurs #investinyourbrand`, /*2*/
  `#animatedwebsitedesign #premiumwebsitedesign #luxurywebsitedesign #highendwebsitedesign #customwebsitedesign #luxurybranding #modernwebsitedesign #3dwebdesign #websitedesigner #webflowdesigner #conversiondesign #brandexperience #usabusiness #canadabusiness #europebusiness #usaentrepreneurs #ceomindset`, /*3*/
  `#europebusiness #usaentrepreneurs #ceomindset`, /*4*/
  ``, /*5*/
  ``, /*6*/
  ``, /*7*/
  ``, /*8*/
  ``, /*9*/ 
  ``, /*10*/
  ``, /*11*/
  ``, /*12*/
  ``, /*13*/
  ``, /*14*/
  ``, /*15*/
  ``, /*16*/
  ``, /*17*/
  ``, /*18*/
  ``, /*19*/
  ``, /*20*/
];

/* prettier-ignore */
const arrayDescriptionOfImages = [
  ``, /*1*/
  ``, /*2*/
  ``, /*3*/
  ``, /*4*/
  ``, /*5*/
  ``, /*6*/
  ``, /*7*/
  ``, /*8*/
  ``, /*9*/
  ``, /*10*/
  ``, /*11*/
  ``, /*12*/
  ``, /*13*/
  ``, /*14*/
  ``, /*15*/
  ``, /*16*/
  ``, /*17*/
  ``, /*18*/
  ``, /*19*/
  ``, /*20*/
]

export const tahir_dsgn_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const tahir_dsgn_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const tahir_dsgn_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const tahir_dsgn_array_of_posts = [
  ...tahir_dsgn_images,
  ...tahir_dsgn_videos
];
