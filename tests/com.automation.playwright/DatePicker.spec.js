import {test,expect} from '@playwright/test';

test('Date picker', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    //await page.fill("#datepicker","03/12/2025");

    const year = "2025";
    const month = "April";
    const day = "11";

    await page.locator("#datepicker").click();

    while(true){
        const currentYear = (await page.locator(".ui-datepicker-year").textContent()).trim();
        const currentMonth = (await page.locator(".ui-datepicker-month").textContent()).trim();

        if(currentYear == year && currentMonth == month){

            break;
        }

        await page.locator("[title='Next']").click();
    }

    const dates = await page.$$(".ui-state-default");

    for(let date of dates){
        if(await date.textContent()==day){
            await date.click();
            break;
        }
    }


    await page.waitForTimeout(5000);

})