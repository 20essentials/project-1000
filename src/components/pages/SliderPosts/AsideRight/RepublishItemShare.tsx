import { useEffect, useState, type JSX } from 'react';
import type {
  postProps,
  postComonProps
} from '@/components/pages/SliderPosts/types.d.ts';
import { useUserRepublishPosts } from '@/store/useUserRepublishPosts';
import {
  getCommonpropsFromProps,
  getPostpropsFromProps
} from '@/utils/functions';

export function RepublishItemShare({
  id,
  svg,
  gradient,
  amTitle,
  post
}: {
  id: string;
  svg: JSX.Element;
  gradient: string;
  amTitle: string;
  post: postProps & postComonProps;
}) {
  const [thisPostIsSave, setThisPostIsSaved] = useState(false);
  const svgToRender = thisPostIsSave ? svg : (
    <svg
      viewBox='0 0 48 48'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      className='are-pure-svg'
      style={{ borderRadius: '50%' }}
    >
      <path fill='#FFC300' d='M0 0h48v48H0z'></path>
      <path
        d='M33 28.06h3.11c.68 0 1.04.79.6 1.3l-4.38 5.11c-.42.5-1.18.5-1.6 0l-4.38-5.11a.79.79 0 0 1 .6-1.3h3.12v-5.53c0-1.22-.02-2.28-.07-2.92a2.82 2.82 0 0 0-.25-1.15 2.8 2.8 0 0 0-1.23-1.22c-.21-.11-.53-.2-1.15-.25-.64-.05-.66-.06-1.88-.06h-1.73a.79.79 0 0 1-.79-.78v-1.36c0-.44.35-.79.79-.79h1.79c1.14 0 1.29 0 2.06.06.8.07 1.55.21 2.25.57a5.74 5.74 0 0 1 2.5 2.5c.37.7.5 1.4.57 2.24.07.74.08 1.96.08 3.1v5.59ZM17.84 20.9h3.12a.79.79 0 0 0 .6-1.3l-4.39-5.12a1.05 1.05 0 0 0-1.6 0l-4.38 5.11a.79.79 0 0 0 .6 1.3h3.1v5.59c0 1.14.02 2.37.08 3.1.07.84.2 1.54.56 2.24a5.74 5.74 0 0 0 2.51 2.5c.7.36 1.45.5 2.25.57.77.06.92.06 2.07.06h1.78c.44 0 .79-.35.79-.78V32.8a.79.79 0 0 0-.79-.78h-1.72c-1.22 0-1.25 0-1.89-.06a3.04 3.04 0 0 1-1.15-.25 2.8 2.8 0 0 1-1.23-1.22c-.1-.18-.2-.53-.25-1.15-.05-.64-.06-1.7-.06-2.92v-5.53Z'
        fill='#fff'
      ></path>
      <path
        d='M27.9 21.82 24.4 27.3a1.35 1.35 0 0 1-2.14.17l-2.3-2.57a.54.54 0 0 1 .03-.76l1.2-1.08c.23-.2.57-.18.77.04l1.12 1.38 2.56-4.12c.16-.25.5-.32.75-.16l1.36.87c.25.16.32.5.16.75Z'
        fill='#fff'
      ></path>
    </svg>
  ) 
  const deletePostSaved = useUserRepublishPosts(state => state.deletePostSaved);
  const addPostInSaved = useUserRepublishPosts(state => state.addPostInSaved);
  const arrayOfSavedPostOfTheUser = useUserRepublishPosts(
    state => state.arrayOfSavedPostOfTheUser
  );
  const getFlattenedSavedPosts = useUserRepublishPosts(
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
    <aside className='item-share isClickableInDrag' key={id} onClick={savePost}>
      <article className='circle-gradient' style={{ backgroundImage: gradient }}>
        {svgToRender}
      </article>
      <h4 className='title-share'>
        {thisPostIsSave ?  'UnRepost' : amTitle  }
      </h4>
    </aside>
  );
}
