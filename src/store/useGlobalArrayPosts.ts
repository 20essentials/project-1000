import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import type { arrayOfPosts } from '@/components/pages/SliderPosts/types.d.ts';
import { PUBLIC_DATA } from '@/publicData/amPublicData';
import { PRIVATE_DATA } from '@/privateData/amPrivateData';
import { getRandomNumber } from '@/utils/functions';
const FOLLOWED: arrayOfPosts = [...PRIVATE_DATA];
const FOR_YOU: arrayOfPosts = [...PUBLIC_DATA];

const initialState = {
  FOLLOWED,
  FOR_YOU
};

export const useGlobalArrayPosts = create(
  combine(initialState, (set, get) => ({
    setFollowed: ({ FOLLOWED }: { FOLLOWED: arrayOfPosts }) => set({ FOLLOWED }),
    setForYou: ({ FOR_YOU }: { FOR_YOU: arrayOfPosts }) => set({ FOR_YOU }),
    getCommnonPropsAndRandomPostOfAUser: ({ userId }: { userId: string }) => {
      const { FOR_YOU } = get();
      const user = FOR_YOU.find(el => el[0].userId === userId);
      if (user) {
        const [commonProps, arrayOfPosts] = user;
        const randomPost =
          arrayOfPosts[getRandomNumber(0, arrayOfPosts.length - 1)];
        return [{ ...commonProps, ...randomPost }];
      }

      const { FOLLOWED } = get();
      const userOfFollowed = FOLLOWED.find(el => el[0].userId === userId);
      if (userOfFollowed) {
        const [commonProps, arrayOfPosts] = userOfFollowed;
        const randomPost =
          arrayOfPosts[getRandomNumber(0, arrayOfPosts.length - 1)];
        return [{ ...commonProps, ...randomPost }];
      }
    }
  }))
);
