import { create } from 'zustand';

export const DURATION_OF_POST_INITIAL = 10;

interface State {
  durationStory: number;
}
interface Actions {
  setDurationStory: ({ durationStory }: { durationStory: number }) => void;
}

export const useStoryDuration = create<State & Actions>(set => ({
  durationStory: DURATION_OF_POST_INITIAL,
  setDurationStory: ({ durationStory }: { durationStory: number }) =>
    set({ durationStory })
}));
