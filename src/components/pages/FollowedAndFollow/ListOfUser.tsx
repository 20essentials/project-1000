import { RowUser } from '@/components/pages/FollowedAndFollow/RowUser';
import type { userId } from '@/store/useFollowedAccount';

interface Accounts {
  profileImageSrc: string;
  userId: string;
  username: string;
}

interface ListOfUsersProps {
  arrayOFAccounts: Accounts[];
  limit: number;
  updateLimit: () => void;
  theUserIsInItsSameProfile: boolean;
  theIdOfTheUserThaisYou?: string;
  NUM_OF_ROW_THAT_RENDER_MORE_ROWS: number;
  updateFollowedAccountsIds?: (arrayOfIds: userId[]) => void;
}

const ListOfUsers = ({
  arrayOFAccounts,
  limit,
  updateLimit,
  theUserIsInItsSameProfile,
  theIdOfTheUserThaisYou,
  NUM_OF_ROW_THAT_RENDER_MORE_ROWS,
  updateFollowedAccountsIds
}: ListOfUsersProps) => {

  return (
    <>
      {arrayOFAccounts.slice(0, limit).map((el, index) => {
        const { profileImageSrc, userId, username } = el;
        const thisRowRenderMorePosts =
          (index + 1) % NUM_OF_ROW_THAT_RENDER_MORE_ROWS === 0;

        return (
          <RowUser
          updateFollowedAccountsIds={updateFollowedAccountsIds}
            index={`${userId}-${index}`}
            key={`${userId}-${index}`}
            theIdOfTheUserThaisYou={theIdOfTheUserThaisYou ?? ''}
            profileImageSrc={profileImageSrc}
            userId={userId}
            i={index}
            username={username}
            thisRowRenderMorePosts={thisRowRenderMorePosts}
            updateLimit={updateLimit}
            theUserIsInItsSameProfile={theUserIsInItsSameProfile}
          />
        );
      })}
    </>
  );
};

export { ListOfUsers };
