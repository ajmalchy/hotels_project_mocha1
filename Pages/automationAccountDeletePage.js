class AutomationAccountDeletePage {
    // locators
    accountDeletedHeadingLocator = '//b[text()="Account Deleted!"]';
    continueBtnLocator = '//a[@data-qa="continue-button"]';
    // functions

    async isAccountDeletedDisplayed() {
        const accountDeletedElement = await $(this.accountDeletedHeadingLocator);

        const isDisplayed = accountDeletedElement.isDisplayed();

        if(isDisplayed) {
            const accountDeletedTxt = await accountDeletedElement.getText();

            return accountDeletedTxt.includes("ACCOUNT DELETED!")
        }
        return false;
    }

    async clickContinueBtn() {
        await $(this.continueBtnLocator).click()
    }
}

module.exports = new AutomationAccountDeletePage;