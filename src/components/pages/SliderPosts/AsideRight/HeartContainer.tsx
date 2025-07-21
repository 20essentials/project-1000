import { useEffect, useState } from 'react';
import { Heart } from '@/components/pages/SliderPosts/AsideRight/Heart';
import type {
  postProps,
  postComonProps
} from '@/components/pages/SliderPosts/types.d.ts';
import { useUserLikedPosts } from '@/store/useUserLikedPosts';
import { generateNumOfAsideRight } from '@/utils/functions';

interface Props {
  post: postProps & postComonProps;
  hearts: number;
}

export function HeartContainer({ hearts, post }: Props) {
  const getFlattenedLikedPosts = useUserLikedPosts(
    state => state.getFlattenedLikedPosts
  );
  const [thisPostIsLiked, setThisPostIsLiked] = useState(post.isLiked);
  const className = `button-container btn-container-liked ${
    thisPostIsLiked ? 'this-post-is-liked' : ''
  }`;
  const deleteLikedPost = useUserLikedPosts(state => state.deleteLikedPost);
  const addPostInLiked = useUserLikedPosts(state => state.addPostInLiked);
  const arrayOfLikedPostOfTheUser = useUserLikedPosts(
    state => state.arrayOfLikedPostOfTheUser
  );

  function likePost() {
    if (thisPostIsLiked) {
      setThisPostIsLiked(false);
      deleteLikedPost(post.idPost, post.userId);
      return;
    }

    setThisPostIsLiked(true);
    addPostInLiked({
      username: post.username,
      idPost: post.idPost,
      userIdOfCreatorOfThePost: post.userId
    });
  }

  useEffect(() => {
    const flattened_saved_post = getFlattenedLikedPosts();
    const idPost = post.idPost;
    const existThispostInSavedPost = flattened_saved_post.find(
      el => el.idPost === idPost
    );
    setThisPostIsLiked(Boolean(existThispostInSavedPost));
  }, [arrayOfLikedPostOfTheUser]);

  return (
    <section className={className} onClick={likePost}>
      <Heart />
      <span className='count'>{generateNumOfAsideRight(hearts)}</span>
    </section>
  );
}
