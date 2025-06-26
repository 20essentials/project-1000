import '@/components/pages/SliderPosts/SliderPosts.css';
import { PostImage } from '@/components/pages/SliderPosts/PostImage.tsx';
import { PostVideo } from '@/components/pages/SliderPosts/PostVideo/PostVideo';
import type { arrayOfPosts } from '@/components/pages/SliderPosts/types.d.ts';
import { useFollowedOrForYou } from '@/store/useFollowedOrForYou';
import { PRIVATE_DATA } from '@/privateData/amPrivateData';
import { PUBLIC_DATA } from '@/publicData/amPublicData';
import { useEffect, useRef } from 'react';
import { useLimitOfPost } from '@/store/useLimitOfPosts';

const FOLLOWED: arrayOfPosts = [...PRIVATE_DATA];
const FOR_YOU: arrayOfPosts = [...PUBLIC_DATA];

export function SliderPosts() {
  const isForYou = useFollowedOrForYou(state => state.isForYou);
  const ALL_POSTS = isForYou ? FOR_YOU : FOLLOWED;
  const sliderRef = useRef<HTMLDivElement>(null);
  const limit = useLimitOfPost(state => state.limit);
  const setLimit = useLimitOfPost(state => state.setLimit);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTop = 0;
    }
  }, [isForYou]);

  const flattenedPosts = ALL_POSTS.flatMap(([userCommonProps, userPosts]) =>
    userPosts.map(post => ({ ...post, ...userCommonProps }))
  );

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
