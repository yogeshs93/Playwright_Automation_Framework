import {test,expect} from '@playwright/test';

test('Mouse Double Click', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const button = await page.locator("//button[normalize-space()='Copy Text']");

    //Right click action
    await button.dblclick();

    const text = await page.locator('#field2');
    await expect(text).toHaveValue('Hello World!');


    await page.waitForTimeout(5000);


})