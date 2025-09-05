import type { postProps } from '@/components/pages/SliderPosts/types.d';
import { useEffect, useState, useRef } from 'react';
import { PostVideoOrImage } from '@/components/pages/ProfileCreator/GridPostVideoOrImage';

export function GridPosts({ arrayOfPosts }: { arrayOfPosts: postProps[] }) {
  const [visibleCount, setVisibleCount] = useState(9);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastThreeRefs = useRef<(HTMLDivElement | null)[]>([]);

  const onIntersect: IntersectionObserverCallback = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setVisibleCount(prev => Math.min(prev + 9, arrayOfPosts.length));
      }
    });
  };

  useEffect(() => {
    if (visibleCount < arrayOfPosts.length) {
      const observer = new IntersectionObserver(onIntersect, {
        root: null,
        rootMargin: '0px',
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
  }, [visibleCount, arrayOfPosts.length]);

  return (
    <aside className='profile-creator-bottom scroll-y' ref={containerRef}>
      {arrayOfPosts.slice(0, visibleCount).map((post, index) => (
        <div
          key={post.idPost}
          ref={el => {
            if (index >= visibleCount - 3) {
              lastThreeRefs.current[index - (visibleCount - 3)] = el;
            }
          }}
        >
          <PostVideoOrImage post={post} />
        </div>
      ))}
    </aside>
  );
}
