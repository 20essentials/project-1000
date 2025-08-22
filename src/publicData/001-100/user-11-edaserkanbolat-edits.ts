import {
  generateExactlyCommonProps,
  generateArrayPostsOfImages,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'edaserkanbolat_edits';
const userId = 'e5da74e3-9d58-4c92-9470-75252515c6e8';
const prefixUrl =
  'https://dominicnikolai.github.io/project-197/assets/edaserkanbolat-edits/';
const followers = 115_329;
const followed = 338;
const profileDescription = 'Serie: Sen Çal Kapimi';
const profileImageSrc =
  'https://20essentials.github.io/project-000-940/assets/j23.avif';
const prefixLetterVideos = 'v';
const quantityOfVideos = 5;
const prefixLetterImages = 'n';
const quantityOfImages = 0;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Eles🔥 #hanker #edser`, /*1*/
  `Eu sempre imaginei🤧🤍 #fyp #foryou`, /*2*/
  `A felicidade da Hande de ver o Kerem❤️ #parati #fy`, /*3*/
  `Esse episódio❤️‍🔥 #hanker #edser`, /*4*/
  `Essa música é para essa cen #fyp #foryou`, /*5*/
];

/* prettier-ignore */
const arrayDescriptionOfImages = [
  // vacío, no hay imágenes
]

export const edaserkanbolat_edits_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const edaserkanbolat_edits_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

const edaserkanbolat_edits_images = generateArrayPostsOfImages({
  prefixLetterImages,
  prefixUrl,
  userId,
  quantityOfImages
});

export const edaserkanbolat_edits_array_of_posts = [
  ...edaserkanbolat_edits_images,
  ...edaserkanbolat_edits_videos
];
