import { test, expect } from '@playwright/test'

test('AutoSuggestion DropDown', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const table = await page.locator("#productTable");

    //total number of rows and coluns
    const columns = await table.locator("thead tr th");
    console.log("Number of columns: ", await columns.count());

    /*
        const pagination = await page.locator("//ul[@id='pagination']/li/a");
        
        let count=0;
        for(let i=1;i<=await pagination.count();i++){
    
            await page.locator(`//*[@id="pagination"]/li[${i}]/a`).click();
    
            const rows = await table.locator("tbody tr").count();
            count=count+rows;
        }
    
        console.log("Number of rows: ",await count);
    */

    const rows = await table.locator("tbody tr");
    console.log("Number of rows: ", await rows.count())


    // expect(await columns.count()).toBe(4);
    // expect(await rows.count()).toBe(5);


    //select check box for product 4
    /*
    const machedRow = rows.filter({
        has: page.locator("td"),
        hasText: "Smartwatch"
    })
    await machedRow.locator("input").check();
*/

    // await selectProduct(rows, page, "Smartwatch");
    // await selectProduct(rows, page, "Tablet");
    // await selectProduct(rows, page, "Laptop");

    //print all products details using loop 
    for(let i=0;i<await rows.count();i++){
        const row = rows.nth(i);
        const tds = row.locator("td");

        for(let j=0;j< await tds.count()-1;j++){
            console.log(await tds.nth(j).textContent());
        }
    }
    await page.waitForTimeout(5000);


})


async function selectProduct(rows, page, name) {
    const machedRow = rows.filter({
        has: page.locator("td"),
        hasText: name
    })

    await machedRow.locator("input").check();

}