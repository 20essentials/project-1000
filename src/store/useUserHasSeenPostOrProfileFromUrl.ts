import { create } from 'zustand';
import { combine } from 'zustand/middleware';

const initialState = {
  userHasSeenPostOrProfileFromUrl: false
};

export const useUserHasSeenPostOrProfileFromUrl = create(
  combine(initialState, (set, get) => ({
    getValueIfUserHasSeenPostOrProfileFromUrl: () => {
      return get().userHasSeenPostOrProfileFromUrl;
    },
    setUserHasSeenPostOrProfileFromUrl: ({
      userHasSeenPostOrProfileFromUrl
    }: {
      userHasSeenPostOrProfileFromUrl: boolean;
    }) => set({ userHasSeenPostOrProfileFromUrl })
  }))
);
