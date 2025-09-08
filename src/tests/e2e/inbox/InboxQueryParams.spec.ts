import { test, expect } from '@playwright/test';
import { inboxURL, queryParam } from '@/tests/e2e/e2eUtils';

test('the inbox query param is consistent', async ({ page }) => {
  await page.goto(inboxURL);
  await expect(page).toHaveURL(url => {
    const searchParams = new URL(url).searchParams;
    return Boolean(searchParams.get(queryParam.inbox));
  });
});
