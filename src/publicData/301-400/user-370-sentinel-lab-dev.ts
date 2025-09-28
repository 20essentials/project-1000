import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'sentinel_lab_dev';
const userId = '';
const prefixUrl = '';
const followers = 478_720;
const followed = 32;
const profileDescription = `Code and ...`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 3;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `No se aceptan críticas 🥸🤫 Mentira, que les está pareciendo el proyecto #programador #web #sitiosweb #dev #emprendimiento #fyp #paginasweb #diseño #diseñomecánico #blender #render #emprendedores #emprendedor #threejs`, /*1*/
  `Ya conocías este formato? Díganme si les gustaría q hable de las islas dinámicas #programador #web #sitiosweb #dev #fyp #ui #ux #paginasweb #code #programming #`, /*2*/
  `Todo por esa RAViosa, seguiré trayendo más y mejor contenido 🫡 #fyp #paginasweb #sitiosweb #web #ui #ux #programador #emprendedor #emprendedores #reto #emprendimiento #rav4 #framework #google #script #excel #automatizacion`, /*3*/
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

export const sentinel_lab_dev_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const sentinel_lab_dev_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const sentinel_lab_dev_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const sentinel_lab_dev_array_of_posts = [
  ...sentinel_lab_dev_images,
  ...sentinel_lab_dev_videos
];
