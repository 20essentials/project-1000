import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'grupoafter';
const userId = 'a5af3ef9-e0ad-4e1d-8c9e-bfb31b5a6d6c';
const prefixUrl = 'https://dominicnikolai.github.io/project-346/assets/grupoafter/';
const followers = 195_732;
const followed = 93;
const profileDescription = `Transformamos startups en marcas serias, profesionales y confiables`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 3;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Todas las marcas, ya sean grandes o pequeñas, pueden utilizar esto en su estrategia de marketing para crecer rápidamente. El marketing consiste en innovar y es importante avanzar junto con el mercado e incluso adelantarse a él. Esta estrategia de marketing no solo generará una sensación de sorpresa en la mente de sus clientes, sino que también hará que su negocio sea más confiable, ya que de esta manera no está tratando de ocultar nada al cliente. Los clientes no se arrepentirán de haber pedido su producto. #marketing #branding #publicidad`, /*1*/
  `#MarketingInteligente #VentasEfectivas #Emprendedores #EstrategiaDeMarketing #Copywriting #NegociosOnline #MarketingDigital #marketing #branding #entrepreneur`, /*2*/
  `Cómo crear una transición viral de coche en After Effects! 😱 ¡Guarda esta publicación para más tarde y sígueme para ver más contenido valioso como este! ❤️`, /*3*/
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

export const grupoafter_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const grupoafter_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const grupoafter_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const grupoafter_array_of_posts = [
  ...grupoafter_images,
  ...grupoafter_videos
];
