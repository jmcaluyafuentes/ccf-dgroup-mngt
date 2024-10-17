import { test } from '@playwright/test';

test('test browser', async ({ page }) => {
    // Navigate to the app
    await page.goto('http://localhost:5173/');

    // keep browser open
    await page.pause();
});
