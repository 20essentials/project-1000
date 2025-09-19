import { test, expect } from '@playwright/test';
import { homeURL, profileURL } from '@/tests/e2e/e2eUtils';

test(`After clicking the heart button, we ensure that the current post is saved in the current user's heart section`, async ({
  page
}) => {
  await page.goto(homeURL);
  const heartContainer = page.locator('.btn-container-liked').first();
  await heartContainer.click();
  await expect(heartContainer).toContainClass('this-post-is-liked');
  await page.goto(profileURL);
  const buttonShowGridPost = page.locator('.button-show-user-loved-posts');
  await buttonShowGridPost.click();
  const count = await page.locator('.content-post').count();
  expect(count).toBe(1);
});
