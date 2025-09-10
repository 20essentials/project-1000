import { test, expect } from '@playwright/test';
import { USER_TEST, queryParam } from '@/tests/e2e/e2eUtils';

test("navigate from profile user creator section to home and verify that 'For You' button is visible and the query params are correct", async ({
  page
}) => {
  // Go to the profile user URL
  await page.goto(USER_TEST.url);

  // Verify that the profile user parameter in the URL is the expected one
  await expect(page).toHaveURL(url =>
    Boolean(new URL(url).searchParams.get(queryParam.userId))
  );

  // Navigate to the Home section by clicking on the corresponding icon
  const homeSectionIcon = page
    .getByRole('complementary')
    .filter({ hasText: 'Home' })
    .getByRole('img');
  await homeSectionIcon.click();

  // Verify that the "For You" button is visible in Home
  const forYouButton = page.getByRole('button', { name: 'For You' });
  await expect(forYouButton).toBeVisible();

  // Verify that the query parameters are correct in Home
  await expect(page).toHaveURL(url => {
    const currentSearchParams = new URL(url).searchParams;
    return Boolean(
      currentSearchParams.get(queryParam.userId) &&
        currentSearchParams.get(queryParam.postId)
    );
  });
});
