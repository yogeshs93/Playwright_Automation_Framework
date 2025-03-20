const { test, expect } = require('@playwright/test');

test('Multi Select Dropdown', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //select multiple options from multi select dropdown
    //await page.selectOption('#colors',['Blue','Red','Yellow']);

    //Assertions
    //1)check number of options in dropdown
    // const options = await page.locator('#colors option');
    // await expect(options).toHaveCount(7);

    //2)
    const options = await page.$$('#colors option');
    //console.log("Number of options: ", options.length);
    //await expect(options.length).toBe(7);

    //3)check presence of value in the dropdown
    const content = await page.locator('#colors').textContent();
    await expect(content.includes('Red')).toBeTruthy();

    //await page.waitForTimeout(5000);
})