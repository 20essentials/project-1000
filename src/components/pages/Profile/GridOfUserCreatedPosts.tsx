import { useUserCreator, MODE_GRID } from '@/store/useUserCreator';
import { GridOfPosts } from './GridOfPosts';
import type { arrayOfPosts } from '../SliderPosts/types';
import { useUserCreatedPosts } from '@/store/useUserCreatedPosts';

export function GridOfUserCreatedPosts() {
  const commonProps = useUserCreator(state => state.commonProps);
  const arrayOfCreatedPostOfTheUser = useUserCreatedPosts(
    state => state.arrayOfCreatedPostOfTheUser
  );
  const arrayOfCreatedPosts: arrayOfPosts = [
    [commonProps, arrayOfCreatedPostOfTheUser]
  ];
  return (
    <GridOfPosts
      arrayOfPosts={arrayOfCreatedPosts}
      modeGrid={MODE_GRID.userCreatedPosts}
    />
  );
}
