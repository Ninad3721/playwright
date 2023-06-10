import { test } from "@playwright/test";

test("Testing frames" ,async ({page})=>
{
    await page.goto("")
    const frame = await page.frameLocator("")
})