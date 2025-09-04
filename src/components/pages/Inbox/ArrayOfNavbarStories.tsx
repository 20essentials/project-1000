import { normalizeUsername } from "@/utils/functions/normalizeUsername";
import type { postComonProps, postProps } from '../SliderPosts/types';
import { useCurrentPage, IS_ACTIVE_BUTTON } from '@/store/useCurrentPage';
import {
  usePostsOftheStory,
  type ArrayOfNavBarHistories
} from '@/store/usePostsOfTheStory';
import { useEffect } from 'react';
import { useUserCreator } from '@/store/useUserCreator';
const MAX_LENGTH_OF_USERNAME = 8;
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
  const setIndexOfPost = useUserCreator(state => state.setIndexOfPost);

  function goToHistory(e: React.MouseEvent) {
    e.preventDefault();
    const historyContainer = (e.target as HTMLElement)
      .parentElement as HTMLElement;
    const parent = historyContainer.closest(
      '.navbar-of-histories-inner'
    ) as HTMLElement;
    const indexStart = [...parent.children].indexOf(historyContainer);
    setIndexOfPost(indexStart);
    setCurrentPage(IS_ACTIVE_BUTTON.STORY);
  }

  useEffect(() => {
    setArrayOfStoryPosts({ arrayOfStoryPosts: arrayOfPostsOfTheStory });
  }, [arrayOfPostsOfTheStory]);

  return arrayOfNavBarHistories
    .map(({ profileImageSrc, userId, username }, i) => {
      return (
        <aside className='history-container' key={i}>
          <article
            className='history-container-circle isClickableInDrag'
            onClick={goToHistory}
          >
            <img
              className='history-container-circle-inner'
              src={profileImageSrc}
              draggable={false}
              alt={`Image Profile of ${username}}`}
            />
          </article>
          <aside className='history-container-description'>
            <h5>{normalizeUsername(username, MAX_LENGTH_OF_USERNAME)}</h5>
          </aside>
        </aside>
      );
    });
}
