import { test, expect } from '@playwright/test';
import { USER_TEST, queryParam } from '@/tests/e2e/e2eUtils';

test('navigate from profile user creator section to search', async ({ page }) => {
  await page.goto(USER_TEST.url);

  await expect(page).toHaveURL(url => {
    const searchPaams = new URL(url).searchParams;
    return Boolean(
      searchPaams.get(queryParam.userId)
    );
  });

  const searchSection = page
    .getByRole('complementary')
    .filter({ hasText: 'Search' })
    .getByRole('img');
  await searchSection.click();

  await expect(page.getByRole('textbox')).toBeVisible();
});
