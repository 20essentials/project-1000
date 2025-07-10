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
  'isLiked',
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

export const $ = (el: string) => document.querySelector(el);
export const $$ = (el: string) => document.querySelectorAll(el);

export function baseUrl(path: string) {
  return new URL(path.replace(/^\/+/, ''), import.meta.env.SITE).toString();
}

export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomISODate(
  from: Date = new Date(2000, 0, 1),
  to: Date = new Date()
): string {
  const pad = (n: number) => n.toString().padStart(2, '0');

  const randomDate = new Date(
    from.getTime() + Math.random() * (to.getTime() - from.getTime())
  );

  const year = randomDate.getFullYear();
  const month = pad(randomDate.getMonth() + 1);
  const day = pad(randomDate.getDate());
  const hours = pad(randomDate.getHours());
  const minutes = pad(randomDate.getMinutes());
  const seconds = pad(randomDate.getSeconds());

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}

export function generateTotalNum(num: number) {
  if (num < 99_999) return num;
  if (num >= 100_000 && num <= 999_999) return num.toLocaleString('es-ES');
  if (num >= 1_000_000)
    return `${(num / 1_000_000).toLocaleString('es-ES', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    })} Mln`;
}
