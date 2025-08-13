import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'marshall_jassan';
const userId = '83cdb1f4-dee1-462d-bfe1-617be369a910';
const prefixUrl = 'https://dominicnikolai.github.io/project-196/assets/m4rshall-j4ssan/';
const followers = 6198;
const followed = 104;
const profileDescription = 'Hola, hablo sobre ciencia en videos 🪐';
const prefixLetterVideos = 'v';
const prefixLetterImages = 'n';
const quantityOfVideos = 10;
const quantityOfImages = 0; 
const profileImageSrc = `https://20essentials.github.io/project-000-940/assets/j3.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Hola, hablo sobre ciencia en videos 🪐 #aerospace #science`, /*1*/
  `SpaceX Launch 🚀 #SpaceX #Rockets`, /*2*/
  `SMACS 0723 por el James Webb HAA ES HERMOSO ya quiero ver las demas mañana 💫 #space #jameswebb`, /*3*/
  `PARTES DE UN COHETE SONDA 🚀`, /*4*/
  `Sistemas de control primarios ✈️ #aviation #aerospace`, /*5*/
  `Ya has visto antes por telescopio? Qué te gusta o gustaría observar? #telescopio #moon`, /*6*/
  `This is so cool!! 🚀 #rocket #cohete`, /*7*/
  `Me quedé con ganas de ponermelo y llevármelo a mi casa 😬 #astronaut #space`, /*8*/
  `Comenzaré a subir estos proyectos por aquí 🚀 #rocket #cool`, /*9*/
  `The Little Voyager ya tiene marcas de guerra 🚀 #aerospace #carlsagan`, /*10*/
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
];

export const marshall_jassan_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const marshall_jassan_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const marshall_jassan_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const marshall_jassan_array_of_posts = [
  ...marshall_jassan_images,
  ...marshall_jassan_videos
];
