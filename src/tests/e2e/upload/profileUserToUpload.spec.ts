import { test, expect } from '@playwright/test';
import { profileURL, queryParam } from '@/tests/e2e/e2eUtils';

test('navigate from user profile section to upload section', async ({ page }) => {
  await page.goto(profileURL);

  await expect(page).toHaveURL(url => {
    const currentSearchParams = new URL(url).searchParams;
    return Boolean(currentSearchParams.get(queryParam.profile));
  });

  await page.locator('.wrapper-upload-logo').click();
  await expect(page.getByRole('button', { name: 'Create' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Upload' })).toBeVisible();

  await expect(page).toHaveURL(url => {
    const currentSearchParams = new URL(url).searchParams;
    return Boolean(currentSearchParams.get(queryParam.upload));
  });
});
