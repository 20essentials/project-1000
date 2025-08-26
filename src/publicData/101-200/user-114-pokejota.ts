import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'pokejota';
const userId = '';
const prefixUrl = '';
const followers = 100_000;
const followed = 50;
const profileDescription = 'Hello';
const prefixLetterVideos = 'v';
const quantityOfVideos = 0;
const prefixLetterImages = 'p';
const quantityOfImages = 5;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
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
];

/* prettier-ignore */
const arrayDescriptionOfImages = [
  `Es un factor 😂 #pokemon #pokemoncommunity

`, /*1*/
  `Si soy 🤣 #pokemon #pokemoncommunity`, /*2*/
  `Que acabe ya esta pesadilla ☠️ #pokemon #pokemoncommunity

`, /*3*/
  `Mucho mejor plan 🤩 #pokemon #pokemoncommunity

`, /*4*/
  `Y no admito discusión #pokemon #pokemoncommunity #reels #reelsinstagram

`, /*5*/
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

export const pokejota_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const pokejota_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const pokejota_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
  arrayDescriptionOfImages
});

export const pokejota_array_of_posts = [
  ...pokejota_images,
  ...pokejota_videos
];
