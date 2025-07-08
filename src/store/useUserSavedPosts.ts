import { create } from 'zustand';
import type { postProps, arrayOfPosts } from '@/components/pages/SliderPosts/types.d.ts';

interface UserSavedPostsState {
  arrayOfSavedPostOfTheUser: arrayOfPosts | [];
  setSavePostsOfTheUser: (arrayOfPosts: arrayOfPosts) => void;
}

export const useUserSavedPosts = create<UserSavedPostsState>(set => ({
  arrayOfSavedPostOfTheUser: [],
  setSavePostsOfTheUser: arrayOfSavedPostOfTheUser =>
    set({ arrayOfSavedPostOfTheUser })
}));
