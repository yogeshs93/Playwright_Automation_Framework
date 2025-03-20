import {test,expect} from '@playwright/test';

let page;

test.beforeEach(async ({browser})=>{

    page = await browser.newPage();

    await page.goto("https://demoblaze.com/index.html");

    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("yes");
    await page.locator("#loginpassword").fill("yes");
    await page.locator("//button[text()='Log in']").click();

});


test.afterEach(async()=>{

    await page.locator("#logout2").click();

    await page.waitForTimeout(5000);
    await page.close();

})












test('Home Page Test', async () => {

    

    await page.waitForSelector(".hrefch");
    const products = await page.$$(".hrefch");
    expect(products).toHaveLength(9);

})


test('Add to cart', async () => {

    

    await page.locator("//*[@id='tbodyid']/div[1]/div/div/h4/a").click();
    await page.locator("//*[@id='tbodyid']/div[2]/div/a").click();

    page.on('dialog', async dailog => {
        expect(dailog.type()).toContain('alert');
        expect(dailog.message()).toContain("Product added.");
        await dailog.accept();

    })

    


})