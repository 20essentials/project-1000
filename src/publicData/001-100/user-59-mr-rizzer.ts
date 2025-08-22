import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'mr_rizzer';
const userId = 'a9187551-ec5c-46f2-b660-6274123c35eb';
const prefixUrl = 'https://dominicnikolai.github.io/project-250/assets/mr-rizzer/';
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

export const mr_rizzer_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const mr_rizzer_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId
});

const mr_rizzer_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages
});

export const mr_rizzer_array_of_posts = [
  ...mr_rizzer_images,
  ...mr_rizzer_videos
];
