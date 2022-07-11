import { test, expect, Locator } from "@playwright/test";

test("should filter doctors and link to profiles", async ({ page }) => {
  await page.goto("/doctors");
  await expect(page.locator("h1")).toContainText("FUE Hair Transplant Clinics");

  function getTopResult(): Locator {
    return page.locator("data-testid=doctor-list >> :nth-match(li, 1)");
  }

  const unfilteredResult = getTopResult();
  await expect(unfilteredResult).toContainText("Dr. Lay Raphael");

  await page.locator("button:text('Best reviews')").click();

  const filteredResult = getTopResult();
  await expect(filteredResult).toContainText("Dr. Linus Rogier");

  await filteredResult.locator("a:text('See doctor profile')").click();
  await expect(page).toHaveURL("/doctors/dr-linus-rogier");
});
