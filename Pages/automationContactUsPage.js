class AutomationContactUsPage {
    // locators
    getInTouchHeadingLocator = '//h2[text()="Get In Touch"]';

    nameFieldLocator = '//input[@data-qa="name"]';
    emailFieldLocator = '//input[@data-qa="email"]';
    subjectFieldLocator = '//input[@data-qa="subject"]';

    messageFieldLocator = '#message';
    uploadFileLocator = '//input[@name="upload_file"]';

    submitBtnLocator = '//input[@data-qa="submit-button"]';


    // functions
    async isGetInTouchDisplayed() {
        const headingElement = await $(this.getInTouchHeadingLocator);

        const isDisplayed = await headingElement.isDisplayed();

        if (isDisplayed) {
            const headingTxt = await headingElement.getText();
            return headingTxt.includes("GET IN TOUCH");
        }
        return false;
    }

    async enterInformation(field, info) {
        switch (field) {
            case "name":
                const nameField = await $(this.nameFieldLocator);
                await nameField.click();

                await nameField.setValue(info)
                break;

            case "email":
                const emailField = await $(this.emailFieldLocator);
                await emailField.click();

                await emailField.setValue(info)
                break;

            case "subject":
                const subjectField = await $(this.subjectFieldLocator);
                await subjectField.click();

                await subjectField.setValue(info)
                break;

            case "message":
                const messageField = await $(this.messageFieldLocator);
                await messageField.click();

                await messageField.setValue(info)
                break;

            default:
                break;
        }
    }
    async uploadFile(filePath) {
        const fileInput = await $(this.uploadFileLocator);
        await fileInput.setValue(filePath);
        await browser.pause(5000)
    } 
    
    async clickSubmitBtn() {
        await $(this.submitBtnLocator).click();
    }
}

module.exports = new AutomationContactUsPage;
