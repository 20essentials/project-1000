import type { arrayOfPosts } from '@/components/pages/SliderPosts/types';
import {
  girlchill_naturelovers_array_of_posts,
  girlchill_naturelovers_commonProps
} from './user-202-girlchill-naturelovers';
import {
  ioannishietbrink_array_of_posts,
  ioannishietbrink_commonProps
} from './user-201-ioannishietbrink';
import {
  julienricojr_array_of_posts,
  julienricojr_commonProps
} from './user-203-julienricojr';
import {
  archibible_array_of_posts,
  archibible_commonProps
} from './user-205-archibible';
import {
  hazedisplay_array_of_posts,
  hazedisplay_commonProps
} from './user-208-hazedisplay';

export const PUBLIC_201_300: arrayOfPosts = [
  [ioannishietbrink_commonProps, ioannishietbrink_array_of_posts] /* 201 */,
  [
    girlchill_naturelovers_commonProps,
    girlchill_naturelovers_array_of_posts
  ] /* 202 */,
  [julienricojr_commonProps, julienricojr_array_of_posts] /* 203 */,

  [archibible_commonProps, archibible_array_of_posts] /* 205 */,

  [hazedisplay_commonProps, hazedisplay_array_of_posts] /* 208 */
];
