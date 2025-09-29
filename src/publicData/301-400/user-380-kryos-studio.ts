import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'kryos_studio';
const userId = '';
const prefixUrl = '';
const followers = 56_832;
const followed = 50;
const profileDescription = `Obsesionados con crear experiencias digitales`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Hoy teníamos que crear una página web diferente, para una empresa que vende plástico, el objetivo era crear una experiencia dinámica con una estética que diferenciara a la marca 🤟🏼 Si estas pensando en crear o rediseñar tu página web, comenta “web” y hablamos!😆 #designer #graphicdesigners #uidesigner #webdesigner #diseñoweb #webdesign #framer #ux`, /*1*/
  `Hoy hemos rediseñado la página web de la mayor academia de policías de Baleares 👮‍♂️💻 ¿Qué te parece el antes y después de la página web? Si estás pensando en crear o rediseñar tu página web, comenta “web” y hablamos ✌🏼 #landingpage #webdesigner #uxdesign #diseñoweb #emprendedor #webdesign #framer`, /*2*/
  `#landingpage #webdesigner #uxdesign #diseñoweb #ux #paginaweb`, /*3*/
  `Hoy hemos rediseñado la web de Tinder 💘 Si estás pensando en crear o rediseñar tu página web, comenta “web” y hablamos ✌🏼 #landingpage #webdesigner #uxdesign #diseñoweb #emprendedor #webdesign #framer`, /*4*/
  `Hoy tocaba crear una página web para un estudio creativo, querían un web que mostrara de forma clara los trabajos que habían realizado y la esencia de su marca. Creamos un diseño con varios mockups, transiciones y detalles que reflejaran a la perfección la imagen de la marca 👩🏻‍🎨 Si estás pensando en crear o rediseñar tu página web, comenta “web” y hablamos ✌🏼 #landingpage #webdesigner #uxdesign #diseñoweb #emprendedor #webdesign #framer
`, /*5*/
  `Hoy he creado una web con pocas secciones, pero no tienen ningún tipo de sentido como se ven 🤯 #landingpage #webdesigner #uxdesign #diseñoweb #emprendedor #framer

`, /*6*/
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

export const kryos_studio_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const kryos_studio_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const kryos_studio_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const kryos_studio_array_of_posts = [
  ...kryos_studio_images,
  ...kryos_studio_videos
];
