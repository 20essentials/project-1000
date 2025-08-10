import { create } from 'zustand';

type State = {
  arrayImages: string[];
  srcVideo: string | null;
  descriptionPost: string | null | undefined;
};

type Actions = {
  setArrayImages: (input: string[] | ((prev: string[]) => string[])) => void;
  setSrcVideo: (params: { srcVideo: string | null }) => void;
  setDescriptionPost: ({
    descriptionPost
  }: {
    descriptionPost?: string | null;
  }) => void;
};

const initialState: State = {
  arrayImages: [],
  srcVideo: null,
  descriptionPost: null
};

export const useUploadVideoOrImages = create<State & Actions>(set => ({
  ...initialState,

  setArrayImages: input =>
    set(state => ({
      arrayImages: typeof input === 'function' ? input(state.arrayImages) : input
    })),

  setSrcVideo: ({ srcVideo }) => set({ srcVideo }),
  setDescriptionPost: ({ descriptionPost }) => set({ descriptionPost })
}));
