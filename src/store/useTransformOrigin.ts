import { create } from 'zustand';
import { combine } from 'zustand/middleware';

const initialState = {
  x: 0,
  y: 0
};

export const useTransformOrigin = create(
  combine(initialState, set => ({
    setTransformOrigin: ({ x, y }: { x: number; y: number }) => set({ x, y })
  }))
);
