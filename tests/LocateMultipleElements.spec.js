import {test,expect} from '@playwright/test'

test('LocateMultipleElements', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    page.waitForSelector('a');
    const links = await page.$$('a');

    for(const link of links){
        const linkText = await link.textContent();
        console.log(linkText);
    }

})