import { test, expect } from '@playwright/test';

test('the userId and postId params are consistent', async ({ page }) => {
  const userId = '1339e4cd-cd20-40b5-8e47-1f4483d586a3';
  const postId =
    '1339e4cd-cd20-40b5-8e47-1f4483d586a3-img-f95fbbd1-4c2f-4575-8699-c4dff4e0d0b9000035';
  await page.goto(`/?userId=${userId}&postId=${postId}`);

  await expect(page).toHaveURL(url => {
    const searchParams = new URL(url).searchParams;
    return (
      searchParams.get('userId') === userId &&
      searchParams.get('postId') === postId
    );
  });
});
