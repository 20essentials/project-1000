import type {
  arrayOfPosts,
  postComonProps
} from '@/components/pages/SliderPosts/types.d.ts';
import { PRIVATE_DATA } from '@/privateData/amPrivateData';
import { PUBLIC_DATA } from '@/publicData/amPublicData';
import { useCurrentUser } from '@/store/useCurrentUser';
import { useUserCreator } from '@/store/useUserCreator';
import { CloseContainer } from './CloseContainer';
const FOLLOWED: arrayOfPosts = [...PRIVATE_DATA];
const FOR_YOU: arrayOfPosts = [...PUBLIC_DATA];
const ALL_POSTS = [...FOLLOWED, ...FOR_YOU];
import { ARRAY_OF_COMMENTS } from '@/utils/arrayOfComments';
import { useState } from 'react';

export function ContainerBottomOfComments({
  totalNumberOfComments,
  updateIsContainerBottomOpen
}: {
  totalNumberOfComments: number;
  updateIsContainerBottomOpen: () => void;
}) {
  const commonProps = useUserCreator(state => state.commonProps);
  const [limit, setLimit] = useState(10);
  // const username = commonProps.username;
  // const user = useCurrentUser(state => state.user);
  const flattenedArrayOfAllPosts = ALL_POSTS.map(el => el[0]);
  const flattenedArrayOfAllPostsCommonProps = flattenedArrayOfAllPosts
    .filter(el => el.userId !== commonProps.userId)
    .slice(0, limit);
  const randomComments = ARRAY_OF_COMMENTS.toSorted(
    () => Math.random() - 0.5
  ).slice(0, limit);

  return (
    <article className='container-bottom-of-comments'>
      <header className='am-header-of-comments'>
        {totalNumberOfComments} comments
        <CloseContainer
          className='close-container-bottom'
          onClick={updateIsContainerBottomOpen}
        />
      </header>
      <section className='am-footer-of-comments'>
        {flattenedArrayOfAllPostsCommonProps.map((amProps, indexOfComment) => {
          const { profileImageSrc, username } = amProps;
          return (
            <aside className='am-comment-of-an-user'>
              <article className='left-am-comments-of-an-user'>
                <img src={profileImageSrc} alt='User Image' />
              </article>
              <article className='right-am-comments-of-an-user'>
                <p className='paraghaph'>{username}</p>
                <p className='paraghaph'>{randomComments[indexOfComment]}</p>
                <footer className='am-footer-of-comments'>
                  <p className='date-of-comment paraghaph'>30-07-25</p>
                  <aside className='heart-of-comment'>
                    <HeartComment className='am-svg am-dislike' />
                  </aside>
                  <aside className='dislike-of-comment'>
                    <DisLikeComment className='am-svg am-dislike' />
                  </aside>
                </footer>
              </article>
            </aside>
          );
        })}
      </section>
    </article>
  );
}

function DisLikeComment({ className }: { className: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      className={className}
    >
      <path
        fill='currentColor'
        d='M1.36 9.495v7.157h3.03l.153.018c2.813.656 4.677 1.129 5.606 1.422c1.234.389 1.694.484 2.531.54c.626.043 1.337-.198 1.661-.528c.179-.182.313-.556.366-1.136a.68.68 0 0 1 .406-.563c.249-.108.456-.284.629-.54c.16-.234.264-.67.283-1.301a.68.68 0 0 1 .339-.57c.582-.337.87-.717.93-1.163c.066-.493-.094-1.048-.513-1.68a.683.683 0 0 1 .176-.936c.401-.282.621-.674.676-1.23c.088-.886-.477-1.541-1.756-1.672a9.4 9.4 0 0 0-3.394.283a.68.68 0 0 1-.786-.95c.5-1.058.778-1.931.843-2.607c.085-.897-.122-1.547-.606-2.083c-.367-.406-.954-.638-1.174-.59c-.29.062-.479.23-.725.818c-.145.348-.215.644-.335 1.335c-.115.656-.178.952-.309 1.34c-.395 1.176-1.364 2.395-2.665 3.236a12 12 0 0 1-2.937 1.37a.7.7 0 0 1-.2.03zm-.042 8.52c-.323.009-.613-.063-.856-.233c-.31-.217-.456-.559-.459-.953l.003-7.323c-.034-.39.081-.748.353-1.014c.255-.25.588-.368.94-.36h2.185A10.5 10.5 0 0 0 5.99 6.95c1.048-.678 1.82-1.65 2.115-2.526c.101-.302.155-.552.257-1.14c.138-.789.224-1.156.422-1.628c.41-.982.948-1.462 1.69-1.623c.73-.158 1.793.263 2.465 1.007c.745.824 1.074 1.855.952 3.129q-.079.82-.454 1.844a10.5 10.5 0 0 1 2.578-.056c2.007.205 3.134 1.512 2.97 3.164c-.072.712-.33 1.317-.769 1.792c.369.711.516 1.414.424 2.1c-.106.79-.546 1.448-1.278 1.959c-.057.693-.216 1.246-.498 1.66a2.9 2.9 0 0 1-.851.834c-.108.684-.335 1.219-.706 1.595c-.615.626-1.714.999-2.718.931c-.953-.064-1.517-.18-2.847-.6c-.877-.277-2.693-.737-5.43-1.377zm1.701-8.831a.68.68 0 0 1 .68-.682a.68.68 0 0 1 .678.682v7.678a.68.68 0 0 1-.679.681a.68.68 0 0 1-.679-.681z'
      />
    </svg>
  );
}

function HeartComment({ className }: { className: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      className={className}
    >
      <path
        fill='currentColor'
        d='m8.962 18.91l.464-.588zM12 5.5l-.54.52a.75.75 0 0 0 1.08 0zm3.038 13.41l.465.59zm-5.612-.588C7.91 17.127 6.253 15.96 4.938 14.48C3.65 13.028 2.75 11.335 2.75 9.137h-1.5c0 2.666 1.11 4.7 2.567 6.339c1.43 1.61 3.254 2.9 4.68 4.024zM2.75 9.137c0-2.15 1.215-3.954 2.874-4.713c1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06C2.786 4.073 1.25 6.425 1.25 9.137zM8.497 19.5c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385c-.453-.264-.922-.628-1.448-1.043zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024c1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.198-.9 3.891-2.188 5.343c-1.315 1.48-2.972 2.647-4.488 3.842zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077c-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596c1.659.759 2.874 2.562 2.874 4.713zm-8.176 9.185c-.526.415-.995.779-1.448 1.043s-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16z'
      />
    </svg>
  );
}
