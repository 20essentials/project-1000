import { create } from 'zustand';
import type {
  postProps,
  postComonProps
} from '@/components/pages/SliderPosts/types.d.ts';
import { persist } from 'zustand/middleware';

type PostCommonProps = Pick<postComonProps, 'username' | 'userId'>;
type PostProps = Pick<postProps, 'idPost'>;
type ArrayOfPosts = [PostCommonProps, PostProps[]][];

interface UserLikedPostsState {
  arrayOfLikedPostOfTheUser: ArrayOfPosts | [];
  getFlattenedLikedPosts: () => (PostCommonProps & PostProps)[];
  setLikedPostsOfTheUser: (arrayOfLikedPostOfTheUser: ArrayOfPosts) => void;
  deleteLikedPost: (idPost: string, userIdOfCreatorOfThePost: string) => void;
  addPostInLiked: ({
    username,
    userIdOfCreatorOfThePost,
    idPost
  }: {
    username: string;
    userIdOfCreatorOfThePost: string;
    idPost: string;
  }) => void;
}

export const useUserLikedPosts = create<UserLikedPostsState>()(
  persist(
    (set, get) => ({
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
      addPostInLiked: ({ userIdOfCreatorOfThePost, idPost, username }) => {
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

        let newArrayOfLikedPosts: ArrayOfPosts | [] = [];

        if (existTheCreatorOfThePost) {
          newArrayOfLikedPosts = arrayOfLikedPostOfTheUser.map(
            ([commonprops, ArrayOfPosts]) => {
              if (commonprops.userId === userIdOfCreatorOfThePost) {
                return [commonprops, [...ArrayOfPosts, { idPost }]];
              }
              return [commonprops, ArrayOfPosts];
            }
          );

          setLikedPostsOfTheUser(newArrayOfLikedPosts);

          return newArrayOfLikedPosts;
        }

        //If not exits
        newArrayOfLikedPosts = [
          ...arrayOfLikedPostOfTheUser,
          [{ username, userId: userIdOfCreatorOfThePost }, [{ idPost }]]
        ];

        setLikedPostsOfTheUser(newArrayOfLikedPosts);

        return newArrayOfLikedPosts;
      },
      deleteLikedPost: (idPost, userIdOfCreatorOfThePost) => {
        const { arrayOfLikedPostOfTheUser, setLikedPostsOfTheUser } = get();
        const newArrayOfLikedPost: ArrayOfPosts = arrayOfLikedPostOfTheUser.map(
          ([commonprops, ArrayOfPosts]) => {
            if (commonprops.userId === userIdOfCreatorOfThePost) {
              return [
                commonprops,
                ArrayOfPosts.filter(post => post.idPost !== idPost)
              ];
            }
            return [commonprops, ArrayOfPosts];
          }
        );
        const newArrayOfLikedPostWithMoreOfOnePost = newArrayOfLikedPost.filter(
          el => el[1].length > 0
        );

        setLikedPostsOfTheUser(newArrayOfLikedPostWithMoreOfOnePost);

        return newArrayOfLikedPostWithMoreOfOnePost;
      }
    }),
    {
      name: 'liked-posts-of-the-user'
    }
  )
);
