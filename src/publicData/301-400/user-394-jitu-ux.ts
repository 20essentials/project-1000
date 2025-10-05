import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'jitu_ux';
const userId = '0dc329de-cef0-40d0-9523-6036b6cf21a9';
const prefixUrl = 'https://dominicnikolai.github.io/project-349/assets/jitu-ux/';
const followers = 29_832;
const followed = 50;
const profileDescription = `+10 Yr experience`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#uiux #productdesign #framer #animation #reels #config2024 #motiondesign #component #webdesign #figma`, /*1*/
  `#uiux #framer #figma #webdesign #nocode #landingpage #website #trend #design #3Ddesign #apps #AI #fintech #creditcard #moneyweb`, /*2*/
  `#figma #framer #webdesign #uiux #landingpage #productdesign #website #nocode #ai #loveable #trend #reel #insta`, /*3*/
  `
#Uiux #figma #design #uidesign #ui #ux #tricks #uxdesign #framer #framerlife #website #webdesignagency
`, /*4*/
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

export const jitu_ux_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const jitu_ux_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const jitu_ux_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const jitu_ux_array_of_posts = [
  ...jitu_ux_images,
  ...jitu_ux_videos
];
