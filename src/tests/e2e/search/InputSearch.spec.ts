import { test, expect } from '@playwright/test';
import { searchURL, USER_TEST, queryParam } from '@/tests/e2e/e2eUtils';

test.beforeEach(async ({ page }) => {
  await page.goto(searchURL);
  const inputSearch = page.getByTestId('input-search');
  await inputSearch.fill(USER_TEST.username);
});

test('the input search modify the query param', async ({ page }) => {
  await expect(page).toHaveURL(url => {
    const searchParams = new URL(url).searchParams;
    return searchParams.get(queryParam.search) === USER_TEST.username;
  });
});

test('the input search render correctly the result', async ({ page }) => {
  const resultRow = page.locator('.user-search', { hasText: USER_TEST.username });
  await expect(resultRow).toHaveCount(1);
  await expect(resultRow).toContainText(USER_TEST.username);
});

test('the input search render correctly the result and render the user if it is clicked', async ({ page }) => {
  const resultRow = page.locator('.user-search', { hasText: USER_TEST.username });
  await resultRow.click();
  await expect(page).toHaveURL(url => {
    const searchParams = new URL(url).searchParams;
    return searchParams.get(queryParam.userId) === USER_TEST.userId;
  });
});
