import {
  midudev_array_of_posts,
  midudev_commonProps
} from '@/publicData/user-1-midudev';
import {
  goated_ai_art_array_of_posts,
  goated_ai_art_commonProps
} from '@/publicData/user-2-goated-ai-art';
import type { arrayOfPosts } from '@/components/pages/SliderPosts/types.d.ts';

export const PUBLIC_DATA: arrayOfPosts = [
  [midudev_commonProps, midudev_array_of_posts],
  [goated_ai_art_commonProps, goated_ai_art_array_of_posts]
];
