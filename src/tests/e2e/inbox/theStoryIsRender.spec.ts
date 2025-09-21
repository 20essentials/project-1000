import { test, expect } from '@playwright/test';
import { inboxURL } from '@/tests/e2e/e2eUtils';

test('The story render correctly', async ({ page }) => {
  await page.goto(inboxURL);
  const firstHistoryContainer = page.locator('.history-container').first();
  await firstHistoryContainer.click();
  const postVideo = page.locator('.post-video').first();
  await expect(postVideo).toBeVisible();
});
