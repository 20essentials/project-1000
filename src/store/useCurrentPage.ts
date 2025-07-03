import { create } from 'zustand';
import { combine } from 'zustand/middleware';

export const IS_ACTIVE_BUTTON = {
  LOGIN_PAGE: 0,
  HOME: 1,
  SEARCH: 2,
  UPLOAD: 3,
  INBOX: 4,
  PROFILE: 5,
  PROFILE_CREATOR: 6,
  CREATOR_POSTS: 7,
};

const initialState = {
  currenPage: IS_ACTIVE_BUTTON.LOGIN_PAGE
};

export const useCurrentPage = create(
  combine(initialState, set => ({
    setCurrentPage: (currenPage: number) => set({ currenPage })
  }))
);
