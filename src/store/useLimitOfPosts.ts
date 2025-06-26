import { create } from 'zustand';
import { combine } from 'zustand/middleware';

const initialState = {
  limit: 3
};

export const useLimitOfPost = create(
  combine(initialState, set => ({
    setLimit: ({limit}: {limit: number}) => set({ limit })
  }))
);
