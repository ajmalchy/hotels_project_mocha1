const { expect } = require("chai");
const automationlandingPage = require("../../Pages/automationlandingPage");
const automationLoginPage = require("../../Pages/automationLoginPage");
const automationSignupPage = require("../../Pages/automationSignupPage");

describe('Signup Page testing', () => {

    it('Verify Enter Account Information displayed', async () => {
        // user goes to automation website
        await browser.url('https://automationexercise.com/');
        await browser.pause(3000);
        // user clicks signup/login btn
        await automationlandingPage.clickSignupOrLoginBtn();
        await browser.pause(3000);

        // user enters name and email and clicks signup btn
        await automationLoginPage.enterNewUserName("Kamla Shundori");

        await browser.pause(3000);
        await automationLoginPage.enterNewUserEmail("kamlaShundori@yahoo.com");
        await browser.pause(3000);
        await automationLoginPage.clickSignupBtn();
        await browser.pause(3000);

        const isAccountInfoDisplayed = await automationSignupPage.isEnterAccInfoDisplayed();
        expect(isAccountInfoDisplayed).to.be.true;
        await browser.pause(3000);

    })



})