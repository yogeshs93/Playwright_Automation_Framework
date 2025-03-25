const {test, expect, chromium} = require('@playwright/test')

test('Handle Pages/Windows', async()=>{
    const browser = await chromium.launch({
        channel:'chrome',
        headless: false
    });
    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();

    const allPages = context.pages();
    console.log("No of pages created", allPages.length);

    await page1.goto("https://www.demoblaze.com/index.html");
    await expect(page1).toHaveTitle("STORE");

    await page2.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page2).toHaveTitle("OrangeHRM");

    await page1.waitForTimeout(5000);
    await browser.close();
})


test('Handle Multiple Pages/Windows',async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page1).toHaveTitle("OrangeHRM");

    const [newPage] = await Promise.all([
        context.waitForEvent('page'), // Wait for a new page event
        page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click() // Click the link to open new tab
    ]);

    
    await expect(newPage).toHaveTitle("Human Resources Management Software | OrangeHRM HR Software ");

    await page1.waitForTimeout(5000);

    await browser.close();

})