import type {
  postProps,
  postComonProps
} from '@/components/pages/SliderPosts/types.d.ts';
import { Heart } from '@/components/pages/SliderPosts/AsideRight/Heart.tsx';
import { Save } from '@/components/pages/SliderPosts/AsideRight/Save.tsx';
import { Share } from '@/components/pages/SliderPosts/AsideRight/Share.tsx';
import { Comments } from '@/components/pages/SliderPosts/AsideRight/Comments.tsx';
import { baseUrl } from '@/utils/functions';
import { useRef, useState } from 'react';
import { PlayButton } from '@/components/pages/SliderPosts/PostVideo/PlayButton';

export function PostVideo(props: postProps & postComonProps) {
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
    username
  } = props;

  const [isPaused, setIsPaused] = useState(true);
  const videoRef = useRef<null | HTMLVideoElement>(null);

  function handlePlayVideo() {
    const videoElement = videoRef.current;
    if (videoElement == null) return;
    videoElement.paused 
      ? videoElement.play()
      : videoElement.pause();
    setIsPaused(!isPaused)
  }

  return (
    <aside className='post-video'>
      <video src={videoSrc} ref={videoRef} onClick={handlePlayVideo}></video>

      <article className='aside-right-buttons'>
        <section className='button-container btn-container-user-profile'>
          <img
            className='user-profile'
            draggable='false'
            src={profileImageSrc}
            alt='User Profile'
          />
          <img
            src='/assets/plus.png'
            draggable='false'
            alt='Badge'
            className='badge'
          />
        </section>
        <section className='button-container'>
          <Heart />
          <span className='count'>{hearts}</span>
        </section>
        <section className='button-container'>
          <Comments />
          <span className='count'>{comments}</span>
        </section>
        <section className='button-container'>
          <Save />
          <span className='count'>{saved}</span>
        </section>
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

      <section className='aside-text-and-description'>
        <p>@{username}</p>
        <p>{description}</p>
        <p>
          {tags.map((word, i) => (
            <span key={`letter-${i}`}>#{word}&nbsp;</span>
          ))}
        </p>
      </section>

      {isPaused && (
        <PlayButton className='play-btn' handlePlayVideo={handlePlayVideo} />
      )}
    </aside>
  );
}
