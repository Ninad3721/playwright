import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/');
    await page.getByRole('button', { name: ' My account' }).click();
    await page.getByPlaceholder('E-Mail Address').click();
    await page.getByPlaceholder('E-Mail Address').fill('yolo@gmial.com');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('bcd');
    await page.getByRole('button', { name: 'Login' }).click();
});