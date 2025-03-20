const { test, expect } = require('@playwright/test');


test.beforeAll(async()=>{
    console.log("This is beforeAll Hook........");
})
test.afterAll(async()=>{
    console.log("This is afterAll Hook........");
})
test.beforeEach(async()=>{
    console.log("This is beforeEach Hook........");
})
test.afterEach(async()=>{
    console.log("This is afterEach Hook........");
})



test.describe('Group1', () => {

    test('Test1', async ({ page }) => {
        console.log("This is the test1....");
    })

    test('Test2', async ({ page }) => {
        console.log("This is the test2....");
    })

})



test.describe('Group2', () => {

    test('Test3', async ({ page }) => {
        console.log("This is the test3....");
    })

    test('Test4', async ({ page }) => {
        console.log("This is the test4....");
    })

})




