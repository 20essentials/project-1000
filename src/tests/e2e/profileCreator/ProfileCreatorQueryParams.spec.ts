import { test, expect } from '@playwright/test';
import { queryParam, USER_TEST } from '@/tests/e2e/e2eUtils';

test('the query param in profile creator is consistent', async ({ page }) => {
  await page.goto(USER_TEST.url);
  await expect(page).toHaveURL(url => {
    const searchParams = new URL(url).searchParams;
    return Boolean(searchParams.get(queryParam.userId));
  });
});
