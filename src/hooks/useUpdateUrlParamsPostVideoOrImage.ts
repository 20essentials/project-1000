import { useGlobalArrayPosts } from '@/store/useGlobalArrayPosts';

export function useUpdateUrlParamsPostVideoOrImage({
  postId = '',
  userId = '',
  cleanUrl = false
}: {
  postId?: string;
  userId?: string;
  cleanUrl?: boolean;
}) {
  if (cleanUrl) {
    const newUrl = `${window.location.pathname}`;
    window.history.replaceState(null, '', newUrl);
    return;
  }

  const currentUrl = new URL(window.location.href);
  const params = currentUrl.searchParams;

  const values: [string, string][] = [
    ['userId', userId],
    ['postId', postId]
  ];

  values.forEach(([key, value]) => {
    if (value && value.length > 0 && value != null && value !== '') {
      params.set(key, value);
    }
  });

  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState(null, '', newUrl);
}

import type { FullPost } from '@/components/pages/SliderPosts/types';

/* Url de midu para practicar */
// http://localhost:4321/?userId=21a87f69-c341-492f-a156-47588fd606dd6&postId=21a87f69-c341-492f-a156-47588fd606dd6-3f7bd846-868a-48ad-a93c-c2b5fbf8fb49
export function usetGetDataParamPostVideoOrImages(): {
  weMustRenderAUserProfile: boolean;
  dataFromUrl: FullPost | undefined;
  userId: string | null;
} {
  const getCommnonPropsAndPostOfAUser = useGlobalArrayPosts(
    state => state.getCommnonPropsAndPostOfAUser
  );
  const thisUserExists = useGlobalArrayPosts(s => s.thisUserExists);
  const currentUrl = new URL(window.location.href);
  const [userId, postId] = ['userId', 'postId'].map(id =>
    currentUrl.searchParams.get(id)
  );

  let data;
  if (!postId) {
    const user = thisUserExists({ userId: userId ?? '' });

    return {
      weMustRenderAUserProfile: Boolean(user),
      dataFromUrl: undefined,
      userId
    };
  }

  if (userId && postId) {
    data = getCommnonPropsAndPostOfAUser({ userId, postId }) as
      | FullPost
      | undefined;
  }

  return {
    weMustRenderAUserProfile: false,
    dataFromUrl: data,
    userId
  };
}
