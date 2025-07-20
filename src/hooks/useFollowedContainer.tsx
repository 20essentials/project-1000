
export function useFollowedContainer({
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

  return {
    showFollowed,
    showFollowers
  };
}
