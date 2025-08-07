import { useUserSavedPosts } from '@/store/useUserSavedPosts';
import { GridOfPosts } from './GridOfPosts';
import { MODE_GRID } from '@/store/useUserCreator';

export function GridOfUserSavedPosts() {
  const arrayOfSavedPostOfTheUser = useUserSavedPosts(
    state => state.arrayOfSavedPostOfTheUser
  );

  return (
    <GridOfPosts
      arrayOfPosts={arrayOfSavedPostOfTheUser}
      modeGrid={MODE_GRID.userSavedPosts}
    />
  );
}
