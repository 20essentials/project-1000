import '@/components/pages/Story/Story.css';
import { PostImage } from '@/components/pages/SliderPosts/PostImage/PostImage';
import { StoryPostVideo } from '@/components/pages/Story/StoryPostVideo';
import { useRef } from 'react';
import { usePostsOftheStory } from '@/store/usePostsOfTheStory';
import { useSwipeScroll } from '@/hooks/useSwipeScroll';

export function Story() {
  const arrayOfStoryPosts = usePostsOftheStory(state => state.arrayOfStoryPosts);
  console.log(arrayOfStoryPosts);
  const sliderRef = useRef<HTMLDivElement>(null);

  useSwipeScroll(sliderRef);

  return (
    <article className='story-container'>
      <aside className='slider' ref={sliderRef}>
        {arrayOfStoryPosts.map((post, idx) => {
          const key = `post-${idx}`;

          return post.videoSrc ? (
            <StoryPostVideo idx={idx + 1} key={key} {...post} />
          ) : (
            <PostImage idx={idx + 1} key={key} {...post} />
          );
        })}
      </aside>
    </article>
  );
}
