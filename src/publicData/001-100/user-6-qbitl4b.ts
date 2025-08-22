import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'qbitlab';
const userId = '0b9709cb-4a26-4393-9293-68da9e5ef909';
const prefixUrl = 'https://dominicnikolai.github.io/project-189/assets/qb1tlab/';
const followers = 41_800;
const followed = 3;
const profileDescription = 'Simulaciones físicas usando métodos computacionales.';
const prefixLetterVideos = 'v';
const prefixLetterImages = 'n';
const quantityOfVideos = 20;
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}foto-de-perfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Atractor Doble de Leipnik-Newton #Fisica#Computacional#Caos`, /*1*/
  `Decaimiento Radiactivo Estocástico #Matemáticas#Ciencias#Simulación`, /*2*/
  `Superficie Paramétrica con forma de rosa #Ecuaciones#Ciencias#Simulación`, /*3*/
  `Ecuación de onda 2D #Onda#Ciencias`, /*4*/
  `Atractor de Rössler`, /*5*/
  `Smooth Life: una generalización al juego de la vida.`, /*6*/
  `Oscilador de Duffing`, /*7*/
  `Oscilador armónico cuántico`, /*8*/
  `Ecuaciones diferenciales ordinarias`, /*9*/ 
  `Atractor de Clifford`, /*10*/
  `Variación de parámetros en el Atractor Peter de Jong`, /*11*/
  `Efecto Beat`, /*12*/
  `El Juego de la vida`, /*13*/
  `Interpolación Polinómica`, /*14*/
  `Atractor del Circuito de Chua`, /*15*/
  `Átomo de Hidrógeno`, /*16*/
  `Atractor de Halvorsen:`, /*17*/
  `Atractor de Thomas`, /*18*/
  `Atractor de Chen`, /*19*/
  `Attractor de Aizawa`, /*20*/
];


/* prettier-ignore */
const arrayDescriptionOfImages = [];

export const qbitlab_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const qbitlab_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const qbitlab_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const qbitlab_array_of_posts = [
  ...qbitlab_images,
  ...qbitlab_videos
];
