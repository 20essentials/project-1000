import { formatUsername } from '@/utils/functions';
import type { postComonProps, postProps } from '../SliderPosts/types';
import { useCurrentPage, IS_ACTIVE_BUTTON } from '@/store/useCurrentPage';
import {
  usePostsOftheStory,
  type ArrayOfNavBarHistories
} from '@/store/usePostsOfTheStory';
import { useEffect } from 'react';
const MAX_LENGTH_OF_USERNAME = 10;
export type TypeArrayOfNavBarHistories = (postComonProps & {
  story?: postProps;
})[];

export function ArrayOfNavbarStories({
  arrayOfNavBarHistories
}: {
  arrayOfNavBarHistories: TypeArrayOfNavBarHistories;
}) {
  const setCurrentPage = useCurrentPage(state => state.setCurrentPage);
  const arrayOfPostsOfTheStory = arrayOfNavBarHistories.map(el => ({
    ...el,
    ...el.story
  })) as ArrayOfNavBarHistories;
  const setArrayOfStoryPosts = usePostsOftheStory(
    state => state.setArrayOfStoryPosts
  );

  function goToHistory() {
    setCurrentPage(IS_ACTIVE_BUTTON.STORY);
  }

  useEffect(() => {
    setArrayOfStoryPosts({ arrayOfStoryPosts: arrayOfPostsOfTheStory });
  }, [arrayOfPostsOfTheStory]);

  return arrayOfNavBarHistories.map(
    ({ profileImageSrc, userId, username }, i) => {
      return (
        <aside className='history-container' key={i} onClick={goToHistory}>
          <article className='history-container-circle'>
            <img
              className='history-container-circle-inner'
              src={profileImageSrc}
              alt={`Image Profile of ${username}}`}
            />
          </article>
          <aside className='history-container-description'>
            <h5>{formatUsername(username, MAX_LENGTH_OF_USERNAME)}</h5>
          </aside>
        </aside>
      );
    }
  );
}
