import { useUploadVideoOrImages } from '@/store/useUploadVideoOrImages';
import { useUserCreatedPosts } from '@/store/useUserCreatedPosts';
import type { postProps } from '../SliderPosts/types';
import { $, generateRandomISODate, getRandomNumber } from '@/utils/functions';

export function PublishKeyCap() {
  const srcVideo = useUploadVideoOrImages(s => s.srcVideo);
  const arrayImages = useUploadVideoOrImages(s => s.arrayImages);
  const descriptionPost = useUploadVideoOrImages(s => s.descriptionPost);
  const addCreatedPost = useUserCreatedPosts(s => s.addCreatedPost);

  function addThisPost() {
    if (!srcVideo && arrayImages.length === 0) return;
    const post: postProps = {
      videoSrc: srcVideo ?? undefined,
      arrayImages: arrayImages,
      description: descriptionPost ?? undefined,
      tags: undefined,
      dateOfPublication: generateRandomISODate(),
      totalViewsOfThePost: getRandomNumber(58_000, 930_000),
      hearts: getRandomNumber(1000, 500_000),
      comments: getRandomNumber(3, 999),
      saved: getRandomNumber(80, 5000),
      isSaved: false,
      shared: getRandomNumber(200, 9000),
      isLiked: false,
      idPost: crypto.randomUUID()
    };
    addCreatedPost(post);

    let timer = setTimeout(() => {
      const $userProfileButton = $('.wrapper-logo.wrapper-profile-user') as  HTMLElement;
      $userProfileButton.click();
      clearTimeout(timer);
    }, 20);
  }

  return (
    <article className='keycap' onClick={addThisPost}>
      <aside className='letter'>
        Publish
        <svg fill='none' viewBox='0 0 24 24' className='enter-icon'>
          <path
            strokeLinejoin='round'
            strokeLinecap='round'
            strokeWidth='2'
            stroke='white'
            d='M3 12L9 18M3 12L9 6M3 12H21'
          ></path>
        </svg>
      </aside>
    </article>
  );
}
