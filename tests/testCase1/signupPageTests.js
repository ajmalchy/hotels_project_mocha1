const { expect } = require("chai");
const automationlandingPage = require("../../Pages/automationlandingPage");
const automationLoginPage = require("../../Pages/automationLoginPage");
const automationSignupPage = require("../../Pages/automationSignupPage");
const automationAccountCreatedPage = require("../../Pages/automationAccountCreatedPage");
const automationLoggedinPage = require("../../Pages/automationLoggedinPage");
const automationAccountDeletePage = require("../../Pages/automationAccountDeletePage");

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
        await automationLoginPage.enterNewUserEmail("kamlaShundori45@yahoo.com");
        await browser.pause(3000);
        await automationLoginPage.clickSignupBtn();
        await browser.pause(3000);

        const isAccountInfoDisplayed = await automationSignupPage.isEnterAccInfoDisplayed();
        expect(isAccountInfoDisplayed).to.be.true;
        await browser.pause(3000);

    })

    it.only('Enter all user information and create account', async () => {
        // user goes to automation website
        await browser.url('https://automationexercise.com/');
        await browser.pause(3000);

        await browser.maximizeWindow();
        // user clicks signup/login btn
        await automationlandingPage.clickSignupOrLoginBtn();
        await browser.pause(3000);

        // user enters name and email and clicks signup btn
        await automationLoginPage.enterNewUserName("Kamla Shundori1");

        await browser.pause(3000);
        await automationLoginPage.enterNewUserEmail("kamlaShundori707@yahoo.com");
        await browser.pause(3000);
        await automationLoginPage.clickSignupBtn();
        await browser.pause(3000);

        // fill sign up form
        await automationSignupPage.selectTitle('Mrs.');
        await browser.pause(1000);

        // set password
        await automationSignupPage.setPassword("dgfagadga");
        await browser.pause(1000);

        // select date of birth
        await automationSignupPage.selectDateOfBirth(15,10,"1971");
        await browser.pause(3000);

        // check mark
        await automationSignupPage.checkMarkNewsLetter();
        await browser.pause(1000);

        await automationSignupPage.checkMarkOptin();
        await browser.pause(1000);
        // enter address info
         await automationSignupPage.enterFirstName("Kamla");
         await browser.pause(1000);

         await automationSignupPage.enterLastName("shundori");
         await browser.pause(1000);

         await automationSignupPage.enterCompanyName("Awami League");
         await browser.pause(1000);

         await automationSignupPage.enterAddress1("Dhaka");
         await browser.pause(1000);

         await automationSignupPage.enterAddress2("Tungi Para")
         await browser.pause(1000);

         await automationSignupPage.selectCountry("United States");
         await browser.pause(1000);

        await automationSignupPage.enterStateName("Texas");
        await browser.pause(1000);

        await automationSignupPage.enterCityName("Dallas");
        await browser.pause(1000);

        await automationSignupPage.enterZipcode("56852");

        await automationSignupPage.enterMobileNumber("2652541");
        await browser.pause(1000);

        await automationSignupPage.clickCreateAccBtn();
        await browser.pause(1000);

        // verify account created

        const isAccountCreatedDisplayed =  await automationAccountCreatedPage.isAccountCreatedDisplayed();

        expect(isAccountCreatedDisplayed).to.be.true;

        await automationAccountCreatedPage.clickContinue();

        await automationLoggedinPage.isLoggedinAsUserDisplayed();
        await automationLoggedinPage.clickDeleteAccount();

        await automationAccountDeletePage.isAccountDeletedDisplayed();

        await automationAccountDeletePage.clickContinueBtn();



    })




})