import { useFollowedOrForYou } from '@/store/useFollowedOrForYou';
import { useLimitOfPost } from '@/store/useLimitOfPosts';

export function NavbarTop() {
  const isForYou = useFollowedOrForYou(state => state.isForYou);
  const setForYou = useFollowedOrForYou(state => state.setForYou);
  const followedClass = `navbar-top-button ${isForYou ? '' : 'mode-btn-active'}`;
  const forYouClass = `navbar-top-button ${isForYou ? 'mode-btn-active' : ''} `;
  const setReRenderFollowed = useFollowedOrForYou(
    state => state.setReRenderFollowed
  );
  const setReRenderForYou = useFollowedOrForYou(state => state.setReRenderForYou);
  const reRenderFollowed = useFollowedOrForYou(state => state.reRenderFollowed);
  const reRenderForYou = useFollowedOrForYou(state => state.reRenderForYou);
  // const resetLimit = useLimitOfPost(state => state.resetLimit);

  function renderFollowed() {
    setForYou({ isForYou: false });
    setReRenderFollowed({ reRenderFollowed: !reRenderFollowed });
    // resetLimit();
  }
  function renderForYou() {
    setForYou({ isForYou: true });
    setReRenderForYou({ reRenderForYou: !reRenderForYou });
    // resetLimit();
  }

  return (
    <article className='navbar-top'>
      <button className={followedClass} onClick={renderFollowed}>
        Followed
      </button>
      <button className={forYouClass} onClick={renderForYou}>
        For You
      </button>
    </article>
  );
}
