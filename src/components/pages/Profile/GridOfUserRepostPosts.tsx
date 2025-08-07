import { GridOfPosts } from './GridOfPosts';
import { MODE_GRID } from '@/store/useUserCreator';
import { useUserRepublishPosts } from '@/store/useUserRepublishPosts';

export function GridOfUserRepostPosts() {
  const arrayOfRepublishPosts = useUserRepublishPosts(
    state => state.arrayOfSavedPostOfTheUser
  );


  return (
    <GridOfPosts
      arrayOfPosts={arrayOfRepublishPosts}
      modeGrid={MODE_GRID.userRepublishPosts}
    />
  );
}
