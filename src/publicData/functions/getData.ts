import { SHOW_PRIVATE_DATA } from 'astro:env/client';
import type { arrayOfPosts } from '@/components/pages/SliderPosts/types';
import { PUBLIC_DATA } from '@/publicData/amPublicData';

let privateData: arrayOfPosts = [];

if (SHOW_PRIVATE_DATA) {
  // const module = await import('@/privateData/amPrivateData');
  // privateData = module.PRIVATE_DATA;
  // privateData = []
}

export const FOLLOWED: arrayOfPosts = [];
export const FOR_YOU: arrayOfPosts = SHOW_PRIVATE_DATA
  ? [...privateData, ...PUBLIC_DATA]
  : [...PUBLIC_DATA]