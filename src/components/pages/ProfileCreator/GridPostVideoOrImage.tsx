import { IS_ACTIVE_BUTTON, useCurrentPage } from '@/store/useCurrentPage';
import { useUserCreator } from '@/store/useUserCreator';
import { TotalViews } from '@/components/pages/ProfileCreator/TotalViews';
import { useEffect, useState, useRef } from 'react';
import { SqureSubSquare } from '@/components/pages/ProfileCreator/SqureSubSquare';
import type { postProps } from '@/components/pages/SliderPosts/types.d';

export function PostVideoOrImage({ post }: { post: postProps }) {
  const { videoSrc, arrayImages, totalViewsOfThePost } = post;
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
        <>
          <img
            className='square_user_creator profile-creator__image'
            src={arrayImages[0]}
            alt='Post image'
          />
          <SqureSubSquare />
        </>
      ) : null}
      <TotalViews totalViews={totalViewsOfThePost} />
    </div>
  );
}
