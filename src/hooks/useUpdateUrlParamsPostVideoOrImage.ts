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
  // const [userId, postId] = [
  //   'userId',
  //   'postId',
  // ].map(lang => currentUrl.searchParams.get(lang));

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
