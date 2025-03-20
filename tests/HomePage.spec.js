const {test, expect} = require('@playwright/test');

test('Home Page',async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const pageTitle = await page.title();
    console.log(pageTitle);

    const pageUrl = await page.url();
    console.log(pageUrl);

    await expect(page).toHaveTitle('OrangeHRM');
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.close();
})