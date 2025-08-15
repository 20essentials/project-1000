import '@/components/pages/SliderPosts/SliderPosts.css';
import { PostImage } from '@/components/pages/SliderPosts/PostImage/PostImage';
import { PostVideo } from '@/components/pages/SliderPosts/PostVideo/PostVideo';
import { useRef, useEffect } from 'react';
import { useLimitOfPost } from '@/store/useLimitOfPosts';
import type { arrayOfPosts } from '@/components/pages/SliderPosts//types';
import { useUserCreator, MODE_GRID } from '@/store/useUserCreator';
import { useUserSavedPosts } from '@/store/useUserSavedPosts';
import { useCurrentUser } from '@/store/useCurrentUser';
import { useSwipeVerticalScroll } from '@/hooks/useSwipeVerticalScroll';
import { IS_ACTIVE_BUTTON, useCurrentPage } from '@/store/useCurrentPage';
import { useIsScrolling } from '@/store/useIsScrolling';
import { userUserLikedPosts } from '@/store/useUserLikedPosts';
import { useUserRepublishPosts } from '@/store/useUserRepublishPosts';
import { useUserCreatedPosts } from '@/store/useUserCreatedPosts';

export function SliderPostsOfSingleUser() {
  const user = useCurrentUser(state => state.user);
  const usernameOfTheUser = user?.username ?? '';
  const commonProps = useUserCreator(state => state.commonProps);
  const modeGrid = useUserCreator(state => state.modeGrid);
  const arrayOfPostsOftheCurrentProfile = useUserCreator(s => s.arrayOfPosts);
  const arrayOfPosts = useUserCreatedPosts(s => s.arrayOfCreatedPostOfTheUser);
  const setCurrentPage = useCurrentPage(state => state.setCurrentPage);
  const arrayOfSavedPostOfTheUser = useUserSavedPosts(
    state => state.arrayOfSavedPostOfTheUser
  );
  const arrayOfLikedPostsOfTheUser = userUserLikedPosts(
    state => state.arrayOfSavedPostOfTheUser
  );
  const arrayOfRepostsPosts = useUserRepublishPosts(
    state => state.arrayOfSavedPostOfTheUser
  );

  const isTheSameuser = commonProps.username === usernameOfTheUser;

  //   console.log({
  //  arrayOfPostsOftheCurrentProfile,
  //  commonProps,
  //  modeGrid,
  //  isTheSameuser
  // })
  const ALL_POSTS: arrayOfPosts = isTheSameuser
    ? (() => {
        if (modeGrid === MODE_GRID.userCreatedPosts) {
          return [[commonProps, arrayOfPosts]];
        } else if (modeGrid === MODE_GRID.userSavedPosts) {
          return arrayOfSavedPostOfTheUser;
        } else if (modeGrid === MODE_GRID.userLikedPosts) {
          return arrayOfLikedPostsOfTheUser;
        } else if (modeGrid === MODE_GRID.userRepublishPosts) {
          return arrayOfRepostsPosts;
        }
        return [[commonProps, arrayOfPostsOftheCurrentProfile]];
      })()
    : [[commonProps, arrayOfPostsOftheCurrentProfile]];
  const sliderRef = useRef<HTMLDivElement>(null);
  const limit = useLimitOfPost(state => state.limit);
  const resetLimit = useLimitOfPost(state => state.resetLimit);
  let flattenedPosts = ALL_POSTS.flatMap(([userCommonProps, userPosts]) =>
    userPosts.map(post => ({ ...post, ...userCommonProps }))
  );
  const indexOfPost = useUserCreator(state => state.indexOfPost);

  useEffect(() => {
    if (
      isTheSameuser &&
      (ALL_POSTS.length === 0 || ALL_POSTS?.[0]?.[1]?.length === 0)
    ) {
      setCurrentPage(IS_ACTIVE_BUTTON.PROFILE);
    }
  }, [isTheSameuser, ALL_POSTS]);

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

  useEffect(() => {
    return () => {
      resetLimit();
    };
  }, []);

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
