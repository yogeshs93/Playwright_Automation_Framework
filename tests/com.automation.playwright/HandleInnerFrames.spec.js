import {test,expect} from '@playwright/test';

test('HandleInnerFrames', async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");

    const frame = await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_3.html"});
    //await frame.locator("input[name='mytext3']").fill("welcome");

    //nested frame
    const childFrames = await frame.childFrames();
    const checkbox = await childFrames[0].locator("//*[@id='i6']/div[3]/div");
    await expect(checkbox).toBeVisible();
    await expect(checkbox).toBeEnabled();
    await checkbox.check();

    await page.waitForTimeout(5000);


})