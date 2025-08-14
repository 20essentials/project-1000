import { useEffect, useState } from 'react';
import { Heart } from '@/components/pages/SliderPosts/AsideRight/Heart';
import type {
  postProps,
  postComonProps
} from '@/components/pages/SliderPosts/types.d.ts';
import { userUserLikedPosts } from '@/store/useUserLikedPosts';
import {
  generateNumOfAsideRight,
  getCommonpropsFromProps,
  getPostpropsFromProps
} from '@/utils/functions';

interface Props {
  post: postProps & postComonProps;
  hearts: number;
  otherClassName?: string;
}

export function HeartContainer({ hearts, post, otherClassName }: Props) {
  const [thisPostIsSave, setThisPostIsSaved] = useState(post.isSaved);
  const className = `button-container btn-container-liked isClickableInDrag ${otherClassName} ${
    thisPostIsSave ? 'this-post-is-liked' : ''
  }`;
  const deletePostSaved = userUserLikedPosts(state => state.deletePostSaved);
  const addPostInSaved = userUserLikedPosts(state => state.addPostInSaved);
  const arrayOfSavedPostOfTheUser = userUserLikedPosts(
    state => state.arrayOfSavedPostOfTheUser
  );
  const getFlattenedSavedPosts = userUserLikedPosts(
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
      userIdOfCreatorOfThePost: post.userId
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
    <section className={className} onClick={savePost} >
      <Heart />
      <span className='count '>{generateNumOfAsideRight(hearts)}</span>
    </section>
  );
}
