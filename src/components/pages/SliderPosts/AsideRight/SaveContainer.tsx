import { useEffect, useState } from 'react';
import { Save } from './Save';
import type {
  postProps,
  postComonProps
} from '@/components/pages/SliderPosts/types.d.ts';
import { useUserSavedPosts } from '@/store/useUserSavedPosts';
import { useCurrentUser } from '@/store/useCurrentUser';

interface Props {
  post: postProps & postComonProps;
  saved: number;
}

const commonPropsKeys: (keyof postComonProps)[] = [
  'followed',
  'followers',
  'following',
  'profileDescription',
  'profileImageSrc',
  'totalLikes',
  'userId',
  'username'
];

const postPropsKeys: (keyof postProps)[] = [
  'arrayImages',
  'comments',
  'dateOfPublication',
  'description',
  'hearts',
  'idPost',
  'isSaved',
  'saved',
  'shared',
  'tags',
  'totalViewsOfThePost',
  'videoSrc'
];

export function SaveContainer({ saved, post }: Props) {
  const [thisPostIsSave, setThisPostIsSaved] = useState(post.isSaved);
  const className = `button-container btn-container-saved ${
    thisPostIsSave ? 'this-post-is-saved' : ''
  }`;
  const deletePostSaved = useUserSavedPosts(state => state.deletePostSaved);
  const addPostInSaved = useUserSavedPosts(state => state.addPostInSaved);

  const getFlattenedSavedPosts = useUserSavedPosts(
    state => state.getFlattenedSavedPosts
  );

  function savePost() {
    if (thisPostIsSave) {
      setThisPostIsSaved(false);
      deletePostSaved(post.idPost, post.userId);
      return;
    }

    setThisPostIsSaved(true);
    addPostInSaved({
      commonProps: Object.fromEntries(
        Object.entries(post).filter(([key]) =>
          commonPropsKeys.includes(key as keyof postComonProps)
        )
      ) as postComonProps,
      postProps: Object.fromEntries(
        Object.entries(post).filter(([key]) =>
          postPropsKeys.includes(key as keyof postProps)
        )
      ) as postProps,
      userIdOfCreatorOfThePost: post.idPost
    });
  }

  useEffect(() => {
    const flattened_saved_post = getFlattenedSavedPosts();
    const idPost = post.idPost;
    const existThispostInSavedPost = flattened_saved_post.find(
      el => el.idPost === idPost
    );
    setThisPostIsSaved(Boolean(existThispostInSavedPost));
  }, []);

  return (
    <section className={className} onClick={savePost}>
      <Save />
      <span className='count'>{saved}</span>
    </section>
  );
}
