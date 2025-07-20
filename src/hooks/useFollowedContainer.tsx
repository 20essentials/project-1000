import { useState } from 'react';

export function useFollowedContainer({
  isFollowed = true,
  followedSection,
  followersSection
}: {
  isFollowed: boolean;
  followedSection: React.RefObject<HTMLElement | null>;
  followersSection: React.RefObject<HTMLElement | null>;
}) {
  const [isFollowedSection, setIsFollowedSection] = useState(isFollowed);
  const followedClass = `followed navi ${isFollowedSection ? 'navi-active' : ''}`;
  const followersClass = `followed navi ${
    isFollowedSection ? '' : 'navi-active'
  }`;

  const showFollowed = () => {
    setIsFollowedSection(true);
    followedSection.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const showFollowers = () => {
    setIsFollowedSection(false);
    followersSection.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return {
    followedClass,
    followersClass,
    showFollowed,
    showFollowers
  };
}
