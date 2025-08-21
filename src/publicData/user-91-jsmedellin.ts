import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'jsmedellin';
const userId = '';
const prefixUrl = '';
const followers = 279_720;
const followed = 71;
const profileDescription = '🌐 ES | EN | PT | Learning Chinese';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `volar cometas es algo cultural en China y tiene una historia bastante profunda. De hecho, China es considerada la cuna del cometa: los primeros registros datan de hace más de 2.000 años, en la época de la dinastía Han, aunque algunos historiadores creen que ya existían en el periodo de los Estados Combatientes (siglo IV a.C.). 🔹Costumbre de “cortar la cuerda”: en algunos lugares, dejar que el cometa vuele libre simboliza dejar ir la mala suerte y los problemas.#china #chinaculture #loveasia #cometa #fy`, /*1*/
  `La ingeniera en automatización y robótica está creciendo cada día más a pasos de gigante y aquí en China no pierden el tiempo! Que te parece? #china #loveasia #robot #future`, /*2*/
  `Y de un momento a otro mi vida empezó a soñar así 😅 #chinaculture #descubrechina #chinaculture #ktv #shanghai`, /*3*/
  `👇🏼👇🏼La educación en China es considerada una de las más estrictas y exigentes del mundo, tanto por su estructura académica como por la presión social y familiar asociada al rendimiento escolar. 🔹Los estudiantes suelen tener clases desde muy temprano hasta la noche, y muchos asisten a clases extra o tutorías los fines de semana. 🔹Se prioriza la memorización y repetición sobre el pensamiento crítico y la creatividad, aunque esto ha empezado a cambiar en los últimos años en algunas regiones. 🔹 Muchas familias invierten grandes sumas de dinero en la educación de sus hijos y esperan excelencia académica. El fracaso escolar puede ser visto como un deshonor familiar. #chinaculture #chinalifestyle #china #study`, /*4*/
  `😅 lo que importa es la información! 🔹Crown Escalator (皇冠大扶梯) de Chongqing, también conocida como el Huangguan Escalator o escalera de Lianglukou, creada en 1996. 🔹Actualmente se considera la escalera inclinada más larga de China y la segunda más larga de Asia, solo por detrás de la del metro de Pyongyang con 150 m y 64 m de altura. #loveasia #china #descubrechina #chongqing`, /*5*/
  `Además te muestran donde están los inodoros de poceta y los normales que todos conocemos 😅 eso es algo que se agradece en esta parte del mundo! #china #loveasia #chinaculture #chinalifestyle`, /*6*/
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

export const jsmedellin_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const jsmedellin_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const jsmedellin_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const jsmedellin_array_of_posts = [
  ...jsmedellin_images,
  ...jsmedellin_videos
];
