import { create } from 'zustand';
import { combine, persist } from 'zustand/middleware';

const initialState = {
  x: 16,
  y: 16
};

export const useTransformOrigin = create(
  persist(
    combine(initialState, set => ({
      setTransformOrigin: ({ x, y }: { x: number; y: number }) => set({ x, y })
    })),
    {
      name: 'transform-origin-storage'
    }
  )
);
