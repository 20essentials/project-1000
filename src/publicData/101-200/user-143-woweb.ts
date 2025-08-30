import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'wowweb_store';
const userId = '';
const prefixUrl = '';
const followers = 37_720;
const followed = 32;
const profileDescription = 'Wowweb Group';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Así puedes tener una tienda de ropa online profesional sin saber programación. 😎🚀 #marcaderopa #tiendaonline #streetwear`, /*1*/
  `Aprende a crear campañas virales para disparar las ventas de tu marca. #streetwear #emprendimiento`, /*2*/
  `Crear una estrategia inspirándote en algo que ya funciona puede reducir el tiempo con el que tu marca llega al éxito. #brand`, /*3*/
  ` ventas!! 🚀`, /*4*/
  `No empieces a hacer ropa hasta que sepas eso… #marcaderopa #marketing`, /*5*/
  `Atento porque esto podría cambiar el destino de tu marca de ropa. #marca #marcaderopa #streetwear`, /*6*/
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

export const woweb_store_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const woweb_store_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const woweb_store_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const woweb_store_array_of_posts = [
  ...woweb_store_images,
  ...woweb_store_videos
];
