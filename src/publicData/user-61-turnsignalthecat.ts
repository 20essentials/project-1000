import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'turnsignalthecat';
const userId = '';
const prefixUrl = '';
const followers = 246_000;
const followed = 43;
const profileDescription = '🐈‍⬛';
const prefixLetterVideos = 'v';
const prefixLetterImages = 'n';
const quantityOfVideos = 9;
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

const arrayDescriptionsOfVideos = [
  "talk to me boy #reelsfyp #cat",
  "just can’t pull myself away #reelsfyp #cat",
  "glad you came #reelsfyp #cat",
  "big yawnin #reelsfyp #cat",
  "who’s calling my phone? #reelsfyp #cat",
  "get silly 🤪 #reelsfyp #cat",
  "runaway! #reelsfyp #cat",
  "#reelsfyp #cat",
  "please don’t stop the music #reelsfyp #cat"
];
const arrayDescriptionOfImages = []

export const turnsignalthecat_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const turnsignalthecat_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const turnsignalthecat_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages
});

export const turnsignalthecat_array_of_posts = [
  ...turnsignalthecat_images,
  ...turnsignalthecat_videos
];
