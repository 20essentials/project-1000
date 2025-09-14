import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'sinapse';
const userId = '';
const prefixUrl = '';
const followers = 91_720;
const followed = 50;
const profileDescription = `Orgulho em ser professor`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `A geometria fractal! 🔥🌠🚀 . . . #ciencia #matematica #universo #conhecimento #curiosidades #ciencia`, /*1*/
  `Origami`, /*2*/
  `#matematica #ciencia #universo #fisica #curiosidades #conhecimento`, /*3*/
  `Polítopos são objetos geométricos generalizados que abrangem formas com mais de três dimensões. Eles são uma extensão dos conceitos de poliedros e poligonais para dimensões superiores, sendo estudados na matemática, especialmente na topologia e na geometria combinatória. Um politopo pode ser definido como uma figura limitada por faces, que podem ser simplices, polígonos ou outras formas dependendo da dimensão. No contexto mais amplo, os politopos ajudam a entender as estruturas e as simetrias em espaços de dimensões superiores.`, /*4*/
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

export const sinapse_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const sinapse_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const sinapse_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const sinapse_array_of_posts = [
  ...sinapse_images,
  ...sinapse_videos
];
