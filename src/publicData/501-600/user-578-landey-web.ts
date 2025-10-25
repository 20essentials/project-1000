import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'landey_web';
const userId = '6da1e4b0-8739-4ff0-b7d2-e5bec62d3e90';
const prefixUrl = 'https://dominicnikolai.github.io/project-373/assets/landey-web/';
const followers = 322_832;
const followed = 259;
const profileDescription = `¿Listo para aumentar tus ventas con una web moderna? 😉🚀`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Pagina web di un'azienda di trasporti fatta in Wordpress! 🔨 Hai già un sito web? 📲 #paginasweb#desarrolloweb#diseñoweb#sitioweb#wordpress#transporte#EnergiKuatTiapLangkah`, /*1*/
  `¡Página Web de un servicio de Pesca hecha en Wordpress! 🔨

¿Ya tienes una página web? 📲

#paginasweb #desarrolloweb #diseñoweb #sitioweb #wordpress #pescaderia #EnergiKuatTiapLangkah`, /*2*/
  `Así conseguimos que cada web se vea profesional con inteligencia artificial, aunque el cliente empiece desde cero.📸✨ #desarrolloweb #diseñoweb #agenciadifital #ia #prompt`, /*3*/
  `📉 Una mala web te hace perder clientes. Mira este antes y después.
Agenda tu rediseño web hoy.🚨
#agenciadigital #diseñoweb #elementor #wordpress #paginaweb #desaarrolloweb #logistica #logistic #envios #exportaciones #logisticaytransporte #comercioexterior`, /*4*/
  `Así fue como creamos la web de Ahorra Ya Energía para conseguir clientes ¿Te imaginas que tu web haga esto por ti?🤯👩🏽‍💻 Escríbenos y te contamos cómo 😉

#agenciadigital #diseñoweb #elementor #wordpress #paginaweb #desarrolloweb #sitioweb #webdesigner #facturaluz #ahorroenergetico #asesoriaenergetica #ahorraluz #EnergiKuatTiapLangkah`, /*5*/
  `Así quedó esta página web de reciclaje ♻️ Buscas una pagina web para tu negocio, mándanos tu idea al DM y hablamos.😉
#agenciadigital #diseñoweb #diseñoweb #elementor #wordpress #paginasweb #desarrolloweb #sitioweb #webdesigners #reciclaje #plasticoreciclado #sostenible #reusereducerecycle #EnergiKuatTiapLangkah`, /*6*/
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

export const landey_web_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const landey_web_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const landey_web_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const landey_web_array_of_posts = [
  ...landey_web_images,
  ...landey_web_videos
];
