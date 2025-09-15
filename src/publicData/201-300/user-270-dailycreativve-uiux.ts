import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'dailycreativve_uiux';
const userId = '';
const prefixUrl = '';
const followers = 79_432;
const followed = 422;
const profileDescription = `UI Design`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Hey Creative! Today, I'm going to show you how to create an awesome text marquee for your website.`, /*1*/
  `#figma #figmadesign #designguide #dailyinspiration #uiux #ui #ux #learndesign #uxuitips #designtips #animation #figmaanimation #prototypes #spotlight #slider #figmatutotial #tutorial @figma #dailyui #dailyux #learndesigning #designchallenge #designgraphic #graphicdesign #motiongraphics #dailyuichallenge #uiuxdesign`, /*2*/
  `#client #pain
#ui #ux #dailyui #dailyux #designchallenge #uiuxdesign #uidesign #uxdesign #designinspiration #webdesign #animations #webdesigning #graphic #graphicdesign #graphicdesigner #designermemes #designmemes #design`, /*3*/
  `#meme #memes #relatable #fypシ #fun #funny #designer #client #pain
#ui #ux #dailyui #dailyux #designchallenge #uiuxdesign #uidesign #uxdesign #designinspiration #webdesign #animations #webdesigning #graphic #graphicdesign #graphicdesigner #designermemes #designmemes #design`, /*4*/
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

export const dailycreativve_uiux_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const dailycreativve_uiux_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const dailycreativve_uiux_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const dailycreativve_uiux_array_of_posts = [
  ...dailycreativve_uiux_images,
  ...dailycreativve_uiux_videos
];
