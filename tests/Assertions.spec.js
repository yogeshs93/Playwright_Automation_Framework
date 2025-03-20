import {test,expect} from '@playwright/test'

test('Assertions',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await expect(page).toHaveTitle('OrangeHRM');

    //Hard Assertions
    //await expect(locator).toBeVisible();    Element is visible
    const img = await page.locator("//img[@alt='company-branding']");
    await expect(img).toBeVisible();

    const username = await page.locator("//input[@name='username']");
    await expect(username).toBeEnabled();

    //soft Assertions
    const imges = await page.locator("//img[@alt='company-branding']");
    await expect.soft(imges).toBeVisible();


})