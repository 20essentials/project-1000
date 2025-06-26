import { midudev_array_of_posts, midudev_commonProps} from '@/publicData/user-1-midudev';
import type {
 arrayOfPosts
} from '@/components/pages/SliderPosts/types.d.ts';

export const PUBLIC_DATA: arrayOfPosts = [
  [midudev_commonProps, midudev_array_of_posts],
  [midudev_commonProps, midudev_array_of_posts.reverse()], //Just for testing purposes
];
