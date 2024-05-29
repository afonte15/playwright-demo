import { test, expect } from '@playwright/test';
import ENV from '../utls/env';
console.log(`${ENV.ENVIRONMENT}`)
test('has title', {tag: '@e2e'}, async ({ page }) => {
  //await page.goto('https://playwright.dev/');
  console.log('from 1st test',`${ENV.ENVIRONMENT}`)
  console.log('from 1st test',ENV.BASE_URL)
  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
});

test('get started link',{tag: '@e2e'}, async ({ page }) => {
  //await page.goto('https://playwright.dev/');
  console.log('from 2nd test',ENV.ENVIRONMENT)
  console.log('from 2nd test',ENV.BASE_URL)

  // Click the get started link.
  // await page.getByRole('link', { name: 'Get started' }).click();

  // // Expects page to have a heading with the name of Installation.
  // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
