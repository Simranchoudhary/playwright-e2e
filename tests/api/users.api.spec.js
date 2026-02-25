import { test, expect } from '@playwright/test';
// Validates basic API contract: status code and response structure.

test('@api GET users API', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.length).toBeGreaterThan(0);
});