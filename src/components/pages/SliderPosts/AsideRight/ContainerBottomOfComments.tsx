import type { arrayOfPosts } from '@/components/pages/SliderPosts/types.d.ts';
import { PRIVATE_DATA } from '@/privateData/amPrivateData';
import { PUBLIC_DATA } from '@/publicData/amPublicData';
import { useUserCreator } from '@/store/useUserCreator';
import { CloseContainer } from './CloseContainer';
const FOLLOWED: arrayOfPosts = [...PRIVATE_DATA];
const FOR_YOU: arrayOfPosts = [...PUBLIC_DATA];
const ALL_POSTS = [...FOLLOWED, ...FOR_YOU];
import { ARRAY_OF_COMMENTS } from '@/utils/array/comments/arrayOfComments';
import { useMemo, useState } from 'react';
import { RowComment } from './RowComment';
import { modEspecial } from '@/utils/functions';
const NUM_OF_COMMENT_THAT_RENDER_MORE_COMMENTS = 9;

export function ContainerBottomOfComments({
  totalNumberOfComments,
  updateIsContainerBottomOpen
}: {
  totalNumberOfComments: number;
  updateIsContainerBottomOpen: () => void;
}) {
  const commonProps = useUserCreator(state => state.commonProps);
  const [limit, setLimit] = useState(10);

  function updateLimit() {
    setLimit(prev => prev + NUM_OF_COMMENT_THAT_RENDER_MORE_COMMENTS);
  }

  const flattenedArrayOfAllPosts = useMemo(
    () =>
      ALL_POSTS.map(el => el[0]).filter(el => el.userId !== commonProps.userId),
    [commonProps.userId]
  );

  const flattenedArrayOfAllPostsCommonProps = useMemo(() => {
    return Array.from(
      { length: modEspecial(limit, totalNumberOfComments) },
      (_, i) => {
        const index = i % flattenedArrayOfAllPosts.length;
        return flattenedArrayOfAllPosts[index];
      }
    );
  }, [limit, flattenedArrayOfAllPosts]);

  const arrayOfRandomComments = useMemo(
    () => ARRAY_OF_COMMENTS.toSorted(() => Math.random() - 0.5),
    []
  );

  const randomComments = useMemo(() => {
    return Array.from(
      { length: modEspecial(limit, totalNumberOfComments) },
      (_, i) => {
        const index = i % arrayOfRandomComments.length;
        return arrayOfRandomComments[index];
      }
    );
  }, [limit]);

  return (
    <article className='container-bottom-of-comments'>
      <header className='am-header-of-comments'>
        {totalNumberOfComments} comments
        <CloseContainer
          className='close-container-bottom'
          onClick={updateIsContainerBottomOpen}
        />
      </header>
      <section className='am-footer-of-the-comments'>
        {flattenedArrayOfAllPostsCommonProps
          .slice(0, limit)
          .map((amProps, indexOfComment) => {
            const { profileImageSrc, username, userId } = amProps;
            const thisCommenRenderMorePosts =
              (indexOfComment + 1) % NUM_OF_COMMENT_THAT_RENDER_MORE_COMMENTS ===
              0;

            return (
              <RowComment
                indexOfComment={indexOfComment}
                profileImageSrc={profileImageSrc}
                randomComment={randomComments[indexOfComment]}
                userId={userId}
                username={username}
                key={indexOfComment}
                thisCommenRenderMorePosts={thisCommenRenderMorePosts}
                updateLimit={updateLimit}
              />
            );
          })}
      </section>
    </article>
  );
}
