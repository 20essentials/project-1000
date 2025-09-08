export const userId = '1339e4cd-cd20-40b5-8e47-1f4483d586a3';
export const postId =
  '1339e4cd-cd20-40b5-8e47-1f4483d586a3-img-f95fbbd1-4c2f-4575-8699-c4dff4e0d0b9000035';
export const postUrlFromUserTest = `/?userId=${userId}&postId=${postId}`;
export const homeURL = '/'
export const searchQueryValue = 'hello';
export const searchURL = `/?search=${searchQueryValue}`;
export const uploadURL = '/?upload=view';
export const inboxURL = '/?inbox=view';
export const profileURL = '/?profile=view';
export const queryParam = {
  userId: 'userId',
  postId: 'postId',
  search: 'search',
  inbox: 'inbox',
  upload: 'upload',
  profile: 'profile'
} as const;