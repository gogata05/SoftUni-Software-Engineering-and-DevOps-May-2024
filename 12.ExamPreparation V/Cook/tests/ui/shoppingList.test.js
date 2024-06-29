const { test, expect } = require("@playwright/test");

test("Check cookbook page", async ({ page }) => {
  await page.goto("https://gogata05-exam.onrender.com/cookbook");
  const list = await page.$("ul");
  expect(list).toBeTruthy();
});
