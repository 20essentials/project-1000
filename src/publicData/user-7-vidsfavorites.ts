import {
  generateExactlyCommonProps,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'vid_favorites';
const userId = 'f606a3e9-6aa4-403c-92fa-9ab749a96b96';
const prefixUrl = 'https://20essentials.github.io/project-000-035/videos/';
const followers = 41_800;
const followed = 3;
const profileDescription = 'My Favorite Videos';
const profileImageSrc = 'https://20essentials.github.io/project-000-990/assets/o1.avif';

const prefixLetterVideos = 'n'; // según tus archivos: n1.mp4, n2.mp4, etc.
const quantityOfVideos = 4;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Zeke Awaken #Zoids #Chaotic #Century`,             /*1*/
  `Titan's Fury #Titans #Perseo #Zeus`,               /*2*/
  `Principe Nuada Fighting #Hellboy #Lizz #Fight`,    /*3*/
  `Tercer Impacto #Neon #Genesis #Evangelion`         /*4*/
];

export const vid_favorites_commonProps = generateExactlyCommonProps({
  profileImageSrc,
  userId,
  username,
  followers,
  followed,
  profileDescription
});

const vid_favorites_videos = generateArrayPostsOfVideos({
  prefixLetterVideos,
  prefixUrl,
  quantityOfVideos,
  userId,
  arrayDescriptionsOfVideos
});

export const vid_favorites_array_of_posts = [
  ...vid_favorites_videos
];
