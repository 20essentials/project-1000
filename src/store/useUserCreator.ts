import { create } from 'zustand';
import type {
  postComonProps,
  postProps
} from '@/components/pages/SliderPosts/types.d.ts';
import { PUBLIC_DATA } from '@/publicData/amPublicData';
import type { arrayOfPosts } from '@/components/pages/SliderPosts/types.d.ts';
const FOR_YOU: arrayOfPosts = [...PUBLIC_DATA];

export const MODE_GRID = {
  userCreatedPosts: 'userCreatedPosts',
  userSavedPosts: 'userSavedPosts',
  userLikedPosts: 'userLikedPosts',
  userRepublishPosts: 'userRepublishPosts'
} as const;

export type valueOfMODE_GRID = (typeof MODE_GRID)[keyof typeof MODE_GRID];

interface UserCreatorState {
  showSavedPosts: boolean;
  commonProps: postComonProps;
  arrayOfPosts: postProps[];
  setCommonProps: (commonProps: postComonProps) => void;
  setArrayOfPosts: (arrayOfPosts: postProps[]) => void;
  setIndexOfPost: (indexOfPost: number) => void;
  setShowSavedPosts: (showSavedPosts: boolean) => void;
  modeGrid: valueOfMODE_GRID;
  setModeOfGrid: (newModeGrid: valueOfMODE_GRID) => void;
  indexOfPost: number;
}

export const useUserCreator = create<UserCreatorState>(set => ({
  modeGrid: MODE_GRID.userCreatedPosts,
  setModeOfGrid: newModeGrid => {
    set({ modeGrid: newModeGrid });
  },
  showSavedPosts: false,
  commonProps: FOR_YOU[0][0],
  arrayOfPosts: FOR_YOU[0][1],
  indexOfPost: 0,
  setCommonProps: commonProps => set({ commonProps }),
  setArrayOfPosts: arrayOfPosts => set({ arrayOfPosts }),
  setIndexOfPost: indexOfPost => set({ indexOfPost }),
  setShowSavedPosts: showSavedPosts => set({ showSavedPosts })
}));
