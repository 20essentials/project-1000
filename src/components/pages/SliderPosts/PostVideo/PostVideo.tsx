import type {
  postProps,
  postComonProps
} from '@/components/pages/SliderPosts/types.d.ts';
import { Heart } from '@/components/pages/SliderPosts/AsideRight/Heart.tsx';
import { Save } from '@/components/pages/SliderPosts/AsideRight/Save.tsx';
import { Share } from '@/components/pages/SliderPosts/AsideRight/Share.tsx';
import { Comments } from '@/components/pages/SliderPosts/AsideRight/Comments.tsx';
import { baseUrl } from '@/utils/functions';
import { useEffect, useRef, useState } from 'react';
import { PlayButton } from '@/components/pages/SliderPosts/PostVideo/PlayButton';
import { userHasInteracted } from '@/store/userHasInteracted';
import { useLimitOfPost } from '@/store/useLimitOfPosts';
import { UserProfile } from '@/components/pages/SliderPosts/AsideRight/UserProfile';
import { AsideText } from '@/components/pages/SliderPosts/AsideText';
import { SaveContainer } from '../AsideRight/SaveContainer';
import { HeartContainer } from '../AsideRight/HeartContainer';

// interface Props {
//   postCommonProps: postComonProps;
//   postProps: postProps;
//   idx: number;
// }

export function PostVideo(props: postProps & postComonProps & { idx: number }) {
  const hasInteracted = userHasInteracted(state => state.hasInteracted);
  const setUserHasInteracted = userHasInteracted(
    state => state.setUserHasInteracted
  );
  const setLimit = useLimitOfPost(state => state.setLimit);
  const offsetOfPosts = useLimitOfPost(state => state.offsetOfPosts);

  const {
    videoSrc,
    description,
    tags,
    dateOfPublication,
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

  // Mantener refs actualizadas para evitar cierres con valores antiguos
  const hasInteractedRef = useRef(hasInteracted);
  hasInteractedRef.current = hasInteracted;

  const isPausedRef = useRef(isPaused);
  isPausedRef.current = isPaused;

  function playVideo() {
    const video = videoRef.current;
    if (!video) return;
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

  useEffect(() => {
    if (!postVideoRef.current) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (thisPostWillRenderMorePost && !thisPostHasBeenRendered.current) {
            thisPostHasBeenRendered.current = true;
            setLimit(prev => prev + offsetOfPosts);
          }
          if (!hasInteractedRef.current) return;
          entry.target.classList.add('visible');
          if (isPausedRef.current) {
            playVideo();
          }
        } else {
          if (!hasInteractedRef.current) return;
          entry.target.classList.remove('visible');
          if (!isPausedRef.current) pauseVideo();
        }
      });
    });

    observer.observe(postVideoRef.current);

    return () => {
      if (postVideoRef.current) observer.unobserve(postVideoRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <aside className='post-video' ref={postVideoRef}>
      <video src={videoSrc} ref={videoRef} loop onClick={handlePlayVideo}></video>

      {thisPostWillRenderMorePost && <div className='post-image-overlay'></div>}

      <article className='aside-right-buttons'>
        <section className='button-container btn-container-user-profile'>
          <UserProfile profileImageSrc={profileImageSrc} userId={userId} />
        </section>
        {/* <section className='button-container'>
          <Heart />
          <span className='count'>{hearts}</span>
        </section> */}
        <HeartContainer hearts={hearts} post={props} />
        <section className='button-container'>
          <Comments />
          <span className='count'>{comments}</span>
        </section>
        {/* <section className='button-container btn-container-saved'>
          <Save />
          <span className='count'>{saved}</span>
        </section> */}
        <SaveContainer saved={saved} post={props} />
        <section className='button-container'>
          <Share />
          <span className='count'>{shared}</span>
        </section>
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
        username={username}
        description={description}
        tags={tags}
        ref={postVideoRef}
      />

      {isPaused && (
        <PlayButton className='play-btn' handlePlayVideo={handlePlayVideo} />
      )}
    </aside>
  );
}
