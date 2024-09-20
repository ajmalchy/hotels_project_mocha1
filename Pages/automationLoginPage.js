class automationLoginPage {
    // locators
    newUserSignupLocator = '//h2[text()="New User Signup!"]';
    newUserNameFieldLocator = '//input[@data-qa="signup-name"]';
    newUserEmailFieldLocator = '//input[@data-qa="signup-email"]';

    signupBtnLocator = '//button[@data-qa="signup-button"]';

    // functions

    async isNewUserSignupTxtDisplayed() {
    const newUserSignup = await $(this.newUserSignupLocator);
    const newUserSignupTxt = await newUserSignup.getText();
    if(newUserSignupTxt.includes('New User Signup!')) {
        return true;
    } 
    else {
        return false;
    }
    }

    async enterNewUserName(userName) {
        const nameField = await $(this.newUserNameFieldLocator);
        await nameField.waitForDisplayed({ timeout: 5000 });
        await nameField.click();
        await nameField.setValue(userName);
    }
    
    async enterNewUserEmail(userEmail) {
        const emailField = await $(this.newUserEmailFieldLocator);
        await emailField.waitForDisplayed({ timeout: 5000 });
        await emailField.click();
        await emailField.setValue(userEmail);
    }

    async clickSignupBtn() {
        await $(this.signupBtnLocator).click();
    }

}

module.exports = new automationLoginPage;
