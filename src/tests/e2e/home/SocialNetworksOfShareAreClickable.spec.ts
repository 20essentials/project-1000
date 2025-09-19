import { test, expect, type Page, type BrowserContext } from '@playwright/test';
import { homeURL } from '@/tests/e2e/e2eUtils';

let page: Page;
let context: BrowserContext;

test.beforeEach(async ({ browser }) => {
  context = await browser.newContext();
  page = await context.newPage();
  await page.goto(homeURL);
  const shareIcon = page.locator('.button-share-post').first();
  await shareIcon.click();
});

test(`After clicking the pinterest share button, we ensure that pinterest page is open`, async () => {
  const pagePromise = context.waitForEvent('page');
  const pinterestButton = page.locator('.pinterest-button-share').first();
  await pinterestButton.click();

  const newPage = await pagePromise;
  await newPage.waitForLoadState();
  expect(newPage.url()).toContain('https://www.pinterest.com/pin');
});

test(`After clicking the discord share button, we ensure that discord page is open`, async () => {
  const pagePromise = context.waitForEvent('page');
  const discordButton = page.locator('.discord-button-share').first();
  await discordButton.click();

  const newPage = await pagePromise;
  await newPage.waitForLoadState();
  expect(newPage.url()).toContain('discord.com');
});
