import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'ghxz_edits';
const userId = '9a1c81fd-a826-4061-b977-599f966dd9c8';
const prefixUrl = 'https://dominicnikolai.github.io/project-239/assets/ghxz-edit/';
const followers = 1_720_532;
const followed = 432;
const profileDescription = 'Paid Edits & 𝗤𝘂𝗮𝗹𝗶𝘁𝘆 Enhancing';
const prefixLetterVideos = 'v';
const prefixLetterImages = 'n';
const quantityOfVideos = 12;
const quantityOfImages = 0;
const profileImageSrc = `${prefixUrl}p3rfil.avif`;

const arrayDescriptionsOfVideos = [
  '#oogway #kai #kungfupanda #edit #fyp',
  '#theamazingspiderman #spiderman #andrewgarfield #tasm #edit #fyp',
  '#f1 #f1edit #bradpitt #edit #fyp #explorepage',
  '#avatar #avatarfireandash #avatarthewayofwater #edit #fyp #explorepage',
  '#daenerys #daenerystargaryen #gameofthrones #edit #fyp',
  '#ironman #ironmanedit #tonystark #tonystarkedit #fyp #explorepage',
  '#tron #tronlegacy #tronares #ares #edit #fyp #explorepage',
  '#strange #marvel #drstrange',
  '#spiderman #spiderman3 #tobeymaguire #edit #fyp',
  '#gta6 #gta6trailer #gta #grandtheftauto #rockstargames #ps5 #fyp #fypシ',
  '#lockdown #optimusprime #transformers #edit #fyp #explorepage',
  '#tron #tronares #tronlegacy #edit #fyp #explorepage'
];
const arrayDescriptionOfImages = [];

export const ghxz_edits_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const ghxz_edits_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const ghxz_edits_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages
});

export const ghxz_edits_array_of_posts = [
  ...ghxz_edits_images,
  ...ghxz_edits_videos
];
