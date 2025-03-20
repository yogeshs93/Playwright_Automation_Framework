import {test,expect} from '@playwright/test';

test('Upload Single file', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("#singleFileInput").setInputFiles("tests/UploadFiles/sample.pdf");

    await page.waitForTimeout(5000);
})


test('Upload Multiple files', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("#multipleFilesInput").setInputFiles(["tests/UploadFiles/sample.pdf","tests/UploadFiles/dummy.pdf"]);

    await page.waitForTimeout(5000);
})