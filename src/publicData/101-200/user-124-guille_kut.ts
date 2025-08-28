import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'guille_Kut';
const userId = '';
const prefixUrl = '';
const followers = 172_998;
const followed = 194;
const profileDescription = '🤓☝🏻 Hablo sobre cine, series y videojuegos, y la gente dice que aprende y se lo pasa bien';
const prefixLetterVideos = 'v';
const quantityOfVideos = 12;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Me flipa el modelado 3D de los animales en el cine . . . #guillekut #cine #series #vfx #cgi`, /*1*/
  `¿Cómo se hicieron los sonidos de MINECRAFT? . . . #guillekut #cine #series #minecraft #sonidos`, /*2*/
  `Personajes que pudieron ser INTERPRETADOS por otro actor. . . . #guillekut #cine #series #hollywood #humor`, /*3*/
  `Las mejores PARODIAS de RASCA Y PICA . . . #guillekut #cine #series #lossimpson #rascaypica`, /*4*/
  `¿Por qué las orejas de Mickey Mouse SIEMPRE se ven de frente? . . . #guillekut #cine #series #disney #mickeymouse`, /*5*/
  `Shin Chan es una serie de momentazos . . . #guillekut #cine #series #shinchan #anime`, /*6*/
  `Referencias en el cine a la Alemania N4S1 . . . #guillekut #cine #series #alemania #starwars #indianajones`, /*7*/
  `¿Cuál es tu "couch gag" de Los Simpson favorito? . . . #guillekut #cine #series #lossimpson #mattgroening #couchgag #gagdelsofa`, /*8*/
  `Padre de familia acepta cualquier cosa que le quieras poner . . . #guillekut #cine #series #padredefamilia #familyguy #petergriffin`, /*9*/ 
  `Me encantan los idiomas inventados del cine . . . #guillekut #cine #series #futurama #juegodetronos #elseñordelosanillos`, /*10*/
  `¿Conocías el teorema de Futurama? . . . #guillekut #cine #series #futurama #mattgroening`, /*11*/
  `¿Sabías que Disney utilizaba 3D una década antes que Pixar? . . . #guillekut #cine #series #disney #pixar #3D`, /*12*/
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

export const guille_Kut_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const guille_Kut_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const guille_Kut_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const guille_Kut_array_of_posts = [
  ...guille_Kut_images,
  ...guille_Kut_videos
];
