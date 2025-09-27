import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'halltec';
const userId = 'd602f139-e543-4369-9dad-bd0196c9b0d1';
const prefixUrl = 'https://dominicnikolai.github.io/project-343/assets/halltec/';
const followers = 732_342;
const followed = 50;
const profileDescription = `Desarrollo de software🖱️`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Esto debes tener en cuenta si quieres tener un e-commerce. #ecommerce #bagisto #productos`, /*1*/
  `Un resumen de la historia 🤩 #halltec #amamoshacersoftware #programacion #softwaredeveloper #historia #factus`, /*2*/
  `¿Cuándo deja de ser Microservicio? #microservicios #laravel #monolito #desarrollodesoftware`, /*3*/
  `El software está en todas
partes. #software #desarrollodesoftware #amamoshacersoftware`, /*4*/
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

export const halltec_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const halltec_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const halltec_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const halltec_array_of_posts = [
  ...halltec_images,
  ...halltec_videos
];
