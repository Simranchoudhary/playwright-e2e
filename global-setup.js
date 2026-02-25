import dotenv from 'dotenv';
dotenv.config();

import { chromium } from '@playwright/test';
import { LoginPage } from './pages/LoginPage.js';
import { env } from './utils/env.js';

export default async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const login = new LoginPage(page);
  await login.goto();              
  await login.login(env.username, env.password);

  await page.context().storageState({ path: 'storageState.json' });
  await browser.close();
};