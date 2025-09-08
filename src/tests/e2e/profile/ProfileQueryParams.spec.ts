import { test, expect } from '@playwright/test';
import { queryParam, profileURL } from '@/tests/e2e/e2eUtils';

test('the profile query param is consistent', async ({ page }) => {
  await page.goto(profileURL);
  await expect(page).toHaveURL(url => {
    const searchParams = new URL(url).searchParams;
    return Boolean(searchParams.get(queryParam.profile));
  });
});
