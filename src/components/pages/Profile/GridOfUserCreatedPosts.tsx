import { useUserCreator, MODE_GRID } from '@/store/useUserCreator';
import { GridOfPosts } from './GridOfPosts';
import type { arrayOfPosts } from '../SliderPosts/types';

export function GridOfUserCreatedPosts() {
  const commonProps = useUserCreator(state => state.commonProps);
  const arrayOfPosts = useUserCreator(state => state.arrayOfPosts);
  const arrayOfCreatedPosts: arrayOfPosts = [[commonProps, arrayOfPosts]];
  return (
    <GridOfPosts
      arrayOfPosts={arrayOfCreatedPosts}
      modeGrid={MODE_GRID.userCreatedPosts}
    />
  );
}
