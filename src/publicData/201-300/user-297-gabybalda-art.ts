import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'gabybalda_art';
const userId = '4be3bc57-bc4f-4618-bbc3-d4b7c520814a';
const prefixUrl = 'https://dominicnikolai.github.io/project-336/assets/gabybalda-art/';
const followers = 486_898;
const followed = 531;
const profileDescription = `I love painting 👩🏻‍🎨`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#arteenguayaquil #claudemonetgardens #claudemonetart #puentejapones`, /*1*/
  `Comparto un poco del proceso🖌️ Elefante pop art geométrico. 🎉Pronto iniciamos el Taller online vía zoom de Dibujo y Pintura 🖌️🎨. 😀Donde enseñaré a pintar animales pop art, desde cero, iniciando con el boceto, la mezcla de colores, combinaciones y pintura. 🎨 Cada clase dura 2 horas. El precio de este taller, 4 clases en total es $20 dólares. Horario: Martes y viernes 16h00 hora Ecuador. Las clases también quedarán grabadas y puedes repetirlas cuando desees. #arteenguayaquil #popartstyle

`, /*2*/
  `#acrylicpaintingsoncanvas #lionartwork #popartstyle #arteenguayaquil`, /*3*/
  `#acrylicpaintingsoncanvas #tigerpainting #arteenguayaquil`, /*4*/
  `#arteenguayaquil #petportrait #retratosmascotas`, /*5*/
  `#acrylicpaintingart #arteenguayaquil #lionpainting #acrylart`, /*6*/
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

export const gabybalda_art_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const gabybalda_art_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const gabybalda_art_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const gabybalda_art_array_of_posts = [
  ...gabybalda_art_images,
  ...gabybalda_art_videos
];
