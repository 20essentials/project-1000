import type { arrayOfPosts } from '@/components/pages/SliderPosts/types';
import { akcreationshd_array_of_posts, akcreationshd_commonProps } from './user-401-akcreationshd';
import { canelo_hub_array_of_posts, canelo_hub_commonProps } from './user-407-canelo-hub';

export const PUBLIC_401_500: arrayOfPosts = [
  [akcreationshd_commonProps, akcreationshd_array_of_posts] /* 401 */,

  [canelo_hub_commonProps, canelo_hub_array_of_posts] /* 407 */,
];
