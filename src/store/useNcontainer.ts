import { create } from 'zustand';
import { combine } from 'zustand/middleware';

const initialState = {
  containerNum: 0
};

export const useNcontainer = create(
  combine(initialState, set => ({
    showContainewNum: (containerNum: number) => set({ containerNum })
  }))
);
