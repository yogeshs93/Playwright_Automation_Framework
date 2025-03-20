import { test, expect } from '@playwright/test'


//By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. However, 
//you can register a dialog handler before the action that triggers the dialog to either dialog.accept() or dialog.dismiss() it.

test.skip('Alert with OK', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling alert handling  //Dialog window handler
    page.on('dialog',async dailog=>{
        expect(dailog.type()).toContain('alert');
        expect(dailog.message()).toContain("I am an alert box!");
        await dailog.accept();

    })

    await page.click("//button[normalize-space()='Simple Alert']");

    await page.waitForTimeout(5000);
})


test.skip('Confirmation Dailog WITH ok And Cancel', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling alert handling  //Dialog window handler
    page.on('dialog',async dailog=>{
        expect(dailog.type()).toContain("confirm");
        expect(dailog.message()).toContain("Press a button!");
        await dailog.accept(); //close by using OK buttton
        //await dailog.dismiss(); //close by using cancel
    })

    await page.click("//button[normalize-space()='Confirmation Alert']");

    const text = (await page.locator('//p[@id="demo"]').textContent()).trim();
    await expect(text).toBe("You pressed OK!");


    await page.waitForTimeout(5000);
})


test('Prompt Dailog', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling alert handling  //Dialog window handler
    page.on('dialog',async dailog=>{
        expect(dailog.type()).toContain("prompt");
        expect(dailog.message()).toContain("Please enter your name:");
        expect(dailog.defaultValue()).toContain("Harry Potter");
        await dailog.accept("John"); 
    })

    await page.click("//button[normalize-space()='Prompt Alert']");

    const text = (await page.locator('//p[@id="demo"]').textContent()).trim();
    await expect(text).toBe("Hello John! How are you today?");


    await page.waitForTimeout(5000);
})