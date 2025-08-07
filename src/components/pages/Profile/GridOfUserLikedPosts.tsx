import { GridOfPosts } from './GridOfPosts';
import { userUserLikedPosts } from '@/store/useUserLikedPosts';
import {  MODE_GRID } from '@/store/useUserCreator';

export function GridOfUserLikedPosts() {
  const arrayOfLikedPostsOfTheUser = userUserLikedPosts(
    state => state.arrayOfSavedPostOfTheUser
  );

  return (
    <GridOfPosts
      arrayOfPosts={arrayOfLikedPostsOfTheUser}
      modeGrid={MODE_GRID.userLikedPosts}
    />
  );
}
