import type { arrayOfPosts } from '@/components/pages/SliderPosts/types';
import { useFollowedAccount } from '@/store/useFollowedAccount';

export function useGetArrayOfFollowedAccounts({
  FOR_YOU
}: {
  FOR_YOU: arrayOfPosts;
}) {
  const arrayOfUsersId = useFollowedAccount(s => s.arrayOfFollowedAccounts);
  const arrayOfPosts = arrayOfUsersId.map(userId =>
    FOR_YOU.find(el => el[0].userId === userId)!
  );

  return {
    FOLLOWED: arrayOfPosts.length > 0 ? arrayOfPosts : FOR_YOU,
    showModalThatTheUserDontHaveFollowed: arrayOfUsersId.length === 0
  };
}
