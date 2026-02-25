import { test, expect } from '@playwright/test';
import { InventoryPage } from '../../pages/InventoryPage.js';

test('@regression Add product to cart', async ({ page }) => {
  const inventory = new InventoryPage(page);

  await page.goto('/inventory.html');
  await inventory.addProductByName('Sauce Labs Backpack');
  await inventory.goToCart();

  await expect(page.locator('.cart_item')).toBeVisible();
});