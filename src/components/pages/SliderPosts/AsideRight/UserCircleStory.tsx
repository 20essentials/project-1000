import { IS_ACTIVE_BUTTON, useCurrentPage } from '@/store/useCurrentPage';
import {
  usePostsOftheStory,
  type ArrayOfNavBarHistories
} from '@/store/usePostsOfTheStory';
import { useGlobalArrayPosts } from '@/store/useGlobalArrayPosts';
import { useUserCreator } from '@/store/useUserCreator';

export function UserCircleStory({
  profileImageSrc,
  username,
  userId,
  i
}: {
  profileImageSrc: string;
  username: string;
  userId: string;
  i: number;
}) {
  const setArrayOfStoryPosts = usePostsOftheStory(
    state => state.setArrayOfStoryPosts
  );
  const getCommnonPropsAndRandomPostOfAUser = useGlobalArrayPosts(
    state => state.getCommnonPropsAndRandomPostOfAUser
  );
  const setCurrentPage = useCurrentPage(state => state.setCurrentPage);
  const setIndexOfPost = useUserCreator(state => state.setIndexOfPost);

  function goToHistory(e: React.MouseEvent) {
    e.preventDefault();
    const arrayOfNavBarStories = getCommnonPropsAndRandomPostOfAUser({
      userId
    }) as ArrayOfNavBarHistories;
    setArrayOfStoryPosts({ arrayOfStoryPosts: arrayOfNavBarStories });
    setCurrentPage(IS_ACTIVE_BUTTON.STORY);
    setIndexOfPost(0);
  }

  return (
    <aside className='history-container' key={i} onClick={goToHistory}>
      <article className='history-container-circle'>
        <img
          className='history-container-circle-inner'
          src={profileImageSrc}
          draggable={false}
          alt={`Image Profile of ${username}}`}
        />
      </article>
    </aside>
  );
}
