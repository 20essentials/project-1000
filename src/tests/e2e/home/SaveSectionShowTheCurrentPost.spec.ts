import { test, expect } from '@playwright/test';
import { homeURL, profileURL } from '@/tests/e2e/e2eUtils';

test(`After clicking the save button, we ensure that the current post is saved in the current user's save section`, async ({
  page
}) => {
  await page.goto(homeURL);
  const saveContainer = page.locator('.btn-container-saved').first();
  await saveContainer.click();
  await expect(saveContainer).toContainClass('this-post-is-saved');
  await page.goto(profileURL);
  const buttonShowGridPost = page.locator('.button-show-user-saved-posts');
  await buttonShowGridPost.click();
  const count = await page.locator('.content-post').count();
  expect(count).toBe(1);
});
