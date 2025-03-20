const {test,expect} = require('@playwright/test');

// test.only('test1',async({page})=>{
//     console.log("This is my test1.....");
// })

test.skip('test2',async({page})=>{
    console.log("This is my test2.....");
})

// test('test3',async({page,browserName})=>{
//     console.log("This is my test3.....");
//     if(browserName==='chromium'){
//         test.skip();
//     }
// })



// test('test4',async({page})=>{
//     test.fixme();
//     console.log("This is my test4.....");
// })


// test('test5', async({page})=>{
//     test.fail();
//     console.log('this is test5...');
//     expect(1).toBe(2);  //If both exp & actual is failed the test will pass
// })



