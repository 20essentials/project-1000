import { test, expect } from '@playwright/test';
import { uploadURL, queryParam } from '@/tests/e2e/e2eUtils';

test('navigate from upload section to inbox', async ({ page }) => {
  await page.goto(uploadURL);

  await expect(page).toHaveURL(url =>
    Boolean(new URL(url).searchParams.get(queryParam.upload))
  );

  const InboxSection = page
    .getByRole('complementary')
    .filter({ hasText: 'Inbox' })
    .getByRole('img');
  await InboxSection.click();
  await expect(page.getByText('Recommended accounts')).toBeVisible();

  await expect(page).toHaveURL(url => {
    const currentSearchParams = new URL(url).searchParams;
    return Boolean(currentSearchParams.get(queryParam.inbox));
  });
});
