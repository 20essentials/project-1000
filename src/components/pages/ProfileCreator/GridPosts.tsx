import type { postProps } from '@/components/pages/SliderPosts/types.d';
import { useEffect, useState, useRef, useCallback } from 'react';

export function GridPosts({ arrayOfPosts }: { arrayOfPosts: postProps[] }) {
  const [visibleCount, setVisibleCount] = useState(9); // inicialmente 9 posts visibles
  const containerRef = useRef<HTMLDivElement>(null);
  const [observedIndexes, setObservedIndexes] = useState<number[]>([]);

  // Referencias para los últimos 3 posts visibles
  const lastThreeRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Callback para IntersectionObserver de los últimos 3 posts visibles
  const onIntersect: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Cuando algún post de los últimos 3 entra en viewport, agregamos 9 más
        setVisibleCount((prev) =>
          Math.min(prev + 9, arrayOfPosts.length)
        );
      }
    });
  };

  useEffect(() => {
    if (visibleCount < arrayOfPosts.length) {
      const observer = new IntersectionObserver(onIntersect, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      });

      // Observamos los últimos 3 posts visibles
      lastThreeRefs.current.forEach((el) => {
        if (el) observer.observe(el);
      });

      return () => {
        lastThreeRefs.current.forEach((el) => {
          if (el) observer.unobserve(el);
        });
        observer.disconnect();
      };
    }
  }, [visibleCount, arrayOfPosts.length]);

  return (
    <aside className="profile-creator-bottom" ref={containerRef}>
      {arrayOfPosts.slice(0, visibleCount).map((post, index) => (
        <div
          key={index}
          ref={(el) => {
            // Guardar referencia solo para los últimos 3 visibles
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

function PostVideoOrImage({ post }: { post: postProps }) {
  const { videoSrc, arrayImages } = post;
  const [poster, setPoster] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!videoSrc) return;

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (containerRef.current) obs.unobserve(containerRef.current); // Dejar de observar
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [videoSrc]);

  useEffect(() => {
    if (videoSrc && isVisible && !poster) {
      const video = document.createElement('video');
      video.src = videoSrc;
      video.crossOrigin = 'anonymous';
      video.preload = 'metadata';
      video.muted = true;

      video.addEventListener('loadeddata', () => {
        video.currentTime = 0.1;
      });

      video.addEventListener('seeked', () => {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const imgUrl = canvas.toDataURL('image/png');
          setPoster(imgUrl);
        }
      });

      return () => {
        video.src = '';
        video.load();
      };
    }
  }, [videoSrc, isVisible, poster]);

  return (
    <div ref={containerRef} className='content-post'>
      {videoSrc ? (
        <video
          className="square_user_creator profile-creator__video"
          poster={poster ?? ''}
          preload="none"
          controls={false}
          playsInline
        />
      ) : arrayImages && arrayImages.length > 0 ? (
        <img
          className="square_user_creator profile-creator__image"
          src={arrayImages[0]}
          alt="Post image"
        />
      ) : null}
    </div>
  );
}
