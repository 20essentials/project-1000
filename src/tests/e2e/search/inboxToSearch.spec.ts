import { test, expect } from '@playwright/test';
import { inboxURL, queryParam } from '@/tests/e2e/e2eUtils';

test('navigate from inbox section to search', async ({ page }) => {
  await page.goto(inboxURL);

  await expect(page).toHaveURL(url =>
    Boolean(new URL(url).searchParams.get(queryParam.inbox))
  );

  const searchSection = page
    .getByRole('complementary')
    .filter({ hasText: 'Search' })
    .getByRole('img');
  await searchSection.click();

  await expect(page.getByRole('textbox')).toBeVisible();
});
