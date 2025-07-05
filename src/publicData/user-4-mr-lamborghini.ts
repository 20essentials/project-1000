import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

/*
  falta:

  profileImageSrc
  PREFIX

*/

export const mr_lamborghini_commonProps = generateExactlyCommonProps({
  userId: '459047e6-abb8-481e-bc67-3d7cd1ac9980',
  username: 'mr_lamborghini',
  profileImageSrc: '',
  following: false,
  followers: 73_000,
  totalLikes: 500_380,
  followed: 32,
  profileDescription: '🔥'
});

const PREFIX = '';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    description: `Lamborghini Huracan Evo Grigio Lynx`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    description: `Bentley Flying Spur W12 Peacock`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    description: `Lamborghini Huracan Evo Blue Nethuns`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    description: `Lamborghini Huracan Evo RWD Arancio Borealis`
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    description: `Aventador S Roadster Nero Pegaso`
  },
  {
    type: 'video',
    videoSrc: 'v6.mp4',
    description: `Lamborghini Urus Grigio Nimbus`
  },
  {
    type: 'video',
    videoSrc: 'v7.mp4',
    description: `Lamborghini Huracan Evo Giallo Horus`
  },
  {
    type: 'video',
    videoSrc: 'v8.mp4',
    description: `Lamborghini Huracan Evo Nero Helene`
  },
  {
    type: 'video',
    videoSrc: 'v9.mp4',
    description: `Bentley Continental GTC W12 Camel`
  },
  {
    type: 'video',
    videoSrc: 'v10.mp4',
    description: `Lamborghini Aventador RDS LP700-4`
  }
];

export const mr_lamborghini_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
