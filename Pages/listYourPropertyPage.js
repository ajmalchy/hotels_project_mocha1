class ListYourPropertyPage {
    // element locator of ListYourPropertyPage
    whatWouldYouLikeToListLocator = '//p[text()="What would you like to list?"]';

    textLodgingLocator = '//p[text()="Lodging"]';
    textPrivateResidenceLocator = '//p[text()="Private residence"]';

    privateResidenceBtnLocator = '//div[@id="classification_privateResidence"]';
    // functions to interact with the page
    async isWhatWouldYouLikeToListDisplayed() {
        const textListDisplayed = await $(this.whatWouldYouLikeToListLocator).getText();

        if (textListDisplayed === "What would you like to list" && await $(this.whatWouldYouLikeToListLocator).isDisplayed()) {
            return true;  // If the text matches and the element is displayed, return true
        }
        return false; 
    }

    async isLodgingDisplayed() {
        const textLodgingDisplayed = await $(this.textLodgingLocator).getText();

        if (textLodgingDisplayed === "Lodging" && await $(this.textLodgingLocator).isDisplayed()) {
            return true;  // If the text matches and the element is displayed, return true
        }
        return false; 
    }
    async isPrivateResidenceDisplayed() {
        const textPrivateResidenceDisplayed = await $(this.textPrivateResidenceLocator).getText();

        if (textPrivateResidenceDisplayed === "Private residence" && await $(this.textPrivateResidenceLocator).isDisplayed()) {
            return true;  // If the text matches and the element is displayed, return true
        }
        return false; 
    }

    async clickPrivateResidence() {
        await $(this.privateResidenceBtnLocator).click(); 
    }


}

module.exports = new ListYourPropertyPage;