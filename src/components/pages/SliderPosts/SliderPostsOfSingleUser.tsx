import '@/components/pages/SliderPosts/SliderPosts.css';
import { PostImage } from '@/components/pages/SliderPosts/PostImage/PostImage';
import { PostVideo } from '@/components/pages/SliderPosts/PostVideo/PostVideo';
import { useRef, useEffect, useMemo } from 'react';
import { useLimitOfPost } from '@/store/useLimitOfPosts';
import type { arrayOfPosts } from './types';
import { useUserCreator } from '@/store/useUserCreator';
import { useUserSavedPosts } from '@/store/useUserSavedPosts';
import { useCurrentUser } from '@/store/useCurrentUser';
import { useSwipeVerticalScroll } from '@/hooks/useSwipeVerticalScroll';
import { IS_ACTIVE_BUTTON, useCurrentPage } from '@/store/useCurrentPage';
import { useIsScrolling } from '@/store/useIsScrolling';

export function SliderPostsOfSingleUser() {
  const user = useCurrentUser(state => state.user);
  const usernameOfTheUser = user?.username ?? '';
  const commonProps = useUserCreator(state => state.commonProps);
  const arrayOfPosts = useUserCreator(state => state.arrayOfPosts);
  const showSavedPosts = useUserCreator(state => state.showSavedPosts);
  const setCurrentPage = useCurrentPage(state => state.setCurrentPage);
  const arrayOfSavedPostOfTheUser = useUserSavedPosts(
    state => state.arrayOfSavedPostOfTheUser
  );
  const isTheSameuser = commonProps.username === usernameOfTheUser;
  const showSavedPostOfTheCurrentUser = showSavedPosts && isTheSameuser;
  const ALL_POSTS: arrayOfPosts = showSavedPostOfTheCurrentUser
    ? arrayOfSavedPostOfTheUser
    : [[commonProps, arrayOfPosts]];
  const sliderRef = useRef<HTMLDivElement>(null);
  const limit = useLimitOfPost(state => state.limit);
  let flattenedPosts = ALL_POSTS.flatMap(([userCommonProps, userPosts]) =>
    userPosts.map(post => ({ ...post, ...userCommonProps }))
  );
  const indexOfPost = useUserCreator(state => state.indexOfPost);
  const postRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (isTheSameuser && ALL_POSTS.length === 0) {
      setCurrentPage(IS_ACTIVE_BUTTON.PROFILE);
    }
  }, [isTheSameuser, ALL_POSTS.length]);

  // const orderedPosts = useMemo(() => {
  //   const start = flattenedPosts.slice(indexOfPost);
  //   const end = flattenedPosts.slice(0, indexOfPost);
  //   return [...start, ...end];
  // }, [indexOfPost]);

  // const postsToShow = orderedPosts.slice(0, limit);

  const setIsScrolling = useIsScrolling(state => state.setIsScrolling);

  useEffect(() => {
    if (sliderRef.current) {
      setIsScrolling({ isScrolling: true });
      sliderRef.current.children[indexOfPost].scrollIntoView({
        behavior: 'smooth'
      });

      setTimeout(() => {
        setIsScrolling({ isScrolling: false });
      }, 300);
    }
  }, [indexOfPost]);

  const postsToShow = flattenedPosts.slice(0, indexOfPost + limit);

  useSwipeVerticalScroll(sliderRef);

  return (
    <article className='slider-posts'>
      <aside className='slider' ref={sliderRef}>
        {postsToShow.map((post, idx) => {
          const key = `post-${idx}-${idx}`;

          return post.videoSrc ? (
            <PostVideo idx={idx + 1} key={key} {...post} />
          ) : (
            <PostImage idx={idx + 1} key={key} {...post} />
          );
        })}
      </aside>
    </article>
  );
}
