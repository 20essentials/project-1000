import { IS_ACTIVE_BUTTON, useCurrentPage } from '@/store/useCurrentPage';
import { useNavFollowedOrFollowers } from '@/store/useNavFollowedOrFollowers';

export function NumFollowers({
  followersCount = 0
}: {
  followersCount: number | string;
}) {
  const setCurrentPage = useCurrentPage(state => state.setCurrentPage);
  const setIsFollowedNav = useNavFollowedOrFollowers(
    state => state.setIsFollowedNav
  );

  function openFollowersContainer() {
    setCurrentPage(IS_ACTIVE_BUTTON.FOLLOWED_AND_FOLLOW_CONTAINER);
    setIsFollowedNav({ isNavFollowed: false });
  }

  return (
    <article className='tab-data' onClick={openFollowersContainer}>
      <p className='num'>{followersCount}</p>
      <p className='desc'>Followers</p>
    </article>
  );
}
