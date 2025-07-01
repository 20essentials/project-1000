import '@/components/pages/SliderPosts/SliderPosts.css';
import { PostImage } from '@/components/pages/SliderPosts/PostImage/PostImage';
import { PostVideo } from '@/components/pages/SliderPosts/PostVideo/PostVideo';
import { useFollowedOrForYou } from '@/store/useFollowedOrForYou';
import { useRef, useEffect } from 'react';
import { useLimitOfPost } from '@/store/useLimitOfPosts';
import type { arrayOfPosts } from './types';
import { useUserCreator } from '@/store/useUserCreator';

export function SliderPostsOfSingleUser() {
  const commonProps = useUserCreator(state => state.commonProps);
  const arrayOfPosts = useUserCreator(state => state.arrayOfPosts);
  const ALL_POSTS: arrayOfPosts = [[commonProps, arrayOfPosts]];
  const sliderRef = useRef<HTMLDivElement>(null);
  const limit = useLimitOfPost(state => state.limit);
  const flattenedPosts = ALL_POSTS.flatMap(([userCommonProps, userPosts]) =>
    userPosts.map(post => ({ ...post, ...userCommonProps }))
  );
  const indexOfPost = useUserCreator(state => state.indexOfPost)

  useEffect(() => {
    if (sliderRef.current) {
      // sliderRef.current.scrollTop = 0;
      sliderRef.current.children[indexOfPost].scrollIntoView({ behavior: 'smooth'})
    }
  }, [indexOfPost]);

  const postsToShow = flattenedPosts.slice(0, indexOfPost + limit);

  return (
    <article className='slider-posts'>
      <aside className='slider' ref={sliderRef}>
        {postsToShow.map((post, idx) => {
          const key = `post-${idx}`;

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
