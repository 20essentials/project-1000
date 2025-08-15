import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'jorgepomarg';
const userId = 'ff2abc15-2b8f-47ce-9894-19f8b329a2a4';
const prefixUrl = 'https://dominicnikolai.github.io/project-198/assets/jorgepomarg/';
const followers = 15_200;
const followed = 109;
const profileDescription = '😅';
const profileImageSrc = 'https://20essentials.github.io/project-000-940/assets/j1.avif';

const prefixLetterVideos = 'v';
const quantityOfVideos = 8; // número de videos que tenías
const prefixLetterImages = 'n';
const quantityOfImages = 0; // no tenías imágenes

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `El día de ayer Elon Musk, Bill Gates, Mark Zuckerberg y multitud de gigantes tecnológicos se reunieron a puerta cerrada con el Senado de Estados Unidos para discutir el futuro de la Inteligencia Artificial y su regulación #senate #ai #future`, /*1*/
  `🚁🚁🚁 #cripto #bitcoin #fyp`, /*2*/
  `✨🌴 #profit #gananacia`, /*3*/
  `En el último episodio de Los Simpson Convierten a Bart en un NFT, presentándole crypto a muchas personas. #nft #simpson`, /*4*/
  `Así luce el efecto "Anillo de Fuego", provocado durante el eclipse anular de Sol, sobre Nevada, en Estados Unidos. #eclipse #anilloDeFuego`, /*5*/
  `Probaron los nuevos Ray-Ban de Meta, que pueden conectarse y transmitir directamente a Instagram. #rayban #meta`, /*6*/
  `Tres cazadores de tormentas encuentran un tornado y no pueden escapar a tiempo. #tormenta #tornado`, /*7*/
  `El calor generado en la minería de bitcoins se utiliza en el cultivo de tulipanes en los Países Bajos. #tullipan #mineria`, /*8*/
];

/* prettier-ignore */
const arrayDescriptionOfImages: string[] = []; // no tenías imágenes

export const jorgepomarg_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const jorgepomarg_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const jorgepomarg_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const jorgepomarg_array_of_posts = [
  ...jorgepomarg_images,
  ...jorgepomarg_videos
];
