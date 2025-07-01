import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import type { arrayOfPosts } from '@/components/pages/SliderPosts/types.d.ts';
import { PUBLIC_DATA } from '@/publicData/amPublicData';
import { PRIVATE_DATA } from '@/privateData/amPrivateData';

const FOLLOWED: arrayOfPosts = [...PRIVATE_DATA];
const FOR_YOU: arrayOfPosts = [...PUBLIC_DATA];

const initialState = {
  FOLLOWED,
  FOR_YOU
};

export const useGlobalArrayPosts = create(
  combine(initialState, set => ({
    setFollowed: ({ FOLLOWED }: { FOLLOWED: arrayOfPosts }) => set({ FOLLOWED }),
    setForYou: ({ FOR_YOU }: { FOR_YOU: arrayOfPosts }) => set({ FOR_YOU })
  }))
);
