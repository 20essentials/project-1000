import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'improve';
const userId = '';
const prefixUrl = '';
const followers = 27_320;
const followed = 79;
const profileDescription = '1% mejor cada día.';
const prefixLetterVideos = 'v';
const prefixLetterImages = 'n';
const quantityOfVideos = 4;
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

const arrayDescriptionsOfVideos = [];
const arrayDescriptionOfImages = []

export const improve_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const improve_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId
});

const improve_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages
});

export const improve_array_of_posts = [
  ...improve_images,
  ...improve_videos
];
