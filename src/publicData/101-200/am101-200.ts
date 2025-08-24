import type { arrayOfPosts } from '@/components/pages/SliderPosts/types.d.ts';
import { abhayaiart_array_of_posts, abhayaiart_commonProps } from './user-103-abhayaiart';
import { quentin_fx_array_of_posts, quentin_fx_commonProps } from './user-102-quentin-fx';
import { monster_trucks_array_of_posts, monster_trucks_commonProps } from './user-101-monster-trucks';


export const PUBLIC_101_200: arrayOfPosts = [
  [monster_trucks_commonProps, monster_trucks_array_of_posts] /* 101 */,
  [quentin_fx_commonProps, quentin_fx_array_of_posts] /* 102 */,
  [abhayaiart_commonProps, abhayaiart_array_of_posts] /* 103 */,
]