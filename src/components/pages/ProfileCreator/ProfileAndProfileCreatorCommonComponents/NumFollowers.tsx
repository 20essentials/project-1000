import { IS_ACTIVE_BUTTON, useCurrentPage } from '@/store/useCurrentPage';
import { useFollowedAccount } from '@/store/useFollowedAccount';
import { useNavFollowedOrFollowers } from '@/store/useNavFollowedOrFollowers';
import { generateTotalNum } from '@/utils/functions';
import { useEffect } from 'react';

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

  const updateNumOfFollowersOfProfileCreator = useFollowedAccount(
    s => s.updateNumOfFollowersOfProfileCreator
  );
  const profileCreatorNumOfFollowers = useFollowedAccount(
    s => s.profileCreatorNumOfFollowers
  );

  useEffect(() => {
    updateNumOfFollowersOfProfileCreator({
      profileCreatorNumOfFollowers: Number(followersCount)
    });
  }, []);

  return (
    <article className='tab-data' onClick={openFollowersContainer}>
      <p className='num'>{generateTotalNum(profileCreatorNumOfFollowers)}</p>
      <p className='desc'>Followers</p>
    </article>
  );
}
