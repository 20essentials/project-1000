import '@/components/pages/Story/Story.css';
import { StoryPostImage } from '@/components/pages/Story/StoryPostImage';
import { StoryPostVideo } from '@/components/pages/Story/StoryPostVideo';
import { useEffect, useRef } from 'react';
import { usePostsOftheStory } from '@/store/usePostsOfTheStory';
import { useSwipeScroll } from '@/hooks/useSwipeScroll';
import { useUserCreator } from '@/store/useUserCreator';
import { useIsScrolling } from '@/store/useIsScrolling';
import { useLimitOfPost } from '@/store/useLimitOfPosts';

export function Story() {
  const arrayOfStoryPosts = usePostsOftheStory(state => state.arrayOfStoryPosts);
  const sliderRef = useRef<HTMLDivElement>(null);
  const indexOfPost = useUserCreator(state => state.indexOfPost);
  const setIsScrolling = useIsScrolling(state => state.setIsScrolling);
  useSwipeScroll(sliderRef);
  const resetLimit = useLimitOfPost(state => state.resetLimit);

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

  useEffect(() => {
    return () => {
      resetLimit();
    };
  }, []);

  return (
    <article className='story-container'>
      <aside className='slider' ref={sliderRef}>
        {arrayOfStoryPosts.map((post, idx) => {
          const key = `post-${idx}`;

          return post.videoSrc ? (
            <StoryPostVideo idx={idx + 1} key={key} {...post} />
          ) : (
            <StoryPostImage idx={idx + 1} key={key} {...post} />
          );
        })}
      </aside>
    </article>
  );
}
