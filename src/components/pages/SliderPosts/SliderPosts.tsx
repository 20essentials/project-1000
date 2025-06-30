import '@/components/pages/SliderPosts/SliderPosts.css';
import { PostImage } from '@/components/pages/SliderPosts/PostImage/PostImage';
import { PostVideo } from '@/components/pages/SliderPosts/PostVideo/PostVideo';
import type { arrayOfPosts } from '@/components/pages/SliderPosts/types.d.ts';
import { useFollowedOrForYou } from '@/store/useFollowedOrForYou';
import { useEffect, useRef } from 'react';
import { useLimitOfPost } from '@/store/useLimitOfPosts';
import { useMemo } from 'react';
import { PUBLIC_DATA } from '@/publicData/amPublicData';
import { PRIVATE_DATA } from '@/privateData/amPrivateData';

const FOLLOWED: arrayOfPosts = [...PRIVATE_DATA];
const FOR_YOU: arrayOfPosts = [...PUBLIC_DATA];

export function SliderPosts() {
  const isForYou = useFollowedOrForYou(state => state.isForYou);
  const ALL_POSTS = isForYou ? FOR_YOU : FOLLOWED;
  const sliderRef = useRef<HTMLDivElement>(null);
  const limit = useLimitOfPost(state => state.limit);
  const flattenedPosts = useMemo(() => {
    const allPostsShuffled = ALL_POSTS.flatMap(([userCommonProps, userPosts]) =>
      userPosts.map(post => ({ ...post, ...userCommonProps }))
    ).toSorted(() => Math.random() - 0.5);

    // Eliminar duplicados por id
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
