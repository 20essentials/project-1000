import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import { IS_ACTIVE_BUTTON } from '@/store/useCurrentPage';

const initialState = {
  arrayOfPagesVisited: [IS_ACTIVE_BUTTON.HOME]
};

type typePage = (typeof IS_ACTIVE_BUTTON)[keyof typeof IS_ACTIVE_BUTTON];

export const useLastPagedVisited = create(
  combine(initialState, (set, get) => ({
    setLastPagedVisited: (
      newPageVisited: ((newPageVisited: typePage[]) => typePage[]) | typePage[]
    ) => {
      if (typeof newPageVisited === 'function') {
        const { arrayOfPagesVisited } = get();
        set({ arrayOfPagesVisited: newPageVisited(arrayOfPagesVisited) });
      } else {
        set({ arrayOfPagesVisited: newPageVisited });
      }
    },
    getPenultimatePage: () => {
      const { arrayOfPagesVisited } = get();
      const { length } = arrayOfPagesVisited;
      if (length === 1) return IS_ACTIVE_BUTTON.HOME;
      return arrayOfPagesVisited[length - 2];
    }
  }))
);
