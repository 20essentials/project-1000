import { test, expect } from '@playwright/test';
import { uploadURL, queryParam } from '@/tests/e2e/e2eUtils';

test('navigate from upload section to profile user section', async ({ page }) => {
  await page.goto(uploadURL);

  await expect(page).toHaveURL(url => {
    const currentSearchParams = new URL(url).searchParams;
    return Boolean(currentSearchParams.get(queryParam.upload));
  });

  await page
    .getByRole('complementary')
    .filter({ hasText: 'Profile' })
    .getByRole('img')
    .click();
  await expect(page.getByText('Followed')).toBeVisible();
  await expect(page.getByText('Followers')).toBeVisible();
  await expect(page.getByText('Likes')).toBeVisible();

  await expect(page).toHaveURL(url => {
    const currentSearchParams = new URL(url).searchParams;
    return Boolean(currentSearchParams.get(queryParam.profile));
  });
});
