import { test, expect } from '@playwright/test';
import { homeURL } from '@/tests/e2e/e2eUtils';

test(`Followed section show the message when the user don't have followed accounts`, async ({
  page
}) => {
  await page.goto(homeURL);
  const followedButton = page.getByRole('button', { name: 'Followed' });
  await expect(followedButton).toBeVisible();
  await followedButton.click();
  await expect(page.locator('.modal-alert')).toBeVisible();
});

test(`Followed section doesn't show the message when the user have followed accounts`, async ({
  page
}) => {
  await page.goto(homeURL);
  const badge = page.locator('.bagde-of-follow-of-the-user').first();
  await badge.click();
  await expect(badge).toContainClass('hiddenBadge');
  const followedButton = page.getByRole('button', { name: 'Followed' });
  await expect(followedButton).toBeVisible();
  await followedButton.click();
  await expect(page.locator('.modal-alert')).not.toBeVisible();
});
