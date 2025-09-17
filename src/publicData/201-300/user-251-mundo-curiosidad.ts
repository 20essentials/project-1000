import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'mundo_curiosidad';
const userId = 'b9192ad0-a76c-4dcc-bb64-f39e4c516a83';
const prefixUrl = 'https://dominicnikolai.github.io/project-328/assets/mundo-curiosidad/';
const followers = 437_720;
const followed = 36;
const profileDescription = `🐈 La curiosidad mató al gato pero no a mí`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 4;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#datos #curiosidades #datoscuriosos #datocurioso #sabiasque`, /*1*/
  `#conocimiento #datosinteresantes #hechos #conocimientoinfinito #curioso #curiosidad #motivacion #sabíasqué #curiosos #sabias`, /*2*/
  `#datos #dato #miconocimiento #curiosidades #datoscuriosos #datocurioso #sabiasque #sabíasque #enseñar #leer #conocimiento #datosinteresantes #hechos #conocimientoinfinito #curioso #curiosidad #motivacion #sabíasqué #curiosos #sabias`, /*3*/
  `#datos #dato #miconocimiento #curiosidades #datoscuriosos #datocurioso #sabiasque #sabíasque #enseñar #leer #conocimiento #datosinteresantes #hechos #conocimientoinfinito #curioso #curiosidad #motivacion #sabíasqué #curiosos #sabias`, /*4*/
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

export const mundo_curiosidad_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const mundo_curiosidad_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const mundo_curiosidad_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const mundo_curiosidad_array_of_posts = [
  ...mundo_curiosidad_images,
  ...mundo_curiosidad_videos
];
