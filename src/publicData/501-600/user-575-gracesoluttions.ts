import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'gracesoluttions';
const userId = '34ce4057-d5d6-48f8-81f8-6b90f704cba6';
const prefixUrl = 'https://dominicnikolai.github.io/project-373/assets/gracesoluttions/';
const followers = 16_832;
const followed = 533;
const profileDescription = ` ¿Buscas una web diferente entre tu competencia? ⬇️`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Comencé mi agencia desarrollando sitios web en Wordpress, es una muy buena herramienta si recién estás empezando, pero está muy limitada en cuanto a diseño y optimización. Hoy hago mis páginas totalmente personalizadas para cada cliente.`, /*1*/
  `¿Buscas un portfolio para mostrar tus proyectos? No importa si sos fotógrafo, diseñador, productor, lo que sea!
En grace lo mostramos en base a lo que vos queres y tus requerimientos.
Para ver este proyecto , mira el link de la bio 🔗⬆️`, /*2*/
  `¿Buscas hacer una página web sin que sea genérica? Nosotros también nos cansamos de ver los mismos templates en todas las páginas , por eso ofrecemos innovación para cada sitio que realizamos.`, /*3*/
  `#webdesign #website #webdeveloper #paginasweb #diseñoweb`, /*4*/
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

export const gracesoluttions_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const gracesoluttions_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const gracesoluttions_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const gracesoluttions_array_of_posts = [
  ...gracesoluttions_images,
  ...gracesoluttions_videos
];
