import { create } from 'zustand';
import type {
  postProps,
  postComonProps,
  arrayOfPosts
} from '@/components/pages/SliderPosts/types.d.ts';

interface UserSavedPostsState {
  getFlattenedSavedPosts: () => (postComonProps & postProps)[];
  arrayOfSavedPostOfTheUser: arrayOfPosts | [];
  setSavePostsOfTheUser: (arrayOfPosts: arrayOfPosts) => void;
  deletePostSaved: (idPost: string, userIdOfCreatorOfThePost: string) => void;
  addPostInSaved: ({
    userIdOfCreatorOfThePost,
    commonProps,
    postProps
  }: {
    userIdOfCreatorOfThePost: string;
    commonProps: postComonProps;
    postProps: postProps;
  }) => void;
}

export const useUserSavedPosts = create<UserSavedPostsState>((set, get) => ({
  arrayOfSavedPostOfTheUser: [],
  getFlattenedSavedPosts: () => {
    const { arrayOfSavedPostOfTheUser } = get();
    const flattened_saved_post = arrayOfSavedPostOfTheUser.flatMap(
      ([commonProps, posts]) =>
        posts.map(post => ({
          ...post,
          ...commonProps
        }))
    );
    return flattened_saved_post;
  },
  setSavePostsOfTheUser: arrayOfSavedPostOfTheUser =>
    set({ arrayOfSavedPostOfTheUser }),
  deletePostSaved: (idPost, userIdOfCreatorOfThePost) => {
    const { arrayOfSavedPostOfTheUser, setSavePostsOfTheUser } = get();
    const newArrayOfSavedPost: arrayOfPosts = arrayOfSavedPostOfTheUser.map(
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
    const newArrayOfSavedPostWithMoreOfOnePost = newArrayOfSavedPost.filter(
      el => el[1].length > 0
    );

    setSavePostsOfTheUser(newArrayOfSavedPostWithMoreOfOnePost);

    return newArrayOfSavedPostWithMoreOfOnePost;
  },
  addPostInSaved: ({
    userIdOfCreatorOfThePost,
    commonProps,
    postProps
  }) => {
    const {
      arrayOfSavedPostOfTheUser,
      setSavePostsOfTheUser,
      getFlattenedSavedPosts
    } = get();
    //Verfiicamos si el userIdCreatorNoExiste
    const arrayFlattenedOfPost = getFlattenedSavedPosts();
    const existTheCreatorOfThePost = arrayFlattenedOfPost.find(
      el => el.userId === userIdOfCreatorOfThePost
    );

    let newArrayOfSavedPost: arrayOfPosts | [] = [];

    if (existTheCreatorOfThePost) {
      newArrayOfSavedPost = arrayOfSavedPostOfTheUser.map(
        ([commonprops, arrayOfPosts]) => {
          if (commonprops.userId === userIdOfCreatorOfThePost) {
            return [commonprops, [...arrayOfPosts, postProps]];
          }
          return [commonprops, arrayOfPosts];
        }
      );

      setSavePostsOfTheUser(newArrayOfSavedPost);

      return newArrayOfSavedPost;
    }

    //If not exits
    newArrayOfSavedPost = [
      ...arrayOfSavedPostOfTheUser,
      [commonProps, [postProps]]
    ];

    setSavePostsOfTheUser(newArrayOfSavedPost);

    return newArrayOfSavedPost;
  }
}));
