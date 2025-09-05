import type { arrayOfPostProps } from '@/components/pages/SliderPosts/types.d';
import { useEffect, useState, useRef } from 'react';
import { PostVideoOrImage } from '@/components/pages/ProfileCreator/GridPostVideoOrImage';

// config
const INITIAL_VISIBLE = 18; // cuántos posts mostrar de inicio
const INCREMENT = 18; // cuántos cargar cada vez
const ROOT_MARGIN = '400px'; // carga antes (más margen)

export function GridPosts({ arrayOfPosts }: { arrayOfPosts: arrayOfPostProps }) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastThreeRefs = useRef<(HTMLDivElement | null)[]>([]);

  const onIntersect: IntersectionObserverCallback = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setVisibleCount(prev => Math.min(prev + INCREMENT, arrayOfPosts.length));
      }
    });
  };

  useEffect(() => {
    if (visibleCount < arrayOfPosts.length) {
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
