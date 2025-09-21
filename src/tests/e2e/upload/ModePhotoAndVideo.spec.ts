import { test, expect } from '@playwright/test';
import { uploadURL } from '@/tests/e2e/e2eUtils';

test('mode phot and video', async ({ page }) => {
  await page.goto(uploadURL);
  await expect(page.locator('.circle-of-capture-photo')).toBeVisible();
  const modeVideo = page.locator('.container-type-capture.type-video')
  await modeVideo.click();
  await expect(page.locator('.circle-of-capture-video')).toBeVisible();
});
