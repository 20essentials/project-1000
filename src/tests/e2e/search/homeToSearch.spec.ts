import { test, expect } from '@playwright/test';
import { homeURL } from '@/tests/e2e/e2eUtils';

test('navigate from home section to search', async ({ page }) => {
  await page.goto(homeURL);

  const forYouButton = page.getByRole('button', { name: 'For You' });
  await expect(forYouButton).toBeVisible();

  const searchSection = page
    .getByRole('complementary')
    .filter({ hasText: 'Search' })
    .getByRole('img');
  await searchSection.click();

  await expect(page.getByRole('textbox')).toBeVisible();
});
