import { create } from 'zustand';
import { combine } from 'zustand/middleware';

const initialState = {
  limit: 3,
  offsetOfPosts: 3
};

export const useLimitOfPost = create(
  combine(initialState, (set, get) => ({
    setLimit: (newLimit: ((currentLimit: number) => number) | number) => {
      if (typeof newLimit === 'function') {
        const { limit } = get();
        set({ limit: newLimit(limit) });
      } else {
        set({ limit: newLimit });
      }

      setTimeout(() => {
        console.log('Current limit:', get().limit);
      }, 100)
    }
  }))
);
