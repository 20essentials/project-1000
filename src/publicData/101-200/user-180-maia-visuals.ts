import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'maia_visuals';
const userId = '';
const prefixUrl = '';
const followers = 461_720;
const followed = 50;
const profileDescription = '🎥 Filmmaker & Photographer';
const prefixLetterVideos = 'v';
const quantityOfVideos = 12;
const prefixLetterImages = 'n';
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Render at maximum quality`, /*1*/
  `What is freedom for you? 🏄`, /*2*/
  `Våtedalen Valley, Norway`, /*3*/
  `For insane limestone cliffs & turquoise lagoons`, /*4*/
  `Like moving poetry, a choreographed dance between man and sea 🎶🏄 Special thanks for making this happen `, /*5*/
  `🏖️ tropical paradise`, /*6*/
  `🏖️ tropical paradise`, /*7*/
  `🏖️ tropical paradise`, /*8*/
  `🏖️ tropical paradise`, /*9*/ 
  `🏖️ tropical paradise`, /*10*/
  `🏖️ tropical paradise`, /*11*/
  `🏖️ tropical paradise`, /*12*/
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

export const maia_visuals_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const maia_visuals_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const maia_visuals_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const maia_visuals_array_of_posts = [
  ...maia_visuals_images,
  ...maia_visuals_videos
];
