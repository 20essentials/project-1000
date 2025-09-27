import { test, expect } from '@playwright/test';
import { searchURL, queryParam, USER_TEST } from '@/tests/e2e/e2eUtils';

test('navigate from home section to profile user creator section', async ({
  page
}) => {
  await page.goto(searchURL);

  await expect(page).toHaveURL(url => {
    const currentSearchParams = new URL(url).searchParams;
    return Boolean(currentSearchParams.get(queryParam.search));
  });

  await page.goto(USER_TEST.url);
  await page.waitForTimeout(3000);
  await expect(page.getByText('Followed')).toBeVisible();
  await expect(page.getByText('Followers')).toBeVisible();
  await expect(page.getByText('Likes')).toBeVisible();

  await expect(page).toHaveURL(url => {
    const currentSearchParams = new URL(url).searchParams;
    return Boolean(currentSearchParams.get(queryParam.userId));
  });
});
