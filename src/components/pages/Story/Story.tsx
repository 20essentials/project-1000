import '@/components/pages/Story/Story.css';
import { StoryPostImage } from '@/components/pages/Story/StoryPostImage';
import { StoryPostVideo } from '@/components/pages/Story/StoryPostVideo';
import { useEffect, useRef } from 'react';
import { usePostsOftheStory } from '@/store/usePostsOfTheStory';
import { useUserCreator } from '@/store/useUserCreator';
import { useIsScrolling } from '@/store/useIsScrolling';
import { useLimitOfPost } from '@/store/useLimitOfPosts';
import { useSwipeScrollHorizontalStory } from '@/hooks/useSwipeScrollHorizontalStory';

export function Story() {
  const arrayOfStoryPosts = usePostsOftheStory(state => state.arrayOfStoryPosts);
  const sliderRef = useRef<HTMLDivElement>(null);
  const indexOfPost = useUserCreator(state => state.indexOfPost);
  const setIsScrolling = useIsScrolling(state => state.setIsScrolling);
  const resetLimit = useLimitOfPost(state => state.resetLimit);

  useEffect(() => {
    if (sliderRef.current) {
      const sliderInner = sliderRef.current.querySelector(
        '.slider-inner'
      ) as HTMLElement;
      if (indexOfPost === -1) return;
      setIsScrolling({ isScrolling: true });
      sliderInner.children[indexOfPost].scrollIntoView({
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

  const { animateSlider } = useSwipeScrollHorizontalStory({
    containerOfImagesRef: sliderRef,
    classNameOfTrigger: '.slider-inner'
  });
  return (
    <article className='story-container'>
      <aside className='slider' ref={sliderRef}>
        <aside className='slider-inner'>
          {arrayOfStoryPosts.map((post, idx) => {
            const key = `post-${idx}`;

            return post.videoSrc ? (
              <StoryPostVideo
                animateSlider={animateSlider}
                idx={idx + 1}
                key={key}
                {...post}
              />
            ) : (
              <StoryPostImage animateSlider={animateSlider} idx={idx + 1} key={key} {...post} />
            );
          })}
        </aside>
      </aside>
    </article>
  );
}
