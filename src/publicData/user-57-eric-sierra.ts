import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'eric_sierra';
const userId = '727223e6-1bf1-4260-a518-00922d194408';
const prefixUrl = 'https://dominicnikolai.github.io/project-245/assets/eric-sierra/';
const followers = 100_000;
const followed = 50;
const profileDescription = '🎥 | Film | Travel | Sports';
const prefixLetterVideos = 'v';
const prefixLetterImages = 'n';
const quantityOfVideos = 8;
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

const arrayDescriptionsOfVideos = [
  "This feeling > • #skydive #extreme #lifestyle",
  "All good things take time. 🌱 Never compare your journey to anyone else’s, everyone grows at their own pace. Stay focused, stay grounded, and take it one day at a time with your goal in mind! #TrustTheProcess #travel #lifestyle #film #adventure",
  "#volcano #film #mountainbike #adventure #extreme #lifestyle #travel",
  "Life becomes way more fun when you treat it like a video game, leveling up with every challenge 🔥 • • #helicopter #skydive #travel #extreme",
  "On our way to The Gorge • • #sunset #couple #travel #motorcycles #adventure",
  "Another main character moment 🚁 • • #skydive #helicopter #lifestyle #adventure #travel",
  "What jumping in mars looks like ✅ • • #skydive #helicopter #travel #extreme #lifestlye",
  "Living not existing • • #lifestyle #travel"
];
const arrayDescriptionOfImages = []

export const eric_sierra_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const eric_sierra_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const eric_sierra_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages
});

export const eric_sierra_array_of_posts = [
  ...eric_sierra_images,
  ...eric_sierra_videos
];
