import { useEffect, useRef } from 'react';
import { FollowButton } from '../ProfileCreator/FollowButton';

interface Props {
  profileImageSrc: string;
  username: string;
  userId: string;
  index: string;
  i: number;
  thisRowRenderMorePosts: boolean;
  updateLimit: () => void;
}

export function RowUser({
  userId,
  username,
  profileImageSrc,
  index,
  thisRowRenderMorePosts,
  updateLimit,
  i
}: Props) {
  const indiceTestingClassName = `current-index-testing ${
    thisRowRenderMorePosts ? 'colorado' : ''
  }`;
  const rowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rowRef.current) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (thisRowRenderMorePosts) {
            updateLimit();
            if (rowRef.current)
              observer.unobserve(rowRef?.current);
          }
        }
      });
    });

    observer.observe(rowRef.current);

    return () => {
      if (rowRef.current) observer.unobserve(rowRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <div key={index} className='followed-account-row' ref={rowRef}>
      <aside className='left'>
        <img
          src={profileImageSrc}
          alt={`${username}'s profile`}
          className='profile-image'
        />
        <h4 className='username'>{username}</h4>
      </aside>
      <aside className={indiceTestingClassName}>{i + 1}</aside>
      <FollowButton classNameExtra='followcito' userId={userId} />
    </div>
  );
}
