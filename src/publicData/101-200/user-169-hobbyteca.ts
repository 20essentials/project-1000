import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'hobbyteca';
const userId = '5233a2ae-c599-4f87-a0b3-56f031b72257';
const prefixUrl = 'https://dominicnikolai.github.io/project-305/assets/hobbyteca/';
const followers = 52_720;
const followed = 314;
const profileDescription = 'Miniaturas para armar🔮';
const prefixLetterVideos = 'v';
const quantityOfVideos = 5;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `🧩 ¿Buscando tu próximo hobby? Nuestros rompecabezas 3D de metal son el desafío perfecto para manos inquietas y mentes curiosas. Cada modelo es una pequeña obra de arte que armas tú mismo con paciencia, precisión… ¡y mucha satisfacción! 💡 Una vez terminados, no solo se ven increíbles, sino que también se convierten en parte de tu espacio: ya sea en tu escritorio, repisa o zona gamer, siempre llaman la atención. 🛒 Descubre nuestra colección completa y elige el modelo que más te inspire. ¡Despachamos a todo Chile! #harrypotter #chile #arquitectura #puzzle3d #manualidadesadultos #pasatiempos #rompecabezas3d #rompecabezas #modelo3d`, /*1*/
  `Si te gustaria armar tu propia nave de Star Wars tienes que ver esto 🤯🚀 #starwars #starwarsfan #puzzle3d #coleccionista #geekgift Son rompecabezas 3d de metal para fanaticos de esta gran saga. Descubre nuestra coleccion y empieza a armar tu propia nave 😍🧩`, /*2*/
  `Descubre un nuevo pasatiempo con nuestros puzzles 3d 😍 #puzzle3d #coleccionista #rompecabezas #pasatiempos #rompecabezas3d Info en el perfil para que consigas el tuyo y crees tu propia coleccion de modelos 3d de metal favoritos 🧩`, /*3*/
  `Si eres fan de Star Wars necesitas esto... 🤯🚀 #starwars #starwarsfan #puzzle3d #coleccionista #geekgift Son rompecabezas 3d de metal para fanaticos de esta gran saga. Descubre nuestra coleccion y empieza a armar tu propia nave 😍🧩`, /*4*/
  `Si te gusta la arquitectura debes ver esto... #puzzle3d #coleccionista #rompecabezas #pasatiempos #arquitectura Nuestros puzzles 3D de metal son el pasatiempo perfecto para ti si te gustaria armar los modelos en miniatura de las cosas que mas te gustan! 😍🧩`, /*5*/
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

export const hobbyteca_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const hobbyteca_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const hobbyteca_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const hobbyteca_array_of_posts = [
  ...hobbyteca_images,
  ...hobbyteca_videos
];
