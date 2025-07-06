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

export const PUBLIC_DATA: arrayOfPosts = [
  [midudev_commonProps, midudev_array_of_posts],
  [goated_ai_art_commonProps, goated_ai_art_array_of_posts],
  [qbitlab_commonProps, qbitlab_array_of_posts],
  [ars_notoria_commonProps, ars_notoria_array_of_posts]
];
