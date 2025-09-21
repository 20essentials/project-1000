import { test, expect } from '@playwright/test';
import { uploadURL } from '@/tests/e2e/e2eUtils';
import path from 'path';

test('the upload sections really upload a video', async ({ page }) => {
  await page.goto(uploadURL);
  const modeVideo = page.locator('.container-type-capture.type-video');
  await modeVideo.click();
  const buttonUpload = page.locator('.footer-upload .footer-button-upload');
  await buttonUpload.click();
  const videoInput = page.getByTestId('input-upload-video');
  const filePath = path.resolve(import.meta.dirname, './video-testing.mp4');

  await videoInput.setInputFiles(filePath);
  /*   const fileCount = await videoInput.evaluate(
    (input: HTMLInputElement) => input.files?.length ?? 0
  );
  expect(fileCount).toBe(1); */
  await expect(page.locator('.am-video')).toHaveCount(1); // video visible

  await page.locator('.keycap').click();
  await expect(page.locator('.content-post')).toHaveCount(1);
});
