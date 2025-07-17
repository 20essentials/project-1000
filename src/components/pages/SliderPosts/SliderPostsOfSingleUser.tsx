import '@/components/pages/SliderPosts/SliderPosts.css';
import { PostImage } from '@/components/pages/SliderPosts/PostImage/PostImage';
import { PostVideo } from '@/components/pages/SliderPosts/PostVideo/PostVideo';
import { useRef, useEffect } from 'react';
import { useLimitOfPost } from '@/store/useLimitOfPosts';
import type { arrayOfPosts } from './types';
import { useUserCreator } from '@/store/useUserCreator';
import { useUserSavedPosts } from '@/store/useUserSavedPosts';
import { useCurrentUser } from '@/store/useCurrentUser';
import { useSwipeVerticalScroll } from '@/hooks/useSwipeVerticalScroll';

export function SliderPostsOfSingleUser() {
  const user = useCurrentUser(state => state.user);
  const usernameOfTheUser = user?.username ?? '';
  const commonProps = useUserCreator(state => state.commonProps);
  const arrayOfPosts = useUserCreator(state => state.arrayOfPosts);
  const showSavedPosts = useUserCreator(state => state.showSavedPosts);
  const arrayOfSavedPostOfTheUser = useUserSavedPosts(
    state => state.arrayOfSavedPostOfTheUser
  );
  const ALL_POSTS: arrayOfPosts =
    showSavedPosts && (commonProps.username === usernameOfTheUser)
      ? arrayOfSavedPostOfTheUser
      : [[commonProps, arrayOfPosts]];
  const sliderRef = useRef<HTMLDivElement>(null);
  const limit = useLimitOfPost(state => state.limit);
  const flattenedPosts = ALL_POSTS.flatMap(([userCommonProps, userPosts]) =>
    userPosts.map(post => ({ ...post, ...userCommonProps }))
  );
  const indexOfPost = useUserCreator(state => state.indexOfPost);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.children[indexOfPost].scrollIntoView({
        behavior: 'smooth'
      });
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
