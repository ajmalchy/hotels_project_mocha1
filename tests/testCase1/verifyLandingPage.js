const { expect } = require("chai");
const automationlandingPage = require("../../Pages/automationlandingPage");
const automationContactUsPage = require("../../Pages/automationContactUsPage");

describe('Verify landing page', () => {

    it('Verify landing page', async () => {
        // user goes to automation website

        await browser.url('https://automationexercise.com/');
        await browser.pause(3000);

        /**
         * to verify the landing page
         * 1. verify the page url
         2. verifying home btn is active or the color is orange
         */

        // verifying the url
        const currentUrl = await browser.getUrl();
        expect(currentUrl).to.equal("https://automationexercise.com/");

        // verifying home btn is active or the color is orange
        const isHomeBtnOrange = await automationlandingPage.isHomeBtnOrange();

        expect(isHomeBtnOrange).to.be.true;
    })

    it('click signup btn', async () => {
        // user goes to automation website
        await browser.url('https://automationexercise.com/');
        await browser.pause(3000);
        // user clicks signupbtn
        await automationlandingPage.selectFromNavbar("Signup / Login");
        await browser.pause(3000);

    })

    it('click on contact us form', async () => {
        // user goes to automation website

        await browser.url('https://automationexercise.com/');
        await browser.pause(3000);

        // maximize window
        await browser.maximizeWindow();
        await browser.pause(1000);

        // click on contact us btn
        await automationlandingPage.selectFromNavbar("Contact Us");
        await browser.pause(3000);
    })

    it.only('Verify Get in touch visible', async () => {
        // user goes to automation website

        await browser.url('https://automationexercise.com/');
        await browser.pause(3000);

        // maximize window
        await browser.maximizeWindow();
        await browser.pause(1000);

        // click on contact us btn
        await automationlandingPage.selectFromNavbar("Contact Us");
        await browser.pause(3000);

        // verify get in touch is visible

        const getInTouchIsDisplayed = await automationContactUsPage.isGetInTouchDisplayed();

        expect(getInTouchIsDisplayed).to.be.true;
        await browser.pause(3000);
    })
})

