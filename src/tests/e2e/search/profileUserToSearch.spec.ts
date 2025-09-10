import { test, expect } from '@playwright/test';
import { profileURL, queryParam } from '@/tests/e2e/e2eUtils';

test('navigate from profile user section to search', async ({ page }) => {
  await page.goto(profileURL);

  await expect(page).toHaveURL(url =>
    Boolean(new URL(url).searchParams.get(queryParam.profile))
  );

  const searchSection = page
    .getByRole('complementary')
    .filter({ hasText: 'Search' })
    .getByRole('img');
  await searchSection.click();

  await expect(page.getByRole('textbox')).toBeVisible();
});
