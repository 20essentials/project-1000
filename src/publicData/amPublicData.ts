import {
  midudev_array_of_posts,
  midudev_commonProps
} from '@/publicData/user-1-midudev';
import {
  goated_ai_art_array_of_posts,
  goated_ai_art_commonProps
} from '@/publicData/user-2-goated-ai-art';
import type { arrayOfPosts } from '@/components/pages/SliderPosts/types.d.ts';
import { qbitlab_array_of_posts, qbitlab_commonProps } from './user-6-qbitlab';
import {
  ars_notoria_array_of_posts,
  ars_notoria_commonProps
} from './user-3-ars-notoria';
import { beats_array_of_posts, beats_commonProps } from './user-5-beats';
import {
  mr_lamborghini_array_of_posts,
  mr_lamborghini_commonProps
} from './user-4-mr-lamborghini';
import {
  vid_favorites_array_of_posts,
  vid_favorites_commonProps
} from './user-7-vidfavorites';
import {
  siti_favolosi_array_of_posts,
  siti_favolosi_commonProps
} from './user-8-siti-favolosi';
import { luxury_array_of_posts, luxury_commonProps } from './user-9-luxury';
import {
  marshall_jassan_array_of_posts,
  marshall_jassan_commonProps
} from './user-10-marshall-jassan';
import {
  edaserkanbolat_edits_array_of_posts,
  edaserkanbolat_edits_commonProps
} from './user-11-edaserkanbolat-edits';
import {
  jorgepomarg_array_of_posts,
  jorgepomarg_commonProps
} from './user-12-jorgepomarg';
import { lucia_sora_array_of_posts, lucia_sora_commonProps } from './user-13-luciasora';
import { elcodigobravo_array_of_posts, elcodigobravo_commonProps } from './user-14-elcodigo-bravo';
import { mr_rombus_array_of_posts, mr_rombus_commonProps } from './user-15-mr-rombus';

//Este ya no lo quiero:
// [beats_commonProps, beats_array_of_posts],

export const PUBLIC_DATA: arrayOfPosts = [
  [midudev_commonProps, midudev_array_of_posts],
  [qbitlab_commonProps, qbitlab_array_of_posts],
  [mr_rombus_commonProps, mr_rombus_array_of_posts]
  // [elcodigobravo_commonProps, elcodigobravo_array_of_posts],
  // [lucia_sora_commonProps, lucia_sora_array_of_posts]
  // [luxury_commonProps, luxury_array_of_posts],
  // [marshall_jassan_commonProps, marshall_jassan_array_of_posts],
  // [edaserkanbolat_edits_commonProps, edaserkanbolat_edits_array_of_posts]
  // [jorgepomarg_commonProps, jorgepomarg_array_of_posts],
  // [goated_ai_art_commonProps, goated_ai_art_array_of_posts],
  // [ars_notoria_commonProps, ars_notoria_array_of_posts],
  // [mr_lamborghini_commonProps, mr_lamborghini_array_of_posts],
  // [vid_favorites_commonProps, vid_favorites_array_of_posts],
  // [siti_favolosi_commonProps, siti_favolosi_array_of_posts]
];
