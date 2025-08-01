import { useEffect, useMemo, useRef } from 'react';
import { HeartAndDislikeFooter } from '@/components/pages/SliderPosts/AsideRight/HeartAndDislikeFooter';

import { UserCircleStory } from '@/components/pages/SliderPosts/AsideRight/UserCircleStory';
import { UserProfile } from '@/components/pages/SliderPosts/AsideRight//UserProfile';
import { getRandomNumber } from '@/utils/functions';

export function RowComment({
  indexOfComment,
  profileImageSrc,
  userId,
  username,
  randomComment,
  thisCommenRenderMorePosts,
  updateLimit
}: {
  indexOfComment: number;
  profileImageSrc: string;
  userId: string;
  username: string;
  randomComment: string;
  thisCommenRenderMorePosts: boolean;
  updateLimit: () => void;
}) {
  const commentRowRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!commentRowRef.current || !thisCommenRenderMorePosts) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateLimit();
          if (commentRowRef.current) observer.unobserve(commentRowRef?.current);
        }
      });
    });

    observer.observe(commentRowRef.current);

    return () => {
      if (commentRowRef.current) observer.unobserve(commentRowRef.current);
      observer.disconnect();
    };
  }, []);

  const thisCommentHasStory = useMemo(() => getRandomNumber(0, 100) > 92, []);

  return (
    <aside
      className={`am-comment-of-an-user comment-${indexOfComment + 1}`}
      key={indexOfComment}
      ref={commentRowRef}
    >
      <article className='left-am-comments-of-an-user'>
        {thisCommentHasStory ? (
          <UserCircleStory
            profileImageSrc={profileImageSrc}
            username={username}
            userId={userId}
            i={indexOfComment}
          />
        ) : (
          <UserProfile
            profileImageSrc={profileImageSrc}
            userId={userId}
            otherClassName='profile-in-comments-of-the-user'
          />
        )}
      </article>
      <article className='right-am-comments-of-an-user'>
        <p className='paraghaph'>{username}</p>
        <p className='paraghaph the-comment'>{randomComment}</p>

        <HeartAndDislikeFooter />
      </article>
    </aside>
  );
}
