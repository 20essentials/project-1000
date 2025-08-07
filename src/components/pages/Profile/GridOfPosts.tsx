import type {
  postProps,
  arrayOfPosts
} from '@/components/pages/SliderPosts/types.d';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import { IS_ACTIVE_BUTTON, useCurrentPage } from '@/store/useCurrentPage';
import {
  MODE_GRID,
  useUserCreator,
  type valueOfMODE_GRID
} from '@/store/useUserCreator';
import { useEffect, useState, useRef } from 'react';
import { TotalViews } from '@/components/pages/ProfileCreator/TotalViews';
import { SqureSubSquare } from '../ProfileCreator/SqureSubSquare';
import { baseUrl } from '@/utils/functions';
const tikTokLoader = baseUrl('/assets/empty-ghost.gif');
const ghostLottie = baseUrl('/assets/empty-ghost.lottie');

export function GridOfPosts({
  arrayOfPosts,
  modeGrid = MODE_GRID.userCreatedPosts
}: {
  arrayOfPosts: [] | arrayOfPosts;
  modeGrid: valueOfMODE_GRID;
}) {
  const [visibleCount, setVisibleCount] = useState(9);

  const flatPostsWithProps = arrayOfPosts.flatMap(([commonProps, posts]) =>
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

  if (arrayOfPosts.length === 0) {
    return (
      <aside
        className='profile-creator-bottom'
        style={{
          overflow: 'hidden'
        }}
        ref={containerRef}
      >
        {/* <img
          draggable='false'
          className='am-loader-tiktok-video'
          src={tikTokLoader}
        /> */}
        <DotLottieReact src={ghostLottie} loop autoplay className='am-loader-tiktok-video' />
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

function PostVideoOrImage({
  post,
  modeGrid = MODE_GRID.userCreatedPosts
}: {
  post: postProps;
  modeGrid: valueOfMODE_GRID;
}) {
  const { videoSrc, arrayImages, totalViewsOfThePost } = post;
  const [poster, setPoster] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const setCurrentPage = useCurrentPage(state => state.setCurrentPage);
  const setIndexOfPost = useUserCreator(state => state.setIndexOfPost);
  const setModeOfGrid = useUserCreator(state => state.setModeOfGrid);

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
    setModeOfGrid(modeGrid);
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
