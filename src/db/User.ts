import type {
  postComonProps,
  postProps,
  arrayOfPosts
} from '@/components/pages/SliderPosts/types';
import {
  generateExactlyCommonProps,
  generateArrayPosts,
  type ArrayContent
} from '@/publicData/functions/amPublicFunctions';
/***** just for testing */
import {
  midudev_commonProps,
  midudev_array_of_posts
} from '@/publicData/user-1-midudev';
import {
  qbitlab_array_of_posts,
  qbitlab_commonProps
} from '@/publicData/user-6-qbitlab';

/***** just for testing */

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

export const user_array_of_saved_posts: arrayOfPosts = [
  [midudev_commonProps, [midudev_array_of_posts[0]]],
  [qbitlab_commonProps, [qbitlab_array_of_posts[0]]]
];

// export const user_array_of_saved_posts = generateArrayPosts({
//   PREFIX,
//   ARRAY_CONTENT
// }).toReversed();

export function getUser({
  userId,
  profileImageSrc,
  username
}: {
  userId: string;
  profileImageSrc: string;
  username: string;
}): [postComonProps, postProps[], arrayOfPosts, (postComonProps & postProps)[]] {
  const user_commonProps = generateExactlyCommonProps({
    profileImageSrc,
    userId,
    username,
    followed: 0,
    followers: 0,
    following: false,
    profileDescription: `I'm Batman`,
    totalLikes: 0
  });

  const flattened_saved_post = user_array_of_saved_posts.flatMap(
    ([commonProps, posts]) =>
      posts.map(post => ({
        ...post,
        ...commonProps
      }))
  );

  // return [user_commonProps, user_array_of_posts, user_array_of_saved_posts, flattened_saved_post];
  return [user_commonProps, [], user_array_of_saved_posts, flattened_saved_post];
}
