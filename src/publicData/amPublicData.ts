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
import { ars_notoria_array_of_posts, ars_notoria_commonProps } from './user-3-ars-notoria';
import { beats_array_of_posts, beats_commonProps } from './user-5-beats';
import { mr_lamborghini_array_of_posts, mr_lamborghini_commonProps } from './user-4-mr-lamborghini';
import { vid_favorites_array_of_posts, vid_favorites_commonProps } from './user-7-vidfavorites';
import { siti_favolosi_array_of_posts, siti_favolosi_commonProps } from './user-8-siti-favolosi';

export const PUBLIC_DATA: arrayOfPosts = [
  [midudev_commonProps, midudev_array_of_posts],
  [goated_ai_art_commonProps, goated_ai_art_array_of_posts],
  [qbitlab_commonProps, qbitlab_array_of_posts],
  [ars_notoria_commonProps, ars_notoria_array_of_posts],
  [beats_commonProps, beats_array_of_posts],
  [mr_lamborghini_commonProps, mr_lamborghini_array_of_posts],
  [vid_favorites_commonProps, vid_favorites_array_of_posts],
  [siti_favolosi_commonProps, siti_favolosi_array_of_posts]
];
