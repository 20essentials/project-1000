import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'mejora_tu_seo';
const userId = '5265ee0d-4ede-4f6b-85a0-103a487849ffadsf';
const prefixUrl = 'https://dominicnikolai.github.io/project-375/assets/mejora-tu-seo/';
const followers = 39_832;
const followed = 123;
const profileDescription = `Bienvenido a Mejores SEO España`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 3;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `5000€ al Mes: El Secreto para Multiplicar tus Ingresos
Descubre cómo escalar tus ingresos online. Analizamos estrategias para convertir tu tráfico en ganancias reales, con consejos prácticos y soluciones efectivas para monetizar tu audiencia. #MonetizarAudiencia #IngresosOnline #MarketingDigitalEspaña #EmprendimientoDigital #TraficoWeb #MarketingOnline #NegociosOnline #ConsejosMarketing #EstrategiasDigitales #AumentarIngresos`, /*1*/
  `¿Los enlaces siguen siendo importantes para el SEO? ¡Absolutamente! Pero hay algo más que debes saber. Las menciones de marca son clave para las IAs. #SEO #enlaces #mencionesdemarca #IA #marketingdigital`, /*2*/
  `¿Sabías que el SEO está cambiando? Ahora, no solo optimizamos para Google, ¡sino también para IAs! Descubre cómo adaptar tu estrategia. #SEO #IA #marketingdigital #estrategiadigital #inteligenciaartificial`, /*3*/
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

export const mejora_tu_seo_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const mejora_tu_seo_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const mejora_tu_seo_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const mejora_tu_seo_array_of_posts = [
  ...mejora_tu_seo_images,
  ...mejora_tu_seo_videos
];
