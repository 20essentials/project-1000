import { test, expect } from '@playwright/test';
import { searchURL, searchQueryValue, queryParam } from '@/tests/e2e/e2eUtils';

test('the search query param is consistent', async ({ page }) => {
  await page.goto(searchURL);
  await expect(page).toHaveURL(url => {
    const searchParams = new URL(url).searchParams;
    return searchParams.get(queryParam.search) === searchQueryValue;
  });
});
