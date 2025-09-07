import { useGlobalArrayPosts } from '@/store/useGlobalArrayPosts';
import type { FullPost } from '@/components/pages/SliderPosts/types';
export const queryParam = {
  userId: 'userId',
  postId: 'postId',
  search: 'search',
  inbox: 'inbox',
  upload: 'upload',
  profile: 'profile'
} as const;

export type queryParamType = (typeof queryParam)[keyof typeof queryParam];
export type queryParamsArray = queryParamType[];

export function deleteParamsOfUrl({
  arrayOfQueryParamsToDelete = [queryParam.userId, queryParam.postId]
}: {
  arrayOfQueryParamsToDelete: queryParamsArray;
}) {
  const currentUrl = new URL(window.location.href);
  const params = currentUrl.searchParams;

  arrayOfQueryParamsToDelete.forEach(key => {
    if (key && params.has(key)) {
      params.delete(key);
    }
  });

  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState(null, '', newUrl);
}

export function useUpdateUrlParams({
  arrayOfQueryParamsToSet = [[queryParam.userId, queryParam.postId]]
}: {
  arrayOfQueryParamsToSet: [queryParamType, string][];
}) {
  const currentUrl = new URL(window.location.href);
  const params = currentUrl.searchParams;

  arrayOfQueryParamsToSet.forEach(([key, value]) => {
    if (value && value.length > 0 && value != null && value !== '') {
      params.set(key, value);
    }
  });

  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState(null, '', newUrl);
}

export function useUpdateUrlParamsPostVideoOrImage({
  postId = '',
  userId = ''
}: {
  postId?: string;
  userId?: string;
}) {
  const currentUrl = new URL(window.location.href);
  const params = currentUrl.searchParams;

  const values: [queryParamType, string][] = [
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

export function usetGetDataParamPostVideoOrImages(): {
  weMustRenderAUserProfile: boolean;
  dataFromUrl: FullPost | undefined;
  userId: string | null;
  renderSearchSection: boolean;
} {
  const getCommnonPropsAndPostOfAUser = useGlobalArrayPosts(
    state => state.getCommnonPropsAndPostOfAUser
  );
  const thisUserExists = useGlobalArrayPosts(s => s.thisUserExists);
  const currentUrl = new URL(window.location.href);
  const [userId, postId, search] = ['userId', 'postId', 'search'].map(id =>
    currentUrl.searchParams.get(id)
  );

  const defaultObject = {
    weMustRenderAUserProfile: false,
    renderSearchSection: false,
    dataFromUrl: undefined,
    userId
  };
  const renderPostOfHome = userId && postId;
  const renderAnUserProfile = !postId && userId;
  const renderSearch = search;

  if (renderAnUserProfile) {
    const user = thisUserExists({ userId: userId ?? '' });

    return {
      ...defaultObject,
      weMustRenderAUserProfile: Boolean(user),
      dataFromUrl: undefined,
      userId
    };
  }

  if (renderPostOfHome) {
    return {
      ...defaultObject,
      dataFromUrl: getCommnonPropsAndPostOfAUser({ userId, postId }) as
        | FullPost
        | undefined,
      userId
    };
  }

  if (renderSearch) {
    return {
      ...defaultObject,
      renderSearchSection: true
    };
  }

  return defaultObject;
}
