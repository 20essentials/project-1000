import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'elrinconhawaiano';
const userId = '';
const prefixUrl = '';
const followers = 60_720;
const followed = 102;
const profileDescription = '📹 El rincón donde los 90s nunca se fueron';
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `POKEMON ORO! CUÁNTO DESEABA VOLVER A TENERLO! #juguetescoleccionables #rastro #tianguis #juguetesolvidados #chachareando #retro #vintage #90s #consolas #ps3 #ps2 #nintendo #streetsharks #spacejam #dragonball #disney #pokemon`, /*1*/
  `NO SE PUEDE DEJAR ESA CÁMARA A ESE PRECIO! #juguetescoleccionables #rastro #tianguis #juguetesolvidados #chachareando #retro #vintage #90s #consolas #ps3 #ps2 #nintendo #toystory #olympus #et #disney`, /*2*/
  `ESE TAZ! SE VIENE CONMIGO! ME ENCANTA! PT.2 #juguetescoleccionables #rastro #tianguis #juguetesolvidados #chachareando #retro #vintage #90s #consolas #ps3 #ps2 #nintendo #streetsharks #spacejam #dragonball #disney`, /*3*/
  `DÍA DE RELIQUIAS! VOLVEMOS A BESCANÒ! PT.1 #juguetescoleccionables #rastro #tianguis #juguetesolvidados #chachareando #retro #vintage #90s #consolas #ps3 #ps2 #nintendo #streetsharks #spacejam #dragonball #disney`, /*4*/
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

export const elrinconhawaiano_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const elrinconhawaiano_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const elrinconhawaiano_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const elrinconhawaiano_array_of_posts = [
  ...elrinconhawaiano_images,
  ...elrinconhawaiano_videos
];
