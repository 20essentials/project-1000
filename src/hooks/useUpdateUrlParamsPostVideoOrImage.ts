export function useUpdateUrlParamsPostVideoOrImage({
  postId,
  userId
}: {
  postId: string;
  userId: string;
}) {
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
