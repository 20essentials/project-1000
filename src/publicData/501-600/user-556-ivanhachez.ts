import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'ivanhachez';
const userId = '';
const prefixUrl = '';
const followers = 793_832;
const followed = 269;
const profileDescription = ` Cine, recomendaciones y entrevistas`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Este es el modelo hecho con CGI más grande y complicado de la historia del cine

#transformers #michaelbay #industriallightandmagic #sabiasque #datoscuriosos #cine`, /*1*/
  `SMILE 2 lleva al EXTREMO su viral estrategia de marketing. 🙂 Veremos los resultados en los cines el 18 de Octubre #smile2 #smile #sabiasque #datoscuriosos #naomiscott #skyeriley #cine #terror @paramount_spain`, /*2*/
  `Las 10 películas MÁS ATERRADORAS según la ciencia 🔬 (actualizado a 2025) #terror #cine #horror #halloween`, /*3*/
  `La película más infravalorada de la historia y muy adelantada a su tiempo, Tron #tron #tronares #cine #detrasdecamaras`, /*4*/
  `La MENTIRA detrás de la carrera de Jon Bernthal #jonbernthal #thebear #thepunisher #cine`, /*5*/
  `La locura de Charlie Sheen llega a Netflix 💀 #charliesheen #recomendaciones #akacharliesheen #cine #netflix`, /*6*/
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

export const ivanhachez_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const ivanhachez_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const ivanhachez_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const ivanhachez_array_of_posts = [
  ...ivanhachez_images,
  ...ivanhachez_videos
];
