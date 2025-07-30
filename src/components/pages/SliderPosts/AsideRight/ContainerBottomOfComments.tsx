import type {
  arrayOfPosts,
  postComonProps
} from '@/components/pages/SliderPosts/types.d.ts';
import { PRIVATE_DATA } from '@/privateData/amPrivateData';
import { PUBLIC_DATA } from '@/publicData/amPublicData';
import { useCurrentUser } from '@/store/useCurrentUser';
import { useUserCreator } from '@/store/useUserCreator';
import { CloseContainer } from './CloseContainer';
const FOLLOWED: arrayOfPosts = [...PRIVATE_DATA];
const FOR_YOU: arrayOfPosts = [...PUBLIC_DATA];
const ALL_POSTS = [...FOLLOWED, ...FOR_YOU];
import { ARRAY_OF_COMMENTS } from '@/utils/arrayOfComments';
import { useMemo, useState } from 'react';
import { UserProfile } from './UserProfile';
import { HeartAndDislikeFooter } from './HeartAndDislikeFooter';

export function ContainerBottomOfComments({
  totalNumberOfComments,
  updateIsContainerBottomOpen
}: {
  totalNumberOfComments: number;
  updateIsContainerBottomOpen: () => void;
}) {
  const commonProps = useUserCreator(state => state.commonProps);
  const [limit, setLimit] = useState(10);
  // const username = commonProps.username;
  // const user = useCurrentUser(state => state.user);
  const flattenedArrayOfAllPosts = ALL_POSTS.map(el => el[0]);
  const flattenedArrayOfAllPostsCommonProps = flattenedArrayOfAllPosts
    .filter(el => el.userId !== commonProps.userId)
    .slice(0, limit);

  const randomComments = useMemo(() => {
    return ARRAY_OF_COMMENTS.toSorted(() => Math.random() - 0.5).slice(0, limit);
  }, []);

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
        {flattenedArrayOfAllPostsCommonProps.map((amProps, indexOfComment) => {
          const { profileImageSrc, username, userId } = amProps;
          return (
            <aside className='am-comment-of-an-user' key={indexOfComment}>
              <article className='left-am-comments-of-an-user'>
                {/* <img src={profileImageSrc} alt='User Image' /> */}
                <UserProfile
                  profileImageSrc={profileImageSrc}
                  userId={userId}
                  otherClassName='profile-in-comments-of-the-user'
                />
              </article>
              <article className='right-am-comments-of-an-user'>
                <p className='paraghaph'>{username}</p>
                <p className='paraghaph the-comment'>
                  {randomComments[indexOfComment]}
                </p>

                <HeartAndDislikeFooter />
              </article>
            </aside>
          );
        })}
      </section>
    </article>
  );
}
