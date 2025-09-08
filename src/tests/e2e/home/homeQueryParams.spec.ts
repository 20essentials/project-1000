import { test, expect } from '@playwright/test';
import {
  postUrlFromUserTest,
  userId,
  postId,
  queryParam
} from '@/tests/e2e/e2eUtils';

test('the userId and postId params are consistent', async ({ page }) => {
  await page.goto(postUrlFromUserTest);
  await expect(page).toHaveURL(url => {
    const searchParams = new URL(url).searchParams;
    return (
      searchParams.get(queryParam.userId) === userId &&
      searchParams.get(queryParam.postId) === postId
    );
  });
});
