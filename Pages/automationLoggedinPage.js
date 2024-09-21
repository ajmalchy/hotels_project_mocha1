class AutomationLoggedinPage {
    // locators
    btnDeleteAccLocator = '//a[@href="/delete_account"]';


    loggedinAsLocator = '//a[text()=" Logged in as "]';
    userNameLocator = '//b[text()="rgfgagzafg"]';
    // functions
    async clickDeleteAccount() {
        await $(this.btnDeleteAccLocator).click();
    }

    async isLoggedinAsUserDisplayed() {
        const loggedinElement = await $(this.loggedinAsLocator);

        const userNameElement = await $(this.userNameLocator);

        const isLoggedinDisplayed = await loggedinElement.isDisplayed();
        const isUserNameDisplayed = await userNameElement.isDisplayed();

        if(isLoggedinDisplayed && isUserNameDisplayed) {
            const loggedinTxt = await loggedinElement.getText();

            const userNameTxt = await userNameElement.getText();

            const loggedinAsUserTxt = `${loggedinTxt} ${userNameTxt}`;

            return loggedinAsUserTxt.includes("Logged in as rgfgagzafg")
        }
        return false;
    }
}

module.exports = new AutomationLoggedinPage;