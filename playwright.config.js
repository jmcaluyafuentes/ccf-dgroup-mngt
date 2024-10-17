import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './e2e', // Directory where your Playwright tests are located
    timeout: 60000, // Maximum test time (in milliseconds)
    retries: 2, // Retry failed tests
    use: {
    browserName: 'webkit', // Use Safari for testing (WebKit)
    headless: false, // Run tests in a visible browser window
    screenshot: 'on', // Take screenshots on failure
    video: 'retain-on-failure', // Record video only on test failures
    },
    webServer: {
        command: 'npm run dev', // Command to start your local server
        port: 5173, // Port your app runs on
        reuseExistingServer: true, // Reuse an existing server if running
    },
});
