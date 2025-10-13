import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'rafas55';
const userId = 'af9e97f9-67cd-4502-8c6b-0da9d47dd7b7';
const prefixUrl = 'https://dominicnikolai.github.io/project-360/assets/rafas55/';
const followers = 193_832;
const followed = 50;
const profileDescription = `:O`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 1;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `https://20essentials.github.io/project-000-940/assets/j10.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `🕷️ 🕸️ 🕸️`, /*1*/
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

export const rafas55_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const rafas55_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const rafas55_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const rafas55_array_of_posts = [
  ...rafas55_images,
  ...rafas55_videos
];
