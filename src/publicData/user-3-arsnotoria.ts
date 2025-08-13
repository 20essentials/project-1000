import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'arsnotoria';
const userId = 'c2828638-e41c-48c8-ad20-4c20b6c4853a';
const prefixUrl =
  'https://dominicnikolai.github.io/project-190/assets/4rs-notoria/';
const followers = 69_800;
const followed = 249;
const profileDescription = '🔥Aprende matemáticas mientras vez TikToks🔥';
const prefixLetterVideos = 'v';
const prefixLetterImages = 'n';
const quantityOfVideos = 14;
const quantityOfImages = 0;
const profileImageSrc = `https://20essentials.github.io/project-000-940/assets/j6.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Como aprender las identidades recíprocas (trigonometría)`, /*1*/
  `Resolviendo ejercicio sobre Tensiones (Física I)`, /*2*/
  `PARTE 1. ¿Aún no sabes cómo derivar?`, /*3*/
  `PARTE 2. ¿Aún no sabes cómo derivar?`, /*4*/
  `¿Aún no sabes cómo integrar?`, /*5*/
  `PRIMERA PARTE🔥Integrales Definidas🔥`, /*6*/
  `SEGUNDA PARTE🔥Integrales Definidas🔥`, /*7*/
  `TERCERA PARTE🔥Integrales Definidas🔥`, /*8*/
  `🔥 INTEGRACION CON CAMBIO DE VARIABLE 🔥`, /*9*/ 
  `Tercer caso🔥 Integrales con cambio de variable 🔥`, /*10*/
  `🔥Última parte de las integrales con cambio de variable 🔥`, /*11*/
  `⚡🔥Método para resolver integrales por partes de una forma más fácil ⚡🔥`, /*12*/
  `🔥⚡Reglas de derivación 🔥⚡`, /*13*/
  `Uff`, /*14*/

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

export const arsnotoria_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const arsnotoria_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const arsnotoria_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages
});

export const arsnotoria_array_of_posts = [
  ...arsnotoria_images,
  ...arsnotoria_videos
];
