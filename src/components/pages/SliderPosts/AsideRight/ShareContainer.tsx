import type {
  postComonProps,
  postProps
} from '@/components/pages/SliderPosts/types';
import { formatNumberForDisplay } from "@/utils/functions/formatNumberForDisplay";
import { Share } from '@/components/pages/SliderPosts/AsideRight/Share';

interface Props {
  post: postProps & postComonProps;
  shared: number;
  updateIsContainerShareOpen: () => void;
}

export function ShareContainer({
  shared,
  post,
  updateIsContainerShareOpen
}: Props) {
  return (
    <section className='button-container' onClick={updateIsContainerShareOpen}>
      <Share />
      <span className='count'>{formatNumberForDisplay(shared)}</span>
    </section>
  );
}
