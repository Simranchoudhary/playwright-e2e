import { test, expect } from '@playwright/test';

test('@smoke User lands on inventory page', async ({ page }) => {
  await page.goto('/inventory.html');
  await expect(page).toHaveURL(/inventory/);
});