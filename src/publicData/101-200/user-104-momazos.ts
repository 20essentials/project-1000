import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'amUserPrivate';
const userId = '';
const prefixUrl = '';
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

export const amUserPrivate_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const amUserPrivate_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const amUserPrivate_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages,
});

export const amUserPrivate_array_of_posts = [
  ...amUserPrivate_images,
  ...amUserPrivate_videos
];
