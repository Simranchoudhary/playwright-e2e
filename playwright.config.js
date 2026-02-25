import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './tests',
  globalSetup: './global-setup.js',
  workers: 2,
  retries: 1,
  reporter: [['html', { open: 'never' }]],

  use: {
    baseURL: process.env.BASE_URL,
    storageState: 'storageState.json',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
});