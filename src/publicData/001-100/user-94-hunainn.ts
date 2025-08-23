import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'hunainn';
const userId = '9d3710a7-d9ca-4658-8142-2bc24573c32b';
const prefixUrl = 'https://dominicnikolai.github.io/project-284/assets/hunainn/';
const followers = 137_720;
const followed = 50;
const profileDescription = 'Just a guy who loves Dinosaurs and Kaiju';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `☠️ Aura Farming Level = GOD MODE ☠️ #godzilla #kingkong`, /*1*/
  `Imagine seeing this outside your window 😱 #godzilla #kingkong`, /*2*/
  `The Multiverse isn’t ready for SuperKong #superman #whatif #kingkong`, /*3*/
  `Hollywood Monsters, Bollywood Moves. #godzilla #kingkong #aavanjaavan`, /*4*/
  `150x zoom to the Moon 🌔🔭 #telescope #solarsystem #stargazing #astronomy #saturn #jupiter #mars`, /*5*/
  `Kong and Godzilla chilling out in Dubai 🎊 #godzilla #kingkong`, /*6*/
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

export const hunainn_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const hunainn_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const hunainn_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const hunainn_array_of_posts = [
  ...hunainn_images,
  ...hunainn_videos
];
