import { useNavFollowedOrFollowers } from '@/store/useNavFollowedOrFollowers';
import { useEffect, useRef } from 'react';

export function NavFollowedAndFollow({
  followedSection,
  followersSection
}: {
  followedSection: React.RefObject<HTMLElement | null>;
  followersSection: React.RefObject<HTMLElement | null>;
}) {
  const showFollowed = () => {
    followedSection.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const showFollowers = () => {
    followersSection.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const isNavFollowed = useNavFollowedOrFollowers(state => state.isNavFollowed);
  const tabFollowerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isNavFollowed) showFollowed();
    if (!isNavFollowed) showFollowers();
  }, [isNavFollowed]);

  useEffect(() => {
    if (!followedSection.current || !tabFollowerRef.current) return;
    const followedSectionElement = followedSection.current;
    const tabFollowerElement = tabFollowerRef.current;
    const sectionBottomWithScrollX = followedSectionElement.closest(
      '.section-bottom'
    ) as HTMLElement;

    function handleScrollX(e: Event) {
      const target = e.target as HTMLElement;
      const scrollLeft = target.scrollLeft;
      const percentOfScroll = Math.ceil((scrollLeft / target.scrollWidth) * 100);
      tabFollowerElement.style.left = `${Math.floor(scrollLeft / 2)}px`;
      tabFollowerElement.classList.toggle('colorinTab', percentOfScroll >= 25);
    }

    sectionBottomWithScrollX.addEventListener('scroll', handleScrollX);

    return () => {
      sectionBottomWithScrollX.removeEventListener('scroll', handleScrollX);
    };
  }, []);

  return (
    <section className='section-nav'>
      <button onClick={showFollowed} className={`followed navi`}>
        Followed
      </button>
      <button onClick={showFollowers} className={`follower navi`}>
        Followers
      </button>
      <aside className='tab-follower' ref={tabFollowerRef}></aside>
    </section>
  );
}
