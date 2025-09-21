import { test, expect } from '@playwright/test';
import { homeURL } from '@/tests/e2e/e2eUtils';

test('The Slider Scrolls Works', async ({ page }) => {
  await page.goto(homeURL);

  const sliderPosts = page.locator('.slider-posts .slider');

  await sliderPosts.evaluate((el: HTMLElement) => {
    el.scrollTop = 0;
    el.scrollTop += 500;
  });

  const scrollTop = await sliderPosts.evaluate((el: HTMLElement) => el.scrollTop);
  const minScrollTop = 400; //margin, position, etc. Decrease the number.
  expect(scrollTop).toBeGreaterThanOrEqual(minScrollTop);
});