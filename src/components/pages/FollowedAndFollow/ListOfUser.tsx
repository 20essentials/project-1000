import { RowUser } from '@/components/pages/FollowedAndFollow/RowUser';

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
}

const ListOfUsers = ({
  arrayOFAccounts,
  limit,
  updateLimit,
  theUserIsInItsSameProfile,
  theIdOfTheUserThaisYou,
  NUM_OF_ROW_THAT_RENDER_MORE_ROWS
}: ListOfUsersProps) => {

  return (
    <>
      {arrayOFAccounts.slice(0, limit).map((el, index) => {
        const { profileImageSrc, userId, username } = el;
        const thisRowRenderMorePosts =
          (index + 1) % NUM_OF_ROW_THAT_RENDER_MORE_ROWS === 0;

        return (
          <RowUser
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
