import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'uxui_howardle';
const userId = '';
const prefixUrl = '';
const followers = 492_324;
const followed = 263;
const profileDescription = `Game UI ✦ Web UI ✦ UxUi Designer`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#uxui #uiux #uitrends #uidesign #ui #uiuxdesign #framer #webdesign #webdesigner #instadesign #instagramdesign #howardle`, /*1*/
  `🤔 How to made Genshin Flower in Figma?

#uxui #uidesign #ui #figma`, /*2*/
  `🥕 How to Create a Fire Aura like Genshin ❤️ #uxui #uidesign #ui #figma`, /*3*/
  `🤧 I love to learn how to design like Genshin UI #uxui #uidesign #ui #figma`, /*4*/
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

export const uxui_howardle_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const uxui_howardle_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const uxui_howardle_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const uxui_howardle_array_of_posts = [
  ...uxui_howardle_images,
  ...uxui_howardle_videos
];
