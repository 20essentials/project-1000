import { useCurrentPage, IS_ACTIVE_BUTTON } from '@/store/useCurrentPage';
import { PUBLIC_DATA } from '@/publicData/amPublicData';
import { PRIVATE_DATA } from '@/privateData/amPrivateData';
import type { arrayOfPosts } from '@/components/pages/SliderPosts/types.d.ts';
import { useUserCreator } from '@/store/useUserCreator';
const FOLLOWED: arrayOfPosts = [...PRIVATE_DATA];
const FOR_YOU: arrayOfPosts = [...PUBLIC_DATA];
const ALL_POSTS = [...FOLLOWED, ...FOR_YOU];

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

  function nextToProfileCreator() {
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
      <img
        src='/assets/plus.png'
        draggable='false'
        alt='Badge'
        className='badge'
      />
    </>
  );
}
