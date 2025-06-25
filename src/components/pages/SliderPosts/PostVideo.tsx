import type {
  postProps,
  postComonProps
} from '@/components/pages/SliderPosts/types.d.ts';
import { Heart } from '@/components/pages/SliderPosts/AsideRight/Heart.tsx';
import { Save } from '@/components/pages/SliderPosts/AsideRight/Save.tsx';
import { Share } from '@/components/pages/SliderPosts/AsideRight/Share.tsx';
import { Comments } from '@/components/pages/SliderPosts/AsideRight/Comments.tsx';
import { baseUrl } from '@/utils/functions';

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
    profileImageSrc
  } = props;

  return (
    <aside className='post-video'>
      <video src={videoSrc}></video>

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
    </aside>
  );
}
