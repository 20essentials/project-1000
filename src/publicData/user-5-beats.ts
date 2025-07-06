import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';

export const beats_commonProps = generateExactlyCommonProps({
  userId: '3f5a6e40-04e1-4387-a0d9-7dc3fd33d7c1',
  username: 'beats',
  profileImageSrc:
    'https://dominicnikolai.github.io/project-192/assets/beats/perfil-foto.avif',
  following: false,
  followers: 436_000,
  totalLikes: 31_000_720,
  followed: 52,
  profileDescription: 'Only nothing'
});

const PREFIX = 'https://dominicnikolai.github.io/project-192/assets/beats/';

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
  }
];

export const beats_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});
