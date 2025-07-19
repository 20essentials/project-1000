import { useCurrentPage, IS_ACTIVE_BUTTON } from '@/store/useCurrentPage';
import { PRIVATE_DATA } from '@/privateData/amPrivateData';
import { useUserCreator } from '@/store/useUserCreator';
import { PUBLIC_DATA } from '@/publicData/amPublicData';
import type { arrayOfPosts } from '@/components/pages/SliderPosts/types.d.ts';
const FOLLOWED: arrayOfPosts = [...PRIVATE_DATA];
const FOR_YOU: arrayOfPosts = [...PUBLIC_DATA];
const ALL_POSTS = [...FOLLOWED, ...FOR_YOU];

import { useCurrentUser } from '@/store/useCurrentUser';
import { $ } from '@/utils/functions';
import { FollowCircleButton } from '@/components/pages/SliderPosts/AsideRight/FollowCircleButton';

export function UserProfile({
  profileImageSrc,
  userId
}: {
  profileImageSrc: string;
  userId?: string;
}) {
  const setCurrentPage = useCurrentPage(state => state.setCurrentPage);
  const setArrayOfPosts = useUserCreator(state => state.setArrayOfPosts);
  const setCommonProps = useUserCreator(state => state.setCommonProps);
  const user = useCurrentUser(state => state.user);
  if (user == null) return null;
  const theUserId = user.id;
  const theCreatorOfThisPostIsTheSameUser = userId === theUserId

  function nextToProfileCreator() {
    if (theCreatorOfThisPostIsTheSameUser) {
      const $profileUserbutton = $('.wrapper-profile-user') as HTMLElement;
      $profileUserbutton.click();
      return;
    }
    setCurrentPage(IS_ACTIVE_BUTTON.PROFILE_CREATOR);
    const currentUser = ALL_POSTS.find(user => user[0].userId === userId);
    const [commonPropsUser, arrayPosts] = currentUser || ALL_POSTS[0];
    setCommonProps(commonPropsUser);
    setArrayOfPosts(arrayPosts);
  }

  return (
    <>
      <img
        className='user-profile'
        draggable='false'
        src={profileImageSrc}
        onClick={nextToProfileCreator}
        alt='User Profile'
      />
      <FollowCircleButton userId={userId} theCreatorOfThisPostIsTheSameUser={theCreatorOfThisPostIsTheSameUser}/>
    </>
  );
}
