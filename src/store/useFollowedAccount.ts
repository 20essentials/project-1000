import { create } from 'zustand';
import type {
  postComonProps
} from '@/components/pages/SliderPosts/types.d.ts';
import { persist } from 'zustand/middleware';

export type userId = postComonProps['userId'];

interface UserLikedPostsState {
  arrayOfFollowedAccounts: userId[];
  addFollowed: ({ userId }: { userId: userId }) => void;
  getArrayOfFollowedAccounts: () => userId[];
  deleteFollowed: ({ userId }: { userId: userId }) => void;
  existThisUserInFollowed: ({ userId }: { userId: userId }) => boolean;
  setArrayOfFollowedAccounts: ({
    arrayOfFollowedAccounts
  }: {
    arrayOfFollowedAccounts: UserLikedPostsState['arrayOfFollowedAccounts'];
  }) => void;
}

export const useFollowedAccount = create<UserLikedPostsState>()(
  persist(
    (set, get) => ({
      arrayOfFollowedAccounts: [],
      setArrayOfFollowedAccounts: ({ arrayOfFollowedAccounts }) => {
        set({ arrayOfFollowedAccounts });
      },
      getArrayOfFollowedAccounts: () => {
          const {
          arrayOfFollowedAccounts
        } = get();

        return window.structuredClone(arrayOfFollowedAccounts);
      },
      addFollowed: ({ userId }) => {
        const {
          existThisUserInFollowed,
          setArrayOfFollowedAccounts,
          arrayOfFollowedAccounts
        } = get();
        if (existThisUserInFollowed({ userId })) return;
        setArrayOfFollowedAccounts({
          arrayOfFollowedAccounts: [...arrayOfFollowedAccounts, userId]
        });
      },
      deleteFollowed: ({ userId }) => {
        const {
          existThisUserInFollowed,
          setArrayOfFollowedAccounts,
          arrayOfFollowedAccounts
        } = get();
        if (!existThisUserInFollowed({ userId })) return;
        setArrayOfFollowedAccounts({
          arrayOfFollowedAccounts: arrayOfFollowedAccounts.filter(
            id => id !== userId
          )
        });
      },
      existThisUserInFollowed: ({ userId }) => {
        const { arrayOfFollowedAccounts } = get();
        return arrayOfFollowedAccounts.includes(userId);
      }
    }),
    {
      name: 'accounts-followed-by-the-user'
    }
  )
);
