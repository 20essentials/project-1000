import type {
  postProps,
  postComonProps
} from '@/components/pages/SliderPosts/types.d.ts';

export const commonPropsKeys: (keyof postComonProps)[] = [
  'followed',
  'followers',
  'following',
  'profileDescription',
  'profileImageSrc',
  'totalLikes',
  'userId',
  'username'
];

export function getCommonpropsFromProps(
  post: postProps & postComonProps
): postComonProps {
  return Object.fromEntries(
    Object.entries(post).filter(([key]) =>
      commonPropsKeys.includes(key as keyof postComonProps)
    )
  ) as postComonProps;
}

export const postPropsKeys: (keyof postProps)[] = [
  'arrayImages',
  'comments',
  'dateOfPublication',
  'description',
  'hearts',
  'idPost',
  'isSaved',
  'saved',
  'shared',
  'tags',
  'totalViewsOfThePost',
  'videoSrc',
  'isLiked'
];

export function getPostpropsFromProps(
  post: postProps & postComonProps
): postProps {
  return Object.fromEntries(
    Object.entries(post).filter(([key]) =>
      postPropsKeys.includes(key as keyof postProps)
    )
  ) as postProps;
}
