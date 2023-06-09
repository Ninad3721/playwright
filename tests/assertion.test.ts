import { expect, test } from "@playwright/test";

// test("",async ({page})=>{
//     page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
//     const  enterMessage = await page.locator("")

// })

test('Sum of two numbers', async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
    const value1 = 21
    const value2 = 22
    const sum1Input = page.locator("#sum1")
    const sum2Input = page.locator("#sum2")
    const getValueButton = page.locator("(//button[contains(@class,'mt-20 mb-10')])[2]")
    await sum1Input.type(value1.toString())
    await sum2Input.type(value2.toString())
    await getValueButton.click()
    const result = page.locator("#addmessage")
    const resulValue = value1 + value2
    console.log(resulValue)
    await expect(result).toHaveText(resulValue.toString())

})

//checkbox testing

test.only("Checkbox testing", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo")
    const checkbox = page.locator("(//input[@class='mr-10'])[2]")
    await expect(checkbox).not.toBeChecked()
    await checkbox.check()
    await expect(checkbox).toBeChecked()
})

