import type { arrayOfPosts } from '@/components/pages/SliderPosts/types';
import { IS_ACTIVE_BUTTON, useCurrentPage } from '@/store/useCurrentPage';
import { useUserCreator } from '@/store/useUserCreator';
import { useUserHasSeenPostOrProfileFromUrl } from '@/store/useUserHasSeenPostOrProfileFromUrl';
import { useEffect } from 'react';

export function useGoToTheProfileIfOnlyTheUserIdExists({
  userId = '',
  weMustRenderAUserProfile,
  ALL_POSTS
}: {
  userId: string | undefined | null;
  weMustRenderAUserProfile: boolean;
  ALL_POSTS: arrayOfPosts;
}) {
  const getValueIfUserHasSeenPostOrProfileFromUrl =
    useUserHasSeenPostOrProfileFromUrl(
      state => state.getValueIfUserHasSeenPostOrProfileFromUrl
    );
  const setUserHasSeenPostOrProfileFromUrl = useUserHasSeenPostOrProfileFromUrl(
    state => state.setUserHasSeenPostOrProfileFromUrl
  );
  const setCurrentPage = useCurrentPage(s => s.setCurrentPage);
  const setArrayOfPosts = useUserCreator(state => state.setArrayOfPosts);
  const setCommonProps = useUserCreator(state => state.setCommonProps);

  useEffect(() => {
    if (!getValueIfUserHasSeenPostOrProfileFromUrl()) {
      setUserHasSeenPostOrProfileFromUrl({
        userHasSeenPostOrProfileFromUrl: true
      });
      if (weMustRenderAUserProfile && userId) {
        const currentUser = ALL_POSTS.find(user => user[0].userId === userId);
        if (currentUser) {
          const [commonPropsUser, arrayPosts] = currentUser || ALL_POSTS[0];
          setCommonProps(commonPropsUser);
          setArrayOfPosts(arrayPosts);
          setCurrentPage(IS_ACTIVE_BUTTON.PROFILE_CREATOR);
        }
      }
    }
  }, []);
}
