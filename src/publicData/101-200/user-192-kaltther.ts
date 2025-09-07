import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'kaltther';
const userId = '04cbe8aa-3f0b-4f65-b327-a5bf00f196f7';
const prefixUrl = 'https://dominicnikolai.github.io/project-311/assets/kaltther/';
const followers = 29_720;
const followed = 50;
const profileDescription = 'はじめまして！🐸';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Se siente un poco triste acabar el curso, pero ya tocaba no estar 13h diaras delante de una pantalla 😂🩷 espero que os gusten los concepts!!! Con este reel le dio adiós a Lovecraft un tiempecito #conceptart #lovecraft #cthulhu #artist #draw #portfolio #creepy #horrorart`, /*1*/
  `La verdad ando desmotivada con el portafolio (aunque por mis videos no lo parezca). A veces es difícil saber en qué momento rendirse y ganar en calidad de vida (trabajar 40h y hacer 20h de portafolio a la semana no se siente sano mentalmente) muchos ánimos a todos los que estéis en algo parecido 🥲🩷 #art #portfolio #illustration #videogame #conceptart #artist`, /*2*/
  `Hice varias caras para el enemigo más fácil del juego 🫶🏻 y he empezado el turnaround, pronto os lo enseño 🫡 espero que os guste 🩷 #art #videogame #conceptart #illustration #dibujo`, /*3*/
  `Os enseño más avances de mi tercer proyecto para el portafolio 🫶🏻 Shoddy Toys va a ir más lento hasta tener un par de cositas para el portafolio listas 💔 denle amor al video plis 🥹 #art #portfolio #videogame #conceptart #retro`, /*4*/
  `Seguimos editando el portafolio 🙏🏻🙏🏻🙏🏻 espero en un mes y algo volver a aplicar a sitios y ojalá conseguir una entrevista ni que sea 💀 #conceptart #dibujo #indiegame #arte #creepycuteart`, /*5*/
  `Intentando hacer alguna mini-practica porque mi senpai me dijo que siempre me vengo arriba con los proyectos 🤓☝🏻 y tiene razón 💀 #art #sketch #moth #polilla #illustration`, /*6*/
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

export const kaltther_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const kaltther_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const kaltther_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const kaltther_array_of_posts = [
  ...kaltther_images,
  ...kaltther_videos
];
