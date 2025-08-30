import type {
  postProps,
  postComonProps
} from '@/components/pages/SliderPosts/types.d.ts';

export function baseUrl(path: string) {
  return new URL(path.replace(/^\/+/, ''), import.meta.env.SITE).toString();
}

const MAX_DURATION_OF_VIDEO = 10 * 60; // 10 minutos en segundos
export const validateVideoDuration = (file: File): Promise<boolean> => {
  return new Promise(resolve => {
    const url = URL.createObjectURL(file);
    const video = document.createElement('video');
    video.preload = 'metadata';
    video.src = url;
    video.onloadedmetadata = () => {
      URL.revokeObjectURL(url);
      resolve(video.duration <= MAX_DURATION_OF_VIDEO);
    };
    video.onerror = () => {
      URL.revokeObjectURL(url);
      resolve(false); // no válido si no se puede cargar el video
    };
  });
};

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

export function modEspecial(left: number, right: number) {
  return left < right ? left % right : right;
}

export function formatUsername(rawUsername: string, maxLength: number): string {
  const username = rawUsername.split('_')[0];
  return username.length >= maxLength
    ? `${username.slice(0, maxLength - 3)}...`
    : username;
}

export const $ = (el: string) => document.querySelector(el);
export const $$ = (el: string) => document.querySelectorAll(el);

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


