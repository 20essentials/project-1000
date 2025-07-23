import { useNavFollowedOrFollowers } from '@/store/useNavFollowedOrFollowers';
import { useEffect } from 'react';

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


  useEffect(() => {
    if (isNavFollowed) showFollowed();
    if (!isNavFollowed) showFollowers();
  }, [isNavFollowed]);

  return (
    <section className='section-nav'>
      <button onClick={showFollowed} className={`followed navi`}>
        Followed
      </button>
      <button onClick={showFollowers} className={`follower navi`}>
        Followers
      </button>
    </section>
  );
}
