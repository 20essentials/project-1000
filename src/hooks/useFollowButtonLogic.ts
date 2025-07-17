import { useEffect, useMemo, useState } from "react";
import { useFollowedAccount } from "@/store/useFollowedAccount";

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
    return `badge ${
      theCreatorOfThisPostIsTheSameUser || thisUserIsFollowed
        ? "hiddenBadge"
        : ""
    }`;
  }, [theCreatorOfThisPostIsTheSameUser, thisUserIsFollowed]);

  const followThisUser = () => {
    if (!userId) return;

    if (thisUserIsFollowed) {
      setThisUserIsFollowed(false);
      deleteFollowed({ userId });
    } else {
      setThisUserIsFollowed(true);
      addFollowed({ userId });
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
    thisUserIsFollowed
  };
}
