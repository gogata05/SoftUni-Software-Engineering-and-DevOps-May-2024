const { test, expect } = require("@playwright/test");

test("Check shopping list page", async ({ page }) => {
  await page.goto("https://gogata05-exam.onrender.com/Shopping-List");
  const list = await page.$("a");
  expect(list).toBeTruthy();
});
