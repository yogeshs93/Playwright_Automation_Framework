//const {test, expect} = require('@playwright/test');
//or
import {test,expect} from '@playwright/test'

test('Locators',async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForLoadState('domcontentloaded');

    //await page.locator('name=username').fill('Admin');
    await page.fill('[name="username"]','Admin');
    //await page.type('name=username','Admin');

    await page.fill('[type="password"]','admin123');

    await page.click("button[type='submit']");

    //const dashBoardPage = await page.locator("//h6[contains(text(),'Dashboard')]");
    //const dashBoardPage = page.locator("h6:has-text('Dashboard')");
    const dashBoardPage = page.getByRole('heading', { name: 'Dashboard' });




    await expect(dashBoardPage).toBeVisible();

   

    const links = await page.$$('a');

    for(const link of links){
        const linkText = await link.textContent();
        console.log(linkText);
    }

    await page.close();



})