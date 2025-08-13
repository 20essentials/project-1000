import type {
  postComonProps,
  postProps,
  arrayOfPosts
} from '@/components/pages/SliderPosts/types';
import { generateExactlyCommonProps } from '@/publicData/functions/amPublicFunctions';
import { getRandomNumber } from '@/utils/functions';

export const user_array_of_saved_posts: arrayOfPosts = [
  // [midudev_commonProps, [midudev_array_of_posts[0], midudev_array_of_posts[1]]],
];

export const user_array_of_liked_posts: arrayOfPosts = [
  // [midudev_commonProps, [midudev_array_of_posts[0]]]
];

const randomNumOfFollowersFirstTime = getRandomNumber(1000, 100_000);

export function getUser({
  userId,
  profileImageSrc,
  username
}: {
  userId: string;
  profileImageSrc: string;
  username: string;
}): {
  user_commonProps: postComonProps;
  user_array_of_posts: postProps[];
  user_array_of_saved_posts: arrayOfPosts;
  flattened_saved_post: (postComonProps & postProps)[];
  user_array_of_liked_posts: arrayOfPosts;
} {
  const user_commonProps = generateExactlyCommonProps({
    profileImageSrc,
    userId,
    username,
    followed: 0,
    followers: randomNumOfFollowersFirstTime,
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

  return {
    user_commonProps,
    user_array_of_posts: [],
    user_array_of_saved_posts,
    flattened_saved_post,
    user_array_of_liked_posts
  };
}
