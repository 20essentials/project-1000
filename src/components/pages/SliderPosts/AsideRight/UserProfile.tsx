import { useCurrentPage, IS_ACTIVE_BUTTON } from '@/store/useCurrentPage';
import { useUserCreator } from '@/store/useUserCreator';
import { FOLLOWED, FOR_YOU } from '@/publicData/functions/getData';
import { useCurrentUser } from '@/store/useCurrentUser';
import { $ } from "@/utils/functions/dom";
import { FollowCircleButton } from '@/components/pages/SliderPosts/AsideRight/FollowCircleButton';
const ALL_POSTS = [...FOLLOWED, ...FOR_YOU];

export function UserProfile({
  profileImageSrc,
  userId,
  otherClassName
}: {
  profileImageSrc: string;
  userId?: string;
  otherClassName?: string;
}) {
  const setCurrentPage = useCurrentPage(state => state.setCurrentPage);
  const setArrayOfPosts = useUserCreator(state => state.setArrayOfPosts);
  const setCommonProps = useUserCreator(state => state.setCommonProps);

  const user = useCurrentUser(state => state.user);
  if (user == null) return null;
  const theUserId = user.id;
  const theCreatorOfThisPostIsTheSameUser = userId === theUserId;

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
        className={`user-profile user-profile-circle-img ${otherClassName}`}
        draggable='false'
        src={profileImageSrc}
        onClick={nextToProfileCreator}
        alt='User Profile'
      />
      <FollowCircleButton
        userId={userId}
        theCreatorOfThisPostIsTheSameUser={theCreatorOfThisPostIsTheSameUser}
      />
    </>
  );
}
