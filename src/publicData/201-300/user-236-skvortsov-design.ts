import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'skvortsov_design';
const userId = '';
const prefixUrl = '';
const followers = 50_600;
const followed = 50;
const profileDescription = `Senior UI/UX designer`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Hey everyone! It’s been a while since I posted anything, so I think it’s time to fix that😎 This is a concept for a website for an AI company. #design #behance #dribbble #creativity #ui #ux #uiux #web #minimal #inspiration #interactive #interface #motiondesign #motion #layout #c4d #redshift`, /*1*/
  `Hey everyone! While we see a lot of posts about how AI will take all our jobs, I want to share with you my new website concept! Sound on🎧 #design #behance #dribbble #creativity #ui #ux #uiux #web #minimal #inspiration #interactive #interface #motiondesign #motion #layout #c4d #redshift`, /*2*/
  `#design #web #webdesign #website #behance #dribbble #creativity #creative #ui #ux #uiux #mobile #minimal #minimalism #inspiration #interactive #interface #motiondesign #motion #layout #app #redshift #c4d #cinema4d`, /*3*/
  `#design #web #webdesign #website #behance #dribbble #creativity #creative #ui #ux #uiuxdesign #minimal #minimalism #inspiration #interactive #interface #motiondesign #motion #layout #redshift #c4d #cinema4d #memes #humor`, /*4*/
  `#design #web #webdesign #website #behance #dribbble #creativity #creative #ui #ux #uiux #mobile #minimal #minimalism #inspiration #interactive #interface #motiondesign #motion #layout #app #redshift #c4d #cinema4d`, /*5*/
  `#design #web #webdesign #website #behance #dribbble #creativity #creative #ui #ux #uiux #mobile #minimal #minimalism #inspiration #interactive #interface #motiondesign #motion #layout #app #redshift #c4d #cinema4d`, /*6*/
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

export const skvortsov_design_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const skvortsov_design_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const skvortsov_design_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const skvortsov_design_array_of_posts = [
  ...skvortsov_design_images,
  ...skvortsov_design_videos
];
