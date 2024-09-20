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

    it.only('Enter name and email address and click signup btn', async () => {
        /**
         * 1. user goes to automation website
         * 2.user click signup or login btn and go to that page
         * 3. user enters name and email address
         * 4. User clicks signup btn
         */
        // user goes to automation website
        await browser.url('https://automationexercise.com/');
        await browser.pause(3000);

        // user clicks signup btn
        await automationlandingPage.clickSignupOrLoginBtn();
        await browser.pause(2000);

        // user enters name and email address

        await automationLoginPage.enterNewUserName("Kamla Shundori");

        await automationLoginPage.enterNewUserEmail("kamlaShundori@yahoo.com");
       
        // user clicks signup btn
        await automationLoginPage.clickSignupBtn();
        await browser.pause(3000);
    })

})