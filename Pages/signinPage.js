class SigninPage {
    // locators of elemetns of signin page
    emailInputLocator = '//input[@id="loginFormEmailInput"]';
    continueBtnLocator = '//button[@id="loginFormSubmitButton"]';
    invalidEmailMsgLocator = '#loginFormEmailInput-error'; 
    // functions to interact with the elements of the signin page

    
    async enterInvalidEmail(invalidEmail) {
        // click email field
        await $(this.emailInputLocator).waitForClickable();
        await $(this.emailInputLocator).click();
        // enter email data
        await $(this.emailInputLocator).setValue(invalidEmail);
    }
        // click continue btn 
    async clickContinueBtn() {
        await $(this.continueBtnLocator).waitForClickable();
        await $(this.continueBtnLocator).click();
    }
    //  invalid email error message displayed
    async invalidEmailErrorIsDisplayed() {
        const errorMsgElement = await $(this.invalidEmailMsgLocator);
        const errorMsg = await errorMsgElement.getText();
        if(errorMsg.includes("Enter a valid email")) {
        return await errorMsgElement.isDisplayed();
        }
    }
   
}

module.exports = new SigninPage;