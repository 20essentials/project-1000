import { useGlobalArrayPosts } from '@/store/useGlobalArrayPosts';
import { sleep } from '@/utils/functions';

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
    if (value && value.length > 0) {
      params.set(key, value);
    }
  });

  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState(null, '', newUrl);
}

import type { FullPost } from '@/components/pages/SliderPosts/types';

/* Url de midu para practicar */
// http://localhost:4321/?userId=21a87f69-c341-492f-a156-47588fd606dd6&postId=21a87f69-c341-492f-a156-47588fd606dd6-3f7bd846-868a-48ad-a93c-c2b5fbf8fb49
export function usetGetDataParamPostVideoOrImages(): FullPost | undefined {
  // const allPostsForYou = useGlobalArrayPosts(state => state.FOR_YOU);
  const getCommnonPropsAndPostOfAUser = useGlobalArrayPosts(
    state => state.getCommnonPropsAndPostOfAUser
  );
  const currentUrl = new URL(window.location.href);
  const [userId, postId] = ['userId', 'postId'].map(id =>
    currentUrl.searchParams.get(id)
  );

  let data;
  if (userId && postId) {
    data = getCommnonPropsAndPostOfAUser({ userId, postId }) as FullPost | undefined;
  }

  return data;
}