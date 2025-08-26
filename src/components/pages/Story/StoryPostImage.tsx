import type {
  postProps,
  postComonProps
} from '@/components/pages/SliderPosts/types.d.ts';
import { generateRandomNumber } from "@/utils/functions/generateRandomNumber";
import { useLimitOfPost } from '@/store/useLimitOfPosts';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ARRAY_OF_SONGS } from '@/utils/arrayOfSongs';
import { userHasInteracted } from '@/store/userHasInteracted';
import { PlayButton } from '@/components/pages/SliderPosts/PostVideo/PlayButton';
import { UserProfile } from '@/components/pages/SliderPosts/AsideRight/UserProfile';
import { HeartContainer } from '@/components/pages/SliderPosts/AsideRight/HeartContainer';
import { NumOfPost } from '@/components/pages/SliderPosts/PostImage/NumOfPost';
import { useTrackVisibleImage } from '@/hooks/useTrackVisibleImage';
import { useIsScrolling } from '@/store/useIsScrolling';
import { InputRangeAudio } from '@/components/pages/Story/InputRangeAudio';
import { CloseStory } from './CloseStory';
import type { TypeAnimateSliderRef } from '@/hooks/useSwipeScrollHorizontalStory';
import {
  audioAddMediaSessionEvents,
  updateMetadata
} from '@/services/MediaSessionApi';

export function StoryPostImage(
  props: postProps &
    postComonProps & { idx: number } & { animateSlider: TypeAnimateSliderRef }
) {
  const {
    arrayImages,
    hearts,
    username,
    profileImageSrc,
    idx,
    userId,
    idPost,
    description,
    animateSlider
  } = props;

  // const arrayImagesLength = arrayImages?.length ?? 0;
  const arrayImagesLength = 1;
  const thisPostWillRenderMorePost = idx % 3 === 0;
  const setLimit = useLimitOfPost(state => state.setLimit);
  const offsetOfPosts = useLimitOfPost(state => state.offsetOfPosts);

  const postImageRef = useRef<HTMLElement | null>(null);
  const layerOfImagesRef = useRef<HTMLElement | null>(null);
  const thisPostHasBeenRendered = useRef(false);
  const isScrolling = useIsScrolling(state => state.isScrolling);
  const [randomSong, setRandomSong] = useState<string | null>(null);
  const [currentDuration, setCurrentDuration] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setTotalDuration(Math.floor(audio.duration));
    };

    const handleTimeUpdate = () => {
      setCurrentDuration(Math.floor(audio.currentTime));
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [randomSong]);

  useEffect(() => {
    const song =
      ARRAY_OF_SONGS[Math.floor(Math.random() * ARRAY_OF_SONGS.length)];
    setRandomSong(song);
  }, []);

  const audioRef = useRef<HTMLAudioElement | null>(null);

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
          if (thisPostWillRenderMorePost && !thisPostHasBeenRendered.current) {
            thisPostHasBeenRendered.current = true;
            setLimit(prev => prev + offsetOfPosts);
          }

          updateMetadata({
            artist: description ?? `Image post from @${username}`,
            title: `@${username}`,
            urlPoster: profileImageSrc
          });

          audioAddMediaSessionEvents({
            audioRef: audioRef,
            postImageRef: postImageRef,
            callbackNextTrack: () => {
              animateSlider.current && animateSlider.current(-1);
            },
            callBackPreviousTrack: () => {
              animateSlider.current && animateSlider.current(1);
            }
          });

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
    };
  }, []);

  const randomNumOfHours = useMemo(() => {
    return generateRandomNumber(1, 23);
  }, []);

  return (
    <article className='post-image' ref={postImageRef}>
      {randomSong && (
        <audio ref={audioRef} src={randomSong} loop preload='auto' />
      )}

      <section className='layer-1-post-image ' ref={layerOfImagesRef}>
        <aside className='layer-1-post-image-inner'>
          {arrayImages?.slice(0)?.map((src, i) => (
            <img
              key={`${idPost}-${i}`}
              src={src}
              className='layer-img-inner'
              alt='image'
              draggable='false'
              onClick={handleAudioToggle}
            />
          ))}
        </aside>
      </section>

      <aside className='layer-2-post-image'>
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
          otherClassName={'am-heart-from-story '}
          hearts={hearts}
          post={props}
        />

        {arrayImagesLength > 1 && (
          <NumOfPost
            arrayImagesLength={arrayImagesLength}
            currentNumImage={currentNumImage}
          />
        )}

        <InputRangeAudio
          otherClassName='story-input-range '
          audioRef={audioRef}
          totalDuration={totalDuration}
          currentDuration={currentDuration}
          setCurrentDuration={(newTime: number) => {
            if (audioRef.current) {
              audioRef.current.currentTime = newTime;
            }
          }}
        />
      </aside>
    </article>
  );
}
