 class AutomationSignupPage {
    // locators
    enterAccountInformationHeadingLocator = '//b[text()="Enter Account Information"]';
    // functions

    async isEnterAccInfoDisplayed() {
        const headingElement = await $(this.enterAccountInformationHeadingLocator);
        const isDisplayed = await headingElement.isDisplayed();
        if(isDisplayed){
            const headingTxt = await headingElement.getText();
            console.log(headingTxt);
            return headingTxt.includes("ENTER ACCOUNT INFORMATION");
        }
       return false;    
    }
 }

 module.exports = new AutomationSignupPage;