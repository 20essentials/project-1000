import { useEffect, useMemo, useRef } from 'react';
import { FollowButton } from '@/components/pages/ProfileCreator/FollowButton';
import { useUserCreator } from '@/store/useUserCreator';
import { IS_ACTIVE_BUTTON, useCurrentPage } from '@/store/useCurrentPage';
import { $ } from "@/utils/functions/dom";
import { generateRandomNumber } from "@/utils/functions/generateRandomNumber";
import type { userId } from '@/store/useFollowedAccount';
import { UserCircleStory } from '@/components/pages/SliderPosts/AsideRight/UserCircleStory';
import { UserProfile } from '@/components/pages/SliderPosts/AsideRight//UserProfile';
import { FOLLOWED, FOR_YOU } from '@/publicData/functions/getData';
const ALL_POSTS = [...FOLLOWED, ...FOR_YOU];
const LIMIT_CHARS_USERNAME = 20;

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
  updateFollowedAccountsIds?: (arrayOfIds: userId[]) => void;
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
  updateFollowedAccountsIds,
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

  const thisRowHasStory = useMemo(() => generateRandomNumber(0, 100) > 92, []);

  return (
    <div key={index} className='followed-account-row' ref={rowRef}>
      <aside className='left' >
        {thisRowHasStory ? (
          <UserCircleStory
            profileImageSrc={profileImageSrc}
            username={username}
            userId={userId}
            i={i}
          />
        ) : (
          <UserProfile
            profileImageSrc={profileImageSrc}
            userId={userId}
            otherClassName='profile-in-comments-of-the-user'
          />
        )}
        <h4 className='username' onClick={nextToProfileCreator}>
          {username.length >= LIMIT_CHARS_USERNAME
            ? `${username.slice(0, LIMIT_CHARS_USERNAME)}...`
            : username.slice(0, LIMIT_CHARS_USERNAME)}
        </h4>
      </aside>
      <aside className={indiceTestingClassName}>{i + 1}</aside>
      <FollowButton
        updateFollowedAccountsIds={updateFollowedAccountsIds}
        classNameExtra='followcito'
        userId={userId}
      />
    </div>
  );
}
