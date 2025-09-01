import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'daniel_loredo';
const userId = 'a4f58521-4dcc-446e-b44a-f3341f76287a';
const prefixUrl = 'https://dominicnikolai.github.io/project-301/assets/daniel-loredo/';
const followers = 212_720;
const followed = 50;
const profileDescription = ' Impresión 3D';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Imprimí en 3D a Greninja en tamaño real!!! 🐸💦🌊 | Día 26 haciendo figuras en tamaño real | Quedó increíble!`, /*1*/
  `Imprimí en 3D a Chopper en tamaño real! 🥺🫶 Mi primera impresión de One Piece!!! 🔥🤯 Lo que todo fan de One Piece debería tener en su casita!! | Les gustó como quedó? Para seguir haciendo más :)`, /*2*/
  `Imprimí en 3D un Squirtle tamaño real 🥺🤩 | Así se imaginaban al vamo a calmarno? 🌊💦`, /*3*/
  `Imprimí en 3D un Bulbasaur tamaño real! 🥺🫶 ¿Así se lo imaginaban? | Cuál es tu favorito? 🌱🔥🌊`, /*4*/
  `Imprimí en 3D a Charmander en tamaño real 🤩 | Como creen que se vería junto a Charizard? 🔥`, /*5*/
  `POV: Eres Daniel 3D haciendo un Charmander en la cochera 🫶 | Quedo hermoso, lo amo`, /*6*/
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

export const daniel_loredo_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const daniel_loredo_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const daniel_loredo_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const daniel_loredo_array_of_posts = [
  ...daniel_loredo_images,
  ...daniel_loredo_videos
];
