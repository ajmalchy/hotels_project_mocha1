
const { expect } = require("chai");
const automationlandingPage = require("../../Pages/automationlandingPage");
const automationProductPage = require("../../Pages/automationProductPage");


describe('Verify all products and product detail page', () => {
    it('verify user is navigated to ALL Products page successfully', async () =>{
         // user goes to automation website

         await browser.url('https://automationexercise.com/');
         await browser.pause(3000);
 
         // maximize window
         await browser.maximizeWindow();
         await browser.pause(1000);
 
         // click on contact us btn
         await automationlandingPage.selectFromNavbar('Products')
         await browser.pause(3000)

        //  verify Product page is displayed
        const isProductsBtnOrange = await automationProductPage.isProductsBtnOrange();
        expect(isProductsBtnOrange).to.be.true;
        await browser.pause(3000)


        const isAllProductsHeadingDisplayed = await automationProductPage.isAllProductsHeadingDisplayed();

        expect(isAllProductsHeadingDisplayed).to.be.true;
        await browser.pause(3000)

    } )
})