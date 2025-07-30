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

export function ContainerBottomOfComments({
  totalNumberOfComments,
  updateIsContainerBottomOpen
}: {
  totalNumberOfComments: number;
  updateIsContainerBottomOpen: () => void;
}) {
  const commonProps = useUserCreator(state => state.commonProps);
  // const username = commonProps.username;
  // const user = useCurrentUser(state => state.user);
  const flattenedArrayOfAllPosts = ALL_POSTS.map(el => el[0]);
  const flattenedArrayOfAllPostsCommonProps = flattenedArrayOfAllPosts.filter(
    el => el.userId !== commonProps.userId
  );

  return (
    <article className='container-bottom-of-comments'>
      <header className='am-header-of-comments'>
        {totalNumberOfComments} comments
        <CloseContainer
          className='close-container-bottom'
          onClick={updateIsContainerBottomOpen}
        />
      </header>
    </article>
  );
}
