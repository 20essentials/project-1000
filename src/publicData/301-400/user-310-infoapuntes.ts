import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'infoapuntes';
const userId = '';
const prefixUrl = '';
const followers = 109_987;
const followed = 112;
const profileDescription = `Informática y IT explicado de forma sencilla`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Reducir poligonos para ganar performance`, /*1*/
  `¿Cómo una sola herramienta de línea de comandos impulsa YouTube, TikTok, CapCut y el rover de Marte de la NASA? ¿Es FFmpeg la mejor herramienta de código abierto de todos los tiempos? #petergriffin #software #desarrolloweb #javascript #humordeprogramadores #programación #ia #fullstack #backend`, /*2*/
  `¿Qué es el código abierto? 💻🔓`, /*3*/
  `Cómo funciona CTRL Z? 🤔↪️ #informatica #teclado #comando #programacion #edicion #ofimatica #software #codigo #fullstack #datos #estructurasdedatos #pila`, /*4*/
  `¿Cómo protege una pared de lámparas de lava a millones de sitios web en Internet? #petergriffin #brainrot #software #desarrolloweb #javascript #programacion #memes #codigo #ia`, /*5*/
  `Introducción a Programación Dinámica! 🤓 Cómo identificar problemas de PD 🔎 #informatica #leetcode #software #educacion #programacion`, /*6*/
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

export const infoapuntes_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const infoapuntes_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const infoapuntes_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const infoapuntes_array_of_posts = [
  ...infoapuntes_images,
  ...infoapuntes_videos
];
