import { test, expect } from '@playwright/test';
import { homeURL } from '@/tests/e2e/e2eUtils';

test('navigate from home section to inbox', async ({ page }) => {
  await page.goto(homeURL);
  await page.waitForTimeout(2000);
  await expect(page.locator('.for-you-button-top')).toBeVisible();

  const InboxSection = page
    .getByRole('complementary')
    .filter({ hasText: 'Inbox' })
    .getByRole('img');
  await InboxSection.click();
  await expect(page.getByText('Recommended accounts')).toBeVisible();
});
