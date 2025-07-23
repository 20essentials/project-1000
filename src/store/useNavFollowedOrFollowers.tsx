import { create } from 'zustand';
import { combine } from 'zustand/middleware';

const initialState = {
  isNavFollowed: true
};

export const useNavFollowedOrFollowers = create(
  combine(initialState, set => ({
    setIsFollowedNav: ({ isNavFollowed }: { isNavFollowed: boolean }) =>
      set({ isNavFollowed })
  }))
);
