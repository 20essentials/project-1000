import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'momazos';
const userId = 'd74e0718-0d4f-4524-b8f4-fc5d0cc1fc8a';
const prefixUrl = 'https://dominicnikolai.github.io/project-290/assets/momazos/';
const followers = 153_720;
const followed = 52;
const profileDescription = 'Artista';
const prefixLetterVideos = 'v';
const quantityOfVideos = 6;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `#videosrandoms #shitpost #memesespañol #dankmemes #parati #fyp #memesbrasil`, /*1*/
  `#videosrandoms #shitpost #memesespañol #dankmemes #parati #fyp #memesbrasil`, /*2*/
  ` #videosrandoms #shitpost #memesespañol #dankmemes #parati #fyp #memesbrasil`, /*3*/
  `#videosrandoms #shitpost #memesespañol #dankmemes #parati #fyp #memesbrasil`, /*4*/
  ` #videosrandoms #shitpost #memesespañol #dankmemes #parati #fyp #memesbrasil`, /*5*/
  `#videosrandoms #shitpost #memesespañol #dankmemes #parati #fyp #memesbrasil`, /*6*/
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

export const momazos_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const momazos_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const momazos_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const momazos_array_of_posts = [
  ...momazos_images,
  ...momazos_videos
];
