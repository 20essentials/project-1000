import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

export const vid_favorites_commonProps = generateExactlyCommonProps({
  userId: 'f606a3e9-6aa4-403c-92fa-9ab749a96b96',
  username: 'vid_favorites',
  profileImageSrc:
    'https://20essentials.github.io/project-000-990/assets/o1.avif',
  following: false,
  followers: 41_800,
  totalLikes: 350_720,
  followed: 3,
  profileDescription: 'Simulaciones físicas usando métodos computacionales.'
});

const PREFIX = 'https://20essentials.github.io/project-000-035/videos/';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'n1.mp4',
    tags: ['Zoids', 'Chaotic', 'Century'],
    description: `Zeke Awaken`
  },
  {
    type: 'video',
    videoSrc: 'n2.mp4',
    tags: ['Titans', 'Perseo', 'Zeus'],
    description: `Titan's Fury`
  },
  {
    type: 'video',
    videoSrc: 'n3.mp4',
    tags: ['Hellboy', 'Lizz', 'Fight'],
    description: `Principe Nuada Fighting`
  },
  {
    type: 'video',
    videoSrc: 'n4.mp4',
    tags: ['Neon', 'Genesis', 'Evangelion'],
    description: `Tercer Impacto`
  }
];

export const vid_favorites_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
