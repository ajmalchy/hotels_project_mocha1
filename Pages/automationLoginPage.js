class automationLoginPage {
    // locators
    newUserSignupLocator = '//h2[text()="New User Signup!"]';

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

}

module.exports = new automationLoginPage;
