import { test, expect } from '@playwright/test';
import { homeURL } from '@/tests/e2e/e2eUtils';

test('Save of a post works correctly', async ({ page }) => {
  await page.goto(homeURL);
  const savesCount = page.locator('.post-save-count').first();
  const originalNumber = Number(savesCount.getAttribute('data-num-of-saves'));
  const saveContainer = page.locator('.btn-container-saved').first();
  await saveContainer.click();
  await expect(saveContainer).toContainClass('this-post-is-saved');
  const newNumber = Number(savesCount.getAttribute('data-num-of-saves'));
  expect(originalNumber + 1).toBe(newNumber);
  await saveContainer.click();
  await expect(saveContainer).not.toContainClass('this-post-is-saved');
});
