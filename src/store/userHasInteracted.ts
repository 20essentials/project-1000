import { create } from 'zustand';
import { combine } from 'zustand/middleware';

const initialState = {
  hasInteracted: false
};

export const userHasInteracted = create(
  combine(initialState, set => ({
    setUserHasInteracted: ({ hasInteracted }: { hasInteracted: boolean }) =>
      set({ hasInteracted })
  }))
);
