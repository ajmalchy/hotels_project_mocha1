class AutomationLandingPage {
    // locators of the page elements
    homeBtnLocator = '//a[@style="color: orange;" and text()=" Home"]';

    signupBtnLocator = '//a[@href="/login"]';
    // functions to interact with the page elements

    async isHomeBtnOrange() {
        const homeBtn = await $(this.homeBtnLocator);
        const homeBtnColor = await homeBtn.getAttribute("style");
        if(homeBtnColor.includes("color: orange;")){
            return true;
        }
        else {
            return false;
        }
    }

    async clickSignupOrLoginBtn() {
        await browser.pause(3000);
        await $(this.signupBtnLocator).click();
    }


}

module.exports = new AutomationLandingPage;