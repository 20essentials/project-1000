import '@/components/pages/SliderPosts/SliderPosts.css';
import { PostImage } from '@/components/pages/SliderPosts/PostImage/PostImage';
import { PostVideo } from '@/components/pages/SliderPosts/PostVideo/PostVideo';
import { useFollowedOrForYou } from '@/store/useFollowedOrForYou';
import { useEffect, useRef } from 'react';
import { useLimitOfPost } from '@/store/useLimitOfPosts';
import { useMemo } from 'react';
import { useGlobalArrayPosts } from '@/store/useGlobalArrayPosts';
import { useSwipeVerticalScroll } from '@/hooks/useSwipeVerticalScroll';

export function SliderPosts() {
  const isForYou = useFollowedOrForYou(state => state.isForYou);
  const FOLLOWED = useGlobalArrayPosts(state => state.FOLLOWED);
  const FOR_YOU = useGlobalArrayPosts(state => state.FOR_YOU);
  const ALL_POSTS = isForYou ? FOR_YOU : FOLLOWED;
  const sliderRef = useRef<HTMLDivElement>(null);
  const limit = useLimitOfPost(state => state.limit);
  const flattenedPosts = useMemo(() => {
    const allPostsShuffled = ALL_POSTS.flatMap(([userCommonProps, userPosts]) =>
      userPosts.map(post => ({ ...post, ...userCommonProps }))
    ).toSorted(() => Math.random() - 0.5);

    const uniquePosts = Array.from(
      new Map(allPostsShuffled.map(post => [post.idPost, post])).values()
    );

    const shuffled = uniquePosts.toSorted(() => Math.random() - 0.5);

    return shuffled;
  }, [ALL_POSTS]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTop = 0;
    }
  }, [isForYou]);

  const postsToShow = flattenedPosts.slice(0, limit);

  useSwipeVerticalScroll(sliderRef)
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
