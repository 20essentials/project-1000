import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'cagnolino';
const userId = '6e6f00b1-4e89-4004-9929-e6f2f49aa9cb';
const prefixUrl = 'https://dominicnikolai.github.io/project-259/assets/cagnolino/';
const followers = 327_720;
const followed = 123;
const profileDescription = '🐶';
const prefixLetterVideos = 'v';
const prefixLetterImages = 'n';
const quantityOfVideos = 9;
const quantityOfImages = 0;
const profileImageSrc = `https://20essentials.github.io/project-000-940/assets/j7.avif`;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `🥰🥰🥰`, /*1*/
  `🥰🥰🥰`, /*2*/
  `😜😜😜`, /*3*/
  `😉😉😉`, /*4*/
  `😙😙😙`, /*5*/
  `😙😙😙`, /*6*/
  `☺️☺️☺️`, /*7*/
  `😂😂😂`, /*8*/
  `😍😍😍`, /*9*/
];

/* prettier-ignore */
const arrayDescriptionOfImages = [
  `🥰🥰🥰`, /*1*/
  `🥰🥰🥰`, /*2*/
  `😜😜😜`, /*3*/
  `😉😉😉`, /*4*/
  `😙😙😙`, /*5*/
  `😙😙😙`, /*6*/
  `☺️☺️☺️`, /*7*/
  `😂😂😂`, /*8*/
  `😍😍😍`, /*9*/

]

export const cagnolino_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const cagnolino_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const cagnolino_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages
});

export const cagnolino_array_of_posts = [
  ...cagnolino_images,
  ...cagnolino_videos
];
