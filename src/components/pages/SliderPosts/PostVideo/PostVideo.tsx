import type {
  postProps,
  postComonProps
} from '@/components/pages/SliderPosts/types.d.ts';
import { baseUrl } from '@/utils/functions';
import { useEffect, useRef, useState } from 'react';
import { PlayButton } from '@/components/pages/SliderPosts/PostVideo/PlayButton';
import { userHasInteracted } from '@/store/userHasInteracted';
import { useLimitOfPost } from '@/store/useLimitOfPosts';
import { UserProfile } from '@/components/pages/SliderPosts/AsideRight/UserProfile';
import { AsideText } from '@/components/pages/SliderPosts/AsideText';
import { SaveContainer } from '@/components/pages/SliderPosts/AsideRight/SaveContainer';
import { HeartContainer } from '@/components/pages/SliderPosts/AsideRight/HeartContainer';
import { InputRange } from '@/components/pages/SliderPosts/PostVideo/inputRange';
import { CommentsContainer } from '@/components/pages/SliderPosts/AsideRight/CommentsContainer';
import { ShareContainer } from '@/components/pages/SliderPosts/AsideRight/ShareContainer';
import { useIsScrolling } from '@/store/useIsScrolling';
import { ContainerBottomOfComments } from '../AsideRight/ContainerBottomOfComments';
import { AsideBottomOfShare } from '../AsideRight/AsideBottomOfShare';

export function PostVideo(props: postProps & postComonProps & { idx: number }) {
  const hasInteracted = userHasInteracted(state => state.hasInteracted);
  const setUserHasInteracted = userHasInteracted(
    state => state.setUserHasInteracted
  );
  const setLimit = useLimitOfPost(state => state.setLimit);
  const offsetOfPosts = useLimitOfPost(state => state.offsetOfPosts);
  const isScrolling = useIsScrolling(state => state.isScrolling);
  const [isContainerBottomOpen, setIsContainerBottomOpen] = useState(false);

  function updateIsContainerBottomOpen() {
    setIsContainerBottomOpen(!isContainerBottomOpen);
  }

  const [isContainerShareOpen, setIsContainerShareOpen] = useState(false);

  function updateIsContainerShareOpen() {
    setIsContainerShareOpen(!isContainerShareOpen);
  }

  const {
    videoSrc,
    description,
    tags,
    totalViewsOfThePost,
    hearts,
    comments,
    saved,
    shared,
    profileImageSrc,
    username,
    idx,
    userId
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

  return (
    <aside className='post-video' ref={postVideoRef}>
      <video
        className='am-video-of-post'
        src={videoSrc}
        ref={videoRef}
        loop
        onClick={handlePlayVideo}
      ></video>

      {thisPostWillRenderMorePost && <div className='post-image-overlay'></div>}

      <article className='aside-right-buttons aside-right-buttons-postvideo'>
        <section className='button-container btn-container-user-profile'>
          <UserProfile profileImageSrc={profileImageSrc} userId={userId} />
        </section>
        <HeartContainer hearts={hearts} post={props} />
        <CommentsContainer
          updateIsContainerBottomOpen={updateIsContainerBottomOpen}
          comments={comments}
          post={props}
        />
        <SaveContainer saved={saved} post={props} />
        <ShareContainer
          updateIsContainerShareOpen={updateIsContainerShareOpen}
          shared={shared}
          post={props}
        />
        <section className='button-container btn-container-vinyl'>
          <img className='vinyl' src={baseUrl('/assets/vinyl.png')} alt='Vinyl' />
          <img
            className='user-profile-vinyl'
            draggable='false'
            src={profileImageSrc}
            alt='User Profile'
          />
        </section>
      </article>

      <AsideText
        otherClassNames='aside-text-post-video'
        username={username}
        description={description}
        tags={tags}
        ref={postVideoRef}
      />

      {isPaused && (
        <PlayButton className='play-btn' handlePlayVideo={handlePlayVideo} />
      )}

      <InputRange videoRef={videoRef} />

      {isContainerBottomOpen && (
        <ContainerBottomOfComments
          totalNumberOfComments={comments}
          updateIsContainerBottomOpen={updateIsContainerBottomOpen}
        />
      )}

      {isContainerShareOpen && (
        <AsideBottomOfShare
          updateIsContainerShareOpen={updateIsContainerShareOpen}
        />
      )}
    </aside>
  );
}
