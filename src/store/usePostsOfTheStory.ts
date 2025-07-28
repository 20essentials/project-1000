import type {
  postComonProps,
  postProps
} from '@/components/pages/SliderPosts/types';
import { create } from 'zustand';

export type ArrayOfNavBarHistories = (postComonProps & postProps)[];

interface State {
  arrayOfStoryPosts: ArrayOfNavBarHistories;
  setArrayOfStoryPosts: ({
    arrayOfStoryPosts
  }: {
    arrayOfStoryPosts: ArrayOfNavBarHistories;
  }) => void;
}

export const usePostsOftheStory = create<State>(set => ({
  arrayOfStoryPosts: [],
  setArrayOfStoryPosts: ({ arrayOfStoryPosts }) => set({ arrayOfStoryPosts })
}));
