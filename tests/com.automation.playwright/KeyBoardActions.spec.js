import {test,expect} from '@playwright/test';

test('KeyBoard Actions', async({page})=>{

    await page.goto("https://gotranscript.com/text-compare");

    await page.locator("//textarea[@name='text1']").fill("Welcome to India");

    //Ctrl + A
    await page.keyboard.press('Meta+A');

    //Ctrl + C
    await page.keyboard.press('Meta+C');

    //Tab
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');

    //Ctrl + v
    await page.keyboard.press('Meta+V');


    await page.waitForTimeout(5000);


})