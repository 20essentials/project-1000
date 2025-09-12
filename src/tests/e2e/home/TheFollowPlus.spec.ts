import { test, expect } from '@playwright/test';
import { homeURL } from '@/tests/e2e/e2eUtils';

test('The follows plus works correctly', async ({ page }) => {
  await page.goto(homeURL);

  const badge = page.locator('.bagde-of-follow-of-the-user').first();
  await badge.click();
  await expect(badge).toContainClass('hiddenBadge');
});
