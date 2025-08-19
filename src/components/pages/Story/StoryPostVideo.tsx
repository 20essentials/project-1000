import type {
  postProps,
  postComonProps
} from '@/components/pages/SliderPosts/types.d.ts';
import { getRandomNumber } from '@/utils/functions';
import { useEffect, useMemo, useRef, useState } from 'react';
import { PlayButton } from '@/components/pages/SliderPosts/PostVideo/PlayButton';
import { userHasInteracted } from '@/store/userHasInteracted';
import { useLimitOfPost } from '@/store/useLimitOfPosts';
import { UserProfile } from '@/components/pages/SliderPosts/AsideRight/UserProfile';
import { HeartContainer } from '@/components/pages/SliderPosts/AsideRight/HeartContainer';
import { InputRange } from '@/components/pages/SliderPosts/PostVideo/inputRange';
import { useIsScrolling } from '@/store/useIsScrolling';
import { CloseStory } from './CloseStory';
import type { TypeAnimateSliderRef } from '@/hooks/useSwipeScrollHorizontalStory';
import {
  updateMetadata,
  videoAddMediaSessionEvents
} from '@/services/MediaSessionApi';

export function StoryPostVideo(
  props: postProps &
    postComonProps & { idx: number } & { animateSlider: TypeAnimateSliderRef }
) {
  const hasInteracted = userHasInteracted(state => state.hasInteracted);
  const setUserHasInteracted = userHasInteracted(
    state => state.setUserHasInteracted
  );
  const setLimit = useLimitOfPost(state => state.setLimit);
  const offsetOfPosts = useLimitOfPost(state => state.offsetOfPosts);
  const isScrolling = useIsScrolling(state => state.isScrolling);

  const {
    videoSrc,
    hearts,
    profileImageSrc,
    username,
    idx,
    userId,
    description,
    animateSlider
  } = props;
  const thisPostWillRenderMorePost = idx % 3 === 0;

  const [isPaused, setIsPaused] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const postVideoRef = useRef<HTMLElement | null>(null);
  const thisPostHasBeenRendered = useRef(false);

  const hasInteractedRef = useRef(hasInteracted);
  hasInteractedRef.current = hasInteracted;

  const isPausedRef = useRef(isPaused);
  isPausedRef.current = isPaused;

  function playVideo() {
    if (isScrolling) return;
    const video = videoRef.current;
    if (!video) return;
    pauseAllOtherVideos(video);

    if (video.paused) {
      video.play();
      setIsPaused(false);
    }
  }

  function pauseVideo() {
    const video = videoRef.current;
    if (!video) return;
    if (!video.paused) {
      video.pause();
      setIsPaused(true);
    }
  }

  function handlePlayVideo() {
    if (!hasInteractedRef.current) {
      setUserHasInteracted({ hasInteracted: true });
    }
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPaused(false);
    } else {
      video.pause();
      setIsPaused(true);
    }
  }

  function pauseAllOtherVideos(currentVideo: HTMLVideoElement) {
    const videos = document.querySelectorAll<HTMLVideoElement>(
      'video.am-video-of-post'
    );
    videos.forEach(video => {
      if (video !== currentVideo && !video.paused) {
        video.pause();
      }
    });
  }

  useEffect(() => {
    if (!postVideoRef.current) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (thisPostWillRenderMorePost && !thisPostHasBeenRendered.current) {
              thisPostHasBeenRendered.current = true;
              setLimit(prev => prev + offsetOfPosts);
            }

            updateMetadata({
              artist: description ?? `Video post from @${username}`,
              title: `@${username}`,
              urlPoster: profileImageSrc
            });

            videoAddMediaSessionEvents({
              videoRef: videoRef,
              postVideoRef: postVideoRef,
              callbackNextTrack: () => {
                animateSlider.current && animateSlider.current(-1);
              },
              callBackPreviousTrack: () => {
                animateSlider.current && animateSlider.current(1);
              }
            });

            if (!hasInteractedRef.current || isScrolling) return;
            entry.target.classList.add('visible');
            if (isPausedRef.current) {
              playVideo();
            }
          } else {
            if (!hasInteractedRef.current) return;

            entry.target.classList.remove('visible');
            if (!isPausedRef.current) {
              pauseVideo();
            }
          }
        });
      },
      { threshold: 0.9 }
    );

    observer.observe(postVideoRef.current);

    return () => {
      if (postVideoRef.current) observer.unobserve(postVideoRef.current);
      observer.disconnect();
    };
  }, []);

  const randomNumOfHours = useMemo(() => {
    return getRandomNumber(1, 23);
  }, []);

  return (
    <aside className='post-video showBackgroundBlackInText ' ref={postVideoRef}>
      <video
        className='am-video-of-post '
        src={videoSrc}
        ref={videoRef}
        loop
        onClick={handlePlayVideo}
      ></video>

      {thisPostWillRenderMorePost && <div className='post-image-overlay'></div>}

      <article className='navbar-user-story'>
        <section className='button-container btn-container-user-profile isClickableInDrag'>
          <UserProfile
            profileImageSrc={profileImageSrc}
            userId={userId}
            otherClassName={'user-profile-story'}
          />
        </section>
        <h2 className='am-username'>
          {username} ·{' '}
          <output className='am-time'>{randomNumOfHours} hours ago</output>
        </h2>
        <CloseStory className='am-x-story-container' />
      </article>

      <HeartContainer
        otherClassName={'am-heart-from-story'}
        hearts={hearts}
        post={props}
      />

      {isPaused && (
        <PlayButton className='play-btn' handlePlayVideo={handlePlayVideo} />
      )}

      <InputRange videoRef={videoRef} otherClassName={'story-input-range'} />
    </aside>
  );
}
