import type {
  postProps,
  postComonProps
} from '@/components/pages/SliderPosts/types.d.ts';
import { Heart } from '@/components/pages/SliderPosts/AsideRight/Heart.tsx';
import { Save } from '@/components/pages/SliderPosts/AsideRight/Save.tsx';
import { Share } from '@/components/pages/SliderPosts/AsideRight/Share.tsx';
import { Comments } from '@/components/pages/SliderPosts/AsideRight/Comments.tsx';
import { baseUrl } from '@/utils/functions';
import { useLimitOfPost } from '@/store/useLimitOfPosts';
import { useEffect, useRef } from 'react';

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
    idx
  } = props;

  const arrayImagesLength = arrayImages?.length ?? 0;
  const thisPostWillRenderMorePost = idx % 3 === 0;
  const setLimit = useLimitOfPost(state => state.setLimit);
  const offsetOfPosts = useLimitOfPost(state => state.offsetOfPosts);
  const postImageRef = useRef<HTMLElement | null>(null);
  const thisPostHasBeenRendered = useRef(false);

  function stopAnimation(e: React.MouseEvent) {
    const target = e.target as HTMLElement;
    target.classList.toggle('pausado');
  }

  useEffect(() => {
    const element = postImageRef.current;
    if (!element || !thisPostWillRenderMorePost) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && thisPostWillRenderMorePost) {
        if (thisPostHasBeenRendered.current) return;
        thisPostHasBeenRendered.current = true;
        setLimit(prev => prev + offsetOfPosts);
      }
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [offsetOfPosts, setLimit, thisPostWillRenderMorePost]);

  return (
    <article className='post-image' ref={postImageRef}>
      {arrayImages?.map((src, i) => (
        <section key={i} className='container-img-post'>
          <img src={src} alt='image' draggable='false' onClick={stopAnimation} />

          {arrayImagesLength > 1 && (
            <output className='num-of-post'>
              {i + 1} / {arrayImagesLength}
            </output>
          )}

          {thisPostWillRenderMorePost && (
            <div className='post-image-overlay'></div>
          )}

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

          <section className='aside-text-and-description'>
            <p>@{username}</p>
            {description && <p>{description}</p>}
            {tags && (
              <p>
                {tags.map((word, i) => (
                  <span key={`letter-${i}`}>#{word}&nbsp;</span>
                ))}
              </p>
            )}
          </section>
        </section>
      ))}
    </article>
  );
}
