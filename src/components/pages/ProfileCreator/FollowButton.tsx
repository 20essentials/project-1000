import { useFollowButtonLogic } from '@/hooks/useFollowButtonLogic';
import { useCurrentUser } from '@/store/useCurrentUser';
import '@/components/pages/ProfileCreator/FollowButton.css';

export function FollowButton({
  userId,
  classNameExtra = ''
}: {
  userId: string;
  classNameExtra?: string;
}) {
  const user = useCurrentUser(state => state.user);
  if (user == null) return null;
  const theUserId = user.id;
  const theCreatorOfThisPostIsTheSameUser = userId === theUserId;
  const { followThisUser, thisUserIsFollowed } = useFollowButtonLogic({
    userId,
    theCreatorOfThisPostIsTheSameUser
  });
  const className = `follow-button ${classNameExtra} ${
    thisUserIsFollowed ? 'gray' : 'red'
  }`;

  return (
    <article onClick={followThisUser} className={className}>
      {thisUserIsFollowed ? 'Followed' : 'Follow'}
    </article>
  );
}
