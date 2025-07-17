import { useFollowButtonLogic } from '@/hooks/useFollowButtonLogic';
import { useCurrentUser } from '@/store/useCurrentUser';

export function FollowButton({ userId }: { userId: string }) {
  const user = useCurrentUser(state => state.user);
  if (user == null) return null;
  const theUserId = user.id;
  const theCreatorOfThisPostIsTheSameUser = userId === theUserId;
  const { followThisUser, thisUserIsFollowed } = useFollowButtonLogic({
    userId,
    theCreatorOfThisPostIsTheSameUser
  });
  const className = `follow-button ${thisUserIsFollowed ? 'gray' : 'red'}`;

  return (
    <article onClick={followThisUser} className={className}>
      { thisUserIsFollowed ? 'Unfollow' : 'Follow'}
    </article>
  );
}
