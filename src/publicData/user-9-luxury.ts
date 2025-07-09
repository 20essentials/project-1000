import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

/*
  falsta: userid, profilesrc, prefix
*/

export const luxury_commonProps = generateExactlyCommonProps({
  userId: '',
  username: 'luxury',
  profileImageSrc: '',
  following: false,
  followers: 110_538,
  totalLikes: 258_329,
  followed: 251,
  profileDescription: 'Just for Fun'
});

const PREFIX = '';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    tags: ['cars', 'money'],
    description: `Crypto and Luxury`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    tags: ['travel', 'helicopter'],
    description: `🚁🚁🚁`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    tags: ['life', 'alone'],
    description: `Jungle nights! ✨🌴`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    tags: ['onboarding', 'tour'],
    description: `House ✨`
  },
  {
    type: 'video',
    videoSrc: 'v5.mp4',
    tags: ['mclaren', 'dapox'],
    description: `🤩🤩🤩 `
  },
  {
    type: 'video',
    videoSrc: 'v6.mp4',
    tags: ['gucci', 'padra'],
    description: `Fendi`
  }
];

export const luxury_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
