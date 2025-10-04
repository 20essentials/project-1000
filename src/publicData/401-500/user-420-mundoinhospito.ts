import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'mundoinhospito';
const userId = '';
const prefixUrl = '';
const followers = 627_832;
const followed = 332;
const profileDescription = `Eres más que una persona... Eres parte del Cambio`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 3;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#ai #future #futuretechnology #nature #solarpunk #utopia #eco`, /*1*/
  `#sostenibilidad #vidasostenible #acciónclimática`, /*2*/
  `Demi Barnes, una estudiante de quince años de West Sussex, Inglaterra, captó la atención internacional tras crear un vestido de novia con más de 1500 hojas de papeles de divorcio para su examen de arte escolar. Elaborado a lo largo de una evaluación de dos días y diez horas, el vestido presentaba un corpiño de alambre con papeles cuidadosamente doblados y superpuestos que formaban la falda.
`, /*3*/
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

export const mundoinhospito_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const mundoinhospito_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const mundoinhospito_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const mundoinhospito_array_of_posts = [
  ...mundoinhospito_images,
  ...mundoinhospito_videos
];
