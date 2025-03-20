import {test,expect} from '@playwright/test';

test('Mouse Hover', async({page})=>{

    await page.goto("https://demo.opencart.com/");

    const deskTop = await  page.locator("//*[@id='narbar-menu']/ul/li[1]/a");
    const macBook = await  page.locator("//*[@id='narbar-menu']/ul/li[1]/div/div/ul/li[2]/a");

    //Mouse hover
    await deskTop.hover();
    await macBook.hover();

    await page.waitForTimeout(5000);


})