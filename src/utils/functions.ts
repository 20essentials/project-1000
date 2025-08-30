import type {
  postProps,
  postComonProps
} from '@/components/pages/SliderPosts/types.d.ts';




const commonPropsKeys: (keyof postComonProps)[] = [
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

const postPropsKeys: (keyof postProps)[] = [
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



export function generateTotalNum(num: number) {
  if (num < 99_999) return num;
  if (num >= 100_000 && num <= 999_999) return num.toLocaleString('es-ES');
  if (num >= 1_000_000)
    return `${(num / 1_000_000).toLocaleString('es-ES', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    })} Mln`;
  return 0;
}


