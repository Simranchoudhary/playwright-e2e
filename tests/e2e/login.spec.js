import { test, expect } from '@playwright/test';

test('User lands on inventory page (already logged in)', async ({ page }) => {
  await page.goto('/inventory.html');
  await expect(page).toHaveURL(/inventory/);
});