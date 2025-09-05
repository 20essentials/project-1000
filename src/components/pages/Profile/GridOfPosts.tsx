import type { arrayOfPosts } from '@/components/pages/SliderPosts/types.d';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { MODE_GRID, type valueOfMODE_GRID } from '@/store/useUserCreator';
import { useEffect, useState, useRef } from 'react';
import { baseURL } from '@/utils/functions/baseURL';
const ghostLottie = baseURL('/assets/empty-ghost.lottie');
import { PostVideoOrImage } from '@/components/pages/Profile/GridPostVideoOrImage';

const INITIAL_VISIBLE = 18;
const INCREMENT = 18;
const ROOT_MARGIN = '400px'; // empieza a cargar mucho antes

export function GridOfPosts({
  arrayOfPosts,
  modeGrid = MODE_GRID.userCreatedPosts
}: {
  arrayOfPosts: [] | arrayOfPosts;
  modeGrid: valueOfMODE_GRID;
}) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const flatPostsWithProps = arrayOfPosts
    .flatMap(([commonProps, posts]) =>
      posts.map(post => ({
        post,
        commonProps
      }))
    )
    .toReversed();

  const containerRef = useRef<HTMLDivElement>(null);
  const lastThreeRefs = useRef<(HTMLDivElement | null)[]>([]);

  const onIntersect: IntersectionObserverCallback = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setVisibleCount(prev =>
          Math.min(prev + INCREMENT, flatPostsWithProps.length)
        );
      }
    });
  };

  useEffect(() => {
    if (visibleCount < flatPostsWithProps.length) {
      const observer = new IntersectionObserver(onIntersect, {
        root: null,
        rootMargin: ROOT_MARGIN,
        threshold: 0.1
      });

      lastThreeRefs.current.forEach(el => {
        if (el) observer.observe(el);
      });

      return () => {
        lastThreeRefs.current.forEach(el => {
          if (el) observer.unobserve(el);
        });
        observer.disconnect();
      };
    }
  }, [visibleCount, flatPostsWithProps.length]);

  const thereIsUserButNotPosts = arrayOfPosts[0]?.[1].length === 0;
  if (arrayOfPosts.length === 0 || thereIsUserButNotPosts) {
    return (
      <aside
        className='profile-creator-bottom'
        style={{
          overflow: 'hidden'
        }}
        ref={containerRef}
      >
        <DotLottieReact
          src={ghostLottie}
          loop
          autoplay
          className='am-loader-tiktok-video'
        />
      </aside>
    );
  }

  return (
    <aside className='profile-creator-bottom scroll-y' ref={containerRef}>
      {flatPostsWithProps.slice(0, visibleCount).map(({ post }, index) => (
        <div
          key={post.idPost}
          ref={el => {
            if (index >= visibleCount - 3) {
              lastThreeRefs.current[index - (visibleCount - 3)] = el;
            }
          }}
        >
          <PostVideoOrImage post={post} modeGrid={modeGrid} />
        </div>
      ))}
    </aside>
  );
}
