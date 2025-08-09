import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'amUserPrivate';
const userId = '';
const prefixUrl = '';
const followers = 94_100;
const followed = 328;
const profileDescription = 'Try not to smile 😏';
const prefixLetterVideos = 'v';
const prefixLetterImages = 'n';
const quantityOfVideos = 3;
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

const arrayDescriptionsOfVideos = [];
const arrayDescriptionOfImages = []

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
  userId
});

const amUserPrivate_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages
});

export const amUserPrivate_array_of_posts = [
  ...amUserPrivate_images,
  ...amUserPrivate_videos
];
