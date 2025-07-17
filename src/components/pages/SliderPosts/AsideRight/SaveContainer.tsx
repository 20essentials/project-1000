import { useEffect, useState } from 'react';
import { Save } from '@/components/pages/SliderPosts/AsideRight/Save';
import type {
  postProps,
  postComonProps
} from '@/components/pages/SliderPosts/types.d.ts';
import { useUserSavedPosts } from '@/store/useUserSavedPosts';
import {
  getCommonpropsFromProps,
  getPostpropsFromProps
} from '@/utils/functions';

interface Props {
  post: postProps & postComonProps;
  saved: number;
}

export function SaveContainer({ saved, post }: Props) {
  const [thisPostIsSave, setThisPostIsSaved] = useState(post.isSaved);
  const className = `button-container btn-container-saved ${
    thisPostIsSave ? 'this-post-is-saved' : ''
  }`;
  const deletePostSaved = useUserSavedPosts(state => state.deletePostSaved);
  const addPostInSaved = useUserSavedPosts(state => state.addPostInSaved);
  const arrayOfSavedPostOfTheUser = useUserSavedPosts(state => state.arrayOfSavedPostOfTheUser)
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
      commonProps: getCommonpropsFromProps(post),
      postProps: getPostpropsFromProps(post),
      userIdOfCreatorOfThePost:  post.userId,
    });
  }

  useEffect(() => {
    const flattened_saved_post = getFlattenedSavedPosts();
    const idPost = post.idPost;
    const existThispostInSavedPost = flattened_saved_post.find(
      el => el.idPost === idPost
    );
    setThisPostIsSaved(Boolean(existThispostInSavedPost));
  }, [arrayOfSavedPostOfTheUser]);

  return (
    <section className={className} onClick={savePost}>
      <Save />
      <span className='count'>{saved}</span>
    </section>
  );
}
