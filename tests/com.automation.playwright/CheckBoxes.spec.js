const {test,expect} = require('@playwright/test');

test('Check Boxes',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/checkboxes");


    await page.locator("(//input[@type='checkbox'])[1]").check();
    //await page.check("(//input[@type='checkbox'])[1]");

    expect(await page.locator("(//input[@type='checkbox'])[1]")).toBeChecked();
    expect(await page.locator("(//input[@type='checkbox'])[1]").isChecked()).toBeTruthy();

    await page.locator("(//input[@type='checkbox'])[2]").uncheck();
    expect(await page.locator("(//input[@type='checkbox'])[2]")).not.toBeChecked();
    expect(await page.locator("(//input[@type='checkbox'])[2]").isChecked()).toBeFalsy();



    await page.waitForTimeout(5000);
})