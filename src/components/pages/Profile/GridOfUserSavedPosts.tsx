import type {
  postProps,
  postComonProps
} from '@/components/pages/SliderPosts/types.d';
import { IS_ACTIVE_BUTTON, useCurrentPage } from '@/store/useCurrentPage';
import { useUserCreator } from '@/store/useUserCreator';
import { useUserSavedPosts } from '@/store/useUserSavedPosts';
import { useEffect, useState, useRef } from 'react';

export function GridOfUserSavedPosts() {
  const [visibleCount, setVisibleCount] = useState(9);
  const arrayOfSavedPostOfTheUser = useUserSavedPosts(
    state => state.arrayOfSavedPostOfTheUser
  );

  const flatPostsWithProps = arrayOfSavedPostOfTheUser.flatMap(
    ([commonProps, posts]) =>
      posts.map(post => ({
        post,
        commonProps
      }))
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const lastThreeRefs = useRef<(HTMLDivElement | null)[]>([]);

  const onIntersect: IntersectionObserverCallback = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setVisibleCount(prev => Math.min(prev + 9, flatPostsWithProps.length));
      }
    });
  };

  useEffect(() => {
    if (visibleCount < flatPostsWithProps.length) {
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
  }, [visibleCount, flatPostsWithProps.length]);

  return (
    <aside className='profile-creator-bottom' ref={containerRef}>
      {flatPostsWithProps.slice(0, visibleCount).map(({ post, commonProps }, index) => (
        <div
          key={index}
          ref={el => {
            if (index >= visibleCount - 3) {
              lastThreeRefs.current[index - (visibleCount - 3)] = el;
            }
          }}
        >
          <PostVideoOrImage
            post={post}
            commonProps={commonProps}
          />
        </div>
      ))}
    </aside>
  );
}

function PostVideoOrImage({
  post,
  commonProps
}: {
  post: postProps;
  commonProps: postComonProps;
}) {
  const { videoSrc, arrayImages } = post;
  const [poster, setPoster] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const setCurrentPage = useCurrentPage(state => state.setCurrentPage);
  const setIndexOfPost = useUserCreator(state => state.setIndexOfPost);

  useEffect(() => {
    if (!videoSrc) return;

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (containerRef.current) obs.unobserve(containerRef.current);
        }
      },
      {
        root: null,
        threshold: 0.1
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

  function handleGoToHome(e: React.MouseEvent) {
    e.preventDefault();
    const currentContentPost = e.target as HTMLElement;
    const parent = currentContentPost.closest(
      '.profile-creator-bottom'
    ) as HTMLElement;
    const firstParent = currentContentPost.parentElement as HTMLElement;
    const indexStart = [...parent.children].indexOf(firstParent);
    setCurrentPage(IS_ACTIVE_BUTTON.CREATOR_POSTS);
    
    setIndexOfPost(indexStart);
  }

  return (
    <div ref={containerRef} className='content-post' onClick={handleGoToHome}>
      {videoSrc ? (
        <video
          className='square_user_creator profile-creator__video'
          poster={poster ?? ''}
          preload='none'
          controls={false}
          playsInline
        />
      ) : arrayImages && arrayImages.length > 0 ? (
        <img
          className='square_user_creator profile-creator__image'
          src={arrayImages[0]}
          alt='Post image'
        />
      ) : null}
    </div>
  );
}
