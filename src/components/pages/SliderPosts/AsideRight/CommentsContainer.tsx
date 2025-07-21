import type {
  postComonProps,
  postProps
} from '@/components/pages/SliderPosts/types';
import { generateNumOfAsideRight } from '@/utils/functions';
import { Comments } from './Comments';

interface Props {
  post: postProps & postComonProps;
  comments: number;
}

export function CommentsContainer({ comments, post }: Props) {
  return (
    <section className='button-container'>
      <Comments />
      <span className='count'>{generateNumOfAsideRight(comments)}</span>
    </section>
  );
}
