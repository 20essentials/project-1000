import { IS_ACTIVE_BUTTON, useCurrentPage } from '@/store/useCurrentPage';

export function NumFollowers({
  followersCount = 0
}: {
  followersCount: number | string;
}) {
  const setCurrentPage = useCurrentPage(state => state.setCurrentPage);

  function openFollowersContainer() {
    setCurrentPage(IS_ACTIVE_BUTTON.FOLLOWED_AND_FOLLOW_CONTAINER);
  }

  return (
    <article className='tab-data' onClick={openFollowersContainer}>
      <p className='num'>{followersCount}</p>
      <p className='desc'>Followers</p>
    </article>
  );
}
