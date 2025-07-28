import '@/components/pages/Story/Story.css';
import { PostImage } from '@/components/pages/SliderPosts/PostImage/PostImage';
import { PostVideo } from '@/components/pages/SliderPosts/PostVideo/PostVideo';
import { useRef } from 'react';
import { useSwipeVerticalScroll } from '@/hooks/useSwipeVerticalScroll';
import { usePostsOftheStory } from '@/store/usePostsOfTheStory';

export function Story() {
  const arrayOfStoryPosts = usePostsOftheStory(state => state.arrayOfStoryPosts);
  console.log(arrayOfStoryPosts);
  const sliderRef = useRef<HTMLDivElement>(null);

  useSwipeVerticalScroll(sliderRef);

  return (
    <article className='story-container'>
      <aside className='slider' ref={sliderRef}>
        {arrayOfStoryPosts.map((post, idx) => {
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
