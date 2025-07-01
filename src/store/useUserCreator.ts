import { create } from 'zustand';
import type {
  postComonProps,
  postProps
} from '@/components/pages/SliderPosts/types.d.ts';
import { PUBLIC_DATA } from '@/publicData/amPublicData';
import type { arrayOfPosts } from '@/components/pages/SliderPosts/types.d.ts';
const FOR_YOU: arrayOfPosts = [...PUBLIC_DATA];

interface UserCreatorState {
  commonProps: postComonProps;
  arrayOfPosts: postProps[];
  setCommonProps: (commonProps: postComonProps) => void;
  setArrayOfPosts: (arrayOfPosts: postProps[]) => void;
  setIndexOfPost: (indexOfPost: number) => void;
  indexOfPost: number;
}

export const useUserCreator = create<UserCreatorState>(set => ({
  commonProps: FOR_YOU[0][0],
  arrayOfPosts: FOR_YOU[0][1],
  indexOfPost: 0,
  setCommonProps: commonProps => set({ commonProps }),
  setArrayOfPosts: arrayOfPosts => set({ arrayOfPosts }),
  setIndexOfPost: indexOfPost => set({ indexOfPost })
}));
