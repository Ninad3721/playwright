
import { expect, test } from "@playwright/test";

test("Testing alerts ", async ({ page }) => {
    page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    page.on("dialog", async (alert) => {
        await alert.accept()
    })
    const alertBtn = page.locator("(//button[contains(@class,'btn btn-dark')])[2]")
    await alertBtn.click()
    const result = page.locator("#confirm-demo")
    await expect(result).toHaveText("You pressed OK!")

})