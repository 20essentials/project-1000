import { create } from 'zustand';
import { combine } from 'zustand/middleware';

const initialState = {
  isForYou: true
};

export const useFollowedOrForYou = create(
  combine(initialState, set => ({
    setForYou: ({isForYou}: {isForYou: boolean}) => set({ isForYou })
  }))
);
