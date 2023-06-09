import { test} from "@playwright/test";

test ("Testing dropdowns",async ({page})=>
{
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo")
    await page.locator("(//span[@class='select2-selection__arrow'])[1]").click()
    
})