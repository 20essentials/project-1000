import type { arrayOfPosts } from '@/components/pages/SliderPosts/types';
import { akcreationshd_array_of_posts, akcreationshd_commonProps } from './user-401-akcreationshd';
import { canelo_hub_array_of_posts, canelo_hub_commonProps } from './user-407-canelo-hub';
import { gzilbalodis_array_of_posts, gzilbalodis_commonProps } from './user-403-gzilbalodis';
import { melkiogram_array_of_posts, melkiogram_commonProps } from './user-406-melkiogram';
import { nbaeurope_array_of_posts, nbaeurope_commonProps } from './user-404-nbaeurope';

export const PUBLIC_401_500: arrayOfPosts = [
  [akcreationshd_commonProps, akcreationshd_array_of_posts] /* 401 */,

  [gzilbalodis_commonProps, gzilbalodis_array_of_posts] /* 403 */,
  [nbaeurope_commonProps, nbaeurope_array_of_posts] /* 404 */,

  [melkiogram_commonProps, melkiogram_array_of_posts] /* 406 */,
  [canelo_hub_commonProps, canelo_hub_array_of_posts] /* 407 */,
];
