import { useEffect, useMemo, useState } from 'react';
import { useFollowedAccount } from '@/store/useFollowedAccount';

interface UseFollowButtonLogicParams {
  userId: string | undefined;
  theCreatorOfThisPostIsTheSameUser: boolean;
}

export function useFollowButtonLogic({
  userId,
  theCreatorOfThisPostIsTheSameUser
}: UseFollowButtonLogicParams) {
  const [thisUserIsFollowed, setThisUserIsFollowed] = useState(false);
  const deleteFollowed = useFollowedAccount(state => state.deleteFollowed);
  const addFollowed = useFollowedAccount(state => state.addFollowed);
  const arrayOfFollowedAccounts = useFollowedAccount(
    state => state.arrayOfFollowedAccounts
  );

  const className = useMemo(() => {
    return `badge bagde-of-follow-of-the-user ${
      theCreatorOfThisPostIsTheSameUser || thisUserIsFollowed ? 'hiddenBadge' : ''
    }`;
  }, [theCreatorOfThisPostIsTheSameUser, thisUserIsFollowed]);

  const updateNumOfFollowersOfProfileCreator = useFollowedAccount(
    s => s.updateNumOfFollowersOfProfileCreator
  );

  const followThisUser = () => {
    if (!userId) return;

    if (thisUserIsFollowed) {
      setThisUserIsFollowed(false);
      deleteFollowed({ userId });
      updateNumOfFollowersOfProfileCreator({
        profileCreatorNumOfFollowers: prev => prev - 1
      });
    } else {
      setThisUserIsFollowed(true);
      addFollowed({ userId });
         updateNumOfFollowersOfProfileCreator({
        profileCreatorNumOfFollowers: prev => prev + 1
      });
    }
  };

  useEffect(() => {
    if (!userId) return;
    const isFollowed = arrayOfFollowedAccounts.includes(userId);
    setThisUserIsFollowed(isFollowed);
  }, [arrayOfFollowedAccounts, userId]);

  return {
    className,
    followThisUser,
    thisUserIsFollowed,
    arrayOfFollowedAccounts
  };
}
