import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'shrek';
const userId = '15cb439b-c64d-40ba-a8da-79d19da103fc';
const prefixUrl = 'https://dominicnikolai.github.io/project-283/assets/shr3k/';
const followers = 97_720;
const followed = 132;
const profileDescription = '🟢 Shrek clips 🟢';
const prefixLetterVideos = 'v';
const quantityOfVideos = 9;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `PINPON! 😂 Shrek in Spanish is the best 🔥 ⁠ ⁠ ⁠ ⁠ ⁠ #shrek #iconic #throwback #movie #pinpon #twitter #mituregram`, /*1*/
  `I need a hero`, /*2*/
  `Shrek pinocho levitando`, /*3*/
  `Pinocho interrogado por Encantador`, /*4*/
  `Accidentally in Love Scene`, /*5*/
  `¿Ya merito llegamos?`, /*6*/
  `bromeas?, es un papucho`, /*7*/
  ` La Tanga de Pinocho`, /*8*/
  `Porque Toy Solito`, /*9*/ 
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

export const shrek_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const shrek_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const shrek_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const shrek_array_of_posts = [
  ...shrek_images,
  ...shrek_videos
];
