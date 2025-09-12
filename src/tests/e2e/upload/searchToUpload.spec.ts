import { test, expect } from '@playwright/test';
import { searchURL, queryParam } from '@/tests/e2e/e2eUtils';

test('navigate from search section to upload section', async ({ page }) => {
  await page.goto(searchURL);

  await expect(page).toHaveURL(url => {
    const currentSearchParams = new URL(url).searchParams;
    return Boolean(currentSearchParams.get(queryParam.search));
  });

  await page.locator('.wrapper-upload-logo').click();
  await page.getByRole('button', { name: 'Create' }).click();
  await expect(page.getByRole('button', { name: 'Create' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Upload' })).toBeVisible();

  await expect(page).toHaveURL(url => {
    const currentSearchParams = new URL(url).searchParams;
    return Boolean(currentSearchParams.get(queryParam.upload));
  });
});
