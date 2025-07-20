import { IS_ACTIVE_BUTTON, useCurrentPage } from '@/store/useCurrentPage';


export function NumFollowed({
  followedCount = 0
}: {
  followedCount: number | string;
}) {
  const setCurrentPage = useCurrentPage(state => state.setCurrentPage);

  function openFollowedContainer() {
    setCurrentPage(IS_ACTIVE_BUTTON.FOLLOWED_AND_FOLLOW_CONTAINER);
  }

  return (
    <article className='tab-data' onClick={openFollowedContainer}>
      <p className='num'>{followedCount}</p>
      <p className='desc'>Followed</p>
    </article>
  );
}
