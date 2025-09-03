import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'hamitocano';
const userId = '5acdc7dd-bfa5-4478-b00c-9d5e312434c1';
const prefixUrl = 'https://dominicnikolai.github.io/project-305/assets/hamitocano/';
const followers = 822_720;
const followed = 50;
const profileDescription = 'Comparto escenas de películas.';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `No hay otro como yo en todo el mundo. Soy uno en un trillón.`, /*1*/
  `Lo Único que importa es lo que crees de ti`, /*2*/
  `Por una vez: quiero sentirme como un GANADOR… `, /*3*/
  `Tal vez una vida, sea suficiente`, /*4*/
  `Cuando sabré que estoy listo? No lo sabrás, es un salto de Fé`, /*5*/
  `La última casilla se llena, cuando uno está listo para vivir`, /*6*/
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

export const hamitocano_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const hamitocano_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const hamitocano_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const hamitocano_array_of_posts = [
  ...hamitocano_images,
  ...hamitocano_videos
];
