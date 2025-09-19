import { test, expect } from '@playwright/test';
import { homeURL, profileURL } from '@/tests/e2e/e2eUtils';

test(`After clicking the republish button, we ensure that the current post is saved in the current user's republish section`, async ({
  page
}) => {
  await page.goto(homeURL);
  const shareIcon = page.locator('.button-share-post').first();
  await shareIcon.click();
  const republishPost = page.locator('.button-republish-post').first();
  await republishPost.click();
  await page.goto(profileURL);
  const buttonShowGridPost = page.locator('.button-show-user-republish-posts');
  await buttonShowGridPost.click();
  const count = await page.locator('.content-post').count();
  expect(count).toBe(1);
});
