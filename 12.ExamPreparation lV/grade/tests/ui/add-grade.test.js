const { test, expect } = require("@playwright/test");

test("Check add grades page", async ({ page }) => {
  await page.goto("https://gogata05-exam.onrender.com/add-grade");
  const form = await page.$("form");
  expect(form).toBeTruthy();
});
