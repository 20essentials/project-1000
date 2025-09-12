import { test, expect } from '@playwright/test';
import { homeURL, queryParam, USER_TEST } from '@/tests/e2e/e2eUtils';

test('When The User Do Click In The Comment Row', async ({ page }) => {
  await page.goto(homeURL);

  await expect(page).toHaveURL(url => {
    const currentSearchParams = new URL(url).searchParams;
    return Boolean(
      currentSearchParams.get(queryParam.userId) &&
        currentSearchParams.get(queryParam.postId)
    );
  });

  await page.locator('.button-container-of-comments').first().click();
  await page.locator('.profile-in-comments-of-the-user').first().click();

  await expect(page.getByText('Followed')).toBeVisible();
  await expect(page.getByText('Followers')).toBeVisible();
  await expect(page.getByText('Likes')).toBeVisible();

  await expect(page).toHaveURL(url => {
    const currentSearchParams = new URL(url).searchParams;
    return Boolean(currentSearchParams.get(queryParam.userId));
  });
});
