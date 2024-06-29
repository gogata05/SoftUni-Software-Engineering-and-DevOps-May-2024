const { test, expect } = require("@playwright/test");

test("Check add game page", async ({ page }) => {
  await page.goto("https://gogata05-exam.onrender.com/add-game");
  const form = await page.$("form");
  expect(form).toBeTruthy();
});
