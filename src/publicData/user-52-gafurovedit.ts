import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'gafurovedit';
const userId = '';
const prefixUrl = '';
const followers = 1_720_320;
const followed = 320;
const profileDescription = 'Edits';
const prefixLetterVideos = 'v';
const prefixLetterImages = 'n';
const quantityOfVideos = 12;
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

const arrayDescriptionsOfVideos = [
  "Thanks for 1million❤️ #cartoon #disney #dreamworks #aestetic",
  "Buy my Quality, link in bio #kungfupanda #aesthetic",
  "#cartoon #aestetic",
  "The beauty of PIXAR #pixar #aestetic #cartoon",
  "#marvel #marvelstudios",
  "#yourname #aestetic #anime",
  "#gameofthrones #aestetic",
  "#kungfupanda",
  "My Work Process and Quality, link in bio Captain Jack Sparrow ☠️🏴‍☠️ #captainjacksparrow #piratofthecaribbean",
  "#whitelotus #aesthetic",
  "#shrek #aesthetic #dreamworksanimation",
  "#interstellar #aesthetic"
];
const arrayDescriptionOfImages = []

export const gafurovedit_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const gafurovedit_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const gafurovedit_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages
});

export const gafurovedit_array_of_posts = [
  ...gafurovedit_images,
  ...gafurovedit_videos
];
