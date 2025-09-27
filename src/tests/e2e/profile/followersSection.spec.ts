import { test, expect } from '@playwright/test';
import { profileURL } from '@/tests/e2e/e2eUtils';

test('Followers section render correctly', async ({ page }) => {
  await page.goto(profileURL);
  await page.waitForTimeout(2000);
  const followers = page.getByText('Followers')
  await expect(followers).toBeVisible();
  await followers.click();
  await expect(page.locator('.followed-account-row').first()).toBeVisible();
});
