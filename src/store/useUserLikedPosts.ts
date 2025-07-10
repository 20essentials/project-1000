import { create } from 'zustand';
import type {
  postProps,
  postComonProps,
  arrayOfPosts
} from '@/components/pages/SliderPosts/types.d.ts';
import { persist } from 'zustand/middleware';

/* test */

import {
  midudev_array_of_posts,
  midudev_commonProps
} from '@/publicData/user-1-midudev';

export const user_array_of_liked_posts: arrayOfPosts = [
  [midudev_commonProps, [midudev_array_of_posts[0]]]
];

/* test */

interface UserLikedPostsState {
  arrayOfLikedPostOfTheUser: arrayOfPosts | [];
  getFlattenedLikedPosts: () => (postComonProps & postProps)[];
  setLikedPostsOfTheUser: (arrayOfLikedPostOfTheUser: arrayOfPosts) => void;
  deleteLikedPost: (idPost: string, userIdOfCreatorOfThePost: string) => void;

  addPostInLiked: ({
    userIdOfCreatorOfThePost,
    commonProps,
    postProps
  }: {
    userIdOfCreatorOfThePost: string;
    commonProps: postComonProps;
    postProps: postProps;
  }) => void;
}

export const useUserLikedPosts = create<UserLikedPostsState>()(persist((set, get) => ({
  arrayOfLikedPostOfTheUser: [],
  getFlattenedLikedPosts: () => {
    const { arrayOfLikedPostOfTheUser } = get();
    const flattened_liked_posts = arrayOfLikedPostOfTheUser.flatMap(
      ([commonProps, posts]) =>
        posts.map(post => ({
          ...post,
          ...commonProps
        }))
    );
    return flattened_liked_posts;
  },
  setLikedPostsOfTheUser: arrayOfLikedPostOfTheUser =>
    set({ arrayOfLikedPostOfTheUser }),
  addPostInLiked: ({ userIdOfCreatorOfThePost, commonProps, postProps }) => {
    const {
      arrayOfLikedPostOfTheUser,
      setLikedPostsOfTheUser,
      getFlattenedLikedPosts
    } = get();

    //Verfiicamos si el userIdCreatorNoExiste
    const arrayFlattenedOfPost = getFlattenedLikedPosts();
    const existTheCreatorOfThePost = arrayFlattenedOfPost.find(
      el => el.userId === userIdOfCreatorOfThePost
    );

    let newArrayOfLikedPosts: arrayOfPosts | [] = [];

    if (existTheCreatorOfThePost) {
      newArrayOfLikedPosts = arrayOfLikedPostOfTheUser.map(
        ([commonprops, arrayOfPosts]) => {
          if (commonprops.userId === userIdOfCreatorOfThePost) {
            return [commonprops, [...arrayOfPosts, postProps]];
          }
          return [commonprops, arrayOfPosts];
        }
      );

      setLikedPostsOfTheUser(newArrayOfLikedPosts);

      return newArrayOfLikedPosts;
    }

    //If not exits
    newArrayOfLikedPosts = [
      ...arrayOfLikedPostOfTheUser,
      [commonProps, [postProps]]
    ];

    setLikedPostsOfTheUser(newArrayOfLikedPosts);

    return newArrayOfLikedPosts;
  },
  deleteLikedPost: (idPost, userIdOfCreatorOfThePost) => {
    const { arrayOfLikedPostOfTheUser, setLikedPostsOfTheUser } = get();
    const newArrayOfLikedPost: arrayOfPosts = arrayOfLikedPostOfTheUser.map(
      ([commonprops, arrayOfPosts]) => {
        if (commonprops.userId === userIdOfCreatorOfThePost) {
          return [
            commonprops,
            arrayOfPosts.filter(post => post.idPost !== idPost)
          ];
        }
        return [commonprops, arrayOfPosts];
      }
    );
    const newArrayOfLikedPostWithMoreOfOnePost = newArrayOfLikedPost.filter(
      el => el[1].length > 0
    );

    setLikedPostsOfTheUser(newArrayOfLikedPostWithMoreOfOnePost);

    return newArrayOfLikedPostWithMoreOfOnePost;
  }
}), {
  name: 'saved-post-of-the-user'
}));
