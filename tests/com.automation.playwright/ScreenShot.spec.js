import {test,expect} from '@playwright/test';

test("Page ScreenShot", async({page})=>{

    await page.goto("https://demo-opencart.com/");
    await page.screenshot({path:'tests/screenShots/'+Date.now()+'HomePage.png'});
});

test("Full Page ScreenShot", async({page})=>{
    await page.goto("https://demo-opencart.com/");
    await page.screenshot({path:'tests/screenShots/'+Date.now()+'FullPage.png', fullPage:true});
});

test("Element ScreenShot", async({page})=>{
    
    await page.goto("https://demo-opencart.com/");
    await page.locator("//*[@id='content']/div[2]/div[1]/div").screenshot({path:'tests/screenShots/'+Date.now()+'Element.png'});
});