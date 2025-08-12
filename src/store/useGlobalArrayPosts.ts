import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import type { arrayOfPosts } from '@/components/pages/SliderPosts/types.d.ts';
import { getRandomNumber } from '@/utils/functions';
import { FOLLOWED, FOR_YOU } from '@/publicData/functions/getData';

const initialState = {
  FOLLOWED,
  FOR_YOU
};

export const useGlobalArrayPosts = create(
  combine(initialState, (set, get) => ({
    setFollowed: ({ FOLLOWED }: { FOLLOWED: arrayOfPosts }) => set({ FOLLOWED }),
    setForYou: ({ FOR_YOU }: { FOR_YOU: arrayOfPosts }) => set({ FOR_YOU }),
    thisUserExists: ({ userId }: { userId: string }) => {
      const { FOR_YOU } = get();
      const user = FOR_YOU.find(el => el[0].userId === userId);
      return user;
    },
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
    },
    getCommnonPropsAndPostOfAUser: ({
      userId,
      postId
    }: {
      userId: string;
      postId: string;
    }) => {
      const { FOR_YOU } = get();
      const user = FOR_YOU.find(el => el[0].userId === userId);
      if (user) {
        const [commonProps, arrayOfPosts] = user;
        const post = arrayOfPosts.find(el => el.idPost === postId);
        if (!post) return false;
        return { ...commonProps, ...post };
      }

      const { FOLLOWED } = get();
      const userOfFollowed = FOLLOWED.find(el => el[0].userId === userId);
      if (userOfFollowed) {
        const [commonProps, arrayOfPosts] = userOfFollowed;
        const post = arrayOfPosts.find(el => el.idPost === postId);
        if (!post) return false;
        return { ...commonProps, ...post };
      }

      return false;
    }
  }))
);
