import type {
  postComonProps,
  postProps
} from '@/components/pages/SliderPosts/types';
import { generateNumOfAsideRight } from '@/utils/functions';
import { Comments } from '@/components/pages/SliderPosts/AsideRight/Comments';

interface Props {
  post: postProps & postComonProps;
  comments: number;
  updateIsContainerBottomOpen: () => void;
}

export function CommentsContainer({
  comments,
  post,
  updateIsContainerBottomOpen
}: Props) {
  return (
    <section className='button-container' onClick={updateIsContainerBottomOpen}>
      <Comments />
      <span className='count'>{generateNumOfAsideRight(comments)}</span>
    </section>
  );
}
