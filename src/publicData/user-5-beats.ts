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

export const beats_commonProps = generateExactlyCommonProps({
  userId: '1542a694-886e-4ad7-a750-739da225abc8',
  username: 'beats',
  profileImageSrc: '',
  following: false,
  followers: 436_000,
  totalLikes: 31_000_720,
  followed: 52,
  profileDescription: 'Only nothing'
});

const PREFIX = '';

const ARRAY_CONTENT: ArrayContent = [
  {
    type: 'video',
    videoSrc: 'v1.mp4',
    description: `We Go`
  },
  {
    type: 'video',
    videoSrc: 'v2.mp4',
    description: `12:36`
  },
  {
    type: 'video',
    videoSrc: 'v3.mp4',
    description: `Better`
  },
  {
    type: 'video',
    videoSrc: 'v4.mp4',
    description: `Nope`
  },
];

export const beats_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
