import type {
  postProps,
  postComonProps
} from '@/components/pages/SliderPosts/types.d.ts';
import { getRandomNumber } from '@/utils/functions';
import { useLimitOfPost } from '@/store/useLimitOfPosts';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ARRAY_OF_SONGS } from '@/utils/arrayOfSongs';
import { userHasInteracted } from '@/store/userHasInteracted';
import { PlayButton } from '@/components/pages/SliderPosts/PostVideo/PlayButton';
import { UserProfile } from '@/components/pages/SliderPosts/AsideRight/UserProfile';
import { HeartContainer } from '@/components/pages/SliderPosts/AsideRight/HeartContainer';
import { useSwipeScroll } from '@/hooks/useSwipeScroll';
import { NumOfPost } from '@/components/pages/SliderPosts/PostImage/NumOfPost';
import { useTrackVisibleImage } from '@/hooks/useTrackVisibleImage';
import { useIsScrolling } from '@/store/useIsScrolling';
import { CloseX } from '@/components/pages/Story/CloseX';
import { InputRangeAudio } from '@/components/pages/Story/InputRangeAudio';

export function StoryPostImage(
  props: postProps & postComonProps & { idx: number }
) {
  const {
    arrayImages,
    hearts,
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

  const [totalDuration, setTotalDuration] = useState(0);
  const [currentDuration, setCurrentDuration] = useState(0);

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
    return getRandomNumber(1, 23);
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
          <section className='button-container btn-container-user-profile'>
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
          <CloseX className='am-x-story-container' />
        </article>

        <HeartContainer
          otherClassName={'am-heart-from-story'}
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
          otherClassName='story-input-range'
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
