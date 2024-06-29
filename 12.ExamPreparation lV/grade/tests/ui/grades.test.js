const { test, expect } = require("@playwright/test");

test("Check grades page", async ({ page }) => {
  await page.goto("https://gogata05-exam.onrender.com/my-grades");
  const list = await page.$("ul");
  expect(list).toBeTruthy();
});
