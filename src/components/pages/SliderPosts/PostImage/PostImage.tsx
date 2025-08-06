import type {
  postProps,
  postComonProps
} from '@/components/pages/SliderPosts/types.d.ts';
import { baseUrl } from '@/utils/functions';
import { useLimitOfPost } from '@/store/useLimitOfPosts';
import { useEffect, useRef, useState } from 'react';
import { ARRAY_OF_SONGS } from '@/utils/arrayOfSongs';
import { userHasInteracted } from '@/store/userHasInteracted';
import { PlayButton } from '@/components/pages/SliderPosts/PostVideo/PlayButton';
import { UserProfile } from '@/components/pages/SliderPosts/AsideRight/UserProfile';
import { AsideText } from '@/components/pages/SliderPosts/AsideText';
import { SaveContainer } from '@/components/pages/SliderPosts/AsideRight/SaveContainer';
import { HeartContainer } from '@/components/pages/SliderPosts/AsideRight/HeartContainer';
import { useSwipeScroll } from '@/hooks/useSwipeScroll';
import { NumOfPost } from '@/components/pages/SliderPosts/PostImage/NumOfPost';
import { useTrackVisibleImage } from '@/hooks/useTrackVisibleImage';
import { CommentsContainer } from '@/components/pages/SliderPosts/AsideRight/CommentsContainer';
import { ShareContainer } from '@/components/pages/SliderPosts/AsideRight/ShareContainer';
import { useIsScrolling } from '@/store/useIsScrolling';
import { ContainerBottomOfComments } from '../AsideRight/ContainerBottomOfComments';
import { AsideBottomOfShare } from '../AsideRight/AsideBottomOfShare';
import { useUpdateUrlParamsPostVideoOrImage } from '@/hooks/useUpdateUrlParamsPostVideoOrImage';

export function PostImage(props: postProps & postComonProps & { idx: number }) {
  const {
    arrayImages,
    description,
    tags,
    dateOfPublication,
    totalViewsOfThePost,
    hearts,
    comments,
    saved,
    shared,
    username,
    profileImageSrc,
    idx,
    userId,
    idPost
  } = props;

  const arrayImagesLength = arrayImages?.length ?? 0;
  const thisPostWillRenderMorePost = idx % 3 === 0;
  const setLimit = useLimitOfPost(state => state.setLimit);
  const offsetOfPosts = useLimitOfPost(state => state.offsetOfPosts);

  const postImageRef = useRef<HTMLElement | null>(null);
  const layerOfImagesRef = useRef<HTMLElement | null>(null);
  const thisPostHasBeenRendered = useRef(false);
  const isScrolling = useIsScrolling(state => state.isScrolling);
  const [randomSong, setRandomSong] = useState<string | null>(null);

  const [isContainerBottomOpen, setIsContainerBottomOpen] = useState(false);

  function updateIsContainerBottomOpen() {
    setIsContainerBottomOpen(!isContainerBottomOpen);
  }

  useEffect(() => {
    const song =
      ARRAY_OF_SONGS[Math.floor(Math.random() * ARRAY_OF_SONGS.length)];
    setRandomSong(song);
  }, []);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isContainerShareOpen, setIsContainerShareOpen] = useState(false);

  function updateIsContainerShareOpen() {
    setIsContainerShareOpen(!isContainerShareOpen);
  }

  const hasInteracted = userHasInteracted(state => state.hasInteracted);
  const setUserHasInteracted = userHasInteracted(
    state => state.setUserHasInteracted
  );

  const [isPaused, setIsPaused] = useState(true);
  const isPausedRef = useRef(isPaused);
  isPausedRef.current = isPaused;

  const hasInteractedRef = useRef(hasInteracted);
  hasInteractedRef.current = hasInteracted;

  const currentNumImage = useTrackVisibleImage({
    containerRef: layerOfImagesRef,
    imageSelector: 'img.layer-img-inner',
    arrayImages
  });

  function playAudio() {
    const audio = audioRef.current;
    if (!audio) return;
    if (isScrolling) return;
    if (audio.paused) {
      audio.play();
      setIsPaused(false);
    }
  }

  function pauseAudio() {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.paused) {
      audio.pause();
      setIsPaused(true);
    }
  }

  function handleAudioToggle() {
    if (!hasInteractedRef.current) {
      setUserHasInteracted({ hasInteracted: true });
    }

    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPaused(false);
    } else {
      audio.pause();
      setIsPaused(true);
    }
  }

  useEffect(() => {
    const element = postImageRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          useUpdateUrlParamsPostVideoOrImage({
            postId: idPost,
            userId: userId
          });
          if (thisPostWillRenderMorePost && !thisPostHasBeenRendered.current) {
            thisPostHasBeenRendered.current = true;
            setLimit(prev => prev + offsetOfPosts);
          }

          if (!hasInteractedRef.current || isScrolling) return;
          entry.target.classList.add('visible');
          if (isPausedRef.current) playAudio();
        } else {
          if (!hasInteractedRef.current) return;
          entry.target.classList.remove('visible');
          if (!isPausedRef.current) pauseAudio();
        }
      },
      { threshold: 0.9 }
    );

    observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);

      observer.disconnect();
      useUpdateUrlParamsPostVideoOrImage({
        cleanUrl: true
      });
    };
  }, []);

  useSwipeScroll(layerOfImagesRef);

  return (
    <article className='post-image' ref={postImageRef}>
      {randomSong && (
        <audio ref={audioRef} src={randomSong} loop preload='auto' />
      )}

      <section className='layer-1-post-image' ref={layerOfImagesRef}>
        {arrayImages?.map((src, i) => (
          <img
            key={`${idPost}-${i}`}
            src={src}
            className='layer-img-inner'
            alt='image'
            draggable='false'
            onClick={handleAudioToggle}
          />
        ))}
      </section>

      <aside className='layer-2-post-image'>
        <AsideText
          otherClassNames='aside-text-post-image'
          username={username}
          description={description}
          tags={tags}
          ref={postImageRef}
        />

        {isPaused && (
          <PlayButton
            className='play-btn'
            handlePlayVideo={e => {
              e.stopPropagation();
              handleAudioToggle();
            }}
          />
        )}

        {thisPostWillRenderMorePost && <div className='post-image-overlay'></div>}

        <article className='aside-right-buttons aside-right-buttons-postimage'>
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
            shared={shared}
            post={props}
            updateIsContainerShareOpen={updateIsContainerShareOpen}
          />
          <section className='button-container btn-container-vinyl'>
            <img
              className='vinyl'
              src={baseUrl('/assets/vinyl.png')}
              alt='Vinyl'
            />
            <img
              className='user-profile-vinyl'
              draggable='false'
              src={profileImageSrc}
              alt='User Profile'
            />
          </section>
        </article>

        {arrayImagesLength > 1 && (
          <NumOfPost
            arrayImagesLength={arrayImagesLength}
            currentNumImage={currentNumImage}
          />
        )}

        {isContainerBottomOpen && (
          <ContainerBottomOfComments
            totalNumberOfComments={comments}
            updateIsContainerBottomOpen={updateIsContainerBottomOpen}
          />
        )}

        {isContainerShareOpen && (
          <AsideBottomOfShare
            arrayImages={arrayImages}
            username={username}
            containerRef={postImageRef}
            isContainerShareOpen={isContainerShareOpen}
            updateIsContainerShareOpen={updateIsContainerShareOpen}
          />
        )}
      </aside>
    </article>
  );
}
