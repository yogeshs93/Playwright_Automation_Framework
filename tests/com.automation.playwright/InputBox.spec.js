const {test,expect}  = require('@playwright/test');

test('Handle InputBox',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/inputs');

    await expect(await page.locator("//input[@type='number']")).toBeVisible();
    await expect(await page.locator("//input[@type='number']")).toBeEmpty();
    await expect(await page.locator("//input[@type='number']")).toBeEditable();
    await expect(await page.locator("//input[@type='number']")).toBeEnabled();
    
    await page.locator("//input[@type='number']").fill('38');
    //or
    //await page.fill("//input[@type='number']",'38');

    await page.waitForTimeout(5000);

    //await page.pause()
})