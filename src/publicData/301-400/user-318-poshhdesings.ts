import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'poshhdesings';
const userId = '';
const prefixUrl = '';
const followers = 157_887;
const followed = 50;
const profileDescription = `Diseñador que ayuda a Crear Marcas Inolvidables y Experiencias`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#identidadvisual #branding #candy #procesologo #logodesigner #logodesign #logos #usa #empresas #negociosusa #snack #chifle`, /*1*/
  `#identidadvisual #branding #logotipo #procesologo #logodesigner #logodesign #logos #usa #logo #negocio #empresas #negociosusa #burger #restaurante #hamburgueseria`, /*2*/
  `#logo #logotipo #diseñodelogo #logomarca #logonegocios #logoempresas #negociosusa #zapatos #calzados #URBANAS #diseñadores #branding #creativo #logodesign #logodezapatos #marcasemprendedoras`, /*3*/
  `
#identidadvisual #branding #logotipo #procesologo #logodesigner #logodesign #logos #diseñografico #logo #negocio #empresa #elotes #usa #negociosusa #paletasmexicanas`, /*4*/
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

export const poshhdesings_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const poshhdesings_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const poshhdesings_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const poshhdesings_array_of_posts = [
  ...poshhdesings_images,
  ...poshhdesings_videos
];
