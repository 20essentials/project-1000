import { create } from 'zustand';
import { combine } from 'zustand/middleware';

const initialState = {
  containerNum: 0
};

export const CONTAINER_IS =  {
  DRAG_AND_DROP_ICON: 0,
  INTRO_PAGE: 1,
  HOME: 2,
} as const;

export const useNcontainer = create(
  combine(initialState, set => ({
    showContainewNum: (containerNum: number) => set({ containerNum }),
    setContainerNum: (containerNum: number) => set({ containerNum })
  }))
);
