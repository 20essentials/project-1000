import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'tomasgtc';
const userId = '';
const prefixUrl = '';
const followers = 2_324;
const followed = 50;
const profileDescription = `Marketing + Emprendimiento `;
const prefixLetterVideos = 'v';
const quantityOfVideos = 5;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Tarjetas`, /*1*/
  `Esto es el reflejo de cualquier negocio
`, /*2*/
  `Estoy seguro que si vendes servicios uno de tus mayores problemas es conseguir clientes, esta es la mejor estrategia de marketing que puedes hacer y es gratis
`, /*3*/
  `Asi es como consigo clientes
`, /*4*/
  `Como hemos hecho facturar 30.000 € en un mes a una empresa
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

export const tomasgtc_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const tomasgtc_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const tomasgtc_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const tomasgtc_array_of_posts = [
  ...tomasgtc_images,
  ...tomasgtc_videos
];
