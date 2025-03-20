const {test,expect} = require('@playwright/test');

test('Handle Radio Buttons', async({page})=>{
    await page.goto("https://only-testing-blog.blogspot.com/");

    await page.locator("(//input[@id='radio1'])[1]").check();
    //await page.check("(//input[@id='radio1'])[1]");

    await expect(await page.locator("(//input[@id='radio1'])[1]")).toBeChecked();
    await expect(await page.locator("(//input[@id='radio1'])[1]").isChecked()).toBeTruthy();



    await expect(await page.locator("(//input[@id='radio2'])[1]").isChecked()).toBeFalsy();

    await page.waitForTimeout(5000);


})