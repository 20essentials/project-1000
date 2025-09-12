import { test, expect } from '@playwright/test';
import { homeURL, queryParam } from '@/tests/e2e/e2eUtils';

test('The follows plus works correctly', async ({ page }) => {
  await page.goto(homeURL);

  const badge = page.locator('.bagde-of-follow-of-the-user').first();
  await badge.click();
  await expect(badge).toContainClass('hiddenBadge');

  /*  await expect(page.getByText('Followed')).toBeVisible();
  await expect(page.getByText('Followers')).toBeVisible();
  await expect(page.getByText('Likes')).toBeVisible();

  await expect(page).toHaveURL(url => {
    const currentSearchParams = new URL(url).searchParams;
    return Boolean(currentSearchParams.get(queryParam.userId));
  }); */
});
