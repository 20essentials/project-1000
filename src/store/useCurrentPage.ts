import { create } from 'zustand';
import { combine } from 'zustand/middleware';

export const IS_ACTIVE_BUTTON = {
  HOME: 1,
  SEARCH: 2,
  UPLOAD: 3,
  INBOX: 4,
  PROFILE: 5,
  PROFILE_CREATOR: 6
};

const initialState = {
  currenPage: 6
};

export const useCurrentPage = create(
  combine(initialState, set => ({
    setCurrentPage: (currenPage: number) => set({ currenPage })
  }))
);
