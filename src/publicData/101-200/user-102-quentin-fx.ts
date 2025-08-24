import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'quentin_fx';
const userId = '32c91e95-5b90-4553-8edf-58ec6bfb7395';
const prefixUrl = 'https://dominicnikolai.github.io/project-287/assets/qu3ntin-fx/';
const followers = 172_720;
const followed = 342;
const profileDescription = '✍🏻 The White gloves editor';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Cat edit 😼 #cats_of_instagram #editing #caredit #lmao #humour`, /*1*/
  `Smooth cat edit 😼 #cats #catlover #catedit #smooth #loop #virals #editing`, /*2*/
  `Prædarius in the smoke 😶‍🌫️ #conceptcars #praedarius #caredit #editing #supercar #v8biturbo`, /*3*/
  `Chicken edit 🐓 part 4 😂 #chicken #editing #aftereffects #poulets #lmao #drole #animal`, /*4*/
  `Bayerische Motoren Werke 🎥 #bmw #m2 #monaco #caredit #editing #trend`, /*5*/
  `Chicken edit 🗣️🐓 #kfc #editing #lmao #trend #humour #chicken`, /*6*/
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

export const quentin_fx_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const quentin_fx_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const quentin_fx_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const quentin_fx_array_of_posts = [
  ...quentin_fx_images,
  ...quentin_fx_videos
];
