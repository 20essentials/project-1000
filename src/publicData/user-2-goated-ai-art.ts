import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'goated_ai_art';
const userId = '1339e4cd-cd20-40b5-8e47-1f4483d586a3';
const prefixUrl = 'https://dominicnikolai.github.io/project-183/assets/goated-ai/';
const followers = 150_000;
const followed = 223;
const profileDescription = 'Art With IA';
const prefixLetterVideos = 'v';
const prefixLetterImages = 'f';
const quantityOfVideos = 1;
const quantityOfImages = 100;
const profileImageSrc = `${prefixUrl}f32.avif`;

const arrayDescriptionsOfVideos = [];
const arrayDescriptionOfImages = []

export const goated_ai_art_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const goated_ai_art_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId
});

const goated_ai_art_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages
});

export const goated_ai_art_array_of_posts = [
  ...goated_ai_art_images,
  ...goated_ai_art_videos
];
