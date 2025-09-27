import { test, expect } from '@playwright/test';
import { uploadURL } from '@/tests/e2e/e2eUtils';

test('mode photo and video', async ({ page }) => {
  await page.goto(uploadURL);
  await page.waitForTimeout(2000);
  await expect(page.locator('.circle-of-capture-photo')).toBeVisible();
  const modeVideo = page.locator('.container-type-capture.type-video')
  await modeVideo.click();
  await expect(page.locator('.circle-of-capture-video')).toBeVisible();
});
