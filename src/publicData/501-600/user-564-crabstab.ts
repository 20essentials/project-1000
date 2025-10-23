import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'crabstab';
const userId = '';
const prefixUrl = '';
const followers = 118_832;
const followed = 99;
const profileDescription = `Art Direction & Illustration`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `¿Hay miniaturas bonitas en Youtube? 🤔`, /*1*/
  `Hoy vemos muchas de las referencias a Akira en cine, series y videojuegos 💊`, /*2*/
  `Parte 2 de ¿Hay miniaturas bonitas en Youtube? 🧐`, /*3*/
  `Así es como un pisapapeles dió lugar a la portada más icónica de la historia`, /*4*/
  `Esta semana vídeo corto pero con inglés de Harvard y lleno de 🔥REFERENCIAS🔥`, /*5*/
  `Aquí concluye mi arco hater 😤`, /*6*/
  `Opinión verdadera e inamovible 😎🖼`, /*7*/
  `Este es el origen de los icónicos cuadros de Minecraft`, /*8*/
  `¿Conocías el origen de los anuncios animados de Red Bull? 🤓☝️`, /*9*/ 
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

export const crabstab_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const crabstab_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const crabstab_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const crabstab_array_of_posts = [
  ...crabstab_images,
  ...crabstab_videos
];
