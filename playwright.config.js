import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './tests',
  globalSetup: './global-setup.js',
  workers: 2,
  retries: 1,
  reporter: [
    ['html', { open: 'never' }],
    ['allure-playwright']
  ],

  use: {
    baseURL: process.env.BASE_URL,
    storageState: 'storageState.json', // Reuse stored authentication session across tests
    headless: true,
    screenshot: 'only-on-failure', // Capture artifacts for debugging failures
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
});