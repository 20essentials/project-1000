import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'zona_escala_64';
const userId = '6d4a9d55-86a8-489f-8456-cef296297c6c';
const prefixUrl = 'https://dominicnikolai.github.io/project-292/assets/zona-escala-64/';
const followers = 728_823;
const followed = 50;
const profileDescription = '✨️Coleccionista de Autos a Escala✨️';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `El sueño de todo coleccionista 😁 #hotwheels #zonaescala64 #diecast`, /*1*/
  `Autos a escala 1/24 🧐✨️`, /*2*/
  `A nada 😄 #hotwheels #zonaescala64 #autosaescala64`, /*3*/
  `Encontrando algo de Hot Wheels por las tiendas #hotwheels #zonaescala64 #chase`, /*4*/
  `Encontrado CHASE HW #hotwheels #chase`, /*5*/
  `Encontré este hermoso clásico / Chevrolet Camaro Z28 #chevrolet #camaroz28`, /*6*/
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

export const zona_escala_64_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const zona_escala_64_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const zona_escala_64_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const zona_escala_64_array_of_posts = [
  ...zona_escala_64_images,
  ...zona_escala_64_videos
];
