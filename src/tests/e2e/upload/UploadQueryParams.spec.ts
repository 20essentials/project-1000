


import { test, expect } from '@playwright/test';
import { uploadURL, queryParam } from '@/tests/e2e/e2eUtils';

test('the upload query param is consistent', async ({ page }) => {
  await page.goto(uploadURL);
  await expect(page).toHaveURL(url => {
    const searchParams = new URL(url).searchParams;
    return Boolean(searchParams.get(queryParam.upload));
  });
});
