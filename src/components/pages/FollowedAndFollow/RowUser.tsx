import { useEffect, useRef } from 'react';
import { FollowButton } from '../ProfileCreator/FollowButton';
import { useUserCreator } from '@/store/useUserCreator';
import { IS_ACTIVE_BUTTON, useCurrentPage } from '@/store/useCurrentPage';
import { PRIVATE_DATA } from '@/privateData/amPrivateData';
import { PUBLIC_DATA } from '@/publicData/amPublicData';
import type { arrayOfPosts } from '../SliderPosts/types';
import { $ } from '@/utils/functions';
const FOLLOWED: arrayOfPosts = [...PRIVATE_DATA];
const FOR_YOU: arrayOfPosts = [...PUBLIC_DATA];
const ALL_POSTS = [...FOLLOWED, ...FOR_YOU];

interface Props {
  profileImageSrc: string;
  username: string;
  userId: string;
  index: string;
  i: number;
  thisRowRenderMorePosts: boolean;
  updateLimit: () => void;
  theUserIsInItsSameProfile: boolean;
  theIdOfTheUserThaisYou: string;
}

export function RowUser({
  userId,
  username,
  profileImageSrc,
  index,
  thisRowRenderMorePosts,
  updateLimit,
  theUserIsInItsSameProfile,
  theIdOfTheUserThaisYou,
  i
}: Props) {
  const indiceTestingClassName = `current-index-testing ${
    thisRowRenderMorePosts ? 'colorado' : ''
  }`;
  const rowRef = useRef<HTMLDivElement | null>(null);
  const setCommonProps = useUserCreator(state => state.setCommonProps);
  const setArrayOfPosts = useUserCreator(state => state.setArrayOfPosts);
  const setCurrentPage = useCurrentPage(state => state.setCurrentPage);

  function nextToProfileCreator() {
    if (theIdOfTheUserThaisYou === userId) {
      const $profileUserbutton = $('.wrapper-profile-user') as HTMLElement;
      $profileUserbutton.click();
      return;
    }
    setCurrentPage(IS_ACTIVE_BUTTON.PROFILE_CREATOR);
    const currentUser = ALL_POSTS.find(
      otherUser => otherUser[0].userId === userId
    );
    const [commonPropsUser, arrayPosts] = currentUser || ALL_POSTS[0];
    setCommonProps(commonPropsUser);
    setArrayOfPosts(arrayPosts);
  }

   useEffect(() => {
    if (!rowRef.current || !thisRowRenderMorePosts) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateLimit();
          if (rowRef.current) observer.unobserve(rowRef?.current);
        }
      });
    });

    observer.observe(rowRef.current);

    return () => {
      if (rowRef.current) observer.unobserve(rowRef.current);
      observer.disconnect();
    };
  }, []);

  
  return (
    <div key={index} className='followed-account-row' ref={rowRef}>
      <aside className='left' onClick={nextToProfileCreator}>
        <img
          src={profileImageSrc}
          alt={`${username}'s profile`}
          className='profile-image'
        />
        <h4 className='username'>{username}</h4>
      </aside>
      <aside className={indiceTestingClassName}>{i + 1}</aside>
      <FollowButton classNameExtra='followcito' userId={userId} />
    </div>
  );
}
