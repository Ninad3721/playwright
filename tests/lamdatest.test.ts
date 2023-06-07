import { chromium, test } from "@playwright/test";

test("Testing the login fucntionalites", async () => {
    const browsers = await chromium.launch(
        {
            headless: false
        }
    )
    const context = await browsers.newContext()
    const page = await context.newPage()

    await page.goto("https://ecommerce-playground.Lambdatest.io/")
    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]")
    await page.click("text=Login")
    await page.fill("//input[@name='email']", "koushik350@gmail.com")
    await page.fill("//input[@name='password']", "Pass123$")

})