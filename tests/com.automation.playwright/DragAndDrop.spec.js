import {test,expect} from '@playwright/test';

test('Mouse Double Click', async({page})=>{

    await page.goto("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");

    const country1 = await page.locator("#box3");
    const country2 = await page.locator("#box101");


    //Approach 1
    // await country1.hover();
    // await page.mouse.down();

    // await country2.hover();
    // await page.mouse.up();

    //Approach 2
    await country1.dragTo(country2);


    await page.waitForTimeout(5000);


})