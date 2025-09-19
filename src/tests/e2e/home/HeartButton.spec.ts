import { test, expect } from '@playwright/test';
import { homeURL } from '@/tests/e2e/e2eUtils';

test('The heart of a post works correctly', async ({ page }) => {
  await page.goto(homeURL);
  const numOfHearts = page.locator('.num-of-hearts-of-the-post').first();
  const originalNumber = Number(numOfHearts.getAttribute('data-num-of-hearts'));
  const heartContainer = page.locator('.btn-container-liked').first();
  await heartContainer.click();
  await expect(heartContainer).toContainClass('this-post-is-liked');
  const newNumber = Number(numOfHearts.getAttribute('data-num-of-hearts'));
  expect(originalNumber + 1).toBe(newNumber);
  await heartContainer.click();
  await expect(heartContainer).not.toContainClass('this-post-is-liked');
});
