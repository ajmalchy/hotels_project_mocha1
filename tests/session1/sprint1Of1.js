const { expect } = require("chai");
const landingPage = require("../../Pages/landingPage");
const signinPage = require("../../Pages/signinPage");

// refer test suite
describe('Sprint 1', () => {
    it('User goes to hotels website', async () => {
        // go to hotels.com
        await browser.url('https://www.hotels.com/')
        await browser.pause(5000);
        await landingPage.clickTradeMarkToRefresh();
        await browser.pause(4000);
    })
    
    it('User clicks on signin link', async () => {
        await landingPage.clickSigninLink();
        await browser.pause(2000);
    } )

    it('User clicks signin btn', async () => {
        await landingPage.clickSigninBtn();
        await browser.pause(2000);
    })

    it('User enters an invalid email address', async () => {
        await signinPage.enterInvalidEmail("dgsdsgs");
        await browser.pause(3000);
    })

    it('User click Continue Btn', async () => {
        await signinPage.clickContinueBtn();
        await browser.pause(2000);
    })

    it('User enters an invalid 6 digit code', async () => {
        await signinPage.enterInvalidEmail("123456");
        await browser.pause(3000);
    })

    it('User click Continue Btn', async () => {
        await signinPage.clickContinueBtn();
        await browser.pause(2000);
    })

    it('User verifies error message is displayed', async () => {
        await signinPage.invalidEmailErrorIsDisplayed();
    })
   

    })


