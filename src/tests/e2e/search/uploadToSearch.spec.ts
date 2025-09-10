import { test, expect } from '@playwright/test';
import { uploadURL, queryParam } from '@/tests/e2e/e2eUtils';

test('navigate from upload section to search', async ({ page }) => {
  await page.goto(uploadURL);

  await expect(page).toHaveURL(url =>
    Boolean(new URL(url).searchParams.get(queryParam.upload))
  );

  const searchSection = page
    .getByRole('complementary')
    .filter({ hasText: 'Search' })
    .getByRole('img');
  await searchSection.click();

  await expect(page.getByRole('textbox')).toBeVisible();
});
