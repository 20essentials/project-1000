import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'merlinomath';
const userId = 'b522ad11-66df-48eb-bf28-b93775377c7c';
const prefixUrl = 'https://dominicnikolai.github.io/project-366/assets/merlinomath/';
const followers = 54_832;
const followed = 161;
const profileDescription = ` Matemático con corazón de artista, transformando ecuaciones en arte visual. `;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Be curios, Be determined, Overcome the odds. `, /*1*/
  `VOLUMEN DE UN PARALELEPÍPEDO — idea en 1 minuto`, /*2*/
  `Vectores propios y matrices en 3D: la dirección que nunca cambia `, /*3*/
  `Determinante 3D Negativo En álgebra lineal, una transformación lineal f: V → V entre espacios vectoriales queda representada por una matriz siempre que fijemos una base de salida B1 y una base de llegada B2. La notación M(f, B1, B2) indica la matriz de f en esas bases.`, /*4*/
  `La función zeta de Riemann en 3D`, /*5*/
  `#matematicas #trigonometría #universidad #álgebra #geometría  #cálculo #visualización #ciencia #educación #tecnología #divulgacioncientifica #física`, /*6*/
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

export const merlinomath_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const merlinomath_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const merlinomath_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const merlinomath_array_of_posts = [
  ...merlinomath_images,
  ...merlinomath_videos
];
