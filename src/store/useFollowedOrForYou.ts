import { create } from 'zustand';
import { combine } from 'zustand/middleware';

const initialState = {
  reRenderForYou: false,
  reRenderFollowed: false,
  isForYou: true
};

export const useFollowedOrForYou = create(
  combine(initialState, set => ({
    setForYou: ({ isForYou }: { isForYou: boolean }) => set({ isForYou }),
    setReRenderForYou: ({ reRenderForYou }: { reRenderForYou: boolean }) =>
      set({ reRenderForYou }),
    setReRenderFollowed: ({ reRenderFollowed }: { reRenderFollowed: boolean }) =>
      set({ reRenderFollowed })
  }))
);
