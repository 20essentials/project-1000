import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'pchujoy';
const userId = '';
const prefixUrl = '';
const followers = 1_320_898;
const followed = 543;
const profileDescription = `Geek, technology, videogames🇵🇪`;
const prefixLetterVideos = 'v';
const quantityOfVideos = 7;
const prefixLetterImages = 'f';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#comidajaponesa #barranco #sanborja #nikkei #foodies #cocinajaponesa #carbonarapasta #fideoscarbonara`, /*1*/
  `Así se expande el almacenamiento de una laptop gamer 👀 ROG Zephyrus G16 con RTX5080`, /*2*/
  `Cómo jugar con tu laptop gamer en el avión ✈️👀`, /*3*/
  `Silksong en el cine en una sala IMAX 😃`, /*4*/
  `Nuevo gameplay de "Ananta", nuevo juego gacha de mundo abierto lleno de muchas posibilidades. Está en desarrollo para PC, PS5, Android y iOS)`, /*5*/
  `Primer vistazo a "Death Stranding: Mosquito", la primera cinta animada de la saga 🦟`, /*6*/
  `¡"Pepsiman" cumple 26 años! ¿Llegaste a jugar esta joyita de la primera PlayStation?`, /*7*/
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

export const pchujoy_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const pchujoy_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const pchujoy_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const pchujoy_array_of_posts = [
  ...pchujoy_images,
  ...pchujoy_videos
];
