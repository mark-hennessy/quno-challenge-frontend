import { test, expect } from "@playwright/test";

test("should redirect to /doctors", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveURL("/doctors");
  await expect(page.locator("h1")).toContainText("FUE Hair Transplant Clinics");
});
