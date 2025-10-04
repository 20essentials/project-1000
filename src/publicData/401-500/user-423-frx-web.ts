import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'frx_web';
const userId = '';
const prefixUrl = '';
const followers = 38_832;
const followed = 50;
const profileDescription = `Web Design & Development`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `🚀 How to add Interactive 3D Models on your client’s website with zero code in @wixstudio #website #webdevelopment #webdeveloper #webdesign #webdesign #uiux`, /*1*/
  `Interactive Animated Website created with zero code in @wixstudio #website #webdevelopment #webdeveloper #webdesign #webdesign #uiux`, /*2*/
  `Animated Product Cards using the CMS in Wix Studio 👀 - #wixstudio #uidesign #websitedesign #uiux #dailyinspiration #webdevelopment #webdesigner @wixstudio`, /*3*/
  `#webdeveloper #webdesign #webdesign #uiux`, /*4*/
  `#website #webdevelopment #webdeveloper #webdesigner #webdesign #uiux`, /*5*/
  `#webdesign #webdesigner #uiux #uidesign #design #website`, /*6*/
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

export const frx_web_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const frx_web_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const frx_web_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const frx_web_array_of_posts = [
  ...frx_web_images,
  ...frx_web_videos
];
