import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'met_one';
const userId = '2f8b1954-b69f-4f24-91d9-25218177e4df';
const prefixUrl = 'https://dominicnikolai.github.io/project-340/assets/met-one/';
const followers = 198_898;
const followed = 50;
const profileDescription = `producción de música y divulgación estúpida`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 2;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `la historia detrás del mejor GIF del mundo
FOR UNEMPLOYED PEOPLE ONLY`, /*1*/
  `#soundtrack #sega #techno #house #breakbeat #curiosidades #nintendo #jungle #videogames #mario #produccionmusical #ableton #flstudio #logicpro #tutorial #español #plugin #vst #roland #musica #ost #sonic #videojuegos #juegos #españa #argentina #productormusical #tips #gratis #musicaelectronica`, /*2*/
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

export const met_one_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const met_one_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const met_one_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const met_one_array_of_posts = [
  ...met_one_images,
  ...met_one_videos
];
