import type { postComonProps, postProps } from '@/components/pages/SliderPosts/types';
import {
  generateRandomCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/privateData/functions/amPrivateFunctions';

const PREFIX = 'https://mysupercoolprojects.github.io/repo-15/assets/al4ska/';

const ARRAY_CONTENT: ArrayContent = [
  { type: 'image', arrayImages: ['a1.avif'] },
  { type: 'image', arrayImages: ['a2.avif'] },
  { type: 'image', arrayImages: ['a3.avif'] },
  { type: 'image', arrayImages: ['a4.avif'] },
  { type: 'image', arrayImages: ['a5.avif'] },
  { type: 'image', arrayImages: ['a6.avif'] },
  { type: 'image', arrayImages: ['a7.avif'] },
  { type: 'image', arrayImages: ['a8.avif'] },
  { type: 'image', arrayImages: ['a9.avif'] }
];

export const user_array_of_posts = generateArrayPosts({
  PREFIX,
  ARRAY_CONTENT
});

export function getUser({
  userId,
  profileImageSrc,
  username
}: {
  userId: string;
  profileImageSrc: string;
  username: string;
}): [postComonProps, postProps[]] {
  const user_commonProps = generateRandomCommonProps({
    profileImageSrc,
    userId,
    username
  });

  return [user_commonProps, user_array_of_posts];
}
