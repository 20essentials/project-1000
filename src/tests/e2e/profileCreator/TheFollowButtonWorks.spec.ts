import { test, expect } from '@playwright/test';
import { homeURL } from '@/tests/e2e/e2eUtils';

test('The follows button works', async ({ page }) => {
  await page.goto(homeURL);

  const badge = page.locator('.bagde-of-follow-of-the-user').first();
  await badge.click();
  await expect(badge).toContainClass('hiddenBadge');

  await page.locator('.user-profile-circle-img').first().click();

  await expect(page.getByText('Followers')).toBeVisible();
  await expect(page.getByText('Likes')).toBeVisible();

  await expect(page.locator('.follow-button')).toContainText('Followed');
});
