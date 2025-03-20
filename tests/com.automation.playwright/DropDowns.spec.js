import { test, expect } from '@playwright/test'

test('Drop Downs', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Multiple Ways to select option from the dropdown

    //await page.locator('#country').selectOption({label:'India'});
    //await page.locator('#country').selectOption('India');
    //await page.locator('#country').selectOption({value:'uk'});
    //await page.locator('#country').selectOption({index:1});
    //await page.selectOption('#country','India');

    //Assertions
    //1) check number of options in dropdown
    // const options = await page.locator('#country option')
    // await expect(options).toHaveCount(10);

    //2)
    //const options = await page.$$('#country option');
    //console.log("Number of options: ", options.length);
    //await expect(options.length).toBe(10);

    //3)Check presence of value in the dropdown
    // const content = await page.locator('#country').textContent();
    // await expect(content.includes('India')).toBeTruthy();

    /*
    //4)
    const options = await page.$$('#country option');
    let status = false;

    for(const option of options){
        //console.log(await option.textContent());
        let value = await option.textContent();
        if(value.includes('France')){
            status=true;
            break;
        }
    }
    expect(status).toBeTruthy();
    */

    //5)select option from dropdown using loop
    const options = await page.$$('#country option');

    for(const option of options){
        let value = await option.textContent();
        if(value.includes('France')){
            await page.selectOption("#country",value.trim());
            break;
        }
    }


    await page.waitForTimeout(5000);




})  
