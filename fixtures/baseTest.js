import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { env } from '../utils/env';

export const test = base.extend({
  loggedInPage: async ({ page }, use) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login(env.username, env.password);

    await use(page);
  },
});

export { expect } from '@playwright/test';