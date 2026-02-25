// Adds product to cart by visible product name.
// Locator finds product container dynamically to avoid brittle selectors.
export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.cartIcon = '.shopping_cart_link';
  }

  async addProductByName(name) {
    await this.page.locator(`text=${name}`)
      .locator('xpath=ancestor::div[@class="inventory_item"]')
      .locator('button')
      .click();
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }
}