import type { postProps } from '@/components/pages/SliderPosts/types.d.ts';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface useCreatedPostsState {
  arrayOfCreatedPostOfTheUser: postProps[];
  setCreatedPostsOfTheUser: (posts: postProps[]) => void;
  deleteCreatedPost: (idPost: string) => void;
  addCreatedPost: (post: postProps) => void;
}

export const useUserCreatedPosts = create<useCreatedPostsState>()(
  persist(
    (set, get) => ({
      arrayOfCreatedPostOfTheUser: [],
      setCreatedPostsOfTheUser: posts =>
        set({ arrayOfCreatedPostOfTheUser: posts }),
      deleteCreatedPost: idPost => {
        const { arrayOfCreatedPostOfTheUser } = get();
        const newPosts = arrayOfCreatedPostOfTheUser.filter(
          post => post.idPost !== idPost
        );
        set({ arrayOfCreatedPostOfTheUser: newPosts });
      },
      addCreatedPost: post => {
        const { arrayOfCreatedPostOfTheUser } = get();
        set({
          arrayOfCreatedPostOfTheUser: [...arrayOfCreatedPostOfTheUser, post]
        });
      }
    }),
    {
      name: 'created-posts-of-the-user'
    }
  )
);
