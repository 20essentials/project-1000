import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'lggbb';
const userId = '2b89d8d4-29b8-493b-a6c2-89f9cacec3de';
const prefixUrl = 'https://dominicnikolai.github.io/project-248/assets/lggbb/';
const followers = 287_720;
const followed = 720;
const profileDescription = '만나서 반가워요🥳우리 친구하자😍';
const prefixLetterVideos = 'v';
const prefixLetterImages = 'n';
const quantityOfVideos = 5;
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

const arrayDescriptionsOfVideos = [
  "😍😍😍",
  "딸기 케이크（strawberry cake）🥰🌹",
  "OMG,wow😍",
  "😎",
  "Cosplay게임（붕괴：스타레일）"
];
const arrayDescriptionOfImages = []

export const lggbb_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const lggbb_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const lggbb_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages
});

export const lggbb_array_of_posts = [
  ...lggbb_images,
  ...lggbb_videos
];
