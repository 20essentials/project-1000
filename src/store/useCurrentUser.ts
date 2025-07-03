import { create } from 'zustand';
import type { User } from '@clerk/astro/server';

interface State {
  user: User | null;
  setUser: (user: User) => void;
}

export const useCurrentUser = create<State>(set => ({
  user: null,
  setUser: (user: User) => set({ user })
}));
