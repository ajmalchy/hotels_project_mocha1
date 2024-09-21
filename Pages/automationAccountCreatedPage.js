class AutomationAccountCreatedPage {

    // locators
    accountCreatedHeadingLocator = '//b[text()="Account Created!"]';
    btnContinueLocator = '//a[@data-qa="continue-button"]';
    // functions
    async isAccountCreatedDisplayed() {
        const headingElement = await $(this.accountCreatedHeadingLocator);

        const isDisplayed = await headingElement.isDisplayed();

        if(isDisplayed) {
          const headingTxt = await headingElement.getText();
            return headingTxt.includes("ACCOUNT CREATED!");
        }
            return false;
    }

    async clickContinue() {
        await $(this.btnContinueLocator).click();
    }


}

module.exports = new AutomationAccountCreatedPage;