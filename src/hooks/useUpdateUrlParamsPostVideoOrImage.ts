import { useGlobalArrayPosts } from '@/store/useGlobalArrayPosts';
import type { FullPost } from '@/components/pages/SliderPosts/types';
import { render } from '@testing-library/react';
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

export function existTheseQueryParams({
  arrayOfQueryParams = []
}: {
  arrayOfQueryParams: queryParamsArray;
}) {
  const currentUrl = new URL(window.location.href);
  const params = currentUrl.searchParams;
  return arrayOfQueryParams.every(key => {
    return params.has(key);
  });
}

export function deleteParamsOfUrl({
  arrayOfQueryParamsToDelete = [
    'inbox',
    'postId',
    'profile',
    'search',
    'upload',
    'userId'
  ]
}: {
  arrayOfQueryParamsToDelete?: queryParamsArray;
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

export function removeAllParamsOfUrl() {
  deleteParamsOfUrl({
    arrayOfQueryParamsToDelete: [
      'inbox',
      'postId',
      'profile',
      'search',
      'upload',
      'userId'
    ]
  });
}

export function updateURLsearchParams({
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

/* export function useUpdateUrlParamsPostVideoOrImage({
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
} */

export function getQueryParamValue({
  queryParam
}: {
  queryParam: queryParamType;
}): string | null {
  const currentUrl = new URL(window.location.href);
  const params = currentUrl.searchParams;
  return params.get(queryParam);
}

export function usetGetDataParamPostVideoOrImages(): {
  weMustRenderAUserProfile: boolean;
  dataFromUrl: FullPost | undefined;
  userId: string | null;
  renderSearchSection: boolean;
  renderUploadSection?: boolean;
  renderInboxSection?: boolean;
  renderProfileSection?: boolean;
} {
  const getCommnonPropsAndPostOfAUser = useGlobalArrayPosts(
    state => state.getCommnonPropsAndPostOfAUser
  );
  const thisUserExists = useGlobalArrayPosts(s => s.thisUserExists);
  const currentUrl = new URL(window.location.href);
  const arrayOfParams: queryParamsArray = [
    'userId',
    'postId',
    'search',
    'upload',
    'inbox',
    'profile'
  ];
  const [userId, postId, search, upload, inbox, profile] = arrayOfParams.map(id =>
    currentUrl.searchParams.get(id)
  );

  const defaultObject = {
    weMustRenderAUserProfile: false,
    renderSearchSection: false,
    renderUploadSection: false,
    renderInboxSection: false,
    renderProfileSection: false,
    dataFromUrl: undefined,
    userId
  };
  const renderPostOfHome = userId && postId;
  const renderAnUserProfile = !postId && userId;
  const renderSearch = search;
  const renderUpload = upload;
  const renderInbox = inbox;
  const renderProfile = profile;

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

  if (renderUpload) {
    return {
      ...defaultObject,
      renderUploadSection: true
    };
  }

  if (renderInbox) {
    return {
      ...defaultObject,
      renderInboxSection: true
    };
  }

  if (renderProfile) {
    return {
      ...defaultObject,
      renderProfileSection: true
    };
  }

  return defaultObject;
}
