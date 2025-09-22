import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'pabloespinozamkt';
const userId = 'e4e4efd7-c0a2-4afa-8040-4cb0954df4c2';
const prefixUrl = 'https://dominicnikolai.github.io/project-339/assets/pabloesp1nozamkt/';
const followers = 328_866;
const followed = 50;
const profileDescription = `Ayudo a Negocios físicos a aumentar sus ventas`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Sabías que Ya más de 85.000 negocios en todo el mundo ocupan herramientas de fidelización?`, /*1*/
  `Aumentas tu visibilidad, confianza y por ende las ventas📈🔝`, /*2*/
  `Más puntos de contacto = más ventas`, /*3*/
  `Los clubs de fidelización están cada vez más de moda por la aceptación de sus clientes`, /*4*/
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

export const pabloespinozamkt_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const pabloespinozamkt_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const pabloespinozamkt_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const pabloespinozamkt_array_of_posts = [
  ...pabloespinozamkt_images,
  ...pabloespinozamkt_videos
];
