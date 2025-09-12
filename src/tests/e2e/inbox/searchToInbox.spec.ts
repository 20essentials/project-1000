import { test, expect } from '@playwright/test';
import { searchURL, queryParam } from '@/tests/e2e/e2eUtils';

test('navigate from search section to inbox', async ({ page }) => {
  await page.goto(searchURL);

  await expect(page).toHaveURL(url =>
    Boolean(new URL(url).searchParams.get(queryParam.search))
  );

  const InboxSection = page
    .getByRole('complementary')
    .filter({ hasText: 'Inbox' })
    .getByRole('img');
  await InboxSection.click();
  await expect(page.getByText('Recommended accounts')).toBeVisible();
});
