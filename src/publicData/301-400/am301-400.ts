import type { arrayOfPosts } from '@/components/pages/SliderPosts/types';
import {
  alejandroats_array_of_posts,
  alejandroats_commonProps
} from './user-302-alejandroats';
import { nercnews_array_of_posts, nercnews_commonProps } from './user-303-nercnews';
import { seanaiux_array_of_posts, seanaiux_commonProps } from './user-301-seanaiux';
import { soya_jp_array_of_posts, soya_jp_commonProps } from './user-305-soya-jp';
import { visualbricks_array_of_posts, visualbricks_commonProps } from './user-304-visualbricks';
import { angelina_taylor_array_of_posts, angelina_taylor_commonProps } from './user-308-angelina-taylor';
import { design_genie_array_of_posts, design_genie_commonProps } from './user-311-design-genie';

export const PUBLIC_301_400: arrayOfPosts = [
  [seanaiux_commonProps, seanaiux_array_of_posts] /* 301 */,
  [alejandroats_commonProps, alejandroats_array_of_posts] /* 302 */,
  [nercnews_commonProps, nercnews_array_of_posts] /* 303 */,
  [visualbricks_commonProps, visualbricks_array_of_posts] /* 304 */,
  [soya_jp_commonProps, soya_jp_array_of_posts] /* 305 */,

  [angelina_taylor_commonProps, angelina_taylor_array_of_posts] /* 308 */,

  [design_genie_commonProps, design_genie_array_of_posts] /* 311 */,
];
