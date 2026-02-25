import { test, expect } from '@playwright/test';
import { InventoryPage } from '../../pages/InventoryPage.js';
import { CartPage } from '../../pages/CartPage.js';
import { CheckoutPage } from '../../pages/CheckoutPage.js';
import { checkoutData } from '../../utils/testData.js';

checkoutData.forEach(data => {
  test(`Checkout for ${data.first}`, async ({ page }) => {
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    await page.goto('/inventory.html');

    await inventory.addProductByName('Sauce Labs Backpack');
    await inventory.goToCart();

    await cart.proceedToCheckout();

    await checkout.fillDetails(data.first, data.last, data.zip);
    await checkout.completeOrder();

    await expect(page.locator('.complete-header'))
      .toHaveText('Thank you for your order!');
  });
});