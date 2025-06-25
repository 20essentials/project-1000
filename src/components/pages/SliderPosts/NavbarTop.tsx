import { useFollowedOrForYou } from '@/store/useFollowedOrForYou';

export function NavbarTop() {
  const isForYou = useFollowedOrForYou(state => state.isForYou);
  const setForYou = useFollowedOrForYou(state => state.setForYou);
  const followedClass = `navbar-top-button ${isForYou ? '' : 'mode-btn-active'}`;
  const forYouClass = `navbar-top-button ${isForYou ? 'mode-btn-active' : ''} `;

  return (
    <article
      className='navbar-top'
      onClick={() => setForYou({ isForYou: !isForYou })}
    >
      <button className={followedClass}>Followed</button>
      <button className={forYouClass}>For You</button>
    </article>
  );
}
