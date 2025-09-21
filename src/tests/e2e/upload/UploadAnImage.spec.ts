import { test, expect } from '@playwright/test';
import { uploadURL } from '@/tests/e2e/e2eUtils';
import path from 'path';

test('the upload sections really upload an image', async ({ page }) => {
  await page.goto(uploadURL);
  const buttonUpload = page.locator('.footer-upload .footer-button-upload');
  await buttonUpload.click();
  const inputUploadPhoto = page.getByTestId('input-upload-photo');
  const filePath = path.resolve(import.meta.dirname, 'image-test.avif');
  await inputUploadPhoto.setInputFiles(filePath);
});
