import { test, expect } from '@playwright/test';
import {
  postUrlFromUserTest,
  POST_1_USER_TEST,
  USER_TEST,
  queryParam
} from '@/tests/e2e/e2eUtils';

test('the userId and postId params are consistent', async ({ page }) => {
  await page.goto(postUrlFromUserTest);
  await expect(page).toHaveURL(url => {
    const searchParams = new URL(url).searchParams;
    return (
      searchParams.get(queryParam.userId) === USER_TEST.userId &&
      searchParams.get(queryParam.postId) === POST_1_USER_TEST.idPost
    );
  });
});
