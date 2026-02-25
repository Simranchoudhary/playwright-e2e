export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.first = '#first-name';
    this.last = '#last-name';
    this.zip = '#postal-code';
    this.continue = '#continue';
    this.finish = '#finish';
  }

  async fillDetails(f, l, z) {
    await this.page.fill(this.first, f);
    await this.page.fill(this.last, l);
    await this.page.fill(this.zip, z);
  }

  async completeOrder() {
    await this.page.click(this.continue);
    await this.page.click(this.finish);
  }
}