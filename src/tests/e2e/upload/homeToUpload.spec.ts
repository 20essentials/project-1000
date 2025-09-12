import { test, expect } from '@playwright/test';
import { homeURL, queryParam } from '@/tests/e2e/e2eUtils';

test('navigate from home section to upload section', async ({ page }) => {
  await page.goto(homeURL);

  const forYouButton = page.getByRole('button', { name: 'For You' });
  await expect(forYouButton).toBeVisible();

  await page.locator('.wrapper-upload-logo').click();
  await page.getByRole('button', { name: 'Create' }).click();
  await expect(page.getByRole('button', { name: 'Create' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Upload' })).toBeVisible();

  await expect(page).toHaveURL(url => {
    const currentSearchParams = new URL(url).searchParams;
    return Boolean(currentSearchParams.get(queryParam.upload));
  });
});
