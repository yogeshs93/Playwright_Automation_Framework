import {test,expect} from '@playwright/test';


test('Handle Frames', async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");

    //Total Frames
    const allFrames = await page.frames();
    console.log("Number of Frames: ", allFrames.length);

    // Get frame using the frame's name attribute
    // const frame = page.frame('frame-login');

    //approach 1:using name or url
    //const frame = await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_1.html"});
    //await frame.fill("[name='mytext1']","Hello");

    //approach 1:using Page Locator
    const inputBox = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']");
    inputBox.fill("Hello");



    await page.waitForTimeout(5000);


})