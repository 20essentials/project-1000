import type { arrayOfPosts } from '@/components/pages/SliderPosts/types';
import {
  girlchill_naturelovers_array_of_posts,
  girlchill_naturelovers_commonProps
} from './user-202-girlchill-naturelovers';
import { ioannishietbrink_array_of_posts, ioannishietbrink_commonProps } from './user-201-ioannishietbrink';

export const PUBLIC_201_300: arrayOfPosts = [
  [
    ioannishietbrink_commonProps,
    ioannishietbrink_array_of_posts
  ], /* 201 */
  [
    girlchill_naturelovers_commonProps,
    girlchill_naturelovers_array_of_posts
  ], /* 202 */
];
