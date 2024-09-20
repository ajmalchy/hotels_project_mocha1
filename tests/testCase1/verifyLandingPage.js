const { expect } = require("chai");
const automationlandingPage = require("../../Pages/automationlandingPage");

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

    it.only('click signup btn', async () => {
        // user goes to automation website
        await browser.url('https://automationexercise.com/');
        await browser.pause(3000);
        // user clicks signupbtn
        await automationlandingPage.clickSignupOrLoginBtn();
        await browser.pause(3000);

    })
})

