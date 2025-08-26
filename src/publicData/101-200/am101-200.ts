import type { arrayOfPosts } from '@/components/pages/SliderPosts/types.d.ts';
import {
  abhayaiart_array_of_posts,
  abhayaiart_commonProps
} from './user-103-abhayaiart';
import {
  quentin_fx_array_of_posts,
  quentin_fx_commonProps
} from './user-102-quentin-fx';
import {
  monster_trucks_array_of_posts,
  monster_trucks_commonProps
} from './user-101-monster-trucks';
import {
  eatmovies_array_of_posts,
  eatmovies_commonProps
} from './user-109-eatmovies';
import {
  budderscopes_array_of_posts,
  budderscopes_commonProps
} from './user-105-budderscopes';
import {
  flip_happygallery_array_of_posts,
  flip_happygallery_commonProps
} from './user-107-flip-happygallery';
import { gmorfx_array_of_posts, gmorfx_commonProps } from './user-108-gmorfx';
import { jay_tracing_array_of_posts, jay_tracing_commonProps } from './user-106-jaytracing';

export const PUBLIC_101_200: arrayOfPosts = [
  [monster_trucks_commonProps, monster_trucks_array_of_posts] /* 101 */,
  [quentin_fx_commonProps, quentin_fx_array_of_posts] /* 102 */,
  [abhayaiart_commonProps, abhayaiart_array_of_posts] /* 103 */,

  [budderscopes_commonProps, budderscopes_array_of_posts] /* 105 */,
  [jay_tracing_commonProps, jay_tracing_array_of_posts] /* 106 */,
  [flip_happygallery_commonProps, flip_happygallery_array_of_posts] /* 107 */,
  [gmorfx_commonProps, gmorfx_array_of_posts] /* 108 */,
  [eatmovies_commonProps, eatmovies_array_of_posts] /* 109 */
];
