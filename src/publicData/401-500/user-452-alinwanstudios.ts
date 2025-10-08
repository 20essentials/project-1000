import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'alinwanstudios';
const userId = '';
const prefixUrl = '';
const followers = 154_832;
const followed = 50;
const profileDescription = `☄️we transform your vision into unlimited reality☄️`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#blender3D #3dmodeling #cgi #3D #blendertutorial`, /*1*/
  `#blender3D #VFX #cgi #3D #3Dtutorial #blendertutorial`, /*2*/
  `Si trabajas como diseñador industrial, tené en cuenta esto que pasa con Blender y su geometría para modelar como un verdadero profesional. para más tips y noticias: ingresa al grupo t.me/alinwancomunidad GRATIS. 🔥🔥👌 Suscribite ya! es gratis! Youtube.com/Alinwanstudios`, /*3*/
  `#blender3D #VFX #cgi #3D #efectosespeciales #blendertutorial`, /*4*/
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

export const alinwanstudios_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const alinwanstudios_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const alinwanstudios_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const alinwanstudios_array_of_posts = [
  ...alinwanstudios_images,
  ...alinwanstudios_videos
];
