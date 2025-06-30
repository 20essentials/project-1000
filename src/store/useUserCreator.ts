import { create } from 'zustand';
import type {
  postComonProps,
  postProps
} from '@/components/pages/SliderPosts/types.d.ts';

interface UserCreatorState {
  commonProps: postComonProps | null;
  arrayOfPosts: postProps[];
  setCommonProps: (commonProps: postComonProps) => void;
  setArrayOfPosts: (arrayOfPosts: postProps[]) => void;
}

export const useUserCreator = create<UserCreatorState>(set => ({
  commonProps: null,
  arrayOfPosts: [],
  setCommonProps: commonProps => set({ commonProps }),
  setArrayOfPosts: arrayOfPosts => set({ arrayOfPosts })
}));
