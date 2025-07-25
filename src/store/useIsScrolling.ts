import { create } from 'zustand';

interface State {
  isScrolling: boolean;
  setIsScrolling: ({ isScrolling }: { isScrolling: boolean }) => void;
}

export const useIsScrolling = create<State>(set => ({
  isScrolling: false,
  setIsScrolling: ({ isScrolling }) => set({ isScrolling })
}));
