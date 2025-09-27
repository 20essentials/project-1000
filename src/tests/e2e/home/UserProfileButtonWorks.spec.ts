import { test, expect } from '@playwright/test';
import { homeURL, queryParam } from '@/tests/e2e/e2eUtils';

test('navigate from home section to profile user creator section', async ({
  page
}) => {
  await page.goto(homeURL);
  await page.waitForTimeout(2000);
  await expect(page).toHaveURL(url => {
    const currentSearchParams = new URL(url).searchParams;
    return Boolean(
      currentSearchParams.get(queryParam.userId) &&
        currentSearchParams.get(queryParam.postId)
    );
  });

  await page.locator('.user-profile-circle-img').first().click();

  await expect(page.getByText('Followed')).toBeVisible();
  await expect(page.getByText('Followers')).toBeVisible();
  await expect(page.getByText('Likes')).toBeVisible();

  await expect(page).toHaveURL(url => {
    const currentSearchParams = new URL(url).searchParams;
    return Boolean(currentSearchParams.get(queryParam.userId));
  });
});
