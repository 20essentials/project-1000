import {
  generateExactlyCommonProps,
  generateArrayPostsOfVideos
} from '@/publicData/functions/amPublicFunctions';

const username = 'favorite_videos';
const userId = 'f606a3e9-6aa4-403c-92fa-9ab749a96b96';
const prefixUrl = 'https://20essentials.github.io/project-000-035/videos/';
const followers = 41_800;
const followed = 324;
const profileDescription = 'My Favorite Videos';
const profileImageSrc =
  'https://20essentials.github.io/project-000-035/assets/p3rfil.avif';
const prefixLetterVideos = 'n'; 
const quantityOfVideos = 10;

/* prettier-ignore */
const arrayDescriptionsOfVideos = [
  `Zeke Awaken #Zoids #Chaotic #Century`,             /*1*/
  `Titan's Fury #Titans #Perseo #Zeus`,               /*2*/
  `Principe Nuada Fighting #Hellboy #Lizz #Fight`,    /*3*/
  `Tercer Impacto #Neon #Genesis #Evangelion`,         /*4*/
  `Princess & The Popstar Official Music Video`,         /*5*/
  `Marinera - Clausura De Los Panamericanos Toronto 2015`,         /*6*/
  `Zootopia (2016) - Arriving (Try Everything)`,         /*7*/
  `Zombies on Your Lawn MUSIC VIDEO`,         /*8*/
  `Mortals x Mortals [edit audio] - @xandy`,         /*9*/
  `The Dark Knight - Like A Dog Chasing Cars`,         /*10*/
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

export const vid_favorites_array_of_posts = [...vid_favorites_videos];
