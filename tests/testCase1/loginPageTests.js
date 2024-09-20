const { expect } = require("chai");
const automationLoginPage = require("../../Pages/automationLoginPage");
const automationlandingPage = require("../../Pages/automationlandingPage");

describe('login page testing', () => {

    it('verify new user signup is visible', async () => {
        /**
         * 1. go to automation website
         * 2. click signup btn on landing page
         * 3. verify new user signup is visible
         */
        // user goes to automation website

        await browser.url('https://automationexercise.com/');
        await browser.pause(3000);

        // user clicks signupbtn
        await automationlandingPage.clickSignupOrLoginBtn();
        await browser.pause(3000);

        // verify new user signup is displayed

       const isNewUserSignupTxtDisplayed = await automationLoginPage.isNewUserSignupTxtDisplayed();

       expect(isNewUserSignupTxtDisplayed).to.be.true;
       await browser.pause(3000);

    })



})