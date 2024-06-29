const { test, expect } = require("@playwright/test");

test("Check header", async ({ page }) => {
  await page.goto("https://gogata05-exam.onrender.com/");
  const homeLink = await page.$('a[href="/"]');
  const text = await homeLink.textContent();
  expect(text).toBe("Home");
});
