import { useFollowButtonLogic } from '@/hooks/useFollowButtonLogic';
import { useCurrentUser } from '@/store/useCurrentUser';
import '@/components/pages/ProfileCreator/FollowButton.css';
import { useFollowedAccount, type userId } from '@/store/useFollowedAccount';

export function FollowButton({
  userId,
  classNameExtra = '',
  updateFollowedAccountsIds
}: {
  userId: string;
  classNameExtra?: string;
  updateFollowedAccountsIds?: (arrayOfIds: userId[]) => void;
}) {
  const user = useCurrentUser(state => state.user);
  if (user == null) return null;
  const theUserId = user.id;
  const theCreatorOfThisPostIsTheSameUser = userId === theUserId;
  if (theCreatorOfThisPostIsTheSameUser) return null;
  const getArrayOfFollowedAccounts = useFollowedAccount(state => state.getArrayOfFollowedAccounts)
  const { followThisUser, thisUserIsFollowed } = useFollowButtonLogic({
    userId,
    theCreatorOfThisPostIsTheSameUser
  });
  
  function followOrNOt() {
    followThisUser()
    if (updateFollowedAccountsIds) {
      setTimeout(() => {
        const arrayOfFollowedAccounts = getArrayOfFollowedAccounts()
        updateFollowedAccountsIds(arrayOfFollowedAccounts)
      }, 100)
    }
  }

  const className = `follow-button ${classNameExtra} ${
    thisUserIsFollowed ? 'gray' : 'red'
  }`;

  return (
    <article onClick={followOrNOt} className={className}>
      {thisUserIsFollowed ? 'Followed' : 'Follow'}
    </article>
  );
}
